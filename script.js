// Função para trocar a imagem principal da galeria
function changePhoto(element, newSrc, newDescription) {
  const mainPhoto = document.getElementById("main-photo");
  const description = document.getElementById("photo-description");
  const thumbnails = document.querySelectorAll(".thumb");

  // Troca a imagem principal
  mainPhoto.src = newSrc;
  description.textContent = newDescription;

  // Remove classe 'active' de todas as miniaturas
  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  // Adiciona classe 'active' à miniatura clicada
  element.classList.add("active");
}

// Mapeia botões do menu e seções
const sections = {
  "menu-galeria": "galeria-section",
  "menu-racismo": "info-section-2",
  "menu-cultura": "info-section-3",
  "menu-historico": "info-section-4",
  "menu-consciencia": "info-section-5",
  "menu-literatura": "info-section-6",
};

// Adiciona eventos de clique a cada botão do menu
Object.keys(sections).forEach((menuId) => {
  const button = document.getElementById(menuId);
  const sectionId = sections[menuId];

  button.addEventListener("click", () => {
    // Oculta todas as seções
    Object.values(sections).forEach((secId) => {
      document.getElementById(secId).classList.add("hidden");
    });

    // Remove a classe 'active' de todos os botões
    Object.keys(sections).forEach((id) => {
      document.getElementById(id).classList.remove("active");
    });

    // Exibe a seção correspondente ao botão clicado
    document.getElementById(sectionId).classList.remove("hidden");

    // Marca o botão clicado como ativo
    button.classList.add("active");
  });
});
