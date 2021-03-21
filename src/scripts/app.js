import '../styles/app.scss';
import 'retinajs';

const playVideo = () => {
  const videoPlayBtn = document.getElementById('video-play');
  const video = document.getElementById('video');

  videoPlayBtn.addEventListener('click', () => {
    videoPlayBtn.style.display = 'none';
    video.play();
  });
}


playVideo();
