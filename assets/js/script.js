//pegando inputs
const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const btn3 = document.querySelector('#button3');
const btn4 = document.querySelector('#button4');
const btn5 = document.querySelector('#button5');

const result = document.querySelector('#result');

const submit = document.querySelector('#submitBtn');

//pegando todos os buttons

const btnGeral = document.querySelector('#buttons');

// pegando a class para fazer o toggle de mudança de pagina

const divInicial = document.querySelector('#container-master');
const divFinal = document.querySelector('#divFinal');

//tirando evento de enviar

btnGeral.addEventListener('click', (e)=>{
    e.preventDefault()
})

const b1 = btn1.addEventListener('click', ()=>{
        result.innerHTML = `ou selected 1 out of 5`
        btn1.classList.toggle('activeButtons')

        btn2.classList.remove('activeButtons')
        btn3.classList.remove('activeButtons')
        btn4.classList.remove('activeButtons')
        btn5.classList.remove('activeButtons')
})

const b2 = btn2.addEventListener('click', ()=>{
    result.innerHTML = `ou selected 2 out of 5`
        btn2.classList.toggle('activeButtons')

        btn1.classList.remove('activeButtons')
        btn3.classList.remove('activeButtons')
        btn4.classList.remove('activeButtons')
        btn5.classList.remove('activeButtons')
})

const b3 = btn3.addEventListener('click', ()=>{
        result.innerHTML = `ou selected 3 out of 5`
        btn3.classList.toggle('activeButtons')

        btn1.classList.remove('activeButtons')
        btn2.classList.remove('activeButtons')
        btn4.classList.remove('activeButtons')
        btn5.classList.remove('activeButtons')
})

const b4 = btn4.addEventListener('click', ()=>{
        result.innerHTML = `ou selected 4 out of 5`
        btn4.classList.toggle('activeButtons')

        btn1.classList.remove('activeButtons')
        btn3.classList.remove('activeButtons')
        btn2.classList.remove('activeButtons')
        btn5.classList.remove('activeButtons')
})

const b5 = btn5.addEventListener('click', ()=>{
        result.innerHTML = `ou selected 5 out of 5`
        btn5.classList.toggle('activeButtons')

        btn1.classList.remove('activeButtons')
        btn3.classList.remove('activeButtons')
        btn4.classList.remove('activeButtons')
        btn2.classList.remove('activeButtons')
});

    

submit.addEventListener('click', () => {
    if (
        !btn1.classList.contains('activeButtons') &&    // caso não contenha a classe activeButtons
        !btn2.classList.contains('activeButtons') &&
        !btn3.classList.contains('activeButtons') &&
        !btn4.classList.contains('activeButtons') &&
        !btn5.classList.contains('activeButtons')
    ){
        alert('Selecione uma nota');
        return;
    }

    divInicial.classList.add('hide');
    divFinal.classList.add('thankYouHide');
});











