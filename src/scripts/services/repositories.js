import { baseUrl, reposQtd } from "./../variables.js"

async function searchRepos(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${reposQtd}`)
    return await response.json()
}

export {searchRepos}