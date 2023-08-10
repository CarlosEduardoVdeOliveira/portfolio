const urlGithub = "https://api.github.com/users/carlosEduardovdeOliveira/repos";
const list = document.querySelector("[data-list-xp]");
let template = "";
async function githubApi() {
  const api = await fetch(urlGithub);
  const apiJson = await api.json();
  for (const project of apiJson) {
    const imageURL = await getImageInProject(project.name);
    if (imageURL !== undefined) {
      template += `<li class="xp__item">
        <img class="xp__image" src="${imageURL}" alt="">
        <div class="xp__description">
          <h3 class="xp__description__title">${project.name}</h3>
          <p class="xp__description__paragraph">${project.description}</p>
          <div class="xp__description__buttons">
              <a class="btn btn--light" target="_blank" href=${project.html_url}>Repositório</a>
              <a class="btn btn--blue" href="#">Ver demo</a>
          </div>
        </div>
    </li>`;
    }
    list.innerHTML = template;
  }
}
githubApi();
async function getImageInProject(project) {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/CarlosEduardoVdeOliveira/${project}/main/assets
/images/project.png`
    );
    if (!response.ok) {
      throw new Error("Image not found");
    }
    const images = await response.blob();

    // Cria um URL local para a imagem
    return URL.createObjectURL(images);
  } catch (e) {
    console.log(e);
  }
}
