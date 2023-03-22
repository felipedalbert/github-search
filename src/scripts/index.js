async function user(){
    const response = await fetch('https://api.github.com/users/felipedalbert')
    return await response.json()
}

function getUserProfile(){
    user().then(userData =>{
        console.log(userData)
    })

    let userInfo = `
        <img src"${userData.avatar_url}" alt="Pic profile"/>
        <div class="data">
            <h1>${userData.name}</h1>
            <p>${userData.bio}</p>
        </div>
    `
}