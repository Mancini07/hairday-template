import { schedulesDay } from "../schedules/load"
// seleciona input data
const date = document.querySelector("#date")

// se houver mudança ele entra e chama função para atualizar listas de agendamento
date.addEventListener("change", (event)=>{
    event.preventDefault()
    
    // atualiza lista de agendamentos
    schedulesDay()
})

