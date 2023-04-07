import { searchUser } from "./services/user.js"
import { searchRepos } from "./services/repositories.js"
import { searchEvents } from "./services/userEvents.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', ()=>{
    const userNameInputValue = document.getElementById('input-search').value
    if (validateEmptyInput(userNameInputValue)) return
    getUserData(userNameInputValue)
})

document.getElementById('input-search').addEventListener("keyup", (e)=> {
    const userNameInputValue = e.target.value

    if (e.key === "Enter" && !validateEmptyInput(userNameInputValue)) {
        getUserData(userNameInputValue)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome de usuário do GitHUb')
        return true
    }
}

async function getUserData (userName){
    const userResponse = await searchUser(userName)

    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }

    const reposResponse = await searchRepos(userName)
    const eventsResponse = await searchEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(reposResponse)
    user.setEvents(eventsResponse)
   

    screen.renderUser(user)
}