﻿
//==================图片详细页函数=====================
function initImgZoom() {
	var tempLength = 0; //临时变量,当前移动的长度
	var viewNum = 5; //设置每次显示图片的个数量
	var moveNum = 1; //每次移动的数量
	var moveTime = 300; //移动速度,毫秒
	var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
	var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
	var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
	var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度

	if (scrollItems.length<6){
		$(".spec-scroll .next").hide()
		$(".spec-scroll .prev").hide()
	}

	//下一张
	$(".spec-scroll .next").bind("click", function () {
		if (tempLength < countLength) {
			if ((countLength - tempLength) > moveLength) {
				scrollDiv.animate({ left: "-=" + moveLength + "px" }, moveTime);
				tempLength += moveLength;
			} else {
				scrollDiv.animate({ left: "-=" + (countLength - tempLength) + "px" }, moveTime);
				tempLength += (countLength - tempLength);
			}
		}
	});
	//上一张
	$(".spec-scroll .prev").bind("click", function () {
		if (tempLength > 0) {
			if (tempLength > moveLength) {
				scrollDiv.animate({ left: "+=" + moveLength + "px" }, moveTime);
				tempLength -= moveLength;
			} else {
				scrollDiv.animate({ left: "+=" + tempLength + "px" }, moveTime);
				tempLength = 0;
			}
		}
	});	
	//图片放大镜效果
	$(".jqzoom").jqueryzoom({ xzoom: 380, yzoom: 420 });
}
//==================图片详细页函数=====================