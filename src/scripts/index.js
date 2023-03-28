import { searchUser } from "./services/user.js"
import { searchRepos } from "./services/repositories.js"

import { user } from "./objects/user"

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

function getUserProfile(userName){
    searchUser(userName).then(userData =>{

        let userInfo = `
        
        <div class="info">
            <img src="${userData.avatar_url}" alt="Pic profile">
            <div class="data">
                <h1>${userData.name ?? 'Não possuí nome cadastrado 🥺'}</h1>
                <p>${userData.bio ?? 'Não possuí bio cadastrada 😢'}</p>
            </div>
        </div>
        
    `
    document.querySelector('.profile-data').innerHTML = userInfo
    })

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