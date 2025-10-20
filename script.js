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

function changeSection(sectionId) {
  // Oculta todas as seções
  for (const section in sections) {
    sections[section].classList.add('hidden');
  }
  // Exibe a seção selecionada
  sections[sectionId].classList.remove('hidden');
}

function changePhoto(imgElement, photoUrl, description) {
  // Atualiza a foto principal
  const mainPhoto = document.getElementById('main-photo');
  const photoDescription = document.getElementById('photo-description');
  
  mainPhoto.src = photoUrl;
  photoDescription.textContent = description;

  // Ativa a foto clicada
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach(thumb => thumb.classList.remove('active'));
  imgElement.classList.add('active');
}

// Lógica para os botões de navegação
buttons.galeria.addEventListener('click', () => changeSection('galeria'));
buttons.racismo.addEventListener('click', () => changeSection('racismo'));
buttons.cultura.addEventListener('click', () => changeSection('cultura'));
buttons.historico.addEventListener('click', () => changeSection('historico'));
buttons.consciencia.addEventListener('click', () => changeSection('consciencia'));
buttons.literatura.addEventListener('click', () => changeSection('literatura'));

