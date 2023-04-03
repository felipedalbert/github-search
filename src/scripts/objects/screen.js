const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `
        
            <div class="info">
                <img src="${user.avatarUrl}" alt="Pic profile">
                <div class="data">
                    <h1>${user.name ?? 'Não possuí nome cadastrado 🥺'}</h1>
                    <p>${user.bio ?? 'Não possuí bio cadastrada 😢'}</p>
                </div>
            </div>

        `
    }
}

export {screen}