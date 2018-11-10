var Brasil = 0, Cairo = 0, Paris = 0, Roma = 0;
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
    if(Brasil == -1 && Cairo == -1 && Paris == -1 && Roma == -1){
        document.getElementById('modalGanhou').classList.add('mostrar');
    }
    for(let i = 0; i < 16; i++){
        let num = aleatorio();
        while(verificaAleatorio(num) == 0){
            num = aleatorio();
        }
        switch(num){
            case 0:
                document.getElementById(i).src = `Imagens/Facil/Brasil/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 1:
                document.getElementById(i).src = `Imagens/Facil/Cairo/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 2:
                document.getElementById(i).src = `Imagens/Facil/Paris/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
            case 3:
                document.getElementById(i).src = `Imagens/Facil/Roma/${i}.jpeg`;
                document.getElementById(i).alt = `${num}`;
                break;
        }
    }
}

function mudar(num, image) {

    if(contadorTotal != 4){
        while(verificaAleatorio(num) == 0 || (num == document.getElementById(image).alt && contadorTotal != 3)){
            num = aleatorio();
        }

        console.log(`Numero recebido do aleatorio == ${num}`);

        switch(num){
            case 0:
                document.getElementById(image).src = `Imagens/Facil/Brasil/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 1:
                document.getElementById(image).src = `Imagens/Facil/Cairo/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 2:
                document.getElementById(image).src = `Imagens/Facil/Paris/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
            case 3:
                document.getElementById(image).src = `Imagens/Facil/Roma/${image}.jpeg`;
                document.getElementById(image).alt = `${num}`;
            break;
        }
    }
    if(!(Brasil == -1 && Cairo == -1 && Paris == -1 && Roma == -1))
        verificaGanhou();
}

