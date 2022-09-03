'use strict';

let mes = Math.trunc(Math.random() * 20) + 1;
let sco = 20;
let high = 0;
console.log(mes);

/*var gue = (document.querySelector('.guess').value = 6);
console.log(gue);*/

document.querySelector('.again').addEventListener('click', function () {
  mes = Math.trunc(Math.random() * 20) + 1;
  //console.log(mes);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = sco = 20;
  document.querySelector('body').style.background = 'black';
});

document.querySelector('.check').addEventListener('click', function () {
  var num = Number(document.querySelector('.guess').value);

  if (!num) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (num > mes) {
    document.querySelector('.message').textContent = 'High Guess';
    if (sco > 0) {
      sco = sco - 1;
      document.querySelector('.score').textContent = sco;
    }
  } else if (num < mes) {
    document.querySelector('.message').textContent = 'Low Guess';
    if (sco > 0) {
      sco = sco - 1;
      document.querySelector('.score').textContent = sco;
    }
  } else if (num === mes) {
    document.querySelector('.message').textContent = 'Correct Guess';
    document.querySelector('.number').textContent = mes;
    document.querySelector('body').style.background = 'green';
    if (high < sco) {
      high = sco;
      document.querySelector('.highscore').textContent = high;
    }
  }

  if (sco == 0) {
    document.querySelector('.message').textContent = 'You Lost the Game!!';
    document.querySelector('body').style.background = 'red';
  }
});
