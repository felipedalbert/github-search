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

async function user(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

async function repos(userName){
    const response = await fetch(`https://api.github.com/users/${userName}/repos`)
    return await response.json()
}

function getUserProfile(userName){
    user(userName).then(userData =>{

        repos(userName).then(reposData => console.log(reposData))

        let userInfo = `
        <img src="${userData.avatar_url}" alt="Pic profile">
        <div class="data">
            <h1>${userData.name ?? 'Não possuí nome cadastrado 🥺'}</h1>
            <p>${userData.bio ?? 'Não possuí bio cadastrada 😢'}</p>
        </div>
    `
    document.querySelector('.profile-data').innerHTML = userInfo
    })

}

function getUserRepositories(userName){
    repos(userName).then(reposData =>{
        let repositoriesItens = ""
        reposData.forEach(repo =>{
            repositoriesItens += `<li><a href="${repo.html_url}" target="blank">${repo.name}</a></li>`
        })

        document.querySelector('.profile-data').innerHTML += `
            <div class="info">
                <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                </div>
            </div>
            
        `
    })
}