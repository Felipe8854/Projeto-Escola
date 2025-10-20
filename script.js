/* SCRIPT.JS: Lógica para alternar entre as seções e mudar as fotos da galeria. 
*/

// Mapeamento de todas as seções (elementos HTML)
const sections = {
  galeria: document.getElementById('galeria-section'),
  racismo: document.getElementById('info-section-2'),
  cultura: document.getElementById('info-section-3'),
  historico: document.getElementById('info-section-4'),
  consciencia: document.getElementById('info-section-5'),
  literatura: document.getElementById('info-section-6') 
};

// Mapeamento dos botões de navegação
const buttons = {
  galeria: document.getElementById('menu-galeria'),
  racismo: document.getElementById('menu-racismo'),
  cultura: document.getElementById('menu-cultura'),
  historico: document.getElementById('menu-historico'),
  consciencia: document.getElementById('menu-consciencia'),
  literatura: document.getElementById('menu-literatura')
};

/**
 * Esconde todas as seções de conteúdo.
 */
function hideAllSections() {
  for (const key in sections) {
    sections[key].classList.add('hidden');
  }
}

/**
 * Remove o estado 'active' de todos os botões de navegação.
 */
function deactivateAllButtons() {
  for (const key in buttons) {
    buttons[key].classList.remove('active');
  }
}

/**
 * Mostra a seção desejada e ativa o botão correspondente.
 * @param {string} sectionName - O nome da seção a ser exibida (ex: 'galeria').
 */
function showSection(sectionName) {
  hideAllSections();
  deactivateAllButtons();
  sections[sectionName].classList.remove('hidden');
  buttons[sectionName].classList.add('active');
}

// Inicialização: Atribuição de eventos de clique aos botões
buttons.galeria.addEventListener('click', () => showSection('galeria'));
buttons.racismo.addEventListener('click', () => showSection('racismo'));
buttons.cultura.addEventListener('click', () => showSection('cultura'));
buttons.historico.addEventListener('click', () => showSection('historico'));
buttons.consciencia.addEventListener('click', () => showSection('consciencia'));
buttons.literatura.addEventListener('click', () => showSection('literatura'));


// --- Lógica da Galeria de Fotos ---

/**
 * Função global chamada ao clicar em uma miniatura (thumb).
 * Troca a imagem principal e sua descrição.
 * * @param {HTMLElement} element - O elemento miniatura clicado.
 * @param {string} photoSrc - O novo caminho da imagem principal.
 * @param {string} description - A nova descrição da foto.
 */
function changePhoto(element, photoSrc, description) {
  // 1. Trocar foto principal
  const mainPhoto = document.getElementById('main-photo');
  mainPhoto.src = photoSrc;
  
  // 2. Trocar descrição da foto
  const photoDesc = document.getElementById('photo-description');
  photoDesc.textContent = description;
  
  // 3. Atualizar o estado 'ativo' da miniatura
  document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
  element.classList.add('active');
}

// Torna a função changePhoto acessível no escopo global para o 'onclick' no HTML
window.changePhoto = changePhoto;