document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "The best way to predict the future is to invent it.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "An unexamined life is not worth living.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Do what you can, with what you have, where you are."
    ];

    const button = document.createElement('button');
    button.textContent = 'Get Inspired';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.backgroundColor = '#007BFF';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    const quoteDisplay = document.createElement('p');
    quoteDisplay.style.marginTop = '20px';
    quoteDisplay.style.fontSize = '18px';
    quoteDisplay.style.color = '#333';

    document.body.appendChild(button);
    document.body.appendChild(quoteDisplay);

    button.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.textContent = randomQuote;
    });
});