// Template Literals - шаблонные строки

user = 'Bob';
num = 17;
const txt = 'Hello ' + user + ' you have ' + num + ' letters in your box.';

console.log('txt', txt);

const txt2 = `Hello ${user} you have ${num} letters in your box.`;
console.log('txt2', txt2);

// v3
txt3 = `Now is ${Date.now()}`
console.log('txt3', txt3);

// v4
const html =
    '<ul>' +
    '<li>Item One</li>' +
    '<li>Item Two</li>' +
    '</ul>';

console.log('html', html);



const items = ['coffee', 'tea'];
const templateHtml = `
<ul>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
    <li>Item Three</li>
</ul>
`;

console.log('templateHtml:', templateHtml);
