'use strict';

alert('Answer with yes or no please');

let userName = prompt('what is your name ');
let myJob = prompt('Am I an engineer?');
let myMom = prompt('Am I a mother?');
let myPet = prompt('Do you think my pet is a dog?');
let myCity = prompt('Do you think I live in Amman?');
let myHobby = prompt('Do you think I played taekwandoo?');

if(myJob.toLowerCase() === 'yes' || myJob.toLowerCase() === 'y' ){
  alert('You are Correct, I am an Engineer!');
//  console.log('Correct');
}else if(myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n') {
  alert('You are not Correct, I am an Engineer!');
}

if(myMom.toLowerCase() === 'yes' || myJob.toLowerCase() === 'y' ){
  alert('You are Correct, I am a mother!');
}else if(myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n') {
  alert('You are not Correct, I am a mother!');
}

if(myPet.toLowerCase() === 'yes' || myJob.toLowerCase() === 'y' ){
  alert('You are Correct, my pet is a dog!');
}else if(myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n') {
  alert('You are not Correct, my pet is a dog!');
}

if(myCity.toLowerCase() === 'yes' || myJob.toLowerCase() === 'y' ){
  alert('You are Correct, I live in Ammman!');
}else if(myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n') {
  alert('You are not Correct, I live in Ammman!');
}

if(myHobby.toLowerCase() === 'yes' || myJob.toLowerCase() === 'y' ){
  alert('You are Correct, I play taekwandoo!');
}else if(myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n') {
  alert('You are not Correct, I play taekwandoo!');
}

alert (userName);

document.getElementById('Name').innerHTML = userName;
