import { apiConfig } from "./api.config";

export async function scheduleNew({name,id,when}){
    try {
        // realiza o metodo post na API
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, name, when}),
        })
        alert("Agendamento realizado com sucesso!")

    } catch (error) {
        console.log(error);
        alert("Não foi possível agendar. Tente novamente mais tarde.")

    }
}