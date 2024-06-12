const url = "./travel_recommendation_api.json"
const beaches = ["beach", "beaches"] 
const countries = ["country", "countries"]
const temples = ["temple", "temples"]


function finding(userInput){
    if(beaches.find(element => element == userInput)){
        return "beaches"
    } else if (countries.find(element => element == userInput)){
        return "countries"
    } else if(temples.find(element => element == userInput)){
        return userInput
    } else {
        alert("Not found. Please try a different search.")
    }
}

document.getElementById('searchBtn').addEventListener('click', (event) => {
    event.preventDefault()
    
    let userInput = document.getElementById('searchInput').value
    userInput = userInput.toLowerCase()
    let search = finding(userInput)
    if(search != undefined){
            getData(search)
    }
})

function getData(element){
    fetch(url)
            .then(response => response.json())
            .then(data => {
                let container = document.getElementById('container')
                let dataHTML = data[element].forEach(element => `<h1>Visit ${element.name}!</h1>
                                                                 <p>${element.description}</p>`
            )
            container.innerHTML = dataHTML
        })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
}