const dataNascimento = document.querySelector("#idade")

dataNascimento.addEventListener('blur', (evento) => {
	validaDataNascimento(evento.target)
})

function validaDataNascimento(input){
	const dataRecebida = new Date(input.value)
	let mensagem = ''

	if(!maiorQue10(dataRecebida)) {
		mensagem = 'Você precisa ter mais de 10 anos para se cadastrar'
	}

	input.setCustomValidity(mensagem)

}

function maiorQue10(data) {
	const dataAtual = new Date()
	const dataMais10 = new Date(data.getUTCFullYear() + 10, data.getUTCMonth(), data.getUTCDate())

	return dataMais10 <= dataAtual
}