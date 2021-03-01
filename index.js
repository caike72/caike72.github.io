//About
const about = `<div class="info"> 
<p>
  Olá, Bem-vindo! Meu nome é Caike Laurentino, tenho 22 anos de idade e sou um estudante de front-end da cidade de Teixeira de Freitas no estado da Bahia.
</p>
<p>
  Atualmente estudo Letras em Língua Inglesa na Universidade do Estado da Bahia (UNEB), mas programação sempre me chamou a atenção. Por isso, neste contexto de pandemia, procurei aprender algo novo, já que minhas aulas estavam paralizadas. Sendo assim, decidi estudar desenvolvimento web.
</p>
<p>
  Sou aficionado por música e video games. Um dos meus momentos favoritos é ouvir musica enquando programo. É bem relaxante e o tempo passa muito rápido.
</p>
<p>
  Já domino decentemente o HTML e o CSS, por isso, estou colocando meus esforços para me tornar um programador JavaScript, que é uma linguagem muito utilizada nos dias atuais. 
</p>

<center><img class="doggo" src="/img/DoogieDoodle.svg" alt="hero image"></center>
</div>`

window.onload = function loadAbout() {
  document.getElementById('title').innerHTML = `About me`
  document.getElementById('cards').innerHTML = about
}

document.getElementById('aboutme').onclick = function loadAbout() {
  document.getElementById('title').innerHTML = `About me`
  document.getElementById('cards').innerHTML = about
}

class project {
  constructor(title, link, description, linkDemo) {
    this.title = title
    this.link = link
    this.description = description
    this.linkDemo = linkDemo
  }
}

//new projects 
let projectsList = Array()
projectsList.push(new project('IPA Training', 'https://github.com/caike72/ipa-app', 'Projeto criado com o intuito de ajudar na memorização das classificações dos fonemas da Língua Inglesa com o auxilio do International Phonetic Alphabet (IPA). Utilizei os conhecimentos dos temas da faculdade e as coisas que tenho estudado em JavaScript.', 'http://ipatraining.netlify.app'))
projectsList.push(new project('PokéCotação', 'https://github.com/caike72/pokecotacao', 'Projeto criado para fins de estudo de APIs. Utilizando a PokeAPI e a Open Exchange Rates API, busquei criar uma aplicação simples que muda o pokémon a cada mudança na cotação do Dólar em relação ao Real.', 'https://pokecotacao.netlify.app'))
projectsList.push(new project('To do List', 'https://github.com/caike72/todo-list', 'Projeto criado para estudo do Angular.', 'https://caike-todo.netlify.app'))
projectsList.push(new project('União Brasileira de Regiões', 'https://github.com/caike72/ubr', 'Freelance feito para uma comunidade de RPG de geopolítica.', 'http://ubr.world'))

