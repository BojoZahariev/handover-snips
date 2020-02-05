//USE for reception
const submitBtn = document.querySelector('#submitBtn');
const colleaguesForm = document.querySelector('#colleaguesForm');
const input = document.querySelector('#input1');
const test = document.querySelector('#test');

colleaguesForm.addEventListener('submit', function(e) {
  e.preventDefault();
  test.textContent = input.value;
  colleaguesForm.reset();
});
