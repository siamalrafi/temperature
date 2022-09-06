// Defeult api from website = (`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`)
// My api key is = {`f27ee3e47e900f2a2c28577fe824840e`}

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f27ee3e47e900f2a2c28577fe824840e&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}
const displayTemperature = (data) => {
    setAllValue('temperature', data.main.temp);
    // temperature.innerText = data.main.temp;
    // set clods 
    setAllValue('condition', data.weather[0].main);
    // clouds.innerText = data.weather[0].main;
}

const setAllValue = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}


const searchTemperature = () => {
    const searchFiled = document.getElementById('city-name');
    const city = searchFiled.value;
    searchFiled.value = '';
    // set city 
    const setCity = document.getElementById('city');
    setCity.innerText = city;
    loadTemperature(city)
}



