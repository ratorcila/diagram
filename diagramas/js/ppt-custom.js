(function () {
	var myAudio = $('#player').get()[0];
		var volumen = 0;
		myAudio.volume = 0.5;
		$('#player').on("timeupdate",function setSliderTrack() {
			let nowTime = Math.floor(myAudio.currentTime);
			$('#timeSong').val(nowTime);
			let date = new Date(null);
			date.setSeconds(nowTime);
			let labelTime = $('#timeLeft').get()[0];
			let duration = ((labelTime.innerHTML).split("|"))[1];
			labelTime.innerHTML = date.toISOString().substr(14, 5) + "|" + duration;

		});
		$(document).ready(function () {
			$(myAudio).on("loadedmetadata",function () {
				let endOfSong = Math.floor(myAudio.duration);
				let date = new Date(null);
				date.setSeconds(endOfSong);
				let labelTime = document.getElementById('timeLeft');
				labelTime.innerHTML = "00:00|" + date.toISOString().substr(14, 5);;
				$('#timeSong').attr("max",endOfSong);
			});
			$('#mute').click(function () {
				if (myAudio.muted)
				{
					myAudio.muted = false;
				}
				else
				{
					myAudio.muted = true;
				}
				
			});
			$('#playMusic').click(function () {
				if (myAudio.duration && !myAudio.paused) {
				    //Its playing...do your job
				    $('#iconP').removeClass("fa-pause");
				    $('#iconP').addClass("fa-play");
				    myAudio.pause();

				} else {
				    //Not playing...maybe paused, stopped or never played.
				    $('#iconP').removeClass("fa-play");
				    $('#iconP').addClass("fa-pause");
				    myAudio.play();
				}
			});
			$('#volDown').click(function () {
				let actualVol = myAudio.volume;
				if ((actualVol - 0.1) > 0) 
					myAudio.volume -= 0.1;
			});
			$('#volUp').click(function () {
				let actualVol = myAudio.volume;
				if ((actualVol + 0.1) < 1) 
					myAudio.volume += 0.1;
			});
			var dispositivas = $('#items').children();
			for (var i = 0; i < dispositivas.length; i++) {
				let aux = $(dispositivas[i]).children();
				$(aux[0]).attr("onclick","changeSlide("+(i+1)+",this);");
				if($(dispositivas[i]).hasClass("active"))
				{
					$('#fondo').css("background-image", "url(D00"+(i+1)+".jpg)");
				}
			}
		});
})();