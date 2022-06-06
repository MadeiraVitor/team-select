const times = document.querySelectorAll('.time');

times.forEach(time => {
    time.addEventListener('mouseenter', () => {
        const idSelecionado = time.attributes.id.value;
        if(idSelecionado === 'chelsea') return;

        const timeSelecionado = document.querySelector('.selecionado');
        timeSelecionado.classList.remove('selecionado');

        time.classList.add('selecionado');

        const imagemJogador1 = document.getElementById('player-jogador-1');
        imagemJogador1.src = `src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = time.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
    })
})