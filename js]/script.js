// ideia de usar if else pega na IA, porem digitado por nós, fizemos o primeiro "mercurio" e após isso usamos ctrl c e ctrl v
// repetindo o processo a todos os planetas, mudando as informações mostradas


function mostrarInformacoes(planeta) {
    let nome = '';
    let tamanho = '';
    let temperatura = '';
    let gravidade = '';

    if (planeta === 'mercurio') {
        nome = 'Mercúrio';
        tamanho = 'Tamanho: 4.880 km';
        temperatura = 'Temperatura: 430°C (máxima) a -180°C (mínima)';
        gravidade = 'Gravidade: 3.7 m/s²';
    } else if (planeta === 'venus') {
        nome = 'Vênus';
        tamanho = 'Tamanho: 12.104 km';
        temperatura = 'Temperatura: 465°C';
        gravidade = 'Gravidade: 8.87 m/s²';
    } else if (planeta === 'terra') {
        nome = 'Terra';
        tamanho = 'Tamanho: 12.742 km';
        temperatura = 'Temperatura: 15°C (média)';
        gravidade = 'Gravidade: 9.81 m/s²';
    } else if (planeta === 'marte') {
        nome = 'Marte';
        tamanho = 'Tamanho: 6.779 km';
        temperatura = 'Temperatura: -60°C (média)';
        gravidade = 'Gravidade: 3.71 m/s²';
    } else if (planeta === 'jupiter') {
        nome = 'Júpiter';
        tamanho = 'Tamanho: 139.820 km';
        temperatura = 'Temperatura: -108°C';
        gravidade = 'Gravidade: 24.79 m/s²';
    } else if (planeta === 'saturno') {
        nome = 'Saturno';
        tamanho = 'Tamanho: 116.460 km';
        temperatura = 'Temperatura: -139°C';
        gravidade = 'Gravidade: 10.44 m/s²';
    } else if (planeta === 'urano') {
        nome = 'Urano';
        tamanho = 'Tamanho: 50.724 km';
        temperatura = 'Temperatura: -197°C';
        gravidade = 'Gravidade: 8.69 m/s²';
    } else if (planeta === 'netuno') {
        nome = 'Netuno';
        tamanho = 'Tamanho: 49.244 km';
        temperatura = 'Temperatura: -200°C';
        gravidade = 'Gravidade: 11.15 m/s²';
    }


    document.getElementById('nome').textContent = nome;
    document.getElementById('tamanho').textContent = tamanho;
    document.getElementById('temperatura').textContent = temperatura;
    document.getElementById('gravidade').textContent = gravidade;
}