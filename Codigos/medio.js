var Chile = 0;
var China = 0;
var Grecia = 0;
var India = 0;
var Italia = 0;
var Peru = 0;
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
    if(Chile == -1 && China == -1 && Grecia == -1 && India == -1 && Italia == -1 && Peru == -1){
        document.getElementById('modalGanhou').classList.add('mostrar');
    }
    for(let i = 0; i < 36; i++){
        let num = aleatorio();
        while(verificaAleatorio(num) == 0){
            num = aleatorio();
        }
        switch(num){
            case 0:
                document.getElementById(i).src = `Imagens/Medio/Chile/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 1:
                document.getElementById(i).src = `Imagens/Medio/China/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 2:
                document.getElementById(i).src = `Imagens/Medio/Grecia/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 3:
                document.getElementById(i).src = `Imagens/Medio/India/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 4:
                document.getElementById(i).src = `Imagens/Medio/Italia/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 5:
                document.getElementById(i).src = `Imagens/Medio/Peru/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
        }
    }
}

function mudar(num, image) {

    if(contadorTotal != 6){
        while(verificaAleatorio(num) == 0 || (num == document.getElementById(image).alt && contadorTotal != 5)){
            num = aleatorio();
        }

        console.log(`Numero recebido do aleatorio == ${num}`);

        switch(num){
            case 0:
                document.getElementById(image).src = `Imagens/Medio/Chile/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 1:
                document.getElementById(image).src = `Imagens/Medio/China/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 2:
                document.getElementById(image).src = `Imagens/Medio/Grecia/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 3:
                document.getElementById(image).src = `Imagens/Medio/India/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 4:
                document.getElementById(image).src = `Imagens/Medio/Italia/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 5:
                document.getElementById(image).src = `Imagens/Medio/Peru/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
        }
    }
    if(!(Chile == -1 && China == -1 && Grecia == -1 && India == -1 && Italia == -1 && Peru == -1))
        verificaGanhou();
}

