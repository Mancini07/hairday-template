import dayjs from "dayjs"

    //vincular elementos html período
    const periodMorning = document.querySelector("#period-morning")
    const periodAfternoon = document.querySelector("#period-afternoon")
    const periodNight = document.querySelector("#period-night")

export function scheduleShow({dailySchedule}) {

    try {
        //Limpa os elementos antes de iniciar
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        
        dailySchedule.forEach((schedule) => {
            //cria elementos html para lista ul
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")
            const cancelIcon = document.createElement("img")

            //personaliza e edita os elementos html
            item.setAttribute("data-id", schedule.id)
            name.textContent = schedule.name
            time.textContent = dayjs(schedule.when).format("HH:mm")
            cancelIcon.setAttribute("src","./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")
            cancelIcon.classList.add("cancel-icon")

            //adiciona os elementos dentro da lista
            item.append(time,name, cancelIcon)

            //converte a hora em numero
            const hours = dayjs(schedule.when).hour()
            
            //adiciona os elementos dentro da lista pai
            if (hours <= 12 ) {
                periodMorning.appendChild(item)
            }
            else if(hours >= 13 && hours <= 18){
                periodAfternoon.appendChild(item)
            }
            else{
                periodNight.appendChild(item)
            }
        })

    } catch (error) {
        console.log(error)
        alert("Não foi possível exibir lista de agendamento")
    }
    //criando elementos html

}