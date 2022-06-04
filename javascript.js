
const button = document.querySelector('button');
const temperaturaSelecionada = document.querySelector('select');
const celsius = document.querySelector('#celsius');
const resultado = document.querySelector('#resultado');


function alteraBotao() {
    if (temperaturaSelecionada.value === 'fahrenheit') {
        button.innerHTML = 'Converter para °F';
    } else if (temperaturaSelecionada.value === 'kelvin') {
        button.innerHTML = 'Converter para K';
    } else {
        button.innerHTML = 'Converter';
    }
}


function celsiusFahrenheitKelvin() {
    if (temperaturaSelecionada.value === 'fahrenheit') {
        if (celsius.value === '') celsius.value = 0;
       
        resultado.innerHTML = `${(celsius.value * 1.8 + 32).toFixed(1)} °F`;
    } else if (temperaturaSelecionada.value === 'kelvin') {
        if (celsius.value === '') celsius.value = 0;
    
        resultado.innerHTML = `${(parseFloat(celsius.value) + 273.15).toFixed(2)} K`;
    } else {
      
        resultado.innerHTML = "Sem unidade";
    }
}


button.addEventListener('click', celsiusFahrenheitKelvin);

temperaturaSelecionada.addEventListener('change', alteraBotao);
    