function verificaGanhou(){
    var cont = 0, aux = document.getElementById('0').alt;

    for(let i = 0; i < 16; i++){
        if(document.getElementById(`${i}`).alt == aux){
            cont++;
        }
    }

    console.log(`Verificando se ganhou!`);

    if(cont == 16){
        switch(aux){
            case '0':
                Brasil = -1;
                acertouImagem(aux);
                if(contadorTotal < 4)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '1':
                Cairo = -1;
                acertouImagem(aux);
                if(contadorTotal < 4)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '2':
                Paris = -1;
                acertouImagem(aux);
                if(contadorTotal < 4)
                    contadorTotal++;
                console.log(`ContadorTotal == ${contadorTotal}`);
                setMiniatura(aux);
            break;
            case '3':
                Roma = -1;
                acertouImagem(aux);
                if(contadorTotal < 4)
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
            if(Brasil == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 1:
            if(Cairo == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 2:
            if(Paris == -1)
                valido = 0
            else
                valido = 1;
            break;
        case 3:
            if(Roma == -1)
                valido = 0
            else
                valido = 1;            
            break;
    }
    return valido;
}

function aleatorio (){
    let num = Math.floor(Math.random() *4);

    while(num == numAnt){
        num = Math.floor(Math.random() *4);
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
            document.getElementById('acertou').src = `Imagens/Facil/Brasil/Brasil.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Conhecida como cidade Maravilhosa";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Principal ponto turístico do Hemisfério Sul";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Cidade onde se localiza a praia e Copacabana";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Foi capital do Brasil entre 1763 e 1960";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'rio de janeiro'){
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
                    if(contadorTotal == 4 && (Brasil == 0 || Cairo == 0 || Paris == 0 || Roma == 0 ))
                        mudar(null,null);
                    if(contadorTotal < 4){
                        mistura();
                    }
                }
            });
        break;
        case '1':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Facil/Cairo/Cairo.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Capital do Egito";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Considerada maior cidade do Oriente Médio";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Cidade onde se localiza a Esfinge";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "País conhecido pelos seus Faraós";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'cairo'){
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
                    if(contadorTotal == 4 && (Brasil == 0 || Cairo == 0 || Paris == 0 || Roma == 0 ))
                        mudar(null,null);
                    if(contadorTotal < 4){
                        mistura();
                    }
                }
            });
        break;
        case '2':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Facil/Paris/Paris.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Cidade onde está localizado o Rio Sena";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Uma importante cidade no quesito moda";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Conhecida como Cidade das Luzes";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Cidade capital da França";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'paris'){
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
                    if(contadorTotal == 4 && (Brasil == 0 || Cairo == 0 || Paris == 0 || Roma == 0 ))
                        mudar(null,null);
                    if(contadorTotal < 4){
                        mistura();
                    }
                }
            });
        break;
        case '3':
            modal = document.getElementById('acertouModal');
            document.getElementById('acertou').src = `Imagens/Facil/Roma/Roma.jpg`;
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'buttonDica' && cont == 0){
                    document.getElementById("dica1").innerHTML = "Conhecida como Cidade Eterna";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 1){
                    document.getElementById("dica2").innerHTML = "Capital da Itália";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 2){
                    document.getElementById("dica3").innerHTML = "Cidade supostamente fundada pelos irmãos Rômulo e Remo";
                    cont++;
                }
                else if(e.target.id == 'buttonDica' && cont == 3){
                    document.getElementById("dica4").innerHTML = "Uma das principais cidades da Idade Média";
                }
                if(e.target.id == 'buttonOK'){
                    modal.classList.remove('mostrar');
                    let texto = document.getElementById('submit');
                    if(removerAcentos(texto.value.toLowerCase()) == 'roma'){
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
                    if(contadorTotal == 4 && (Brasil == 0 || Cairo == 0 || Paris == 0 || Roma == 0 ))
                        mudar(null,null);
                    if(contadorTotal < 4){
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
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Facil/Brasil/Brasil.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "0";
        break;
        case '1':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Facil/Cairo/Cairo.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "1";
        break;
        case '2':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Facil/Paris/Paris.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "2";
        break;
        case '3':
            document.getElementById(`miniimg${contadorTotal}`).src = "Imagens/Facil/Roma/Roma.jpg";
            document.getElementById(`miniimg${contadorTotal}`).alt = "3";
        break;
    }
}

function mostrarcuriosidade(aux){

    switch(aux){
        case '0':
            document.getElementById('imgcuriosidade').src = 'Imagens/Facil/Brasil/Brasil.jpg';
            document.getElementById('local').innerHTML = "Local: Cristo Redentor - Cidade: Rio de Janeiro";
            document.getElementById('cur1').innerHTML = "O Rio possui a oitava maior biblioteca do mundo";
            document.getElementById('cur2').innerHTML = "Possui mais de 100 ilhas ao seu litoral";
            document.getElementById('cur3').innerHTML = "O Cristo Redentor foi eleito uma das Sete Maravilhas do Mundo Moderno";
            document.getElementById('cur4').innerHTML = "Possui a maior floresta urbana do mundo";
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
            document.getElementById('imgcuriosidade').src = 'Imagens/Facil/Cairo/Cairo.jpg';
            document.getElementById('local').innerHTML = "Local: Pirâmides do Egito - Cidade: Cairo";
            document.getElementById('cur1').innerHTML = "É proibido beijar em locais públicos";
            document.getElementById('cur2').innerHTML = "O trânsito de Cairo é um caos, pois a cidade não possui semáforos";
            document.getElementById('cur3').innerHTML = "Existe uma estrada que possui deserto de um lado, e floresta do outro";
            document.getElementById('cur4').innerHTML = "Até nos dias atuais pode-se considerar um mistério a construção das pirâmides";
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
            document.getElementById('imgcuriosidade').src = 'Imagens/Facil/Paris/Paris.jpg';
            document.getElementById('local').innerHTML = "Local: Torre Eiffel - Cidade: Paris";
            document.getElementById('cur1').innerHTML = "É a cidade mais visitada do mundo, com cerca de 44 milhões de turistas por ano";
            document.getElementById('cur2').innerHTML = "Cidade onde se localiza a famosa Catedral de Notre-Dame";
            document.getElementById('cur3').innerHTML = "Possui o museu mais famoso do mundo: Museu do Louvre";
            document.getElementById('cur4').innerHTML = "Conhecida como Cidade das Bicicletas, pois possui cerca de 440 km de ciclovias";
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
            document.getElementById('imgcuriosidade').src = 'Imagens/Facil/Roma/Roma.jpg';
            document.getElementById('local').innerHTML = "Local: Coliseu de Roma - Cidade: Roma";
            document.getElementById('cur1').innerHTML = "No subsolo de Roma exsitem igrejas, templos, teatros, etc";
            document.getElementById('cur2').innerHTML = "É a mais antiga cidade continuamente habitada do mundo";
            document.getElementById('cur3').innerHTML = "O Coliseu era a principal atração da cidade, apresentando por exemplo, luta de gladiadores";
            document.getElementById('cur4').innerHTML = "Existe uma fonte, onde ela arrecada 900 mil euros (jogados por turistas) por ano para serem doados à caridade";
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