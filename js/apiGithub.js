const urlGithub = "https://api.github.com/users/carlosEduardovdeOliveira/repos";
const list = document.querySelector("[data-list-xp]");
const template = "";
async function githubApi() {
  const api = await fetch(urlGithub);
  const apiJson = await api.json();
  apiJson.forEach((project) => {
    list.innerHTML += `<li class="xp__item">
      <img class="xp__image" src="${getImageInProject(project)}" alt="">
      <div class="xp__description">
        <h3 class="xp__description__title">Decodificador de texto</h3>
        <p class="xp__description__paragraph">Challenge Alura
            Codificador</p>
        <div class="xp__description__buttons">
            <a class="btn btn--light" href="#">Repositório</a>
            <a class="btn btn--blue" href="#">Ver demo</a>
        </div>
      </div>
  </li>`;
  });
}
githubApi();

async function getImageInProject() {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/carlosEduardovdeOliveira/{descodificador-de-texto}/main/descodificador-de-texto/src/images/project.png`
    );
    const images = await response.blob();

    // Cria um URL local para a imagem
    var outside = URL.createObjectURL(images);

    // Agora você pode usar esse URL para exibir a imagem
    var img = document.createElement("img");
    img.src = outside;
    return img;
  } catch (e) {
    console.error(e);
  }
}

getImageInProject().then((img) => document.body.appendChild(img));
