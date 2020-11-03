/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
Note: In Ruby years will start from 1593.
*/

const unluckyDays = (year) => {
  let fridays = 0;
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'October', 'November', 'December']
  let date;
  let day;
  for(let i = 0; i < 12; i++) {
    date = new Date(month[i] + ' 13, ' + year);
    day = date.getDay();
    if(day === 5) {
      fridays++;
    }
  }

  return fridays;
} 