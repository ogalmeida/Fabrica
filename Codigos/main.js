function abrirJogar(id){
    const modal = document.getElementById(id);
    modal.classList.add('mostrar');
    
    modal.addEventListener('click', (e) => {
        if(e.target.id == id || e.target.className == 'botaoradius fechar'){
            modal.classList.remove('mostrar');
        }
    });
}

function abrirCred(id){
    const modal = document.getElementById(id);
    modal.classList.add('mostrar');
    
    modal.addEventListener('click', (e) => {
        if(e.target.id == id || e.target.className == 'botaoradius fechar'){
            modal.classList.remove('mostrar');
        }
    });
}

function abrirInst(id){
    const modal = document.getElementById(id);
    modal.classList.add('mostrar');
    
    modal.addEventListener('click', (e) => {
        if(e.target.id == id || e.target.className == 'botaoradius fechar'){
            modal.classList.remove('mostrar');
        }
        if(e.target.className == 'botaoradius next'){
            modal.classList.remove('mostrar');
            const modal1 = document.getElementById('instrucoes1');
            modal1.classList.add('mostrar');

            modal1.addEventListener('click', (x) =>{
                if(x.target.id == 'instrucoes1' || x.target.className == 'botaoradius fechar'){
                    modal1.classList.remove('mostrar');
                }
                if(x.target.className == 'botaoradius next'){
                    modal1.classList.remove('mostrar');
                    modal.classList.add('mostrar');
                }
            });
        }
    });
}