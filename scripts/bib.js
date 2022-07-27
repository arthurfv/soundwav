msc1 = document.getElementById('msc1')
audio1 = new Audio('./msc/cradles.mp3')

msc2 = document.getElementById('msc2')
audio2 = new Audio('./msc/hellcat.mp3')

msc3 = document.getElementById('msc3')
audio3 = new Audio('./msc/running_away.mp3')

msc4 = document.getElementById('msc4')
audio4 = new Audio('./msc/when_im_gone.mp3')

msc5 = document.getElementById('msc5')
audio5 = new Audio('./msc/patience.mp3')

msc6 = document.getElementById('msc6')
audio6 = new Audio('./msc/away_from_me.mp3')

msc7 = document.getElementById('msc7')
audio7 = new Audio('./msc/nightcall.mp3')

msc8 = document.getElementById('msc8')
audio8 = new Audio('./msc/red_light.mp3')

msc9 = document.getElementById('msc9')
audio9 = new Audio('./msc/daydream.mp3')

msc10 = document.getElementById('msc10')
audio10 = new Audio('./msc/lights.mp3')

msc11 = document.getElementById('msc11')
audio11 = new Audio('./msc/old_school.mp3')

msc12 = document.getElementById('msc12')
audio12 = new Audio('./msc/in_flames.mp3')

msc1.onclick = function () {
  if (audio1.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.play()
  } else {
    audio1.pause()
  }
}

msc2.onclick = function () {
  if (audio2.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio1.pause()
    audio2.play()
  } else {
    audio2.pause()
  }
}

msc3.onclick = function () {
  if (audio3.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio5.pause()
    audio4.pause()
    audio2.pause()
    audio1.pause()
    audio3.play()
  } else {
    audio3.pause()
  }
}

msc4.onclick = function () {
  if (audio4.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio5.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio4.play()
  } else {
    audio4.pause()
  }
}

msc5.onclick = function () {
  if (audio5.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio5.play()
  } else {
    audio5.pause()
  }
}

msc6.onclick = function () {
  if (audio6.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio6.play()
  } else {
    audio6.pause()
  }
}

msc7.onclick = function () {
  if (audio7.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio6.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio7.play()
  } else {
    audio7.pause()
  }
}

msc8.onclick = function () {
  if (audio8.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio7.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio8.play()
  } else {
    audio8.pause()
  }
}

msc9.onclick = function () {
  if (audio9.paused) {
    audio12.pause()
    audio11.pause()
    audio10.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio9.play()
  } else {
    audio9.pause()
  }
}

msc10.onclick = function () {
  if (audio10.paused) {
    audio12.pause()
    audio11.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio10.play()
  } else {
    audio10.pause()
  }
}

msc11.onclick = function () {
  if (audio11.paused) {
    audio12.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio11.play()
  } else {
    audio11.pause()
  }
}

msc12.onclick = function () {
  if (audio12.paused) {
    audio11.pause()
    audio10.pause()
    audio9.pause()
    audio8.pause()
    audio7.pause()
    audio6.pause()
    audio5.pause()
    audio4.pause()
    audio3.pause()
    audio2.pause()
    audio1.pause()
    audio12.currentTime = 52
    audio12.play()
  } else {
    audio12.pause()
  }
}
