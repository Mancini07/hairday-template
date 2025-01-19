import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

// obtém lista ul de agendamentos
const hour = document.querySelector("ul")

export function hoursload({date, dailySchedule}) {
    //Limpa o HTML
    hour.innerHTML = ""

    //transforma data de agendamento apenas em horas e minutos
    const unAvailableHours = dailySchedule.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    )

    //Propriedade que percorre a lista de horários e com base na data selecionada informa os horários disponiveis apenas com base no horário após o dia de hoje
    const opening = openingHours.map((hours)=>{

        // obtém apenas a hora sem minutos
        const [scheduleHour] = hours.split(":")

        // Adiciona a hora na data e verifica se esta hora é antes do dia e hora atual
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        // avalia se as horas disponiveis que não foram agendadas e que não estão no passado
        const available = !unAvailableHours.includes(hours) && !isHourPast



        //retorna horas e horarios disponiveis
        return {
            hours,
            available,
        }
    })

    
    //Cria lista de horários disponíveis com base em horário de funcionamento
    opening.forEach(({hours, available})=>{

        //cria elemento lista
        const li = document.createElement("li")

        //adiciona classe hora em lista
        li.classList.add("hour")
        
        //caso o horário esteja disponível adiciona hour-available
        li.classList.add(available? "hour-available": "hour-unavailable")

        //adiciona horário em lista
        li.textContent = hours

        //separa em categorias os horários
        if(hours === "9:00"){
            hoursHeaderAdd("Manhã")
        } else if(hours === "13:00"){
            hoursHeaderAdd("Tarde")
        } else if(hours === "18:00"){
            hoursHeaderAdd("Noite")
        }

        //adiciona lista em lista pai UL
        hour.append(li) 
    })

    //Captura o horário clicado
    hoursClick()
    
}

// Cria lista de período e adiciona em ul
function hoursHeaderAdd(title){

    //cria elemento li
    const liHeader = document.createElement("li")
    
    // adiciona classe hour-period
    liHeader.classList.add("hour-period")

    // adiciona texto ao elemento
    liHeader.textContent = title

    // adiciona o elemento em lista
    hour.append(liHeader)
}