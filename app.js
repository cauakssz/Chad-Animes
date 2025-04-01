function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value 

    if (campoPesquisa == ""){
        section.innerHTML = "<span class='mensagem-pesquisa'>Digite algo para pesquisar.</span>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
    
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let autor = "";
    let genero = "";
    let tags = "";

    for (let dado of dados) {
        //converte os dados para minusculo
        titulo = dado.titulo.toLowerCase();
        descrição = dado.descrição.toLowerCase();
        autor = dado.autor.toLowerCase();
        genero = dado.genero.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || autor.includes(campoPesquisa) || genero.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            //cria um novo elemento 
            resultados += ` 
        <div class="item-resultado">
                  <h2>
                     <a href="#" target="_blank">${dado.titulo}
                        </a>
                  </h2>
                  <p class="descricao-meta">${dado.descrição} </p>
                  <a href=${dado.link} target="_blank">Mais informações sobre a obra. </a>
              </div>
        `; 
        }
              
    }

//se não encontrar nada, mostra mensagem
    if (!resultados){
        resultados = "<p class='mensagem-nenhum-resultado'>Nenhum resultado encontrado.</p>";
    }
    
    section.innerHTML = resultados;
}
