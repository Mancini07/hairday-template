import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "../schedules/load.js"

// Obtém lista periodo
const periods = document.querySelectorAll(".period")

//percorre lista
periods.forEach((period) =>{
    period.addEventListener("click", async (event)=> {
        
        if (event.target.classList.contains("cancel-icon")) {
            const item = event.target.closest("li")
            const {id} = item.dataset

            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    await scheduleCancel({id})
                    schedulesDay()

                }
            }
        }
    })
})