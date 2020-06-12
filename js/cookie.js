function delCookie()
			{
			 var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
			    if (keys) {
			        for (var i =  keys.length; i--;)
			            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
			    }    
			}
function setCookie(cname,cvalue,exdays){
				var d = new Date();
				d.setTime(d.getTime()+(exdays*24*60*60*1000));
				var expires = "expires="+d.toGMTString();
				document.cookie = cname+"="+cvalue+"; "+expires;
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
			}