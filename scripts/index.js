var mySong = document.getElementById('mySong')
var musica = document.getElementById('musica')

musica.onclick = function () {
  if (mySong.paused) {
    mySong.play()
  } else {
    mySong.pause()
  }
}
