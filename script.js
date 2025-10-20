// Função para mudar a foto principal e a descrição com base na miniatura clicada
function changePhoto(element, photoSrc, description) {
  const mainPhoto = document.getElementById('main-photo');
  const photoDescription = document.getElementById('photo-description');

  // Atualiza a imagem principal
  mainPhoto.src = photoSrc;
  mainPhoto.alt = description;

  // Atualiza o texto da descrição
  photoDescription.textContent = description;

  // Remove a classe 'active' de todas as miniaturas
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach(thumb => thumb.classList.remove('active'));

  // Adiciona a classe 'active' na miniatura clicada
  element.classList.add('active');
}

// Gerenciamento das seções e do menu
document.addEventListener('DOMContentLoaded', () => {
  const menuButtons = document.querySelectorAll('nav button');
  const sections = {
    galeria: document.getElementById('galeria-section'),
    racismo: document.getElementById('info-section-2'),
    cultura: document.getElementById('info-section-3'),
    historico: document.getElementById('info-section-4'),
    consciencia: document.getElementById('info-section-5'),
    literatura: document.getElementById('info-section-6')
  };

  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' de todos os botões
      menuButtons.forEach(btn => btn.classList.remove('active'));
      // Adiciona 'active' no botão clicado
      button.classList.add('active');

      // Esconde todas as seções
      Object.values(sections).forEach(section => section.classList.add('hidden'));

      // Mostra a seção correspondente
      switch (button.id) {
        case 'menu-galeria':
          sections.galeria.classList.remove('hidden');
          break;
        case 'menu-racismo':
          sections.racismo.classList.remove('hidden');
          break;
        case 'menu-cultura':
          sections.cultura.classList.remove('hidden');
          break;
        case 'menu-historico':
          sections.historico.classList.remove('hidden');
          break;
        case 'menu-consciencia':
          sections.consciencia.classList.remove('hidden');
          break;
        case 'menu-literatura':
          sections.literatura.classList.remove('hidden');
          break;
      }
    });
  });
});