function verificaGanhou(){
    var cont = 0, aux = document.getElementById('0').alt;

    for(let i = 0; i < 36; i++){
        if(document.getElementById(`${i}`).alt == aux){
            cont++;
        }
    }

    console.log(`Verificando se ganhou!`);

    if(cont == 36){
        switch(aux){
            case '0':
                Chile = -1;
                acertouImagem(aux);
                if(contadorTotal < 6)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '1':
                China = -1;
                acertouImagem(aux);
                if(contadorTotal < 6)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '2':
                Grecia = -1;
                acertouImagem(aux);
                if(contadorTotal < 6)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '3':
                India = -1;
                acertouImagem(aux);
                if(contadorTotal < 6)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '4':
                Italia = -1;
                acertouImagem(aux);
                if(contadorTotal < 6)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '5':
                Peru = -1;
                acertouImagem(aux);
                if(contadorTotal < 6)
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
            if(Chile == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 1:
            if(China == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 2:
            if(Grecia == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 3:
            if(India == -1)
                valido = 0
            else
                valido = 1;            
            break;
        case 4:
            if(Italia == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 5:
            if(Peru == -1)
                valido = 0
            else
                valido = 1;
            break;
    }
    return valido;
}

function aleatorio (){
    let num = Math.floor(Math.random() * (5 - 0 + 1)) + 0;

    while(num == numAnt){
        num = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
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
            document.getElementById('acertou').src = `Imagens/Medio/Chile/Chile.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "País mais longo do mundo, sendo muito fino, mas muito comprido";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Está localizado na América do Sul";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Possui a maior piscina do mundo, no Resort San Alfonso Del Mar";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Possui o deserto mais seco do mundo: Deserto do Atacama";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'chile'){
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
                    if(contadorTotal == 6 && (Chile == 0 || China == 0 || Grecia == 0 || India == 0 || Italia == 0 || Peru == 0))
                        mudar(null,null);
                    if(contadorTotal < 6){
                        mistura();
                    }
                }
            });
        break;
        case '1':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Medio/China/China.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "É o país mais populoso do mundo";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "A capital do país é Pequim";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Possui uma das 7 Maravilhas do Mundo Moderno";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "País localizado na Ásia";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'china'){
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
                    if(contadorTotal == 6 && (Chile == 0 || China == 0 || Grecia == 0 || India == 0 || Italia == 0 || Peru == 0))
                        mudar(null,null);
                    if(contadorTotal < 6){
                        mistura();
                    }
                }
            });
        break;
        case '2':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Medio/Grecia/Grecia.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "País onde nasceu a filosofia";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "A maior cidade do país é Athenas";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "País popular por suas antigas mitologias";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "País 'pai' das Olimpíadas";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'grecia'){
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
                    if(contadorTotal == 6 && (Chile == 0 || China == 0 || Grecia == 0 || India == 0 || Italia == 0 || Peru == 0))
                        mudar(null,null);
                    if(contadorTotal < 6){
                        mistura();
                    }
                }
            });
        break;
        case '3':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Medio/India/India.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "É o segundo país mais populoso do mundo";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "A religião predominante no país é o hinduísmo";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "As vacas são vistas como animais sagrados neste país";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Possui um dos trânsitos mais caóticos do mundo";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'india'){
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
                    if(contadorTotal == 6 && (Chile == 0 || China == 0 || Grecia == 0 || India == 0 || Italia == 0 || Peru == 0))
                        mudar(null,null);
                    if(contadorTotal < 6){
                        mistura();
                    }
                }
            });
        break;
        case '4':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Medio/Italia/Italia.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Conhecida como país da pizza";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "O país possui o formato de 'bota'";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Um de seus principais pontos turísticos é Veneza";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Roma é sua capital";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'italia'){
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
                    if(contadorTotal == 6 && (Chile == 0 || China == 0 || Grecia == 0 || India == 0 || Italia == 0 || Peru == 0))
                        mudar(null,null);
                    if(contadorTotal < 6){
                        mistura();
                    }
                }
            });
        break;
        case '5':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Medio/Peru/Peru.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "A capital desse país é Lima";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "País situado na América do Sul";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Nesse país fica localizado o deserto de Nazca";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "O povo Inca viveu onde é esse país atualmente";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'peru'){
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
                    if(contadorTotal == 6 && (Chile == 0 || China == 0 || Grecia == 0 || India == 0 || Italia == 0 || Peru == 0))
                        mudar(null,null);
                    if(contadorTotal < 6){
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
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Medio/Chile/Chile.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "0";
        break;
        case '1':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Medio/China/China.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "1";
        break;
        case '2':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Medio/Grecia/Grecia.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "2";
        break;
        case '3':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Medio/India/India.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "3";
        break;
        case '4':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Medio/Italia/Italia.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "4";
        break;
        case '5':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Medio/Peru/Peru.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "5";
        break;
    }
}

function mostrarcuriosidade(aux){

    switch(aux){
        case '0':
            document.getElementById('imgcuriosidade').src = 'Imagens/Medio/Chile/Chile.jpg';
            document.getElementById('local').innerHTML = "Local: Ilha da Páscoa - País: Chile";
            document.getElementById('cur1').innerHTML = "O Chile possui o maior número de terremotos do mundo";
            document.getElementById('cur2').innerHTML = "Nele está localizada a maior torre da América Latina: Sky Costanera";
            document.getElementById('cur3').innerHTML = "É proibido andar sem camisa em ruas e parques";
            document.getElementById('cur4').innerHTML = "O país é o maior exportador do minério de cobre do mundo";
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
            document.getElementById('imgcuriosidade').src = 'Imagens/Medio/China/China.jpg';
            document.getElementById('local').innerHTML = "Local: Muralha da China - País: China";
            document.getElementById('cur1').innerHTML = "A Muralha da China mede mais cerca de 7200 Km de extensão";
            document.getElementById('cur2').innerHTML = "Na China é proibido o uso do Facebook, Twitter e The New York Times";
            document.getElementById('cur3').innerHTML = "É possível ver a Muralha da lua, a olho nu";
            document.getElementById('cur4').innerHTML = "O país é o maior exportador de bens, e o segundo maior importador";
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
            document.getElementById('imgcuriosidade').src = 'Imagens/Medio/Grecia/Grecia.jpg';
            document.getElementById('local').innerHTML = "Local: Partenon - País: Grécia";
            document.getElementById('cur1').innerHTML = "Terra natal do 'pai' da medicina: Hipócrates";
            document.getElementById('cur2').innerHTML = "País onde nasceu a democracia";
            document.getElementById('cur3').innerHTML = "O Monte Olimpo é o maior monte do país, e segundo a mitologia, é o lar dos deuses";
            document.getElementById('cur4').innerHTML = "Um dos entretenimentos mais populares do país é o teatro";
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
            document.getElementById('imgcuriosidade').src = 'Imagens/Medio/India/India.jpg';
            document.getElementById('local').innerHTML = "Local: Taj Mahal - País: Índia";
            document.getElementById('cur1').innerHTML = "É muito como acontecer casamentos infantis neste país";
            document.getElementById('cur2').innerHTML = "Um dos pontos mais famosos do país é o Rio Ganges, que é considerado sagrado";
            document.getElementById('cur3').innerHTML = "Os elefantes comumente são 'animais domésticos'";
            document.getElementById('cur4').innerHTML = "O Taj Mahal é uma das Sete Maravilhas do Mundo Moderno";
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
            document.getElementById('imgcuriosidade').src = 'Imagens/Medio/Italia/Italia.jpg';
            document.getElementById('local').innerHTML = "Local: Torre de Pisa - País: Itália";
            document.getElementById('cur1').innerHTML = "Milão é uma importante cidade do país, no quesito moda";
            document.getElementById('cur2').innerHTML = "Marcas famosas são deste país, como por exemplo Ferrari e Lamborghini";
            document.getElementById('cur3').innerHTML = "País famoso pela culinária voltada a massas";
            document.getElementById('cur4').innerHTML = "A Itália possui uma fonte de vinho pública que funciona o tempo todo";
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
            document.getElementById('imgcuriosidade').src = 'Imagens/Medio/Peru/Peru.jpg';
            document.getElementById('local').innerHTML = "Local: Machu Picchu - País: Peru";
            document.getElementById('cur1').innerHTML = "Uma das maiores dunas do mundo fica nesse país: as dunas Huacachina";
            document.getElementById('cur2').innerHTML = "O Deserto de Nazca é conhecido pelo aparecimento de OVNIs";
            document.getElementById('cur3').innerHTML = "No Peru se localiza a universidade mais antiga das Américas: Universidade Nacional de São Marcos, fundada em 1551";
            document.getElementById('cur4').innerHTML = "A Lhama é um animal-símbolo do país";
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