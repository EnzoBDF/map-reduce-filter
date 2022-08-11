function sexo(value){
    return value >= 20
}



var sexofiltrado = [10, 15, 600, 765, 900, 75, 1].filter(sexo)

console.log(sexofiltrado)