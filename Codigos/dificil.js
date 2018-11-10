var Australia = 0, Brasil = 0, Camboja = 0, Canada = 0, EUA = 0, Hungria = 0, Jordania = 0, Russia = 0;
var contadorTotal = 0;
var numAnt = -1;

window.onload = function(){
    document.getElementById('telaInicio').addEventListener('click', (e) => {
        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaInicio'){
            document.getElementById('telaInicio').classList.remove('mostrar');
        }
    });
    mistura();
}

function mistura(){
    if(Australia == -1 && Brasil == -1 && Camboja == -1 && Canada == -1 && EUA == -1 && Hungria == -1 && Jordania == -1 && Russia == -1){
        document.getElementById('modalGanhou').classList.add('mostrar');
    }
    for(let i = 0; i < 64; i++){
        let num = aleatorio();
        while(verificaAleatorio(num) == 0){
            num = aleatorio();
        }
        switch(num){
            case 0:
                document.getElementById(i).src = `Imagens/Dificil/Australia/${i}.jpg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 1:
                document.getElementById(i).src = `Imagens/Dificil/Brasil/${i}.jpg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 2:
                document.getElementById(i).src = `Imagens/Dificil/Camboja/${i}.jpg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 3:
                document.getElementById(i).src = `Imagens/Dificil/Canada/${i}.jpg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 4:
                document.getElementById(i).src = `Imagens/Dificil/EUA/${i}.jpg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 5:
                document.getElementById(i).src = `Imagens/Dificil/Hungria/${i}.jpg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 6:
                document.getElementById(i).src = `Imagens/Dificil/Jordania/${i}.jpg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 7:
                document.getElementById(i).src = `Imagens/Dificil/Russia/${i}.jpg`;
                document.getElementById(i).alt = `${num}`;
                break;
        }
    }
}

function mudar(num, image) {

    if(contadorTotal != 8){
        while(verificaAleatorio(num) == 0 || (num == document.getElementById(image).alt && contadorTotal != 7)){
            num = aleatorio();
        }

        console.log(`Numero recebido do aleatorio == ${num}`);

        switch(num){
            case 0:
                document.getElementById(image).src = `Imagens/Dificil/Australia/${image}.jpg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 1:
                document.getElementById(image).src = `Imagens/Dificil/Brasil/${image}.jpg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 2:
                document.getElementById(image).src = `Imagens/Dificil/Camboja/${image}.jpg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 3:
                document.getElementById(image).src = `Imagens/Dificil/Canada/${image}.jpg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 4:
                document.getElementById(image).src = `Imagens/Dificil/EUA/${image}.jpg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 5:
                document.getElementById(image).src = `Imagens/Dificil/Hungria/${image}.jpg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 6:
                document.getElementById(image).src = `Imagens/Dificil/Jordania/${image}.jpg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 7:
                document.getElementById(image).src = `Imagens/Dificil/Russia/${image}.jpg`;
                document.getElementById(image).alt = `${num}`;
            break;
        }
    }
    if(!(Australia == -1 && Brasil == -1 && Camboja == -1 && Canada == -1 && EUA == -1 && Hungria == -1 && Jordania == -1 && Russia == -1))
        verificaGanhou();
}

function verificaGanhou(){
    var cont = 0, aux = document.getElementById('0').alt;

    for(let i = 0; i < 64; i++){
        if(document.getElementById(`${i}`).alt == aux){
            cont++;
        }
    }

    console.log(`Verificando se ganhou!`);

    if(cont == 64){
        switch(aux){
            case '0':
                Australia = -1;
                acertouImagem(aux);
                if(contadorTotal < 8)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '1':
                Brasil = -1;
                acertouImagem(aux);
                if(contadorTotal < 8)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '2':
                Camboja = -1;
                acertouImagem(aux);
                if(contadorTotal < 8)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '3':
                Canada = -1;
                acertouImagem(aux);
                if(contadorTotal < 8)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '4':
                EUA = -1;
                acertouImagem(aux);
                if(contadorTotal < 8)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '5':
                Hungria = -1;
                acertouImagem(aux);
                if(contadorTotal < 8)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '6':
                Jordania = -1;
                acertouImagem(aux);
                if(contadorTotal < 8)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '7':
                Russia = -1;
                acertouImagem(aux);
                if(contadorTotal < 8)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
        }
    }
}

