// Variáveis decraradas globais
var nome = document.getElementById('nome')
var tel = document.getElementById('telefone')
var formMain = document.getElementById('formMain')
var tbodyMain = document.getElementById('tbodyMain')

// Evento para manipular o submit do form
formMain.addEventListener('submit', function (event) {
    event.preventDefault() // Evita o comportamento padrão do form

    // Coletar os dados
    let manipulaNome = nome.value
    let manipulaTel = tel.value

    // Criar uma nova linha e células para a tabela
    let newRow = tbodyMain.insertRow()
    let nomeCell = newRow.insertCell(0)
    let telCell = newRow.insertCell(1)

    // Preencher as células com os dados coletados
    nomeCell.textContent = manipulaNome
    telCell.textContent = manipulaTel

    // Limpar os campos do formulário
    nome.value = ''
    tel.value = ''


})