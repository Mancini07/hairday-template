import dayjs from "dayjs";
import { apiConfig } from "./api.config.js";

export async function scheduleFetchByDay({date}) {
    
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)
        const data = await response.json()
        const dailySchedule = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))
        return dailySchedule
    } catch (error) {
        console.error(error)
        alert("Não foi possível buscar o agendamento do dia selecionado")
    }
}