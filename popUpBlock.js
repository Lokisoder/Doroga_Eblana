const elem = document.querySelector('.but3');
const block = document.querySelector('.pop-up-block');
const button = document.querySelector('.but4');
const text = "bam bam bim bim";


function setActiveBlock(block) {
  block.classList.add('pop-up-block--active');
}

function removeActiveBlock(block) {
  block.classList.remove('pop-up-block--active');
}

function setPositionBlock(element, block) {
  const x = element.offsetLeft;
  const y = element.offsetTop;
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  block.style.left = x + width + 'px';
  block.style.top = y + height + 'px';
}

function setBlockText(text) {
  document.querySelector('.span1').innerHTML = text;
}

function setActiveButton(button) {
  button.classList.add('but4--active');
}

function removeActiveButton(button) {
  button.classList.remove('but4--active');
}

function popUpBlock(element) {
  setPositionBlock(elem, block);
  setBlockText(text);
  setActiveBlock(block);
  setActiveButton(button);
  element.addEventListener('click', () => {
    removeActiveBlock(block);
    removeActiveButton(button);
  });
}

elem.addEventListener('click', () =>{
  popUpBlock(button);
});

