
window.onload = function horario(){
 
    var dataAtual = new Date()
    var horas =  dataAtual.getHours()

    var msg = document.getElementById("title")
    var c = document.getElementById("container")
    var figura = document.getElementById("imagem")


    if(horas >= 0 && horas <= 12){

        msg.innerHTML = "Bom dia!"
        c.style.backgroundColor = 'rgb(223, 199, 168)'
        figura.src = "https://www.novotempo.com/wp-content/uploads/2020/04/Amanhecer01.jpg"
    }else if(horas >=12 && horas <= 18){

        msg.innerHTML = "Boa tarde!"
        c.style.backgroundColor = 'rgb(224, 133, 13)'
        figura.src = "https://cdn.pixabay.com/photo/2016/09/23/04/17/sunset-1688849_960_720.jpg"
    }else{
        c.style.backgroundColor = 'rgb(6, 15, 90)'
        figura.src = "http://s2.glbimg.com/skxBKuKwnvrDx_dQJ603JYzfDLQ=/s.glbimg.com/og/rg/f/original/2013/08/23/querosaber_noiteescura__606x455jpg.jpg"
    }
    return 
}

/* <script>

    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    // var segundos = dataAtual.getSeconds();

</script> */
