import dayjs from "dayjs";
import { apiConfig } from "./api.config.js";

export async function scheduleFetchByDay({date}) {
    
    try {
        // chama a API
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)

        //transforma os dados em JSON
        const data = await response.json()

        // filtra a data em agendamento
        const dailySchedule = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        //retorna agendamentos do dia
        return dailySchedule
    } catch (error) {
        console.error(error)
        alert("Não foi possível buscar o agendamento do dia selecionado")
    }
}