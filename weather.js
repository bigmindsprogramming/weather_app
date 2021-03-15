let API = '2dc4076b8512b7f9053ebfd46cd33f28'

async function getWeatherData(cityName) {
    let data;
    try {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}&units=metric`);
        data = response.data;
    }catch(e) {
        console.log(e)
    }
    return data;
}


let weatherContainer = document.getElementById('weather');

function setValue(data) {
    console.log(data);
    setClassContainer(data.weather[0].icon);
    let divTag = document.createElement('div');
    let nameTag = createTag('div', '', data.name, 'data_small' );
    let weatherTag = createTag('div', 'Weather type', data.weather[0].main, 'data_small');
    let humidnTag = createTag('div', 'Humid', data.main.humidity, 'data_small');
    let pressureTag = createTag('div', 'Pressure',data.main.pressure, 'data_small');
    let tempTag = createTag('div', 'Temperature', data.main.temp , 'data_small');
    let maxTemp = createTag('div', 'Maximum Temperature', data.main.temp_max, 'data_small');
    let minTemp = createTag('div', 'Minimum Temperature', data.main.temp_min, 'data_small');
    let windTag = createTag('div', 'Wind Speed',data.wind.speed , 'data_small');
    let sunRise = createTag('div', 'Sunrise', data.sys.sunrise, 'data_small');
    let sunset = createTag('div', 'Sunset', data.sys.sunrise, 'data_small');

    divTag.setAttribute('class' , 'item_container')
    divTag.innerHTML += nameTag.outerHTML + weatherTag.outerHTML + humidnTag.outerHTML + pressureTag.outerHTML + tempTag.outerHTML + maxTemp.outerHTML + minTemp.outerHTML + windTag.outerHTML + sunRise.outerHTML + sunset.outerHTML;
    weatherContainer.appendChild(divTag)
}
function setLoder () {
    let div1 = createTag('div', '', '', 'loader1');
    weatherContainer.appendChild(div1)
}

function createTag(tag, dataHead, data, customClass) {
    let createdTag = document.createElement(tag);
    createdTag.setAttribute('class', customClass);
    createdTag.innerHTML = `${dataHead} ${data}`;

    return createdTag;
}

function setClassContainer(type) {
    weatherContainer.setAttribute('class', `class_${type}`)
}
