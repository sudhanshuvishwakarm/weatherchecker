
let cityname=document.getElementById('cityname');
let img=document.getElementById('img');
let btn=document.getElementById('btn');
let cloud=document.getElementById('cloud');
let temp=document.getElementById('temp');
let API_KEY="ca87f58432d05d465e8f2a0e25bd1b66";
 async function myfun(){
    let inputs=document.getElementById('inp').value;
    let fetchAPI= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputs}&appid=${API_KEY}`)
    let getjson= await fetchAPI.json();
    console.log(getjson);
    temp.innerHTML=Math.floor(getjson.main.temp-273)+"°C";
    cloud.innerHTML=getjson.weather[0].main;
    cityname.innerHTML=inputs.toUpperCase();
    if(cloud.innerHTML=="Clear"){
        img.src="images/png-transparent-illustration-sunny-sunny-day-photography-orange-independence-day-thumbnail-removebg-preview.png"
    }
    else if(cloud.innerHTML=="Clouds"){
        img.src="images/png-transparent-clouds-sunny-warm-patches-weather-partly-cloudy-symbols-forecast-removebg-preview.png";
    }
    else if(cloud.innerHTML=="Rainy"){
        img.src="images/png-transparent-rainy-day-clouds-rain-the-weather-thumbnail-removebg-preview.png";
    }
    else if(cloud.innerHTML=="Snowy"){
        img.src="images/4478875-removebg-preview.png";
    }
    else if(cloud.innerHTML=="Foggy"){
        img.src="images/R-removebg-preview.png";
    }
    else if(cloud.innerHTML=="Haze"){
        img.src="https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
    }
    
    else {
        img.src="https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-warning-cloud-computing-flat-icon-vector-png-image_6701159.png";
    }
    document.getElementById('inp').value="";
    
}
document.getElementById('inp').addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        myfun();
        
    }
});






// https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
//ca87f58432d05d465e8f2a0e25bd1b66