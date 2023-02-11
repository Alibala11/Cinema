let continueVideo = document.querySelector('.continue_section')
let sliderCards = document.querySelector('.slider_cards')
let popularApi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8'
let hardApi = 'https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard'
let comedyApi = 'https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=comedy'
let actionApi = 'https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=action'
let imageApi = 'https://image.tmdb.org/t/p/w500'

fetch('./api/videos.json')
.then(resp=>resp.json())
.then(data=>{
    console.log(data);
    data.forEach(x=>{
        continueVideo.innerHTML+=`
            <div class="grid_card">
                <video src="${x.video}" controls></video>
                <p>"${x.title}"</p>
            </div>
        `
    })
})

// !---------------Popular Api---------------!//

fetch(popularApi)
.then(resp=>resp.json())
.then(data=>{
    console.log(data);
    data.results.forEach(slider=>{
        sliderCards.innerHTML+=`
            <div class="slider_card">
                <div class="slider_inner--card">
                    <img src="https://image.tmdb.org/t/p/w500${slider.poster_path}" alt="">
                    <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.109 1.85495e-06H1.89103C1.39066 -0.000703945 0.910483 0.200031 0.555939 0.558122C0.201394 0.916213 0.00147445 1.40238 8.69671e-05 1.90985V32.0876C-0.00351697 32.4651 0.104966 32.835 0.311424 33.149C0.517883 33.4631 0.81276 33.7069 1.1577 33.8487C1.50166 33.9962 1.88096 34.037 2.24778 33.9661C2.61459 33.8952 2.95249 33.7157 3.21887 33.4503L10.7748 25.9225C10.835 25.8628 10.9158 25.8293 11 25.8293C11.0842 25.8293 11.1651 25.8628 11.2252 25.9225L18.7838 33.4477C19.05 33.7134 19.3879 33.893 19.7548 33.964C20.1216 34.0349 20.501 33.9939 20.8449 33.8461C21.189 33.704 21.483 33.4605 21.6889 33.1469C21.8949 32.8334 22.0032 32.4644 21.9999 32.0876V1.90985C21.9985 1.40238 21.7986 0.916213 21.4441 0.558122C21.0895 0.200031 20.6094 -0.000703945 20.109 1.85495e-06ZM20.4285 32.0876C20.4297 32.1503 20.4117 32.2118 20.377 32.2637C20.3423 32.3155 20.2926 32.3552 20.2347 32.3772C20.1767 32.4047 20.1117 32.4131 20.0487 32.4012C19.9858 32.3893 19.9281 32.3576 19.8838 32.3108L12.3252 24.7856C11.9702 24.4349 11.4942 24.2387 10.9987 24.2387C10.5032 24.2387 10.0272 24.4349 9.67216 24.7856L2.11626 32.3108C2.07172 32.3573 2.01405 32.3887 1.9512 32.4006C1.88834 32.4125 1.8234 32.4043 1.76531 32.3772C1.70743 32.3552 1.65771 32.3155 1.62299 32.2637C1.58828 32.2118 1.57029 32.1503 1.5715 32.0876V1.90985C1.57288 1.82507 1.60724 1.74428 1.66709 1.68507C1.72693 1.62587 1.80742 1.59305 1.89103 1.59376H20.109C20.1926 1.59305 20.2731 1.62587 20.3329 1.68507C20.3928 1.74428 20.4271 1.82507 20.4285 1.90985V32.0876Z" fill="white"/>
                    </svg>
                </div>
                <p>${slider.title}</p>
            </div>
        `
    })
})

let count = 0;
let popularVideos = document.querySelector('#popular_videos')

function slide() {
    for(let i=0;i<popularVideos.children.length;i++){
        popularVideos.children[i].style.transform=`translateX(${-302*count}px)`
    }
}

setInterval(() => {
    if(count<popularVideos.children.length-4){
        count++
        slide()
    }else{
        count=0
        slide()
    }
}, 3000);

let leftIcon = document.querySelector('.left_icon')
let rightIcon = document.querySelector('.right_icon')

