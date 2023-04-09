const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
        this.userProfile.classList.remove('active')
        this.userProfile.innerHTML = `<img class="loading" src="src/images/loading.svg">`
        
        setTimeout(() => {
            this.userProfile.classList.add('active')

            this.userProfile.innerHTML = 
            `
                <div class="info">
                    <img src="${user.avatarUrl}" alt="Pic profile">
                    <div class="data">
                        <h1><a href="${user.url}" target="blank">${user.name ?? 'Não possuí nome cadastrado 🥺'}<a></h1>
                        <p>${user.bio ?? 'Não possuí bio cadastrada 😢'}</p>
                        <p class="follow-info">👥 <span>${user.followers}</span> seguidores · <span>${user.following}</span> seguindo</p>
                    </div>
                </div> 
            
            `
        
            let repositoriesItens = ''
            
            if(user.repositories.length > 0){
                user.repositories.forEach(repo => repositoriesItens += `
                    <li>
                        <a href="${repo.html_url}" target="blank">
                            <div class="repo-name">${repo.name}</div>

                            <div class="info-repo">
                                <div class="itens-info-repo">🍴 ${repo.forks_count}</div>
                                <div class="itens-info-repo">🌟 ${repo.stargazers_count}</div>
                                <div class="itens-info-repo">👀 ${repo.watchers_count}</div>
                                <div class="itens-info-repo">👨‍💻 ${repo.language}</div>
                            </div>
                        </a>
                        
                    </li>
                
                `)

                document.querySelector('.profile-data').innerHTML += `
                    <div class="repositories section">
                        <h2>Repositórios</h2>
                        <ul>${repositoriesItens}</ul>
                    </div>
                `
            }

            if(user.events.length > 0){

                let eventItens

                user.events.forEach(userEvent =>{

                    if(['CreateEvent', 'PushEvent'].includes(userEvent.type)){
                        eventItens += `<li><span>${userEvent.repo.name}</span> - ${userEvent.payload.commits[0].message}</li>`
                    }else{
                        return
                    }
                })

                document.querySelector('.profile-data').innerHTML += `
                    <div class="user-events">
                        <h2>Commits recentes</h2>
                        <ul>${eventItens}</ul>
                    </div>
                `
            }

        }, 1700);
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3"
    }
}

export {screen}