function verificaAleatorio(num){

    let valido;

    switch(num){
        case 0:
            if(Australia == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 1:
            if(Brasil == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 2:
            if(Camboja == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 3:
            if(Canada == -1)
                valido = 0
            else
                valido = 1;            
            break;
        case 4:
            if(EUA == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 5:
            if(Hungria == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 6:
            if(Jordania == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 7:
            if(Russia == -1)
                valido = 0
            else
                valido = 1;
            break;
    }
    return valido;
}

function aleatorio (){
    let num = Math.floor(Math.random() * 8);

    while(num == numAnt){
        num = Math.floor(Math.random() * 8);
    }

    numAnt = num;
    return num;
}

function acertouImagem(acertou){

    var modal;
    let  cont = 0;

    switch(acertou){
        case '0':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Dificil/Australia/Australia.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Dica difícil 1";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Dica difícil 2";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Dica difícil 3";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Dica difícil 4";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'australia'){
                        document.getElementById('decisao').src = 'Imagens/ok.png';
                        document.getElementById('texto').innerHTML = 'Parabéns!! Você acertou!!';
                    }
                    else{
                        document.getElementById('decisao').src = 'Imagens/wrong.png';
                        document.getElementById('texto').innerHTML = 'Que pena, você Errou!!';
                    }
                    document.getElementById('telaCertoErrado').classList.add('mostrar');
                    document.getElementById('telaCertoErrado').addEventListener('click', (e) => {
                        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaCertoErrado'){
                            document.getElementById('telaCertoErrado').classList.remove('mostrar');
                            document.getElementById('submit').value = "";
                        }
                    });
                    for(let i = 0; i < 4; i++){
                        document.getElementById(`dica${i+1}`).innerHTML = " ";
                    }
                    cont = 0;
                    if(contadorTotal == 8 && (Australia == 0 || Brasil == 0 || Camboja == 0 || Canada == 0 || EUA == 0 || Hungria == 0 || Jordania == 0 || Russia == 0))
                        mudar(null,null);
                    if(contadorTotal < 8){
                        mistura();
                    }
                }
            });
        break;
        case '1':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Dificil/Brasil/Brasil.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Dica difícil 1";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Dica difícil 2";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Dica difícil 3";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Dica difícil 4";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'brasil'){
                        document.getElementById('decisao').src = 'Imagens/ok.png';
                        document.getElementById('texto').innerHTML = 'Parabéns!! Você acertou!!';
                    }
                    else{
                        document.getElementById('decisao').src = 'Imagens/wrong.png';
                        document.getElementById('texto').innerHTML = 'Que pena, você Errou!!';
                    }
                    document.getElementById('telaCertoErrado').classList.add('mostrar');
                    document.getElementById('telaCertoErrado').addEventListener('click', (e) => {
                        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaCertoErrado'){
                            document.getElementById('telaCertoErrado').classList.remove('mostrar');
                            document.getElementById('submit').value = "";
                        }
                    });
                    for(let i = 0; i < 4; i++){
                        document.getElementById(`dica${i+1}`).innerHTML = " ";
                    }
                    cont = 0;
                    if(contadorTotal == 8 && (Australia == 0 || Brasil == 0 || Camboja == 0 || Canada == 0 || EUA == 0 || Hungria == 0 || Jordania == 0 || Russia == 0))
                        mudar(null,null);
                    if(contadorTotal < 8){
                        mistura();
                    }
                }
            });
        break;
        case '2':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Dificil/Camboja/Camboja.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Dica difícil 1";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Dica difícil 2";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Dica difícil 3";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Dica difícil 4";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'camboja'){
                        document.getElementById('decisao').src = 'Imagens/ok.png';
                        document.getElementById('texto').innerHTML = 'Parabéns!! Você acertou!!';
                    }
                    else{
                        document.getElementById('decisao').src = 'Imagens/wrong.png';
                        document.getElementById('texto').innerHTML = 'Que pena, você Errou!!';
                    }
                    document.getElementById('telaCertoErrado').classList.add('mostrar');
                    document.getElementById('telaCertoErrado').addEventListener('click', (e) => {
                        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaCertoErrado'){
                            document.getElementById('telaCertoErrado').classList.remove('mostrar');
                            document.getElementById('submit').value = "";
                        }
                    });
                    for(let i = 0; i < 4; i++){
                        document.getElementById(`dica${i+1}`).innerHTML = " ";
                    }
                    cont = 0;
                    if(contadorTotal == 8 && (Australia == 0 || Brasil == 0 || Camboja == 0 || Canada == 0 || EUA == 0 || Hungria == 0 || Jordania == 0 || Russia == 0))
                        mudar(null,null);
                    if(contadorTotal < 8){
                        mistura();
                    }
                }
            });
        break;
        case '3':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Dificil/Canada/Canada.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Dica difícil 1";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Dica difícil 2";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Dica difícil 3";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Dica difícil 4";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'canada'){
                        document.getElementById('decisao').src = 'Imagens/ok.png';
                        document.getElementById('texto').innerHTML = 'Parabéns!! Você acertou!!';
                    }
                    else{
                        document.getElementById('decisao').src = 'Imagens/wrong.png';
                        document.getElementById('texto').innerHTML = 'Que pena, você Errou!!';
                    }
                    document.getElementById('telaCertoErrado').classList.add('mostrar');
                    document.getElementById('telaCertoErrado').addEventListener('click', (e) => {
                        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaCertoErrado'){
                            document.getElementById('telaCertoErrado').classList.remove('mostrar');
                            document.getElementById('submit').value = "";
                        }
                    });
                    for(let i = 0; i < 4; i++){
                        document.getElementById(`dica${i+1}`).innerHTML = " ";
                    }
                    cont = 0;
                    if(contadorTotal == 8 && (Australia == 0 || Brasil == 0 || Camboja == 0 || Canada == 0 || EUA == 0 || Hungria == 0 || Jordania == 0 || Russia == 0))
                        mudar(null,null);
                    if(contadorTotal < 8){
                        mistura();
                    }
                }
            });
        break;
        case '4':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Dificil/EUA/EUA.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Dica difícil 1";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Dica difícil 2";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Dica difícil 3";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Dica difícil 4";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'estados unidos'){
                        document.getElementById('decisao').src = 'Imagens/ok.png';
                        document.getElementById('texto').innerHTML = 'Parabéns!! Você acertou!!';
                    }
                    else{
                        document.getElementById('decisao').src = 'Imagens/wrong.png';
                        document.getElementById('texto').innerHTML = 'Que pena, você Errou!!';
                    }
                    document.getElementById('telaCertoErrado').classList.add('mostrar');
                    document.getElementById('telaCertoErrado').addEventListener('click', (e) => {
                        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaCertoErrado'){
                            document.getElementById('telaCertoErrado').classList.remove('mostrar');
                            document.getElementById('submit').value = "";
                        }
                    });
                    for(let i = 0; i < 4; i++){
                        document.getElementById(`dica${i+1}`).innerHTML = " ";
                    }
                    cont = 0;
                    if(contadorTotal == 8 && (Australia == 0 || Brasil == 0 || Camboja == 0 || Canada == 0 || EUA == 0 || Hungria == 0 || Jordania == 0 || Russia == 0))
                        mudar(null,null);
                    if(contadorTotal < 8){
                        mistura();
                    }
                }
            });
        break;
        case '5':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Dificil/Hungria/Hungria.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Dica difícil 1";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Dica difícil 2";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Dica difícil 3";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Dica difícil 4";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'hungria'){
                        document.getElementById('decisao').src = 'Imagens/ok.png';
                        document.getElementById('texto').innerHTML = 'Parabéns!! Você acertou!!';
                    }
                    else{
                        document.getElementById('decisao').src = 'Imagens/wrong.png';
                        document.getElementById('texto').innerHTML = 'Que pena, você Errou!!';
                    }
                    document.getElementById('telaCertoErrado').classList.add('mostrar');
                    document.getElementById('telaCertoErrado').addEventListener('click', (e) => {
                        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaCertoErrado'){
                            document.getElementById('telaCertoErrado').classList.remove('mostrar');
                            document.getElementById('submit').value = "";
                        }
                    });
                    for(let i = 0; i < 4; i++){
                        document.getElementById(`dica${i+1}`).innerHTML = " ";
                    }
                    cont = 0;
                    if(contadorTotal == 8 && (Australia == 0 || Brasil == 0 || Camboja == 0 || Canada == 0 || EUA == 0 || Hungria == 0 || Jordania == 0 || Russia == 0))
                        mudar(null,null);
                    if(contadorTotal < 8){
                        mistura();
                    }
                }
            });
        break;
        case '6':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Dificil/Jordania/Jordania.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Dica difícil 1";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Dica difícil 2";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Dica difícil 3";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Dica difícil 4";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'jordania'){
                        document.getElementById('decisao').src = 'Imagens/ok.png';
                        document.getElementById('texto').innerHTML = 'Parabéns!! Você acertou!!';
                    }
                    else{
                        document.getElementById('decisao').src = 'Imagens/wrong.png';
                        document.getElementById('texto').innerHTML = 'Que pena, você Errou!!';
                    }
                    document.getElementById('telaCertoErrado').classList.add('mostrar');
                    document.getElementById('telaCertoErrado').addEventListener('click', (e) => {
                        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaCertoErrado'){
                            document.getElementById('telaCertoErrado').classList.remove('mostrar');
                            document.getElementById('submit').value = "";
                        }
                    });
                    for(let i = 0; i < 4; i++){
                        document.getElementById(`dica${i+1}`).innerHTML = " ";
                    }
                    cont = 0;
                    if(contadorTotal == 8 && (Australia == 0 || Brasil == 0 || Camboja == 0 || Canada == 0 || EUA == 0 || Hungria == 0 || Jordania == 0 || Russia == 0))
                        mudar(null,null);
                    if(contadorTotal < 8){
                        mistura();
                    }
                }
            });
        break;
        case '7':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Dificil/Russia/Russia.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Dica difícil 1";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Dica difícil 2";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Dica difícil 3";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Dica difícil 4";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'russia'){
                        document.getElementById('decisao').src = 'Imagens/ok.png';
                        document.getElementById('texto').innerHTML = 'Parabéns!! Você acertou!!';
                    }
                    else{
                        document.getElementById('decisao').src = 'Imagens/wrong.png';
                        document.getElementById('texto').innerHTML = 'Que pena, você Errou!!';
                    }
                    document.getElementById('telaCertoErrado').classList.add('mostrar');
                    document.getElementById('telaCertoErrado').addEventListener('click', (e) => {
                        if(e.target.id == 'botaoradius fechar' || e.target.id == 'telaCertoErrado'){
                            document.getElementById('telaCertoErrado').classList.remove('mostrar');
                            document.getElementById('submit').value = "";
                        }
                    });
                    for(let i = 0; i < 4; i++){
                        document.getElementById(`dica${i+1}`).innerHTML = " ";
                    }
                    cont = 0;
                    if(contadorTotal == 8 && (Australia == 0 || Brasil == 0 || Camboja == 0 || Canada == 0 || EUA == 0 || Hungria == 0 || Jordania == 0 || Russia == 0))
                        mudar(null,null);
                    if(contadorTotal < 8){
                        mistura();
                    }
                }
            });
        break;
    }
}

