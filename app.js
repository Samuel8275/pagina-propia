const btnSwitch = document.querySelector("#switch");
const nav = document.querySelector('.container_text');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    nav.classList.toggle('dark');
})