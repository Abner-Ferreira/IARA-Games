const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

async function listarJogos() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://www.freetogame.com/api/games';

  try {
    const response = await fetch(proxyUrl + apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    let divJogos = document.querySelector('.jogos')

    const jogos = await response.json();


    for (let i = 0; i < jogos.length; i++) {
      divJogos.innerHTML += `
      <div class="jogo" id=${jogos[i].id}>
            <img
              src=${jogos[i].thumbnail}
              alt="Capa do jogo ${jogos[i].title}"
              class="img-jogo"
            />
            <div class="infos-jogos">
              <h1 class="titulo">${jogos[i].title}</h1>
              <div class="detalhes">
                <span>${jogos[i].genre}</span>
                <span>${jogos[i].release_date}</span>
              </div>
              <p class="descricao-jogo">
              ${jogos[i].short_description}
              </p>
              <a
                href=${jogos[i].game_url}
                class="link-jogo"
                target="_blank"
                >Saiba mais</a
              >
            </div>
      `
    }

  } catch (error) {
    console.error('Erro ao listar jogos:', error);
  }
}

listarJogos()


const jsonDados = [
  { //lista de dados - SEMPRE CONSTANTE
    "id": "#6548",
    "jogo": "Call of Duty",
    "data": "12/12/2023",
    "preco": "R$220,00",
    "metodo": "Crédito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Battlefield",
    "data": "12/11/2023",
    "preco": "R$220,00",
    "metodo": "Débito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Mario Bros",
    "data": "11/11/2023",
    "preco": "R$220,00",
    "metodo": "Crédito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Overcooked ",
    "data": "09/11/2023",
    "preco": "R$220,00",
    "metodo": "Débito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Roblox",
    "data": "09/11/2023",
    "preco": "R$220,00",
    "metodo": "Crédito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Overwatch",
    "data": "09/11/2023",
    "preco": "R$227,00",
    "metodo": "Crédito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "GTA",
    "data": "09/11/2023",
    "preco": "R$222,00",
    "metodo": "Débito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Rust",
    "data": "09/11/2023",
    "preco": "R$210,00",
    "metodo": "Crédito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Halo",
    "data": "09/11/2023",
    "preco": "R$210,00",
    "metodo": "Crédito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Batman",
    "data": "09/11/2023",
    "preco": "R$190,00",
    "metodo": "Débito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Lego Batman",
    "data": "09/11/2023",
    "preco": "R$190,00",
    "metodo": "Débito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Fallout",
    "data": "09/11/2023",
    "preco": "R$190,00",
    "metodo": "Débito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Assassin's Creed",
    "data": "09/11/2023",
    "preco": "R$190,00",
    "metodo": "Débito",
    "status": "Concluído"
  },

  {
    "id": "#6548",
    "jogo": "Forza Horizon",
    "data": "09/11/2023",
    "preco": "R$190,00",
    "metodo": "Dédito",
    "status": "Concluído"
  },

]

document.addEventListener("DOMContentLoaded", () => {
  let table = document.querySelector(".table-bg")

  let tbody = table.querySelector("tbody")

  for (let i = 0; i < jsonDados.length; i++) {

    tbody.innerHTML += `
      <tr class="white">
        <th scope="row" class="text-amarelo">${jsonDados[i].id}</th>
        <td>${jsonDados[i].jogo}</td>
        <td>${jsonDados[i].data}</td>
        <td>${jsonDados[i].preco}</td>
        <td>${jsonDados[i].metodo}</td>
        <td class="status">
              <p class="status-bg">${jsonDados[i].status}</p>
        </td>
      </tr>
      `
    ""
    ''
  }
})
