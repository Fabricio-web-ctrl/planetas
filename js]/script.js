// ideia de usar if else pega na IA, porem digitado por nós, fizemos o primeiro "mercurio" e após isso usamos ctrl c e ctrl v
// repetindo o processo a todos os planetas, mudando as informações mostradas

// professor alexandre nos ajudou a adicionar imagens




// js que a IA deu para deixar mais bonito !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.animationDuration = Math.random() * 2 + 2 + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Criar estrelas cadentes aleatórias
setInterval(createShootingStar, 8000);

// Criar algumas estrelas cadentes iniciais
for (let i = 0; i < 3; i++) {
    setTimeout(createShootingStar, i * 3000);
}

// Adicionar estrelinhas decorativas
function addStarDecoration() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star-decoration';
        star.innerHTML = '✦';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.fontSize = (Math.random() * 6 + 4) + 'px';
        star.style.opacity = Math.random() * 0.5 + 0.3;
        document.body.appendChild(star);
    }
}

addStarDecoration();

// nosso codigo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function mostrarInformacoes(planeta) {
    let nome = '';
    let tamanho = '';
    let temperatura = '';
    let gravidade = '';
    let imagem = '';

    if (planeta === 'mercurio') {
        nome = 'Mercúrio';
        tamanho = 'Tamanho: 4.880 km';
        temperatura = 'Temperatura: 430°C (máxima) a -180°C (mínima)';
        gravidade = 'Gravidade: 3.7 m/s²';
        imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnahmT_18o7FgBs7TuMxYgemzktUUxoqs9g&s';
    } else if (planeta === 'venus') {
        nome = 'Vênus';
        tamanho = 'Tamanho: 12.104 km';
        temperatura = 'Temperatura: 465°C';
        gravidade = 'Gravidade: 8.87 m/s²';
        imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-qSqQmS8tP_jrA_iFPtLNfXp-lYwoW9qFQ&s';
    } else if (planeta === 'terra') {
        nome = 'Terra';
        tamanho = 'Tamanho: 12.742 km';
        temperatura = 'Temperatura: 15°C (média)';
        gravidade = 'Gravidade: 9.81 m/s²';
        imagem = 'https://img.freepik.com/fotos-premium/planeta-terra-isolado-em-fundo-preto-3d-realista-verde-terra-paisagens-vista-completa-4k_840959-14.jpg';
    } else if (planeta === 'marte') {
        nome = 'Marte';
        tamanho = 'Tamanho: 6.779 km';
        temperatura = 'Temperatura: -60°C (média)';
        gravidade = 'Gravidade: 3.71 m/s²';
        imagem = 'https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg';
    } else if (planeta === 'jupiter') {
        nome = 'Júpiter';
        tamanho = 'Tamanho: 139.820 km';
        temperatura = 'Temperatura: -108°C';
        gravidade = 'Gravidade: 24.79 m/s²';
        imagem = 'https://wallpapers.com/images/featured/imagens-de-jupiter-f9nabtuotuulifex.jpg';
    } else if (planeta === 'saturno') {
        nome = 'Saturno';
        tamanho = 'Tamanho: 116.460 km';
        temperatura = 'Temperatura: -139°C';
        gravidade = 'Gravidade: 10.44 m/s²';
        imagem = 'https://img.freepik.com/fotos-premium/saturno-da-perspectiva-de-seus-aneis_425671-4593.jpg';
    } else if (planeta === 'urano') {
        nome = 'Urano';
        tamanho = 'Tamanho: 50.724 km';
        temperatura = 'Temperatura: -197°C';
        gravidade = 'Gravidade: 8.69 m/s²';
        imagem = 'https://img.freepik.com/fotos-gratis/esfera-abstrata-brilha-em-liquido-subaquatico-azul-gerado-por-ia_188544-22051.jpg';
    } else if (planeta === 'netuno') {
        nome = 'Netuno';
        tamanho = 'Tamanho: 49.244 km';
        temperatura = 'Temperatura: -200°C';
        gravidade = 'Gravidade: 11.15 m/s²';
        imagem = 'https://img.freepik.com/fotos-premium/netuno-bela-arte-em-alta-resolucao-apresenta-o-planeta-do-sistema-solar_112293-247.jpg';
    }


    document.getElementById('nome').textContent = nome;
    document.getElementById('tamanho').textContent = tamanho;
    document.getElementById('temperatura').textContent = temperatura;
    document.getElementById('gravidade').textContent = gravidade;
    document.getElementById('imagem').src = imagem;
}