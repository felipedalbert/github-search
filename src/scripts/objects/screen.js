const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
        this.userProfile.innerHTML = 
            `
                <div class="info">
                    <img src="${user.avatarUrl}" alt="Pic profile">
                    <div class="data">
                        <h1>${user.name ?? 'Não possuí nome cadastrado 🥺'}</h1>
                        <p>${user.bio ?? 'Não possuí bio cadastrada 😢'}</p>
                        <p class="follow-info">👥 <span>${user.followers}</span> seguidores · <span>${user.following}</span> seguindo</p>
                    </div>
                </div> 
            
            `
        
        let repositoriesItens = ""
        
        if(user.repositories.length > 0){
            user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="blank">${repo.name}</a></li>`)

            document.querySelector('.profile-data').innerHTML += `
                <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                </div>
            `
        }
     
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrados</h3"
    }
}


export {screen}