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
                container.innerHTML = ''
                let elemDiv = document.getElementById('elemDiv')
                elemDiv.innerHTML = `<p class="pTitle">Visit ${data[element][0].name}</p>
                                        <br><br>
                                        <img src="${data[element][0].imageUrl}"
                                        <br><br>
                                        <p class="pRec">${data[element][0].description}</p>
                                        <br><br>
                                        <p class="pTitle">Visit ${data[element][1].name}</p>
                                        <br><br>
                                        <img id="img" src="${data[element][1].imageUrl}"
                                        <br><br>
                                        <p class="pRec">${data[element][1].description}</p>
                                        <br><br>
                                        <br><br>`                                                               
        })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
}