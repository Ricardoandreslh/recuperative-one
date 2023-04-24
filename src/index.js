const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

const slider = document.getElementById('slider');
const btnAtras = document.getElementById('atras');
const btnSiguiente = document.getElementById('siguiente');
let listaVideos = [1,2,3,4,5];

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})

btnAtras.addEventListener('click', () => {
  let listanueva = [];
  let ultLista = listaVideos.length - 1;
  listanueva.push(listaVideos[ultLista])
  for (let i = 0; i < ultLista; i++) {
    listanueva.push(listaVideos[i]);
  }
  listaVideos = listanueva;
  cambiarSlider()
})

btnSiguiente.addEventListener('click', () => {
  let listanueva = [];
  let ultLista = listaVideos.length;
  for (let i = 1; i < ultLista; i++) {
    listanueva.push(listaVideos[i]);
  }
  listanueva.push(listaVideos[0]);
  listaVideos = listanueva;
  cambiarSlider()
})

function cambiarSlider() {
  slider.innerHTML = "<div class='videos'><video class='video-UP' src='public/" + listaVideos[listaVideos.length-1] + ".mp4'></video><video class='video-PP' src='public/" + listaVideos[0] + ".mp4' controls></video><video class='video-SP' src='public/" + listaVideos[1] + ".mp4'></video></div>"
}

cambiarSlider()

import './style.css';