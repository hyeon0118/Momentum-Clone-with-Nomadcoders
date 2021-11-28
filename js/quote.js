const quotes = [
    {
        quote: '"Be yourself and people will like you."',
        author: 'Diary of a Wimpy Kid by Jeff Kinney',
    },
    {
        quote: '"It is better to be hated for what you are than to be loved for what you are not."',
        author: 'Autumn Leaves by André Gide',
    },
    {
        quote: '"The moment you doubt whether you can fly, you cease forever to be able to do it."',
        author: 'Peter Pan by J. M. Barrie',
    },
    {
        quote: '"Time you enjoy wasting is not wasted time."',
        author: 'Phtynette Married by Marthe Troly-Curtin',
    },
    {
        quote:  '"When you cannot find someone to follow you have to find a way to lead by example."',
        author: 'Bad Feminist by Roxane Gay',
    },
    {
        quote: '"The worst enemy to creativity is self-doubt"',
        author: 'The Unabridged Journals of Sylvia Plath by Sylvia Plath',
    },
    {
        quote: '"Even the darkest night will end and the sun will rise."', 
        author: 'Les Misérables by Victor Hugo',
    },
    {
        quote: '"It is the possibility of having a dream come true that makes life interesting"',
        author: 'The Alchemist by Paulo Coelho',
    },
    {
        quote: '"I am not afraid of storms, for I am learning how to sail my ship."',
        author: 'Little Women by Louisa May Alcott',
    },
    {
        quote: '"So many things are possible just as long as you do not know they are impossible."',
        author: 'The Phantom Toolbooth by Norton Juster',
    },


]

const quote = document.querySelector('#quote blockquote')
const author = document.querySelector('#quote cite')
const footer = document.querySelector('footer')

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;

function showQuote() {
    footer.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener('submit',showQuote)

if (savedUsername === null) {
    footer.classList.add(HIDDEN_CLASSNAME);
} else {
    footer.classList.remove(HIDDEN_CLASSNAME);
}