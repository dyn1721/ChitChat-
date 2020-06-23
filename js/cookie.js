/*unction delCookie()
			{
			 var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
			    if (keys) {
					console.log(1)
			        for (var i =  keys.length; i--;){
						console.log(document.cookie)
			            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()+";path=/ChitChat-"}
			    } 
				   console.log( document.cookie)
			}
function setCookie(cname,cvalue,exdays){
				var d = new Date();
				d.setTime(d.getTime()+(exdays*24*60*60*1000));
				var expires = "expires="+d.toGMTString();
				document.cookie = cname+"="+cvalue+"; "+expires+"; path=/ChitChat-";
				console.log(document.cookie)
			}
function getCookie(cname){
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for(var i=0; i<ca.length; i++) {
					var c = ca[i].trim();
					if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
				}
				return "";
			}*/