function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado.... Você precisa digitar o nome de um atleta ou esporte.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank" rel="external">
                            ${dado.titulo}
                        </a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                    <a href=${dado.link}" target="_blank" rel="external">
                        Mais informações
                    </a>
                </div>
            `;
        }
        console.log(dado.titulo.includes(campoPesquisa));
        // Constrói o HTML para cada item de resultado, formatando os dados dinamicamente
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</<p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}