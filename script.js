//defined days
const days = ['Sun', 'Mon', 'Tue', 
      'Wed','Thu', 'Fri', 'Sat'];

//defined months
const months = ['January', 'February',
      'March', 'April', 'May', 'June',
      'July', 'August', 'Septembar', 
      'October', 'November', 'December'];

//defined updateTime function
function updateTime() {
   //get now using Date() method
   const now = new Date();
   
   //Digital Clock functions
   const date = document.querySelector('.date');
   const time = document.querySelector('.time');
   
   date.innerHTML = 
      `${days[now.getDay()]},
       ${zeroPadding(now.getDate())}
       ${months[now.getMonth()]},
       ${now.getFullYear()}
      `;
   time.innerHTML = 
      `${(hours(now.getHours()))} :
       ${zeroPadding(now.getMinutes())} :
       ${zeroPadding(now.getSeconds())}
       ${whatTime(now.getHours())}
      `;
      
  //Analog Clock Functions
   const sec = document.querySelector('.sec');
   const min = document.querySelector('.min');
   const hour = document.querySelector('.hour');
  
   sec.style.transform =`
      translate(-50%, -50%) 
      rotate(${now.getSeconds() * 6}deg)`;
   
   min.style.transform = `
      translate(-50%, -50%) 
      rotate(${(now.getMinutes() * 6) + (now.getSeconds() / 10)}deg)`;
   
   hour.style.transform = `
      translate(-50%, -50%) 
      rotate(${(now.getHours() * 30) + (now.getMinutes() / 2)}deg)`;
}

   updateTime(); //execute updateTime function
   setInterval(updateTime, 1000); //execute every 1s

//for 12 hours format
function hours(hour) {
   if (hour <= 12) return hour; // return same 1 to 12
   else return hour - 12 ; // return 13 - 12 = 1; 24 - 12 = 12
}

// for am or pm
function whatTime(hour) {
   if (hour > 11 && hour < 24) return 'pm'; // 12 to 23:59:59 => noon 12 to night 11:59:59
   else return 'am'; // 24 to 11:59:59 => night 12 to morning 11:59:59
}

//add 0 when num is single digit
function zeroPadding(num) {
   const digit = String(num);
   if (digit.length >= 2) return num;
   else return '0' + num; //if num single digit like 1, 2, 3....
}                     //return 01, 02 , 03....


