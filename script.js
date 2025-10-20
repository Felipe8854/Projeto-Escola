// Função para trocar a foto principal e descrição
function changePhoto(element, src, description) {
  const mainPhoto = document.getElementById('main-photo');
  const photoDescription = document.getElementById('photo-description');

  mainPhoto.src = src;
  photoDescription.textContent = description;

  // Remove a classe active de todas as miniaturas
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.classList.remove('active');
  });
  // Adiciona a classe active na miniatura clicada
  element.classList.add('active');
}

// Gerencia exibição das seções e troca de botão ativo no menu
const buttons = document.querySelectorAll('nav button');
const sections = {
  'menu-galeria': document.getElementById('galeria-section'),
  'menu-racismo': document.getElementById('info-section-2'),
  'menu-cultura': document.getElementById('info-section-3'),
  'menu-historico': document.getElementById('info-section-4'),
  'menu-consciencia': document.getElementById('info-section-5'),
  'menu-literatura': document.getElementById('info-section-6')
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove classe active de todos os botões
    buttons.forEach(btn => btn.classList.remove('active'));
    // Adiciona active ao botão clicado
    button.classList.add('active');

    // Esconde todas as seções
    Object.values(sections).forEach(section => {
      section.classList.add('hidden');
    });
    // Mostra a seção selecionada
    sections[button.id].classList.remove('hidden');
  });
});
