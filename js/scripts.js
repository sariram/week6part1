console.log('Hello from js/scripts.js!');

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping though images */
for (let i=1; i<6; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/image'+i+'.jpg');
  let stringtest='images/image'+i+'.jpg';
  thumbBar.appendChild(newImage);
  newImage.onclick=function(){
    displayedImage.setAttribute('src', 'images/image'+i+'.jpg')
  }
}

/*dark button*/
btn.onclick = function () {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
  btn.setAttribute('class', 'light');
  btn.textContent = 'Light Mode';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Dark Mode';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
  }
