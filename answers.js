let answers = JSON.parse(localStorage.getItem('answers'));

function makeAnswers() {
    const container = document.querySelector('.answers');
    let element = makeTemplate();

    container.insertAdjacentHTML(
        'beforeend',
        element
    ); 
}

function makeTemplate() {
    return `
            ${answers.music.map( el => {
                return `<li class="your-answers__item">${el}</li>`
            }).join('')}
            <li class="your-answers__item">${smoke(answers.smoke)}</li>
           `
}

function smoke(answer) {
    if (answer === true) {
        return 'Курю и никогда не брошу'
    } 
    if (answer === false) {
        return 'Нет, но готов к экспериментам'
    }
}

makeAnswers();