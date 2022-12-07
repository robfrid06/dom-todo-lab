// -------- CACHED ELEMENT REFERENCES -------- //
const inputEl = document.querySelector(`input`);
const submitButtonEl = document.querySelector(`#submit-button`);
const resetButtonEl = document.querySelector(`#reset-button`);
const ulEl = document.querySelector(`ul`);

inputEl.setAttribute(`placeholder`, `Add Text Here`);

submitButtonEl.addEventListener(`click`, () => {
  if (inputEl.value !== ``) {
    const liEl = document.createElement(`li`);
    liEl.innerHTML = inputEl.value;
    inputEl.value = ``;
    ulEl.appendChild(liEl);
  } else {
    alert(`You rebel!`)
  };
});

resetButtonEl.addEventListener(`click`, () => {
  while (ulEl.firstChild) {
    ulEl.removeChild(ulEl.firstChild);
  };
});

ulEl.addEventListener(`click`, (e) => {
  ulEl.removeChild(e.target);
});

