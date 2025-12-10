function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
        if (hora >= 0 && hora < 12){
            //Bom dia!
            img.src='/Parte 2/img/manha.jpg'
        } else if (hora >= 12 && hora <= 18){
            //Boa tarde!
            img.src='/Parte 2/img/tarde.jpg'
        } else{
            //Boa noite!
            img.src='/Parte 2/img/noite.jpg'
        }

}