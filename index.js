let countryTimeZone={india:"Asia/Kolkata",japan:"Asia/Tokyo",korea:"Asia/Seoul",america:"America/New_York"};

function getTimeByZone(){
  let today=new Date();
  let i=0;
  for(let country in countryTimeZone){
    let time=today.toLocaleString("en-US" ,{timeStyle:"medium",timeZone:countryTimeZone[country]});
    document.getElementsByTagName('h3')[i].innerHTML=time;
    i++;
  }
}

setInterval(getTimeByZone,1000);