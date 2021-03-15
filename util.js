
let cityList = document.getElementById('list')
setLoading('load', "none")
function setLists(listofcities) {
    listofcities.forEach(city => {
        let a = document.createElement('li');
        a.innerHTML = city.city;
        a.setAttribute('value', city.city);
        a.addEventListener('click', () => {
            document.getElementById('cityName').value = city.city;
            clearList() 
        })

        cityList.appendChild(a);
    })
}

function clearList() {
    cityList.innerHTML = '';
}

//fetch data //for particular place

async function submit() {
    let val = document.querySelector('#cityName').value;
    setLoading('load', "block")
    setLoading('contR', "none")
    if(val) {
        let data = await getWeatherData(val);
        document.getElementById('weather').innerHTML = '';
        setLoading('contR', "block");
        setLoading('load', "none")
        setValue(data);
    } else {
        console.log('null')
    }

}

(async function () {
    let data = await getWeatherData("Berkeley");
    setValue(data);
})()

document.getElementById('cityName').addEventListener('input', onChangeHandle);

function onChangeHandle() {
    document.getElementById('list').style.display = 'block';
    let input = document.getElementById('cityName').value;
    clearList();
    let filteredItem = cities.filter(item => item.city.includes(input))
    var removed = filteredItem.splice(0,5);
    setLists(removed);
}

function setLoading(id, val) {
    let itm = document.getElementById(id);
    itm.style.display = val;
}



//render data to html page


//create search route


//get search result 





