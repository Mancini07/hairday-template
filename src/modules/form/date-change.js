import { schedulesDay } from "../schedules/load"

const date = document.querySelector("#date")


date.addEventListener("change", (event)=>{
    event.preventDefault()
    
    schedulesDay()
})

