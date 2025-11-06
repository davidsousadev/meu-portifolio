function loadHTML(filename, elementId) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o arquivo HTML:', error));
    }
    loadHTML('home.html', 'home');
    loadHTML('sobre.html', 'sobre');
    loadHTML('portfolio.html', 'portfolio');
    loadHTML('footer.html', 'footer');

export { loadHTML };