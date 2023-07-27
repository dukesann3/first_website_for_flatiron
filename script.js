
const buttonPlease = document.getElementById('button-please');
/* const helloWorldHTML = document.querySelector('main body h1'); //query selector not working for some reason */
const hellow = document.getElementById('hellow-world');

buttonPlease.addEventListener('click',()=>{

    if(hellow.textContent === 'Press Me Please!'){
        hellow.textContent = 'clicked';
    }
    else{
        hellow.textContent = 'Press Me Please!';
    }

})
