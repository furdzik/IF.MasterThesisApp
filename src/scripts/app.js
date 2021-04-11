import '../styles/app.scss';
import 'retinajs';

const playVideo = () => {
  const videoPlayBtn = document.getElementById('video-play');
  const video = document.getElementById('video');
  const videoBox = document.getElementById('video-box');
  const form = document.getElementById('form');

  videoPlayBtn.addEventListener('click', () => {
    videoPlayBtn.style.display = 'none';
    video.play();
  });

  video.addEventListener('ended', () => {
    form.style.display = 'block';
    videoBox.style.display = 'none';
  },false)
}

playVideo();
