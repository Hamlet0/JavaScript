function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years').value;

    // parseFloat sluzi za pretvaranje stringa u brojeve sa decimalalama.
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years);

    // Formula za izracunavanje inflacije.
    let worth = money + (money * (inflationRate / 100 ));

    for( let i = 1; i < years ; i++ ){
        worth += worth * (inflationRate / 100);
    }
    
    // Kada zelimo da smanjimo brojeve iza zareza.
    worth.toFixed(2);

    // Ispisivanje teksta 
    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${money}€ vrijedi isto 
                            kao ${worth}€ za ${years} godina.`;

    document.querySelector('.container').appendChild(newElement);
}