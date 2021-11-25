const app = () => {
  const video = document.querySelector(".vid- container video");
  const sounds = document.querySelectorAll(".sound-picker button");
  const timeDisplay = document.querySelector(".time-display");
  const outline = document.querySelector(".moving-outline circle");
  const outlineLength = outline.getTotalLength();

  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  const play = document.querySelector(".play");
  const song = document.querySelector(".song");
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  const checkPlaying = (playedSong) => {
    if (playedSong.pause) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };
};

app();
