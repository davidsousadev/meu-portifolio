const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Habilita o CORS
app.use(cors());
app.use(express.static('public'));

app.get('/buscarInformacoes/:artista', async (req, res) => {
  try {
    const artista = req.params.artista;
    const apiUrl = `https://itunes.apple.com/search?entity=song&limit=1&term=${artista}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informações' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
