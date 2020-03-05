let answers = JSON.parse(localStorage.getItem('answers'));

function makeAnswers() {
    const container = document.querySelector('.answers');
    let element = makeTemplate(Object.keys(answers));

    container.insertAdjacentHTML(
        'beforeend',
        element
    ); 
}

function makeTemplate(arr) {
    return arr.map( el => {
        if (el === 'music') {
            return `
                    <h2 class="answers__title">Ваша любимая музыка</h2>
                    <ul class="answers__list">
                      ${answers[el].map( answer => { 
                          return makeItemOfList(answer) 
                        }).join('')}
                    </ul>
                   `
        }
        if (el === 'smoke') {
            return `
                    <h2 class="answers__title">Вы курите?</h2>
                    <ul class="answers__list">
                      ${makeItemOfList(answers[el])}
                    </ul>
                   `
        }
        if (el === 'animals') {
            return `
                    <h2 class="answers__title">Каких животных Вы любите?</h2>
                    <ul class="answers__list">
                      ${makeItemOfList(answers[el])}
                    </ul>
                   `
        }
    }).join('');
}

function makeItemOfList(element) {
    return `<li class="your-answers__item">${element}</li>`
}

makeAnswers();
