const initialDiv = document.querySelector('#initialDiv');
const handOverBtnDiv = document.querySelector('#handOverBtnDiv');
const hoBtn = document.querySelector('#hoBtn');
const patrolBtn = document.querySelector('#patrolBtn');
const backBtn = document.querySelector('#backBtn');

//HANDOVER
const newBtn = document.querySelector('#newBtn');
const handOverCon = document.querySelector('#handOverCon');

//New
const date = document.querySelector('#date');
const newFormHo = document.querySelector('#newFormHo');
const textInc = document.querySelector('#textInc');
const textFire = document.querySelector('#textFire');
const textKeys = document.querySelector('#textKeys');
const textCams = document.querySelector('#textCams');
const textAct = document.querySelector('#textAct');
const textDoors = document.querySelector('#textDoors');
const textIntBars = document.querySelector('#textIntBars');
const textExtBars = document.querySelector('#textExtBars');
const textCity = document.querySelector('#textCity');
const textCom = document.querySelector('#textCom');

const submitBtn = document.querySelector('#formSubmit');
const input = document.querySelector('#input1');

//get the date
const dateFormat = () => {
  let dateObj = new Date();
  let month = addZero(dateObj.getMonth() + 1);
  let day = addZero(dateObj.getDate());
  let year = dateObj.getFullYear();

  issueDate = day + '/' + month + '/' + year;
  return issueDate;
};

//add zero if the date is < 10
const addZero = i => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

date.textContent = dateFormat();

hoBtn.addEventListener('click', e => {
  initialDiv.style.display = 'none';
  handOverCon.style.display = 'block';
  handOverBtnDiv.style.display = 'block';
});

newBtn.addEventListener('click', e => {
  initialDiv.style.display = 'none';
  handOverBtnDiv.style.display = 'none';
  newFormHo.style.display = 'block';
});

backBtn.addEventListener('click', e => {
  initialDiv.style.display = 'block';
  handOverCon.style.display = 'none';
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
const radiosIntBars = document.getElementsByClassName('radioIntBars');
displayTextArea(radiosIntBars, textIntBars);
const radiosExtBars = document.getElementsByClassName('radioExtBars');
displayTextArea(radiosExtBars, textExtBars);
const radiosCity = document.getElementsByClassName('radioCity');
displayTextArea(radiosCity, textCity);
const radiosCom = document.getElementsByClassName('radioCom');
displayTextArea(radiosCom, textCom);
