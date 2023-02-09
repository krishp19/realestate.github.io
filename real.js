//console.log("JS loaded")

let people = document.getElementById('people');
let peopleLess = document.getElementById('people_less');
let peopleMore = document.getElementById('people_more');

let people_index = 4;

peopleLess.addEventListener('click',()=>{
    people_index -= 1;
    if (people_index <= 0) {
        people_index = 1;
        people.value = people_index + 'people';
    }else{
        people.value = people_index + ' people'
    }
})

peopleMore.addEventListener('click',()=>{
    people_index += 1 ;
    if (people_index >=4 ) {
        people_index = 4;
        people.value = people_index + ' people';
    }else{
        people.value = people_index + ' people'
    }
})

let checkout_data = document.getElementById('checkout_data')
let checkout = document.getElementById('checkout')
let checkin_data = document.getElementById('checkin_data')
let checkin = document.getElementById('checkin')

checkin.addEventListener('change',()=> {

    let checkin_value = checkin.value;
    console.log(checkin_value)
    let date = new Date(checkin_value);
    let date2 = new Date();

    const week = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

    let day = week[date.getDay()];

    //console.log(day)
    
    let dates = checkin_value.slice(8,10)
    //console.log(dates);

    //let months = checkin_value.slice(5,7)
    //console.log(months);

    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let month = months[date.getMonth()]
    //console.log(month)
    if (date<date2) {
        console.log("Invalid Input")
    }
    else{
        checkin_data.innerText = day+', '+ dates + ' ' + month
    }
})

//Check out value
checkout.addEventListener('change',()=> {

    let checkout_value = checkout.value;
    console.log(checkout_value)
    let date = new Date(checkout_value);
    let date2 = new Date();

    const week = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

    let day = week[date.getDay()];

    //console.log(day)
    
    let dates = checkout_value.slice(8,10)
    //console.log(dates);

    //let months = checkin_value.slice(5,7)
    //console.log(months);

    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let month = months[date.getMonth()]
    //console.log(month)
    if (date<date2) {
        console.log("Invalid Input")
    }
    else{
        checkout_data.innerText = day+', '+ dates + ' ' + month
    }
})

let checkin_more = document.getElementById('checkin_more')
let checkin_less = document.getElementById('checkin_less')
let checkout_more = document.getElementById('checkout_more')
let checkout_less = document.getElementById('checkout_less')

checkin_more.addEventListener('click',()=>{
    const week = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkin_data.innerText = day+', '+ date + ' ' + month
})

checkin_less.addEventListener('click',()=>{
    const week = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    let today = new Date();
    //let tomorrow = new Date(today);

    //tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];

    checkin_data.innerText = day+', '+ date + ' ' + month
})

checkout_more.addEventListener('click',()=>{
    const week = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 2);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkout_data.innerText = day+', '+ date + ' ' + month
})

checkout_less.addEventListener('click',()=>{
    const week = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkout_data.innerText = day+', '+ date + ' ' + month
})

const images = [
    "url(/img/bg.jfif) no-repeat center/cover",
    "url(/img/bg3.jfif) no-repeat center/cover",
    "url(/img/button.jpg) no-repeat center/cover"

]

let index = 1;

let h6 = document.getElementById('h6');

let btn_left = document.getElementById('btn_left')
let btn_right = document.getElementById('btn_right')
let style = document.getElementsByClassName('content')[0].style;

btn_left.addEventListener('click',()=>{
    index -= 1;
    if (index<0) {
        index = (images.length) - 1;

    }

    style.setProperty('--background', images[index]);
})

btn_right.addEventListener('click',()=>{
    index ++;
    if (index > (images.length)-1) {
        index = 0;

    }

    style.setProperty('--background', images[index]);
})


