document.getElementById('btn-search').addEventListener('click', ()=>{
    const userNameInputValue = document.getElementById('input-search').value
    getUserProfile(userNameInputValue)
})


document.getElementById('input-search').addEventListener("keyup", (e)=> {
    const userNameInputValue = e.target.value
    if (e.key === "Enter") {
        getUserProfile(userNameInputValue)
        console.log('oi')
    }
})

async function user(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

function getUserProfile(userName){
    user(userName).then(userData =>{
        console.log(userData)

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
