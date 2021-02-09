'use strict';

alert('Answer with yes[y] or no[n] please');

let userName = prompt('What is your name?');

let myJob = prompt('Am I an engineer?');
while (myJob !== 'yes' && myJob !== 'y' && myJob !== 'no' && myJob !== 'n'){
  myJob = prompt('Am I an engineer? yes[y] or no[n]?');
}
if(myJob.toLowerCase() === 'yes' || myJob.toLowerCase() === 'y'){
  alert('You are Correct!');
//  console.log('Correct');
}else if(myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

let isMom = prompt('Am I a mother?');
while (isMom !== 'yes' && isMom !== 'y' && isMom !== 'no' && isMom !== 'n'){
  isMom = prompt('Am I a mother? yes[y] or no[n]?');
}
if(isMom.toLowerCase() === 'yes' || isMom.toLowerCase() === 'y'){
  alert('You are Correct!');
//  console.log('Correct');
}else if(isMom.toLowerCase() === 'no' || isMom.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

let myPet = prompt('Do you think my pet is a dog?');
while (myPet !== 'yes' && myPet !== 'y' && myPet !== 'no' && myPet !== 'n'){
  myPet = prompt('do you think my pet is a dog? yes[y] or no[n]?');
}
if(myPet.toLowerCase() === 'yes' || myPet.toLowerCase() === 'y'){
  alert('You are Correct!');
//  console.log('Correct');
}else if(myPet.toLowerCase() === 'no' || myPet.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

let myCity = prompt('Do you think I live in Amman?');
while (myCity !== 'yes' && myCity !== 'y' && myCity !== 'no' && myCity !== 'n'){
  myCity = prompt('Do you think I live in Amman? yes[y] or no[n]?');
}
if(myCity.toLowerCase() === 'yes' || myCity.toLowerCase() === 'y'){
  alert('You are Correct!');
//  console.log('Correct');
}else if(myCity.toLowerCase() === 'no' || myCity.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

let myHobby = prompt('Do you think I played taekwandoo?');
while (myHobby !== 'yes' && myHobby !== 'y' && myHobby !== 'no' && myHobby !== 'n'){
  myHobby = prompt('Do you think I played taekwandoo? yes[y] or no[n]?');
}
if(myHobby.toLowerCase() === 'yes' || myHobby.toLowerCase() === 'y'){
  alert('You are Correct!');
//  console.log('Correct');
}else if(myHobby.toLowerCase() === 'no' || myHobby.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

alert ('Welcome ' + userName);

document.getElementById('Name').innerHTML = userName;
