const axios = require('axios');
const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para obter a entrada do usuário
function obterEntradaUsuario() {
  return new Promise((resolve) => {
    rl.question('Digite o nome do artista: ', (resposta) => {
      resolve(resposta);
      rl.close();
    });
  });
}

async function buscaInformacoesMusicaPorArtista() {
  try {
    // Obtém o nome do artista da entrada do usuário
    const artista = await obterEntradaUsuario();

    // Constrói a URL da API com o termo de pesquisa
    const apiUrl = `https://itunes.apple.com/search?entity=song&limit=1&term=${artista}`;

    // Faz a requisição à API usando async/await
    const response = await axios.get(apiUrl);

    // Verifica se há resultados na resposta
    if (response.data.resultCount > 0) {
      const resultado = response.data.results[0];

      // Exibe as informações no console
      console.log('Artista:', resultado.artistName);
      console.log('Música:', resultado.trackName);
      console.log('Álbum:', resultado.collectionName);
      console.log('Preço da Música:', resultado.trackPrice);
      console.log('Data de Lançamento:', resultado.releaseDate);
      console.log('Gênero:', resultado.primaryGenreName);
      console.log('URL de Prévia:', resultado.previewUrl);
    } else {
      console.log('Nenhum resultado encontrado para o artista:', artista);
    }
  } catch (error) {
    // Lida com erros, se houver algum
    console.error('Erro ao buscar informações:', error.message);
  }
}

// Chama a função principal
buscaInformacoesMusicaPorArtista();
