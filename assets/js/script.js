
document.querySelector("#qtde").addEventListener("change", calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento)
document.querySelector("#prazo").addEventListener("change", calcularOrcamento)

function calcularOrcamento() {

    let preco = qtde.value * 100
    if (js.checked) preco *= 1.1
    if (layout_sim.checked) preco += 50

    let taxaDeUrgencia = preco * ( 1.1 + prazo.value * 0.1)
    preco += taxaDeUrgencia
    label_prazo.innerHTML = `Apoio de (${prazo.value} Meses)`

    output.innerHTML = "R$ " + preco.toFixed(2)
}

//Manipulação do DOM

//ECMAScript