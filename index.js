let countryTimeZone=[["india","Asia/Kolkata"],["japan","Asia/Tokyo"],["korea","Asia/Seoul"],["america","America/New_York"]]
let countryTimeZone=[{india:"Asia/Kolkata",japan:"Asia/Tokyo",korea:"Asia/Seoul",america:"America/New_York"}];

function getTimeByZone(){
  let today=new Date();
  for(let country in countryTimeZone){
    let time=today.toLocaleString("en-US" ,{timeStyle:"medium",timeZone:countryTimeZone[country][1]});
    document.getElementsByTagName('h3')[country].innerHTML=time;
  }
  
}


setInterval(getTimeByZone,1000);