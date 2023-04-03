import { searchUser } from "./services/user.js"
import { searchRepos } from "./services/repositories.js"

import { user } from "./objects/user"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', ()=>{
    const userNameInputValue = document.getElementById('input-search').value
    getUserProfile(userNameInputValue)
    getUserRepositories(userNameInputValue)
})


document.getElementById('input-search').addEventListener("keyup", (e)=> {
    const userNameInputValue = e.target.value
    if (e.key === "Enter") {
        getUserProfile(userNameInputValue)
        getUserRepositories(userNameInputValue)
    }
})

async function getUserProfile(userName){

    const userResponse = await searchUser(userName)
    user.setInfo(userResponse)

    screen.renderUser(user)

}

function getUserRepositories(userName){
    searchRepos(userName).then(reposData =>{
        let repositoriesItens = ""
        reposData.forEach(repo =>{
            repositoriesItens += `<li><a href="${repo.html_url}" target="blank">${repo.name}</a></li>`
        })

        document.querySelector('.profile-data').innerHTML += `
            <div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>
        `
    })
}