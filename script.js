const form = document.forms.questions;
const music = document.querySelector('.form__field_music');
const smoke = document.querySelector('.form__field_smoke');
const inputs = Array.from(form.querySelectorAll('.form__input'));
const button = document.querySelector('.form__button');

let answers = {
    music: [],
    smoke: false
}


function makeList(target) {
    if (target.closest('.form__input_rock')) {
        answers.music.push('Рок');
    }
    if (target.closest('.form__input_pop')) {
        answers.music.push('Поп');
    }
    if (target.closest('.form__input_other')) {
        answers.music.push('Другое');
    }
    if (target.closest('.form__input_smoke')) {
        answers.smoke = true;
    }

    return answers;
}

function checkList() {
    let musicInputs = Array.from(music.querySelectorAll('.form__input'));
    let smokeInputs = Array.from(smoke.querySelectorAll('.form__input'));

    let res1 = musicInputs.some( el => {
        return el.checked;
    });
    let res2 = smokeInputs.some( el => {
        return el.checked;
    });

    if (res1 === false || res2 === false) {
        button.setAttribute('disabled', true);
    } 
    if (res1 === true && res2 === true) {
        button.removeAttribute('disabled', true);
    } 
}

checkList();

function listenInputs() {
    inputs.forEach( input => {
        input.addEventListener('click', (event) => {
            makeList(event.target);
            checkList();
        });
    });
}

listenInputs();

function listenButton() {
    button.addEventListener('click', () => {
        event.preventDefault();
        localStorage.setItem('answers', JSON.stringify(answers));
        window.location = './answers.html';
    })
}

listenButton();

