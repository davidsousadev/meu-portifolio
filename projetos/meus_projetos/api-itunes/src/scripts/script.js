function buscarMusica() {
    var termoDePesquisa = document.getElementById("searchTerm").value;
    var url = `https://itunes.apple.com/search?entity=song&limit=1&term=${termoDePesquisa}&callback=processarResposta`;
   window.processarResposta = function(resposta) {
        if (resposta.results.length > 0) {
            var musica = resposta.results[0];
            var resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = `
                <h2>${musica.trackName}</h2>
                <p>Artista: ${musica.artistName}</p>
                <p>Álbum: ${musica.collectionName}</p>
                <img src="${musica.artworkUrl100}" alt="Capa do Álbum">
                <br />
                <audio controls>
                    <source src="${musica.previewUrl}" type="audio/mp4">
                        Seu navegador não suporta a tag de áudio.
                    </audio>
                <br />
                `;
            } else {
               document.getElementById("resultado").innerHTML = "Nenhuma música encontrada.";
            }
        };
        var script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
    }
