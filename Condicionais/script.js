var agora = new Date()
var diaSem = agora.getDay()

/* Para o JS os dias da semanas
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/
// window.alert(diaSem)

switch(diaSem){
    case 0:
        window.alert("Domingo")
        break
    case 1:
        window.alert("Segunda")
        break
    case 2:
        window.alert("Terça")
        break
    case 3:
        window.alert("Quarta")
        break
    case 4:
        window.alert("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        window.alert("Sábado")
        break
    default:
        window.alert("ERRO")
}