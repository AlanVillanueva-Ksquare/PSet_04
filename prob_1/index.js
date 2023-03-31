//DOM elements
const dailyCount= document.querySelector('.daily')
const weeklyCount= document.querySelector('.weekly')
const monthlyCount= document.querySelector('.monthly')
const sections = document.querySelectorAll('.section')
const hours = document.querySelectorAll(' .hrs')
const lasts = document.querySelectorAll('.last')

async function fetchInfo(){
    const res = await fetch('https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json')
    const data = await res.json()
    return data
}

async function daily(){
    dailyCount.classList.add('lit')
    weeklyCount.classList.remove('lit')
    monthlyCount.classList.remove('lit')
    data = await fetchInfo()
    for (let i = 0;i<6;i++){
    sections[i].textContent = data[i]['title']
    hours[i].textContent = data[i]['timeframes']['daily']['current']
    lasts[i].textContent=`Last Week - ${data[i]['timeframes']['daily']['previous']}`
    }
}

async function weekly(data){
    dailyCount.classList.remove('lit')
    weeklyCount.classList.add('lit')
    monthlyCount.classList.remove('lit')
    data = await fetchInfo()
    for (let i = 0;i<6;i++){
    sections[i].textContent = data[i]['title']
    hours[i].textContent = data[i]['timeframes']['weekly']['current']
    lasts[i].textContent=`Last Week - ${data[i]['timeframes']['weekly']['previous']}`
    }
}

async function monthly(data){
    dailyCount.classList.remove('lit')
    weeklyCount.classList.remove('lit')
    monthlyCount.classList.add('lit')
    data = await fetchInfo()
    for (let i = 0;i<6;i++){
    sections[i].textContent = data[i]['title']
    hours[i].textContent = data[i]['timeframes']['monthly']['current']
    lasts[i].textContent=`Last Week - ${data[i]['timeframes']['monthly']['previous']}`
    }
}

dailyCount.addEventListener('click',daily)
weeklyCount.addEventListener('click',weekly)
monthlyCount.addEventListener('click',monthly)


daily()
