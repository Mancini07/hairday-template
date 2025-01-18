import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"


const hour = document.querySelector("ul")

export function hoursload({date, dailySchedule}) {
    //Limpa o HTML
    hour.innerHTML = ""

    const unAvailableHours = dailySchedule.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    )

    //Propriedade que percorre a lista de horários e com base na data selecionada informa os horários disponiveis apenas com base no horário após o dia de hoje
    const opening = openingHours.map((hours)=>{
        const [scheduleHour] = hours.split(":")

        // verifica os horários disponíveis após o dia de hoje
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        const available = !unAvailableHours.includes(hours) && !isHourPast



 
        return {
            hours,
            available,
        }
    })

    
    //Cria lista de horários disponíveis com base em horário de funcionamento
    opening.forEach(({hours, available})=>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available? "hour-available": "hour-unavailable")
        li.textContent = hours

        if(hours === "9:00"){
            hoursHeaderAdd("Manhã")
        } else if(hours === "13:00"){
            hoursHeaderAdd("Tarde")
        } else if(hours === "18:00"){
            hoursHeaderAdd("Noite")
        }

        hour.append(li) 
    })

    //Captura o horário clicado
    hoursClick()
    
}

// Cria lista de período e adiciona em ul
function hoursHeaderAdd(title){
    const liHeader = document.createElement("li")
    liHeader.classList.add("hour-period")
    liHeader.textContent = title

    hour.append(liHeader)
}