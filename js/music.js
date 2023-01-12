Swal.fire({
    //do you want to play audio ?
    title: 'Do you want to play audio?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, play it!'
    }).then(async (result) => {
       async function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
      }
      if (result.value) {
        const audio =  document.createElement('audio');
        audio.id = 'audio';
        audio.autoplay = true;
        audio.hidden = true;
        audio.src = "music/child.mp3";
        document.head.appendChild(audio);
        const music = document.getElementById('music-player');
        const playBtn = document.querySelector('.play-btn');
        playBtn.classList.toggle('pause');
        music.style.display = 'block';
        const formatTime = (time) => {
            let min = Math.floor(time / 60);
            if(min < 10){
                min = `0${min}`;
            }
            let sec = Math.floor(time % 60);
            if(sec < 10){
                sec = `0${sec}`;
            }
            return `${min} : ${sec}`;
        }
        playBtn.addEventListener('click', () => {
            if(playBtn.className.includes('pause')){
                audio.play();
            } else{
                audio.pause();
            }
            playBtn.classList.toggle('pause');
            disk.classList.toggle('play');
        })
        const disk = document.querySelector('.disk');
        const currentTime = document.querySelector('.current-time');
        const musicDuration = document.querySelector('.song-duration');
        const seekBar = document.querySelector('.seek-bar');
        seekBar.value = 0;
        currentTime.innerHTML = '00:00';
        disk.style.backgroundImage = `url('https://wallpapercave.com/wp/wp5435108.jpg')`;
        disk.classList.add('play');
        await sleep(2000)
        musicDuration.innerHTML = formatTime(audio.duration);
        seekBar.max = audio.duration;
        setInterval(() => {
        seekBar.value = audio.currentTime;
        currentTime.innerHTML = formatTime(audio.currentTime);
        }, 500)
        seekBar.addEventListener('change', () => {
        audio.currentTime = seekBar.value;
        })
        setTimeout(function(){
          audio.pause();
          detik = audio.currentTime;
          detik = detik.toString().split('.')[0];
          //create if second is less than 60, then show it as second, otherwise show it as minute
          Swal.fire({
          title: 'Audio is paused',
          text: 'Kamu memutar audio selama ' + '1' + ' menit ' + '    Mau Putar Kembali ?',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, resume it!'
          }).then((result) => {
            if (result.value) {
              document.getElementById('audio').currentTime = detik;
              document.getElementById('audio').play();
            }
          })
        }, 60000);
      }
    })