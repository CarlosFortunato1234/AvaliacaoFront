const buttonEx1 = document.getElementById("exercicio1")

// addEventListener escuta
buttonEx1.addEventListener("click", () => {
    const num1Input = document.getElementById("num1")
    const num2Input = document.getElementById("num2")
    const resultado = document.getElementById("resultado")

    const soma = Number(num1Input.value) + Number(num2Input.value)
    const subtracao = Number(num1Input.value) - Number(num2Input.value)
    const multiplicacao = Number(num1Input.value) * Number(num2Input.value)
    const divisao = Number(num1Input.value) / Number(num2Input.value)

    resultado.innerHTML =
        "Soma: " + soma + "<br>" +
        "Subtração: " + subtracao + "<br>" +
        "Multiplicação: " + multiplicacao + "<br>" +
        "Divisão: " + divisao
})