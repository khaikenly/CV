var content = 	'Hồi con bé, đã từng rất thích những trận mưa rào lầy lụa, lớn dần, hiện đại hơn, già cỗi hơn, thì phù hợp với những cơn mưa ngâu không nặng hạt mà cũng không bé hẳn, cứ bình bình nhẹ nhàng như gió thoảng.<br />'+
				'Từ đó mà trong năm yêu quý nhất là đến tháng 7 lại có mưa ngâu, vào những ngày như thế, sự nhớ nhung lại tràn về, bất giác, nhớ lại những ngày chập chững tối, nằm ôm em ngắm mưa ngâu qua khung cửa sổ trong căn phòng tối len lỏi ánh sáng.<br />'+
				'Một cảnh tượng sến súa mà bất cứ ai cũng có thể mơ tới và tôi đã biến nó thành hiện thực, thiếu điều là có thể đánh đổi tất cả để quay lại cảm giác đó.<br />'+
				'Hoàn thành bài hát này vào một ngày bất kì trong tháng 7, đợi đến mùa Thu tháng 9, tặng em để em nhớ về ngày mưa ngâu, tặng em để em sang một tuổi mới vào ngày Thu tuyệt vời nhất. <br />'+
				'Vũ,'
function twDisplayTW() {twDisplay('tw',content,0);}
loaded('tw',twDisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset

function twDisplay(id,content,num) {
	var delay = 50; if (num <= content.length) {
		var lt = content.substr(0,num); 
		document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>');
			num++;
			if (num > content.length) delay = resetTime * 1000;}
			 else {document.getElementById(id).innerHTML = ''; num = 0;} 
			 	if (delay > 0) setTimeout('twDisplay("'+id+'","'+content+'","'+num+'")',delay);}
			 	 var pageLoaded = 0; window.onload = function() {pageLoaded = 1;};
			 	  function loaded(i,f){
			 	  	if (document.getElementById && document.getElementById(i) != null) f();
			 	  	 else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
