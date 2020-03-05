const form = document.forms.questions;
const inputs = Array.from(form.querySelectorAll('.form__input'));
const button = document.querySelector('.form__button');

// объект для записи ответов
let answers = {
    music: [],
    smoke: '',
    animals: ''
}

/** валидация формы, включение/отключение кнопки */
function checkList() {
    let fields = Array.from(form.querySelectorAll('.form__field'));
    let fieldInputs = getInputs(fields);
    let validationFields = validationInputs(fieldInputs);
    // финальный результат ваидации по всем блокам-вопросам
    let validationResult = validationFields.includes(false);

    if (validationResult === true) {
        button.setAttribute('disabled', true);
        button.classList.add('form__button_inactive');
        button.classList.remove('form__button_active');
    }

    if (validationResult === false) {
        button.removeAttribute('disabled', true);
        button.classList.remove('form__button_inactive');
        button.classList.add('form__button_active');
    }
}

/** собираем инпуты блока-вопроса */
function getInputs(formField) {
    return formField.map( item => {
        return Array.from(item.querySelectorAll('.form__input'));
    });
}

/** проверяем инпуты одного блока-вопроса */
function validationInputs(inputs) {
    return inputs.map(inputs => {
        return inputs.some( input => { 
            return input.checked; 
        });
    });
}

/** добавляем новый ответ/перезаписываем массив music, если убрали галоку */
function makeArray(value) {
    if (answers.music.includes(value)) {
        answers.music = answers.music.filter( item => {
            return item !== value;
        });
    } else {
        answers.music.push(value);
    }
}

/** слушатель на все инпуты */
function listenInputs() {
    inputs.forEach( input => {
        input.addEventListener('click', (event) => {
            if (event.target.closest('.form__field_music')) {
                makeArray(event.target.value);
            }
            if (event.target.closest('.form__field_smoke')) {
                answers.smoke = event.target.value;
            }
            if (event.target.closest('.form__field_animals')) {
                answers.animals = event.target.value;
            }
            checkList();
        });
    });
}

listenInputs();

/** слушатель на кнопку формы */
function listenButton() {
    button.addEventListener('click', () => {
        event.preventDefault();
        localStorage.setItem('answers', JSON.stringify(answers));
        window.location = './answers.html';
    });
}

listenButton();
