function loadPortrait(uid,url,pic) {
					//将优先在本地缓存中查找uid对应的头像，如果没有去url下载到本地
					//uid：要加载的用户uid
					//url:要加载的图片url 
					//pic：要加载的具体img标签id
					var a = document.getElementById(pic);
					var gsFiles = JSON.parse(localStorage.getItem(uid)) || {};
					gsFilesDate = gsFiles.date;
					 date = new Date();
					 todaysDate = (date.getMonth() + 1).toString() + date.getDate().toString();
					 if (typeof gsFilesDate === "undefined" || gsFilesDate < todaysDate) {
					 var a = document.getElementById(pic);
					 a.setAttribute("src",url)
					   a.onload = () =>{ 
						console.log("ok")
						var imgCanvas = document.createElement("canvas");
						imgContext = imgCanvas.getContext("2d");
						// 确保canvas尺寸和图片一致
						imgCanvas.width = a.width;
						imgCanvas.height = a.height;
						// 在canvas中绘制图片
						imgContext.drawImage(a, 0, 0, a.width, a.height);
						gsFiles.a = imgCanvas.toDataURL();
						gsFiles.date = todaysDate;
						// 将JSON保存到本地存储中
						try {
							localStorage.setItem(uid, JSON.stringify(gsFiles));
							}
						catch (e) {
							console.log("Storage failed: " + e);
						}
					   }
					 }
					 else {
						console.log("no net")
						// Use image from localStorage
						var a = document.getElementById(pic);
						a.setAttribute("src", gsFiles.a);
					 }
				}