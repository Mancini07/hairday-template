import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.querySelector("#client")

const selectedDate = document.querySelector("#date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()
    

    try {
        // Pegando o nome do cliente
        const name = clientName.value.trim()

        // Pegando o elemento da hora
        const selectedHour = document.querySelector(".hour-selected")
        
        // Validando se o nome é diferente de vazio
        if(!name){
            return alert("Informe o nome do cliente!")
        }
        // Validando se a hora é diferente de vazio
        if(!selectedHour){
            return alert("Selecione a hora!")
        }
        // Transformando a hora em um unico numero
        const [hour] = selectedHour.innerText.split(":")

        // adicionando a hora
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //criando um id
        const id = new Date().getTime()
        
        //realiza o post das informações
        await scheduleNew({
           id,
           name,
           when,
        })
        
        //atualiza a página
        schedulesDay()
            
        


    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
    
}