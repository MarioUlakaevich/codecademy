const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wensday':
      return 7;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 10;
      break;
   default:
      return 'error';
      break;
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wensday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () =>{
  const idealHours = 7;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect');
  } else if (actualSleepHours > idealSleepHours){
    console.log('More');
  } else {
    console.log('Not enough');
  }
}

calculateSleepDebt();