function createDivs(resolution) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < resolution; i++) {

    const div = document.createElement('div');
    div.setAttribute('id', `f${i}`);
    div.style.display = 'flex';
    div.style.flexGrow = '1';
    container.appendChild(div);
    for (let j = 0; j < resolution; j++) {
      const subDiv = document.createElement('div');
      subDiv.setAttribute('id', `f${i}c${j}`);
      subDiv.style.flexGrow = '1';
      div.appendChild(subDiv);
    }
  }
}

const container = document.querySelector('.container');

const btn = document.querySelector('#input-squares');

createDivs(64);

function addColorDiv(e) {
  if (e.target.className !== 'container') e.target.style.backgroundColor = 'black';

}

function askCanvasResolution(e) {
  const canvasResolution = parseInt(prompt('Input the canvas resolution, the maximum value is 100: '));
  if (typeof (canvasResolution) === 'number' && canvasResolution <= 100) createDivs(canvasResolution);
  else alert('The input must be a number below 100')
}

btn.addEventListener('click', askCanvasResolution)
container.addEventListener('mouseover', addColorDiv);
