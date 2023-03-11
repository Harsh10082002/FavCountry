let form = document.getElementById("formData");
let detail = document.getElementById("detail");
let heading = document.getElementById("heading");
let formData = document.getElementById("formData");

heading.style.display='flex'
heading.style.justifyContent='center'
heading.style.paddingTop='16%'
heading.style.color='#3d64e6'

formData.style.display='flex'
formData.style.justifyContent='center'
formData.style.padding='3% 0'

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var countryName = document.getElementById("country");
    
    fetch(`https://restcountries.com/v3.1/name/${countryName.value}?fullText=true`).then((response)=>{
    return response.json()
    }).then((result)=>{

        heading.style.paddingTop='1.7%'
        formData.style.padding='2% 0'

        detail.style.margin='0 30px'
        detail.style.background='rgb(202, 217, 235)'
        detail.style.borderRadius='0.62em'

        var flag=result[0].flags.png
        var img = document.querySelector('.image')
        img.src=flag;
        
        var name = result[0].name.common
        var ofname = result[0].name.official
        var capital = result[0].capital[0]
        var continent = result[0].region
        var population = result[0].population
        var area = result[0].area
        
        var currenciesName = result[0].currencies[Object.keys(result[0].currencies)].name
        var currenciesSymbol = result[0].currencies[Object.keys(result[0].currencies)].symbol


        document.querySelector('.name').innerHTML=name
        document.querySelector('.officialName').innerHTML=`<h5 class='side-key' >Official Name:</h5> <span class='side-val'>${ofname}</span>`
        document.querySelector('.capital').innerHTML=`<h5 class='side-key' >Capital:</h5> <span class='side-val'>${capital}</span>`
        document.querySelector('.continent').innerHTML=`<h5 class='side-key' >Continent:</h5> <span class='side-val'>${continent}</span>`
        document.querySelector('.population').innerHTML=`<h5 class='side-key' >Population:</h5> <span class='side-val'> ${population}</span>`
        document.querySelector('.area').innerHTML=`<h5 class='side-key' >Area:</h5> <span class='side-val'> ${area}</span>`
        document.querySelector('.currency').innerHTML=`<h5 class='side-key' >Currency:</h5> <span class='side-val'> ${currenciesName} (${currenciesSymbol})</span>`

        for(i in result[0].languages){
            all= result[0].languages[i]
            console.log(all);
            document.querySelector('.lang').innerHTML=`<h5 class='side-key' >Common Language:</h5> <span class='side-val'> ${all}</span>`
        }
    })

});