let p = document.querySelector('p')
let input = document.querySelector('input')
let button = document.querySelector('button')

const contacts = [
    { name: 'Ana', number: '(47) 9959-7853' },
    { name: 'José', number: '(47) 9973-5921' },
    { name: 'Danilo', number: '(47) 9987-5496' },
    { name: 'Vanilsa', number: '(47) 9752-4650' },
]

function search(){
    let found = false

    if (input.value.trim() === '') {
        p.innerHTML = 'Por favor, digite um nome antes.'
        return
    }

    for(let i = 0; i < contacts.length; i++)

        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()){
            p.innerHTML = `Nome: ${contacts[i].name} <br> Tel: ${contacts[i].number}`
            found = true

            break
        } 

        if(!found){
            p.innerHTML = p.innerHTML = "Contato não registrado na base de dados."
        }
    button.innerHTML = 'Escanear novamente'
}