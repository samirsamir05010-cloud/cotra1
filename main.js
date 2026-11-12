

const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

title.textContent = 'Игровая карточка игрока';

btn.addEventListener('click',()=>{

    const name = nameInput.value.trim();
    const number = Number( numberInput.value.trim());

    if (name === ''){
        result.textContent = 'Введите название';
        result.className = 'error';
        return;
    }

    if(numberInput.value.trim()=== '' || !Number.isFinite(number)){
        result.textContent = 'Введите цену';
        result.className = 'error';
        return;
    }

    
    if (name.toLowerCase().split(' ').includes('test')){
        result.textContent = 'Такое название нельзя';
        result.className = 'error';
        return;
    }

    const promo = Math.floor(Math.random() *90) + 10;
    const roundedNumber =  number.toFixed(2);

    let categoria = '';
    let categoriaClass = '';

    if (number >= 1000){
        categoria = 'Скидка 10%';
        categoriaClass = 'legend';
    }else if(number >= 500){
        categoria = 'Скидка 5%';
        categoriaClass = 'pro'
    }else {
        categoria = 'Без скидки';
        categoriaClass = 'newbie'
    };

    result.className = categoriaClass;

    const words = name.split(' ').filter(word => word !== '');

    const formattedName = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    
    const abbreatura = words.map(word => word[0].toUpperCase()).join('');
    const nameLeght = formattedName.replaceAll(' ', ' ').length;

    result.innerHTML = `
    <h2>Карточка игрока</h2>
    <p>Имя: ${formattedName}</p>
    <p>Аббревиатура: ${abbreatura}</p>
    <p>Длина имени: ${nameLeght}</p>
    <p>Очки: ${roundedNumber}</p>
    <p>Промокод: ${promo}</p>
    <p>Категория: ${categoria}</p>`;

    let safeName = formattedName;

    safeName = safeName.replaceAll('&', '&amp;');
    safeName = safeName.replaceAll('<', '&lt;');
    safeName = safeName.replaceAll('>', '&gt;');
    safeName = safeName.replaceAll('"', '&quot;');
    safeName = safeName.replaceAll("'", '&#39;');

});