function setMiniatura(aux){
    switch(aux){
        case '0':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Dificil/Australia/Australia.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "0";
        break;
        case '1':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Dificil/Brasil/Brasil.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "1";
        break;
        case '2':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Dificil/Camboja/Camboja.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "2";
        break;
        case '3':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Dificil/Canada/Canada.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "3";
        break;
        case '4':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Dificil/EUA/EUA.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "4";
        break;
        case '5':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Dificil/Hungria/Hungria.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "5";
        break;
        case '6':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Dificil/Jordania/Jordania.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "6";
        break;
        case '7':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Dificil/Russia/Russia.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "7";
        break;
    }
}

function mostrarcuriosidade(aux){

    switch(aux){
        case '0':
            document.getElementById('imgcuriosidade').src = 'Imagens/Dificil/Australia/Australia.jpg';
            document.getElementById('local').innerHTML = "Local: Opera de Sydney - País: Austrália";
            document.getElementById('cur1').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur2').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur3').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur4').innerHTML = "Curiosidade Difícil";
            document.getElementById('curiosidades').classList.add('mostrar');
            document.getElementById('curiosidades').addEventListener('click', (e) => {
                if(e.target.id == 'botaoradius fechar' || e.target.id == "curiosidades"){
                    document.getElementById('curiosidades').classList.remove('mostrar');
                    for(let i = 0; i < 4; i++)
                        document.getElementById(`cur${i+1}`).innerHTML = " ";
                }
            });
        break;
        case '1':
            document.getElementById('imgcuriosidade').src = 'Imagens/Dificil/Brasil/Brasil.jpg';
            document.getElementById('local').innerHTML = "Local: Memorial JK - País: Brasil";
            document.getElementById('cur1').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur2').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur3').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur4').innerHTML = "Curiosidade Difícil";
            document.getElementById('curiosidades').classList.add('mostrar');
            document.getElementById('curiosidades').addEventListener('click', (e) => {
                if(e.target.id == 'botaoradius fechar' || e.target.id == "curiosidades"){
                    document.getElementById('curiosidades').classList.remove('mostrar');
                    for(let i = 0; i < 4; i++)
                        document.getElementById(`cur${i+1}`).innerHTML = " ";
                }
            });
        break;
        case '2':
            document.getElementById('imgcuriosidade').src = 'Imagens/Dificil/Camboja/Camboja.jpg';
            document.getElementById('local').innerHTML = "Local: Angkor Wat - País: Camboja";
            document.getElementById('cur1').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur2').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur3').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur4').innerHTML = "Curiosidade Difícil";
            document.getElementById('curiosidades').classList.add('mostrar');
            document.getElementById('curiosidades').addEventListener('click', (e) => {
                if(e.target.id == 'botaoradius fechar' || e.target.id == "curiosidades"){
                    document.getElementById('curiosidades').classList.remove('mostrar');
                    for(let i = 0; i < 4; i++)
                        document.getElementById(`cur${i+1}`).innerHTML = " ";
                }
            });
        break;
        case '3':
            document.getElementById('imgcuriosidade').src = 'Imagens/Dificil/Canada/Canada.jpg';
            document.getElementById('local').innerHTML = "Local: CN Tower - País: Canadá";
            document.getElementById('cur1').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur2').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur3').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur4').innerHTML = "Curiosidade Difícil";
            document.getElementById('curiosidades').classList.add('mostrar');
            document.getElementById('curiosidades').addEventListener('click', (e) => {
                if(e.target.id == 'botaoradius fechar' || e.target.id == "curiosidades"){
                    document.getElementById('curiosidades').classList.remove('mostrar');
                    for(let i = 0; i < 4; i++)
                        document.getElementById(`cur${i+1}`).innerHTML = " ";
                }
            });
        break;
        case '4':
            document.getElementById('imgcuriosidade').src = 'Imagens/Dificil/EUA/EUA.jpg';
            document.getElementById('local').innerHTML = "Local: Golden Gate - País: Estados Unidos";
            document.getElementById('cur1').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur2').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur3').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur4').innerHTML = "Curiosidade Difícil";
            document.getElementById('curiosidades').classList.add('mostrar');
            document.getElementById('curiosidades').addEventListener('click', (e) => {
                if(e.target.id == 'botaoradius fechar' || e.target.id == "curiosidades"){
                    document.getElementById('curiosidades').classList.remove('mostrar');
                    for(let i = 0; i < 4; i++)
                        document.getElementById(`cur${i+1}`).innerHTML = " ";
                }
            });
        break;
        case '5':
            document.getElementById('imgcuriosidade').src = 'Imagens/Dificil/Hungria/Hungria.jpg';
            document.getElementById('local').innerHTML = "Local: Parlamento de Budapeste - País: Hungria";
            document.getElementById('cur1').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur2').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur3').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur4').innerHTML = "Curiosidade Difícil";
            document.getElementById('curiosidades').classList.add('mostrar');
            document.getElementById('curiosidades').addEventListener('click', (e) => {
                if(e.target.id == 'botaoradius fechar' || e.target.id == "curiosidades"){
                    document.getElementById('curiosidades').classList.remove('mostrar');
                    for(let i = 0; i < 4; i++)
                        document.getElementById(`cur${i+1}`).innerHTML = " ";
                }
            });
        break;
        case '6':
            document.getElementById('imgcuriosidade').src = 'Imagens/Dificil/Jordania/Jordania.jpg';
            document.getElementById('local').innerHTML = "Local: As Ruínas de Petra - País: Jordânia";
            document.getElementById('cur1').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur2').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur3').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur4').innerHTML = "Curiosidade Difícil";
            document.getElementById('curiosidades').classList.add('mostrar');
            document.getElementById('curiosidades').addEventListener('click', (e) => {
                if(e.target.id == 'botaoradius fechar' || e.target.id == "curiosidades"){
                    document.getElementById('curiosidades').classList.remove('mostrar');
                    for(let i = 0; i < 4; i++)
                        document.getElementById(`cur${i+1}`).innerHTML = " ";
                }
            });
        break;
        case '7':
            document.getElementById('imgcuriosidade').src = 'Imagens/Dificil/Russia/Russia.jpg';
            document.getElementById('local').innerHTML = "Local: Parlamento de Budapeste - País: Rússia";
            document.getElementById('cur1').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur2').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur3').innerHTML = "Curiosidade Difícil";
            document.getElementById('cur4').innerHTML = "Curiosidade Difícil";
            document.getElementById('curiosidades').classList.add('mostrar');
            document.getElementById('curiosidades').addEventListener('click', (e) => {
                if(e.target.id == 'botaoradius fechar' || e.target.id == "curiosidades"){
                    document.getElementById('curiosidades').classList.remove('mostrar');
                    for(let i = 0; i < 4; i++)
                        document.getElementById(`cur${i+1}`).innerHTML = " ";
                }
            });
        break;
    }
}

