const url = "./travel_recommendation_api.json"
let elemDiv = document.getElementById('elemDiv')
const beaches = ["beach", "beaches"] 
const countries = ["country", "countries"]
const temples = ["temple", "temples"]


function finding(userInput){
    if(beaches.find(element => element == userInput)){
        return "beaches"
    } else if (countries.find(element => element == userInput)){
        return "countries"
    } else if(temples.find(element => element == userInput)){
        return "temples"
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
function resetSearch(){
    console.log('funca')
    elemDiv.innerText = ''
    elemDiv.innerText = "Please start a new search or click the HOME button to go back to the main page"
}

document.getElementById('resetSearch').addEventListener('click', () =>{
    if(elemDiv.innerText != ''){
        resetSearch()
    }
})