function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let paragraph1 = document.createElement("p"); // <p></p>
    let text = document.createTextNode("Welcome Holberton!");
    paragraph1.appendChild(text); // <p>TEST TEXT</p>
    document.body.appendChild(paragraph1); // <body> <p>TEST TEXT</p> </body>

    let btnSpooky = document.createElement("button");
    let textBtnSpooky = document.createTextNode("Spooky");
    btnSpooky.appendChild(textBtnSpooky);
    document.body.appendChild(btnSpooky);

    let btnDark = document.createElement("button");
    let textBtnDark = document.createTextNode("Dark mode");
    btnDark.appendChild(textBtnDark);
    document.body.appendChild(btnDark);

    let btnScream = document.createElement("button");
    let textBtnScream = document.createTextNode("Scream mode");
    btnScream.appendChild(textBtnScream);
    document.body.appendChild(btnScream);

    btnSpooky.onclick = spooky;
    btnDark.onclick = darkMode;
    btnScream.onclick = screamMode;
}
main();