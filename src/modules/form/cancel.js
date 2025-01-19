import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "../schedules/load.js"

// Obtém lista periodo
const periods = document.querySelectorAll(".period")

//percorre lista de periodo em caso de evento click
periods.forEach((period) =>{
    period.addEventListener("click", async (event)=> {
        
        // entra em condicional se o elemento clicado tiver class cancel-icon
        if (event.target.classList.contains("cancel-icon")) {
            // obtém lista completa
            const item = event.target.closest("li")
            //obtém id armazenado em atributo data-id
            const {id} = item.dataset

            // verifica se existe um id
            if(id){
                // pergunta se realmente deseja cancelar o agendamento
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    // caso realmente deseje cancelar chama api com metodo delete
                    await scheduleCancel({id})

                    // atualiza pagina de agendamentos
                    schedulesDay()

                }
            }
        }
    })
})