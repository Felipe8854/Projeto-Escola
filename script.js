// Mapeamento das seções e botões
const sections = {
    galeria: document.getElementById('galeria-section'),
    racismo: document.getElementById('info-section-2'),
    cultura: document.getElementById('info-section-3'),
    historico: document.getElementById('info-section-4'),
    consciencia: document.getElementById('info-section-5'),
    literatura: document.getElementById('info-section-6') 
};

const buttons = {
    galeria: document.getElementById('menu-galeria'),
    racismo: document.getElementById('menu-racismo'),
    cultura: document.getElementById('menu-cultura'),
    historico: document.getElementById('menu-historico'),
    consciencia: document.getElementById('menu-consciencia'),
    literatura: document.getElementById('menu-literatura')
};

// Elementos da Galeria
const mainPhoto = document.getElementById('main-photo');
const photoDesc = document.getElementById('photo-description');
const thumbs = document.querySelectorAll('.thumb');

// Funções de Controle de Navegação
function hideAllSections() {
    for (const key in sections) {
        sections[key].classList.add('hidden');
    }
}

function deactivateAllButtons() {
    for (const key in buttons) {
        buttons[key].classList.remove('active');
    }
}

function showSection(sectionName) {
    hideAllSections();
    deactivateAllButtons();
    sections[sectionName].classList.remove('hidden');
    buttons[sectionName].classList.add('active');
}

// Event Listeners para os botões de navegação
buttons.galeria.addEventListener('click', () => showSection('galeria'));
buttons.racismo.addEventListener('click', () => showSection('racismo'));
buttons.cultura.addEventListener('click', () => showSection('cultura'));
buttons.historico.addEventListener('click', () => showSection('historico'));
buttons.consciencia.addEventListener('click', () => showSection('consciencia'));
buttons.literatura.addEventListener('click', () => showSection('literatura'));


// Função para mudar a foto principal e descrição
function changePhoto(element) {
    const photoSrc = element.getAttribute('data-src');
    const description = element.getAttribute('data-desc');

    // Trocar foto principal
    mainPhoto.src = photoSrc;
    // Trocar descrição da foto
    photoDesc.textContent = description;
    
    // Atualizar thumb ativo
    thumbs.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

// Event Listeners para as miniaturas da galeria
thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
        changePhoto(this);
    });
    // Remove o atributo onclick do HTML para usar o Event Listener do JS
    thumb.removeAttribute('onclick'); 
});

// Inicialização: Garante que a seção inicial esteja visível (já é feito pelo HTML, mas bom para garantir)
document.addEventListener('DOMContentLoaded', () => {
    showSection('galeria');
});