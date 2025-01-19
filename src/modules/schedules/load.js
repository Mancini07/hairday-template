import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { openingHours } from "../../utils/opening-hours";
import { hoursload } from "../form/hours-load";
import { scheduleShow } from "./show";

const selectedDate = document.querySelector("#date")

export async function schedulesDay(){
    //Obtém data do input
    const date = selectedDate.value

    //obtém agendamentos conforme data selecionada
    const dailySchedule = await scheduleFetchByDay({date})

    //Exibe os agendamentos na lista
    scheduleShow({dailySchedule})   

    //Renderiza as horas disponíveis
    hoursload({date, dailySchedule})
}