const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

const openPopUpSecond = document.getElementById('open_pop_up_second');
const closePopUpSecond = document.getElementById('pop_up_close_second');
const popUpSecond = document.getElementById('pop_up_second');

const alertP1 = document.getElementById('alert_p1');
const alertP2 = document.getElementById('alert_p2');

openPopUp.addEventListener('click',function(e){
    e.preventDefault()
    popUp.classList.add('activated');
})

openPopUpSecond.addEventListener('click', function(e){
    e.preventDefault()
    popUpSecond.classList.add('activated')
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('activated');
})

closePopUpSecond.addEventListener('click', () => {
    popUpSecond.classList.remove('activated');
})

alertP1.addEventListener('click', () => {
    alert('Вы добавили проф. способности!')
})

alertP2.addEventListener('click', () => {
    alert('Вы добавили хобби и увлечения!')
})

