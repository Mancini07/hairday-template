import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { openingHours } from "../../utils/opening-hours";
import { hoursload } from "../form/hours-load";
import { scheduleShow } from "./show";

const selectedDate = document.querySelector("#date")

export async function schedulesDay(){
    //Obtém data do input
    const date = selectedDate.value

    //busca agendamento na API
    const dailySchedule = await scheduleFetchByDay({date})
    //Exibe os agendamentos
    scheduleShow({dailySchedule})   

    //Renderiza as horas disponíveis
    hoursload({date, dailySchedule})
}