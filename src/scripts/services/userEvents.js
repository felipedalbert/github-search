import { baseUrl, eventsQtd } from "./../variables.js"

async function searchEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQtd}`)
    return await response.json()
}

export {searchEvents}