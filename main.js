var $clock = document.getElementById('clock');
var $time = document.getElementById('time');
var $line = document.getElementById('line');

  function hexClock() {
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ':' + minutes + ':' + seconds;
  var hexColorStr = '#' + hours + minutes + seconds; // you still need to generate a hexCode
  var hexString = '#' + hours + minutes + seconds;


  // This handler will be executed only once when the cursor
  // moves over the unordered list
  $clock.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.innerHTML = hexString;
    // reset the color after a short delay
    // setTimeout(function() {
    //   event.target.innerHTML = clockStr;
    // }, 4000);
  });
  $clock.addEventListener("mouseleave", function( event ){
  event.target.innerHTML = clockStr;
  });


  $time.textContent = clockStr;
  // $clock.textContent = hours + ':' + minutes + ':' + seconds;
  document.body.style.backgroundColor = hexColorStr;
  $line.style.width = seconds + "%";


}

setInterval(hexClock, 1000);

// let date = new Date()
// console.log(date);
//
// let currentTime;
//  set inveral(function,ms);
// setInterval(() => {
//   currentTime=new Date();
//   console.log(currentTime);
//  },1000);

// hexClock()









// (function(){
//   'use strict';
//
//   // let $element= document.querySelector('span');
//   //
//   // $element.textContent = "hello sally "
//
// let $elementId = document.querySelector('#myid')
//
// let date = new Date()
// console.log(date);
//
// let currentTime;
//  set inveral(function,ms);
// setInterval(() => {
//   currentTime=new Date();
//   console.log(currentTime);
//  },1000);
//
// let $button = document.querySelector('button');
// $button. addEventListner('click', () => {
//   console.log(`you clicked a button`);
// })
//
//
// })();
