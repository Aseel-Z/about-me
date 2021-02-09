'use strict';

let userInput2 = prompt('Guess one of my Top Ten Places to Visit');
let favCity=['Prague','Paris','Berlin','Dublin','Stockholm','Moscow','Madrid7','Oslo','London', 'Sofia'];
let attemptsNo = 6;
while (attemptsNo) {
  if (String(userInput2.toLowerCase()) === favCity) {
    alert('Correct!! ' + userInput2 + ' is one of my favorite cities.');
    break;
  } else {
    attemptsNo--;
    alert('No, Try again, you still have : ' + attemptsNo + ' attempts remaining!');
  }
  userInput2 = prompt('Guess one of my Top 10 Places to Visit');
  if (attemptsNo===1) {
    alert('Game Over! check my info below!');
    break;
  }
}

let userName = prompt('What is your name?');

let userInput = prompt('Guess my favorite number between 1 and 9');
let myFavNum = 7;
let attempts = 4;
while (attempts) {
  if (Number(userInput) === myFavNum) {
    alert('Correct!! 7 is my favorite number.');
    break;
  } else if (Number(userInput) > myFavNum) {
    attempts--;
    alert('Too High, Try again, you still have : ' + attempts + ' attempts remaining!');
  } else {
    attempts--;
    alert('Too Low, Try again, you still have : ' + attempts + ' attempts remaining!');
  }
  userInput = prompt('Guess my favorite Number between 1 and 9');
  if (attempts===1) {
    alert('Game Over! Correct number is 7!');
    break;
  }
}

alert('Now answer with yes[y] or no[n] please');

let myJob = prompt('Am I an engineer?');
while (myJob !== 'yes' && myJob !== 'y' && myJob !== 'no' && myJob !== 'n') {
  myJob = prompt('Am I an engineer? yes[y] or no[n]?');
}
if (myJob.toLowerCase() === 'yes' || myJob.toLowerCase() === 'y') {
  alert('You are Correct!');
  //  console.log('Correct');
} else if (myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

let isMom = prompt('Am I a mother?');
while (isMom !== 'yes' && isMom !== 'y' && isMom !== 'no' && isMom !== 'n') {
  isMom = prompt('Am I a mother? yes[y] or no[n]?');
}
if (isMom.toLowerCase() === 'yes' || isMom.toLowerCase() === 'y') {
  alert('You are Correct!');
  //  console.log('Correct');
} else if (isMom.toLowerCase() === 'no' || isMom.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

let myPet = prompt('Do you think my pet is a dog?');
while (myPet !== 'yes' && myPet !== 'y' && myPet !== 'no' && myPet !== 'n') {
  myPet = prompt('do you think my pet is a dog? yes[y] or no[n]?');
}
if (myPet.toLowerCase() === 'yes' || myPet.toLowerCase() === 'y') {
  alert('You are Correct!');
  //  console.log('Correct');
} else if (myPet.toLowerCase() === 'no' || myPet.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

let myCity = prompt('Do you think I live in Amman?');
while (myCity !== 'yes' && myCity !== 'y' && myCity !== 'no' && myCity !== 'n') {
  myCity = prompt('Do you think I live in Amman? yes[y] or no[n]?');
}
if (myCity.toLowerCase() === 'yes' || myCity.toLowerCase() === 'y') {
  alert('You are Correct!');
  //  console.log('Correct');
} else if (myCity.toLowerCase() === 'no' || myCity.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

let myHobby = prompt('Do you think I played Taekwondo?');
while (myHobby !== 'yes' && myHobby !== 'y' && myHobby !== 'no' && myHobby !== 'n') {
  myHobby = prompt('Do you think I played Taekwondo? yes[y] or no[n]?');
}
if (myHobby.toLowerCase() === 'yes' || myHobby.toLowerCase() === 'y') {
  alert('You are Correct!');
  //  console.log('Correct');
} else if (myHobby.toLowerCase() === 'no' || myHobby.toLowerCase() === 'n') {
  alert('You are not Correct, check my info below!');
}

alert('Welcome ' + userName);

document.getElementById('Name').innerHTML = userName;

///////////////////////////////////




// console.log(numList.length);
// console.log(numList);

// let attemptNo=6;
// let userInput2=prompt('Guess my favorite number between 1 and 9');
// while(attemptNo)
// {
//   for (let i= 0;i<attempts;i++)
//   {
//     if (userInput2==='7')
//     {
//       alert('Correct!! 7 is my favorite number.');
//       correct=true;
//       break;
//     }
//     attemptNo-=1;
//     userInput2=prompt('Guess my favorite number between 1 and 9');
//     if (userInput2>'7'){
//       alert('Too High, Try again, you still have : '+attemptNo+' attempts remaining!');
//       break;
//     }else
//     {
//       alert('Too Low, Try again, you still have : '+attemptNo+' attempts remaining!');
//     }
//   }

//   if (!attemptNo)
//   {
//     alert('The correct number is 7!');
//     break;
//   }
// }


// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. 
//At the end tell them how many they got correct out of the 7 questions asked.

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber(upper) {
//   var num = Math.floor(Math.random() * upper) + 1;
//   return num;
// }

// do {
//   guess = prompt('I am thinking of a number between 1 and 10. What is it?');
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
// }

// } while( !correctGuess )
//   document.write('You guessed the number!');
//   document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber + '.');
