const area = document.querySelector('#area');

function adicionar() {
    const box = document.createElement('div');
    const p = document.createElement('p');
    const buttonx = document.createElement('button');
    const alter = document.createElement('button');
    const boxbutton = document.createElement('div');
    const divtext = document.createElement('div');
    p.innerHTML = document.querySelector('#text').value;
    alter.innerHTML = 'Alterar'
    buttonx.innerHTML = 'X'
    box.classList = 'box'
    divtext.classList = 'divtext'

    p.style.marginLeft = '10px';
    alter.style.borderTopRightRadius = '10px'
    buttonx.style.borderBottomRightRadius = '10px'
    boxbutton.classList = 'boxbutton'
    buttonx.classList = 'buttonbox'
    alter.classList = 'buttonbox'
    buttonx.addEventListener('click', () => { console.log(box.parentNode.removeChild(box)) });
    alter.addEventListener('click', () => { console.log(p.innerHTML = document.querySelector('#text').value) });
    box.appendChild(divtext);
    divtext.appendChild(p);
    box.appendChild(boxbutton);
    boxbutton.appendChild(alter);
    boxbutton.appendChild(buttonx);
    area.appendChild(box);
}