// Botões do menu
const buttons = {
  galeria: document.getElementById('galeria'),
  racismo: document.getElementById('racismo'),
  cultura: document.getElementById('cultura'),
  historico: document.getElementById('historico'),
  consciencia: document.getElementById('consciencia'),
  literatura: document.getElementById('literatura'),
};

// Seções correspondentes
const sections = {
  galeria: document.getElementById('galeria-section'),
  racismo: document.getElementById('racismo-section'),
  cultura: document.getElementById('cultura-section'),
  historico: document.getElementById('historico-section'),
  consciencia: document.getElementById('consciencia-section'),
  literatura: document.getElementById('literatura-section'),
};

// Função para mostrar seção correta e esconder as outras
function showSection(sectionId) {
  Object.keys(sections).forEach(key => {
    sections[key].style.display = key === sectionId ? 'block' : 'none';
  });

  // Atualizar botão ativo
  Object.keys(buttons).forEach(key => {
    buttons[key].classList.toggle('active', key === sectionId);
  });
}

// Adicionar evento click para cada botão
Object.keys(buttons).forEach(key => {
  buttons[key].addEventListener('click', () => showSection(key));
});

// Trocar a imagem principal na galeria ao clicar na miniatura
document.querySelectorAll('.thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    document.getElementById('main-photo').src = thumb.src;
  });
});
