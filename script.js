const initialDiv = document.querySelector('#initialDiv');
const newBtn = document.querySelector('#newBtn');
const backBtn = document.querySelector('#backBtn');

const submitBtn = document.querySelector('#submitBtn');
const colleaguesForm = document.querySelector('#colleaguesForm');
const input = document.querySelector('#input1');
const test = document.querySelector('#test');
const newForm = document.querySelector('#new');

newBtn.addEventListener('click', e => {
  initialDiv.style.display = 'none';
  newForm.style.display = 'block';
});

backBtn.addEventListener('click', e => {
  initialDiv.style.display = 'block';
  newForm.style.display = 'none';
});

//USE for reception
colleaguesForm.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value.length > 1) {
    test.textContent = input.value;
    colleaguesForm.reset();
  } else {
    console.log('ding');
    colleaguesForm.reset();
  }
});
