/* In this program, I check the following: 
* The program Has at least one uppercase letter
* The programHas at least one lowercase letter
* The program has at least 8 characters long
* The program Has at least one special character*/

//This function reports to the user if their password is complex enough, and if not, it tells them what they are missing.
function isPasswordValid(input){
  if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)){
    console.log('The password is valid');
  }
   if (!hasUppercase(input)){
    console.log('The password needs a capital letter');
   }
   if (!hasLowercase(input)){
    console.log('The password needs a small letter');
   }
  if (!isLongEnough(input)){
    console.log('This password is not long enough. You need at least 8 characters');
  }
  if (!hasSpecialCharacter(input)){
    console.log('This password needs at least one special character');
  }
}

function hasLowercase(input){
  for (var i = 0; i < input.length;i++){
    if (input[i] === input[i].toLowerCase()){
      return true;
    }
  }
}

//A function that verifies the password has an uppercase letter.
function hasUppercase(input){
  for (var i = 0; i < input.length;i++){
    if (input[i] === input[i].toUpperCase()){
      return true;
    }
  }
}

// This function verifies the password is at least 8 characters
function isLongEnough(input){
  if (input.length >= 8){
    return true;
  }
}

// This function verifies the password has a special character
function hasSpecialCharacter(input){
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++){
    for (var j = 0; j < specialCharacters.length; j++){
      if (input[i] === specialCharacters[j]){
        return true;
      }
    }
  }
  
}

isPasswordValid('#fsag!y');