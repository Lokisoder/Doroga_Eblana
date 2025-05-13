const deyv = document.querySelector(".but2");
deyv.addEventListener("click", () => {
  console.log("click A");
})


function zamorozka(selector) {
  console.log("zamorozka: start")

  const element = document.querySelector(selector);
  setActiveElement(element);
  console.log("zamorozka: stop");
}

//zamorozka('.but2');

function disableAllClicks() {
  document.body.classList.add('disabledClick');
}

function enableAllClicks() {
  document.body.classList.remove('disabledClick');
}

function disableSelectedElementClick(selector) {
  const element = document.querySelector(selector);
  element.classList.add('disabledClick');
}

function toggleOverlayVisibility(isVisible) {
  if (isVisible) {
    document.querySelector('.overlay').classList.add('overlay--active');
    disableAllClicks();
  } else {
    document.querySelector('.overlay').classList.remove('overlay--active');
    enableAllClicks();
  }
}

function setActiveElement(element) {
  toggleOverlayVisibility(true);
  element.classList.add('activeElement');
  element.addEventListener('click', handleActiveElementClick, { capture: true, once: true });
}

function removeActiveElement(element) {
  element.classList.remove('activeElement');
}

function handleActiveElementClick(event) {
  event.stopPropagation();
  event.preventDefault();
  removeActiveElement(event.currentTarget);
  toggleOverlayVisibility(false);
}