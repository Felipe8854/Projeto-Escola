// Função para trocar a foto principal da galeria
function changePhoto(element, newSrc, description) {
  const mainPhoto = document.getElementById('main-photo');
  const photoDescription = document.getElementById('photo-description');

  mainPhoto.src = newSrc;
  mainPhoto.alt = description;
  photoDescription.textContent = description;

  // Atualiza a classe active das miniaturas
  const thumbs = document.querySelectorAll('.gallery img.thumb');
  thumbs.forEach(thumb => thumb.classList.remove('active'));
  element.classList.add('active');
}

// Função para controlar a visibilidade das seções de conteúdo
function showSection(sectionId) {
  const sections = [
    'galeria-section',
    'info-section-2',
    'info-section-3',
    'info-section-4',
    'info-section-5',
    'info-section-6'
  ];

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (id === sectionId) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });

  // Atualiza o botão ativo
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(button => {
    if (button.id === `menu-${sectionId.split('-')[2] || 'galeria'}`) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Configura os eventos dos botões ao carregar a página
window.onload = function () {
  document.getElementById('menu-galeria').onclick = () => showSection('galeria-section');
  document.getElementById('menu-racismo').onclick = () => showSection('info-section-2');
  document.getElementById('menu-cultura').onclick = () => showSection('info-section-3');
  document.getElementById('menu-historico').onclick = () => showSection('info-section-4');
  document.getElementById('menu-consciencia').onclick = () => showSection('info-section-5');
  document.getElementById('menu-literatura').onclick = () => showSection('info-section-6');
};