leftIcon.addEventListener('click', ()=>{
    if(count>0){
        count--
        slide()
    }else{
        count=0
        slide()
    }
})

rightIcon.addEventListener('click', ()=>{
    if(count<popularVideos.children.length-4){
        count++
        slide()
    }else{
        count=0
        slide()
    }
})


// !------------ Comedy api --------------!//


let comedies = document.querySelector('#comedies')

fetch(comedyApi)
.then(response=>response.json())
.then(com=>{
    console.log(com);
    com.results.forEach(secondSlider=>{
        comedies.innerHTML+=`
            <div class="slider_card">
                <div class="slider_inner--card">
                    <img src="https://image.tmdb.org/t/p/w500${secondSlider.poster_path}" alt="">
                    <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.109 1.85495e-06H1.89103C1.39066 -0.000703945 0.910483 0.200031 0.555939 0.558122C0.201394 0.916213 0.00147445 1.40238 8.69671e-05 1.90985V32.0876C-0.00351697 32.4651 0.104966 32.835 0.311424 33.149C0.517883 33.4631 0.81276 33.7069 1.1577 33.8487C1.50166 33.9962 1.88096 34.037 2.24778 33.9661C2.61459 33.8952 2.95249 33.7157 3.21887 33.4503L10.7748 25.9225C10.835 25.8628 10.9158 25.8293 11 25.8293C11.0842 25.8293 11.1651 25.8628 11.2252 25.9225L18.7838 33.4477C19.05 33.7134 19.3879 33.893 19.7548 33.964C20.1216 34.0349 20.501 33.9939 20.8449 33.8461C21.189 33.704 21.483 33.4605 21.6889 33.1469C21.8949 32.8334 22.0032 32.4644 21.9999 32.0876V1.90985C21.9985 1.40238 21.7986 0.916213 21.4441 0.558122C21.0895 0.200031 20.6094 -0.000703945 20.109 1.85495e-06ZM20.4285 32.0876C20.4297 32.1503 20.4117 32.2118 20.377 32.2637C20.3423 32.3155 20.2926 32.3552 20.2347 32.3772C20.1767 32.4047 20.1117 32.4131 20.0487 32.4012C19.9858 32.3893 19.9281 32.3576 19.8838 32.3108L12.3252 24.7856C11.9702 24.4349 11.4942 24.2387 10.9987 24.2387C10.5032 24.2387 10.0272 24.4349 9.67216 24.7856L2.11626 32.3108C2.07172 32.3573 2.01405 32.3887 1.9512 32.4006C1.88834 32.4125 1.8234 32.4043 1.76531 32.3772C1.70743 32.3552 1.65771 32.3155 1.62299 32.2637C1.58828 32.2118 1.57029 32.1503 1.5715 32.0876V1.90985C1.57288 1.82507 1.60724 1.74428 1.66709 1.68507C1.72693 1.62587 1.80742 1.59305 1.89103 1.59376H20.109C20.1926 1.59305 20.2731 1.62587 20.3329 1.68507C20.3928 1.74428 20.4271 1.82507 20.4285 1.90985V32.0876Z" fill="white"/>
                    </svg>
                </div>
                <p>${secondSlider.title}</p>
            </div>
        `
    })
})


let counter = 0;

function slideTwo() {
    for(let i=0;i<comedies.children.length;i++){
        comedies.children[i].style.transform=`translateX(${-302*counter}px)`
    }
}

setInterval(() => {
    if(counter<comedies.children.length-4){
        counter++
        slideTwo()
    }else{
        counter=0
        slideTwo()
    }
}, 3000);

let left = document.querySelector('.left')
let right = document.querySelector('.right')

left.addEventListener('click', ()=>{
    console.log("basildi");
    if(counter>0){
        counter--
        slideTwo()
    }else{
        counter=0
        slideTwo()
    }
})

right.addEventListener('click', ()=>{
    console.log("basildi");
    if(counter<comedies.children.length-4){
        counter++
        slideTwo()
    }else{
        counter=0
        slideTwo()
    }
})