function removerAcentos( newStringComAcento ) {
    var string = newStringComAcento;
    var mapaAcentosHex 	= {
        a : /[\xE0-\xE6]/g,
        A : /[\xC0-\xC6]/g,
        e : /[\xE8-\xEB]/g,
        E : /[\xC8-\xCB]/g,
        i : /[\xEC-\xEF]/g,
        I : /[\xCC-\xCF]/g,
        o : /[\xF2-\xF6]/g,
        O : /[\xD2-\xD6]/g,
        u : /[\xF9-\xFC]/g,
        U : /[\xD9-\xDC]/g,
        c : /\xE7/g,
        C : /\xC7/g,
        n : /\xF1/g,
        N : /\xD1/g
    };

    for ( var letra in mapaAcentosHex ) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace( expressaoRegular, letra );
    }
    return string;
}

function monta(aux){
    switch(aux){
        case 0:
            for(let i = 1; i < 64;i++){
                document.getElementById(i).src = `Imagens/Dificil/Australia/${i}.jpg`;
                document.getElementById(i).alt = `${aux}`;
            }
        break;
        case 1:
            for(let i = 1; i < 64;i++){
                document.getElementById(i).src = `Imagens/Dificil/Brasil/${i}.jpg`;
                document.getElementById(i).alt = `${aux}`;
            }
        break;
        case 2:
            for(let i = 1; i < 64;i++){
                document.getElementById(i).src = `Imagens/Dificil/Camboja/${i}.jpg`;
                document.getElementById(i).alt = `${aux}`;
            }
        break;
        case 3:
            for(let i = 1; i < 64;i++){
                document.getElementById(i).src = `Imagens/Dificil/Canada/${i}.jpg`;
                document.getElementById(i).alt = `${aux}`;
            }
        break;
        case 4:
            for(let i = 1; i < 64;i++){
                document.getElementById(i).src = `Imagens/Dificil/EUA/${i}.jpg`;
                document.getElementById(i).alt = `${aux}`;
            }
        break;
        case 5:
            for(let i = 1; i < 64;i++){
                document.getElementById(i).src = `Imagens/Dificil/Hungria/${i}.jpg`;
                document.getElementById(i).alt = `${aux}`;
            }
        break;
        case 6:
            for(let i = 1; i < 64;i++){
                document.getElementById(i).src = `Imagens/Dificil/Jordania/${i}.jpg`;
                document.getElementById(i).alt = `${aux}`;
            }
        break;
        case 7:
            for(let i = 1; i < 64;i++){
                document.getElementById(i).src = `Imagens/Dificil/Russia/${i}.jpg`;
                document.getElementById(i).alt = `${aux}`;
            }
        break;
    }
}