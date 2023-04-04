import { searchUser } from "./services/user.js"
import { searchRepos } from "./services/repositories.js"

import { user } from "./objects/user"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', ()=>{
    const userNameInputValue = document.getElementById('input-search').value
    getUserData(userNameInputValue)
})

document.getElementById('input-search').addEventListener("keyup", (e)=> {
    const userNameInputValue = e.target.value

    if (e.key === "Enter") {
        getUserData(userNameInputValue)
    }
})

async function getUserData (userName){

    const userResponse = await searchUser(userName)
    const reposResponse = await searchRepos(userName)

    user.setInfo(userResponse)
    user.setRepositories(reposResponse)

    screen.renderUser(user)

}