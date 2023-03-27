import { baseUrl, reposQtd } from "./variables"

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

async function searchUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

async function searchRepos(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${reposQtd}`)
    return await response.json()
}

function getUserProfile(userName){
    searchUser(userName).then(userData =>{

        repos(userName).then(reposData => console.log(reposData))

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