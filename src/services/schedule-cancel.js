import { apiConfig } from "./api.config.js";

export async function scheduleCancel({id}){
    try {
        // chama API com metodo delete
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: "DELETE",
        })
        alert("Agendamento cancelado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento")
    }

}