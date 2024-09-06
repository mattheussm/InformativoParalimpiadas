function buscar() {

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  // 1. Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Loga o elemento HTML para fins de depuração
  if (!campoPesquisa){ 
        section.innerHTML = "<p>Campo busca está vazio, refaça a busca</p>"
      return
  }
  campoPesquisa = campoPesquisa.toLowerCase()
  // 2. Inicializa uma string vazia para armazenar os resultados formatados
  // 3. Também foram adicionadas mais duas variáveis para poder manipular a busca para lower case
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // 4. Itera sobre cada objeto 'dado' em um array (assumindo que 'dados' exista)
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase(); // 5. transformando tudo da busca em letra minúscula
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // 6. se o titulo estiver no campoPesquisa, entao faça
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // 7. Concatena uma nova div com as informações do dado atual à string 'resultados'
      resultados += `
                <div class="item-resultado">
              <h2>
            <a href="${dado.comite}" target="_blank">${dado.titulo}</a>
              </h2>
          <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Quadro de medalhas</a>
                </div>
      `;
    }
  }
      if(!resultados){ 
            resultados = "<p>Nada encontrado, refaça a busca</p>"
      }
  // 8. Atribui o conteúdo da string 'resultados' ao HTML interno da seção
  section.innerHTML = resultados;
}

