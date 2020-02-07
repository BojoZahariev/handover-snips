const initialDiv = document.querySelector('#initialDiv');
const newBtn = document.querySelector('#newBtn');
const backBtn = document.querySelector('#backBtn');

//New
const newForm = document.querySelector('#new');
const textInc = document.querySelector('#textInc');
const textFire = document.querySelector('#textFire');
const textKeys = document.querySelector('#textKeys');
const textCams = document.querySelector('#textCams');
const textAct = document.querySelector('#textAct');
const textDoors = document.querySelector('#textDoors');

const submitBtn = document.querySelector('#formSubmit');
const input = document.querySelector('#input1');

newBtn.addEventListener('click', e => {
  initialDiv.style.display = 'none';
  newForm.style.display = 'block';
});

backBtn.addEventListener('click', e => {
  initialDiv.style.display = 'block';
  newForm.style.display = 'none';
});

//Display textarea if different radio is pressed
const displayTextArea = (radios, textDiv) => {
  for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function() {
      if (this.value === 'No') {
        textDiv.style.display = 'block';
      } else {
        textDiv.style.display = 'none';
      }
    };
  }
};

const radiosInc = document.getElementsByClassName('radioInc');
displayTextArea(radiosInc, textInc);
const radiosFire = document.getElementsByClassName('radioFire');
displayTextArea(radiosFire, textFire);
const radiosKeys = document.getElementsByClassName('radioKeys');
displayTextArea(radiosKeys, textKeys);
const radiosCams = document.getElementsByClassName('radioCams');
displayTextArea(radiosCams, textCams);
const radiosAct = document.getElementsByClassName('radioAct');
displayTextArea(radiosAct, textAct);
const radiosDoors = document.getElementsByClassName('radioDoors');
displayTextArea(radiosDoors, textDoors);

//USE for reception
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  if (input.value.length > 1) {
    sheetForm.reset();
  } else {
    console.log('ding');
    sheetForm.reset();
  }
});
