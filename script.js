const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    const milisegundos = document.getElementById('milisegundos');
    const relogio = setInterval(function time(){
        let data = new Date();
        let hr = data.getHours();
        let min = data.getMinutes();
        let sec = data.getSeconds();
        let mili = data.getUTCMilliseconds();

        if( hr < 10){
            hr = '0' +hr;
        }
        if( min < 10){
            min = '0' +min;
        }
        if( sec < 10){
            sec = '0' +sec;
        }

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = sec;
        milisegundos.textContent = mili;
    });
    const input = document.getElementById('musicInput');
    const audio = document.getElementById('audio');

    input.addEventListener('click', () => {
        audio.play();
    });