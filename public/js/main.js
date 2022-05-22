const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityname');


const city_Name=document.getElementById('city_Name')
const temp=document.getElementById('temp');
const tempstatus=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };
document.getElementById('day').innerHTML=getCurrentDay();
const getWeather= async(e)=>{
    e.preventDefault();
    let cityVal=cityName.value;
    if(cityVal==''){
        city_Name.innerHTML="please write the name Before search";
        datahide.classList.add('data_hide');
    }else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6bc67a13a132f45199e8f8b0675babc5`;
            const response = await fetch(url);
            const data =await response.json();
            const arrdata =[data];
            datahide.classList.remove('data_hide');
            city_Name.innerHTML=`${cityVal}, ${arrdata[0].sys.country}` ;
            temp.innerHTML=arrdata[0].main.temp+" &deg; C";            
            tempstatusdata=arrdata[0].weather[0].main;
            
            if (tempstatusdata == "Sunny") {
                tempstatus.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempstatusdata == "Clouds") {
                tempstatus.innerHTML =
                  "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              } else if (tempstatusdata == "Rainy") {
                tempstatus.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } else if (tempstatusdata == "Clear") {
                tempstatus.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else {
                weathercon.innerHTML =
                  "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
              }
        }catch{
            city_Name.innerHTML="please enter the city name properly";
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getWeather);