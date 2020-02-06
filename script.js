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

var radiosInc = document.getElementsByClassName('radioInc');
for (let i = 0; i < radiosInc.length; i++) {
  radiosInc[i].onclick = function() {
    if (this.value === 'incYes') {
      textInc.style.display = 'block';
    } else {
      textInc.style.display = 'none';
    }
  };
}

var radiosFire = document.getElementsByClassName('radioFire');
for (let i = 0; i < radiosFire.length; i++) {
  radiosFire[i].onclick = function() {
    if (this.value === 'fireFault') {
      textFire.style.display = 'block';
    } else {
      textFire.style.display = 'none';
    }
  };
}

var radiosKeys = document.getElementsByClassName('radioKeys');
for (let i = 0; i < radiosKeys.length; i++) {
  radiosKeys[i].onclick = function() {
    if (this.value === 'keysNo') {
      textKeys.style.display = 'block';
    } else {
      textKeys.style.display = 'none';
    }
  };
}

var radiosCams = document.getElementsByClassName('radioCams');
for (let i = 0; i < radiosCams.length; i++) {
  radiosCams[i].onclick = function() {
    if (this.value === 'camsNo') {
      textCams.style.display = 'block';
    } else {
      textCams.style.display = 'none';
    }
  };
}

var radiosAct = document.getElementsByClassName('radioAct');
for (let i = 0; i < radiosAct.length; i++) {
  radiosAct[i].onclick = function() {
    if (this.value === 'camsNo') {
      textAct.style.display = 'block';
    } else {
      textAct.style.display = 'none';
    }
  };
}

/*
if (document.getElementById('gender_Male').checked) {
  //Male radio button is checked
} else if (document.getElementById('gender_Female').checked) {
  //Female radio button is checked
}
*/

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