// ! ------------ Action & Adventure ------------- !//

let action = document.querySelector('#action_adventure')

fetch(actionApi)
.then(respon=>respon.json())
.then(act=>{
    console.log(act);
    act.results.forEach(thirdSlider=>{
        action.innerHTML+=`
            <div class="slider_card">
                <div class="slider_inner--card">
                    <img src="https://image.tmdb.org/t/p/w500${thirdSlider.poster_path}" alt="">
                    <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.109 1.85495e-06H1.89103C1.39066 -0.000703945 0.910483 0.200031 0.555939 0.558122C0.201394 0.916213 0.00147445 1.40238 8.69671e-05 1.90985V32.0876C-0.00351697 32.4651 0.104966 32.835 0.311424 33.149C0.517883 33.4631 0.81276 33.7069 1.1577 33.8487C1.50166 33.9962 1.88096 34.037 2.24778 33.9661C2.61459 33.8952 2.95249 33.7157 3.21887 33.4503L10.7748 25.9225C10.835 25.8628 10.9158 25.8293 11 25.8293C11.0842 25.8293 11.1651 25.8628 11.2252 25.9225L18.7838 33.4477C19.05 33.7134 19.3879 33.893 19.7548 33.964C20.1216 34.0349 20.501 33.9939 20.8449 33.8461C21.189 33.704 21.483 33.4605 21.6889 33.1469C21.8949 32.8334 22.0032 32.4644 21.9999 32.0876V1.90985C21.9985 1.40238 21.7986 0.916213 21.4441 0.558122C21.0895 0.200031 20.6094 -0.000703945 20.109 1.85495e-06ZM20.4285 32.0876C20.4297 32.1503 20.4117 32.2118 20.377 32.2637C20.3423 32.3155 20.2926 32.3552 20.2347 32.3772C20.1767 32.4047 20.1117 32.4131 20.0487 32.4012C19.9858 32.3893 19.9281 32.3576 19.8838 32.3108L12.3252 24.7856C11.9702 24.4349 11.4942 24.2387 10.9987 24.2387C10.5032 24.2387 10.0272 24.4349 9.67216 24.7856L2.11626 32.3108C2.07172 32.3573 2.01405 32.3887 1.9512 32.4006C1.88834 32.4125 1.8234 32.4043 1.76531 32.3772C1.70743 32.3552 1.65771 32.3155 1.62299 32.2637C1.58828 32.2118 1.57029 32.1503 1.5715 32.0876V1.90985C1.57288 1.82507 1.60724 1.74428 1.66709 1.68507C1.72693 1.62587 1.80742 1.59305 1.89103 1.59376H20.109C20.1926 1.59305 20.2731 1.62587 20.3329 1.68507C20.3928 1.74428 20.4271 1.82507 20.4285 1.90985V32.0876Z" fill="white"/>
                    </svg>
                </div>
                <p>${thirdSlider.title}</p>
            </div>
        `
    })
})

let countr = 0;

function slider() {
    for(let i=0;i<action.children.length;i++){
        action.children[i].style.transform=`translateX(${-302*countr}px)`
    }
}

setInterval(() => {
    if(countr<action.children.length-4){
        countr++
        slider()
    }else{
        countr=0
        slider()
    }
}, 3000);

let lasTleft = document.querySelector('.last_left')
let lasTright = document.querySelector('.last_right')

lasTleft.addEventListener('click', ()=>{
    console.log("sonuncu basildi sol");
    if(countr>0){
        countr--
        slider()
    }else{
        countr=0
        slider()
    }
})

lasTright.addEventListener('click', ()=>{
    console.log("sonuncu basildi");
    if(countr<action.children.length-4){
        countr++
        slider()
    }else{
        countr=0
        slider()
    }
})

// ! ----------- Hamburger Menu ---------!//

let barsIcon = document.querySelector('.header_icons .fa-bars')
let navList = document.querySelector('.nav_list')

barsIcon.addEventListener('click', ()=>{
    navList.classList.toggle('active')
})