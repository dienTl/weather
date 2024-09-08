var search =document.querySelector('.search')
var city =document.querySelector('.city')
var country =document.querySelector('.country')
var value =document.querySelector('.value')
var shortdesc = document.querySelector('.short-desc')
var visibility =document.querySelector('.visibility span')
var wind =document.querySelector('.wind span')
var sun =document.querySelector('.sun span')
var value =document.querySelector('.value')
var time =document.querySelector('.time')
var content =document.querySelector('.content')
var body =document.querySelector('.body')

 async function changewweatherUI(capitalvaluesearch){
    let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${capitalvaluesearch}&appid=318c657bc4f4368b6afbe2c0e2b1f0ff`
    let data =await fetch(apiurl).then(res=> res.json()) ;
    if(data.cod==200){
        content.classList.remove('hide')
        city.innerText = data.name ;
        country.innerText = data.sys.country ;
        visibility.innerText=data.visibility +"m";
        wind.innerText= data.wind.speed +'m/s';
        sun.innerText=data.main.humidity + '%';
        let temp =Math.round((data.main.temp -273.15 ))  ;
        value.innerText = temp ;
        shortdesc.innerText = data.weather[0] ? data.weather[0].main :''
        time.innerText = new Date().toLocaleString('Vi');
        
        if( temp >25){
            body.classList.add('hot')
        }
        if(temp < 25){
            body.classList.add('warm')
        }
        if(temp < 20){
            body.classList.add('cold')
        }
    }
    else{
        content.classList.add('hide')
    }
 }
 
 search.addEventListener('keypress',function(e) {
    if(e.code === 'Enter'){
        let capitalvaluesearch = search.value.trim();
        changewweatherUI(capitalvaluesearch);
    }
 })
 changewweatherUI('ha noi');