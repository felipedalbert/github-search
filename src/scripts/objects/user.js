const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    url: '',
    repositories: [],
    followers: '',
    following: '',
    events: [],

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.url = gitHubUser.html_url
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },

    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        this.events = events
    }
    
}

export { user }