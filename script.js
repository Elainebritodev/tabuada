function tabuada() {
    let num = document.getElementById('txtnumber')
    let tab = document.getElementById('seltab')
    

    if (num.value.length == 0) {
        window.alert("[ERRO] Por favor informe um número")
        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //para limpar a tabuada antes de mostrar outra
       
        while (c <= 10) {
            let item = document.createElement('option') //para criar option no select
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab ${c}` //para selecionar o item
            tab.appendChild(item)
            c++;
             }
    

    }

}