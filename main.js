// Agarrar Divs y crear alfabeto
const flexOne = document.querySelector('.flex-1');
const flexTwo = document.querySelector('.flex-2');
const result = document.querySelector('.result');
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Insertat botones a los divs
appendAlphabet(flexOne, 20, 0);
appendAlphabet(flexTwo, 26, 20);

function appendAlphabet(parent, items, start) {
    for (let i = start; i < items; i++) {
        let btn = document.createElement('button');
        btn.appendChild(document.createTextNode(alphabet[i]));
        parent.appendChild(btn);
    }
}




// Categorías para los juegos
const futTeams = ['chelsea', 'barcelona', 'celta'];
const techCompanies = ['google', 'facebook', 'amazon'];
const nintendoGames = ['kirby', 'mario', 'zelda'];

// Array de categorías
const words = [futTeams, techCompanies, nintendoGames];

// Generar categoría random
const wordIndex = Math.floor(Math.random() * words.length);
const categWord = words[wordIndex][Math.floor(Math.random() * words.length)];

// Crear los guiones para las palabras
for (let i = 0; i < categWord.length; i++) {
    let hyphen = document.createElement('span');
    hyphen.appendChild(document.createTextNode('_'));
    result.appendChild(hyphen);
}

// Mostrar la categoría
const futbol = document.querySelector('.futbol');
const companies = document.querySelector('.companies');
const nintendo = document.querySelector('.nintendo');

function showCateg(elements, block) {
    if (categWord === elements[0] || categWord === elements[1] || categWord === elements[2]) {
        block.style.display = 'block';
    }
}

showCateg(techCompanies, companies);
showCateg(futTeams, futbol);
showCateg(nintendoGames, nintendo);

let spans = document.querySelectorAll('span');

// Obtener las vidas
let lives = 10;
const liveDiv = document.querySelector('.p-lives');

document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', function checkWords(event) {

        // Checkar si la letra es igual a la palabra
        let counter = 0;
        for (let i = 0; i < categWord.length; i++) {
            if (event.target.innerHTML == categWord[i]) {
                spans[i].innerHTML = categWord[i];
                counter++;
            }

            // Si no es igual quitar una vida
            else if (i === categWord.length - 1 && counter === 0) {
                lives = lives - 1;
                liveDiv.innerHTML = `Vidas: ${lives}`;

                // Jugard de nuevo
                if (lives === 0) {
                    document.querySelector('#play-again').style.display = 'block';
                    document.querySelector('.lost').style.display = 'block';
                    liveDiv.style.display = 'none';

                    // Mostrar palabra
                    for (let j = 0; j < spans.length; j++) {
                        spans[j].innerHTML = categWord[j];
                        spans[j].style.color = 'darkslategrey';
                    }

                }
            }
        }

        // Checar si el jugador ganó
        let wordCount = 0;

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].innerHTML !== '_') {
                wordCount++;
            }
        }

        if (wordCount === categWord.length && spans[0].style.color !== 'darkslategrey') {
            document.querySelector('.win').style.display = 'block';
            document.querySelector('#play-again').style.display = 'block';
            liveDiv.style.display = 'none';
        }

        // Desabilitar botón
        item.removeEventListener('click', checkWords);
        item.style.backgroundColor = 'lightseagreen';
        item.style.color = 'white';
        item.style.border = 'solid 1px white';

    })
})



