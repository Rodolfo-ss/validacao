const form = document.querySelector('.form')
const msg = document.querySelector('.mensagem')


form.addEventListener('submit', event => {
    event.preventDefault()

    const validaInput = event.target.username.value
    const regexValid = /^[a-zA-Z]{6,12}$/
    const testRegex = regexValid.test(validaInput)
   if(testRegex){
    msg.textContent = 'Texto valido'
    return
   }

   msg.textContent = 'O texto deve conter entre 6 e 12 caracteres'
})