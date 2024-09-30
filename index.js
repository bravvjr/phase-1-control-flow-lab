function scuberGreetingForFeet(feet) {
  // If ride is less than or equal to 400 feet
  if (feet <= 400) {
    return 'This one is on me!';
  }
  // If ride is over 2500 feet
  else if (feet > 2500) {
    return 'No can do.';
  }
  // If ride is between 400 and 2000 feet
  else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  // If ride is over 2000 feet but less than or equal to 2500 feet
  else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  // Using a ternary operator to check if the city is 'NYC' or not
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }  
}