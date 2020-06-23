// SockJS对象，可以使用http协议而不是必须用ws协议
var ws = new SockJS('http://129.211.62.153:8080/ws');
// 基于SockJS对象构建STOMP客户端
var client = Stomp.over(ws);
// 连接成功回调函数
var connectCallback = function () {
    console.log('连接成功!');
    // 订阅各种消息
    subscribe();
};
// 连接失败回调函数
var errorCallback = function () {
    console.log('连接失败!');
};
// 连接服务器, uid=1, passcode=pass1
client.connect('1', 'pass1', connectCallback, errorCallback);
// 接收到订阅消息后的回调函数
function onMessage(message) {
    var show = document.getElementById('show');
    show.innerText += '收到消息: ' + message + '\n';
}
function subscribe() {
    // 订阅/uni/chat/{uid}, 也就发送给uid=1的用户的消息
    client.subscribe('/uni/chat/1', onMessage);
    // 订阅/broad/chat/{gid}, 也就是在gid=1的群内发送的消息
    client.subscribe('/broad/chat/1', onMessage);
    // 订阅/uni/add/{uid}, 也就是添加uid=1的用户为好友的消息
    client.subscribe('/uni/add/1', onMessage);
}
function sendMessage(type, fromId, toId, style, content) {
    // 为了简化前端编程, 前端发送RequestMessage而不是完整的Message, 参数如下
    // 需要将对象转为JSON字符串发送
    var _type = type;
    var _fromId = fromId;
    var _toId = toId;
    var _style = style;
    var _content = content;
    var _destination = "/app/";
    switch (_type) {
        case '1':
            _destination = _destination + "single-chat";
            break;
        case '2':
            _destination = _destination + 'group-chat';
            break;
        case '3':
            _destination = _destination + 'add-friend';
            break;
        case '4':
            _destination = _destination + 'add-chatroom';       // 未确认
            break;
        case '5':
            _destination = _destination + 'response-friend';
            break;
        case '6':
            _destination = _destination + 'response-chatroom';
            break;
        
    }
    client.send(_destination, {}, JSON.stringify({
        'type': _type,          // 消息类型
        'fromId': _fromId,      // 发送人uid
        'toId': _toId,          // 接收人uid
        'style': _style,        // 图片样式
        'content': _content     // 发送内容
    }));
}