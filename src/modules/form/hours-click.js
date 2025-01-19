export function hoursClick (){
    // obtem horas disponiveis
    const hours = document.querySelectorAll(".hour-available")

    // percorre a lista de horas disponiveis
    hours.forEach((available)=> {
        // se houver click nesta lista ele entra em uma função
        available.addEventListener("click", (selected)=>{
            // percorre removendo o item selecionado
            hours.forEach((hour)=>{
                hour.classList.remove("hour-selected")
            })

            // adiciona classe ao item selecionado
            selected.target.classList.add("hour-selected")
        })
    })
}