document.getElementById('projects').onclick = function loadProjects() {
  document.getElementById('title').innerHTML = `Projects`
  document.getElementById('cards').innerHTML = `
  <div class="card">
    <div class="card-info">
      <h2><a href="${projectsList[0].link}" target="_blank">${projectsList[0].title}</a></h2>
      <p>${projectsList[0].description}</p>
      <a href="${projectsList[0].linkDemo}" target="_blank" class="demo">>> DEMO</a> <span class="technologies">JavaScript</span> <span class="technologies">HTML</span> <span class="technologies">CSS</span>  
    </div>
  </div>

  <div class="card">
    <div class="card-info">
      <h2><a href="${projectsList[1].link}" target="_blank">${projectsList[1].title}</a></h2>
      <p>${projectsList[1].description}</p>
      <a href="${projectsList[1].linkDemo}" target="_blank" class="demo">>> DEMO</a> <span class="technologies">JavaScript</span> <span class="technologies">HTML</span> <span class="technologies">SASS</span> <span class="technologies">APIs</span>
    </div>
  </div>

  <div class="card">
    <div class="card-info">
      <h2><a href="${projectsList[2].link}" target="_blank">${projectsList[2].title}</a></h2>
      <p>${projectsList[2].description}</p>
      <a href="${projectsList[2].linkDemo}" target="_blank" class="demo">>> DEMO</a> <span class="technologies">Angular</span> <span class="technologies">HTML</span> <span class="technologies">CSS</span>
    </div>
  </div>

  <div class="card">
    <div class="card-info">
      <h2><a href="${projectsList[3].link}" target="_blank">${projectsList[3].title}</a></h2>
      <p>${projectsList[3].description}</p>
      <a href="${projectsList[3].linkDemo}" target="_blank" class="demo">>> DEMO</a> <span class="technologies">JavaScript</span> <span class="technologies">HTML</span> <span class="technologies">SASS</span>
    </div>
  </div>

`
}
//What I can do
document.getElementById('whaticando').onclick = function loadWhatIcanDo() {
  document.getElementById('title').innerHTML = `What I can do`
  document.getElementById('cards').innerHTML = `<div class="info"> 
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe rerum tempore odit animi molestias officia cum ipsa quam quidem totam facilis deserunt repellat et quasi aspernatur dolore nobis error quae, ut accusamus in fugiat. Suscipit odio officia excepturi velit iusto.
  </p>
  <p>
    Sapiente quis repellat tenetur labore eligendi doloremque adipisci sequi voluptatem illum praesentium repudiandae, ratione nihil expedita facilis modi, quia repellendus vitae magni dolorum aut recusandae totam a placeat at. Non nisi fuga cum exercitationem eum iusto corrupti molestias officiis minima inventore? Dolor quas alias in totam quos corrupti, at numquam quis natus temporibus necessitatibus facere quidem ipsum recusandae illo, sunt, itaque accusantium suscipit nam saepe ducimus aliquam voluptate tempore. 
  </p>
  <p>
    Quis, quae a! Provident amet doloremque nobis repellat corrupti! Explicabo sed sint, modi magni facilis, voluptatem unde quibusdam, vel a omnis reiciendis numquam. Nemo, culpa quaerat. Expedita aliquid reprehenderit amet nemo laudantium ea sunt dolorem accusantium incidunt enim, necessitatibus nulla eaque molestias quod mollitia perferendis fugiat veritatis dolor rerum eius corporis in soluta, distinctio odio? Reprehenderit recusandae exercitationem, possimus neque veritatis praesentium repellendus aspernatur cumque. Consectetur ipsa aspernatur nulla. Quidem officiis mollitia cumque doloribus, dicta officia quod consequuntur provident. Voluptatibus vel molestias officia iusto ipsum assumenda vitae accusamus cupiditate esse.
    </p></div>`
}

//What I can do
document.getElementById('whatiamlearning').onclick = function loadWhatIamLearning() {
  document.getElementById('title').innerHTML = `What I am learning`
  document.getElementById('cards').innerHTML = `<div class="info"> 
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe rerum tempore odit animi molestias officia cum ipsa quam quidem totam facilis deserunt repellat et quasi aspernatur dolore nobis error quae, ut accusamus in fugiat. Suscipit odio officia excepturi velit iusto.
  </p>
  <p>
    Sapiente quis repellat tenetur labore eligendi doloremque adipisci sequi voluptatem illum praesentium repudiandae, ratione nihil expedita facilis modi, quia repellendus vitae magni dolorum aut recusandae totam a placeat at. Non nisi fuga cum exercitationem eum iusto corrupti molestias officiis minima inventore? Dolor quas alias in totam quos corrupti, at numquam quis natus temporibus necessitatibus facere quidem ipsum recusandae illo, sunt, itaque accusantium suscipit nam saepe ducimus aliquam voluptate tempore. 
  </p>
  <p>
    Quis, quae a! Provident amet doloremque nobis repellat corrupti! Explicabo sed sint, modi magni facilis, voluptatem unde quibusdam, vel a omnis reiciendis numquam. Nemo, culpa quaerat. Expedita aliquid reprehenderit amet nemo laudantium ea sunt dolorem accusantium incidunt enim, necessitatibus nulla eaque molestias quod mollitia perferendis fugiat veritatis dolor rerum eius corporis in soluta, distinctio odio? Reprehenderit recusandae exercitationem, possimus neque veritatis praesentium repellendus aspernatur cumque. Consectetur ipsa aspernatur nulla. Quidem officiis mollitia cumque doloribus, dicta officia quod consequuntur provident. Voluptatibus vel molestias officia iusto ipsum assumenda vitae accusamus cupiditate esse.
    </p></div>`
}