

//Function to get information from Weather API:
const getData = async (cityName) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=11275db48a0a07d51b8e9ff2c402f2ec`);
        // console.log(response);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Function to get image search      
// const getImage = async (cityName) => {
//     try {
//         const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=6aOZQ_fayER2HYYNRLXKJyghNQ8iZrbkPd5d0gYsFHk`);
//         // console.log(response);
//         // console.log(response.data);
//         return response.data
//     } catch (error) {
//         console.log(error);
//     }
// }

// Set up html search
const city = document.querySelector("#city")
const search = document.querySelector("#search-btn")

// Set up Event Listener to get information from API:
search.addEventListener("click", async (event) => {
    console.log("search button clicked")
    console.dir(city.value)
    event.preventDefault()
    // Get result data:
    const result = await getData(city.value)
    console.log(result)
    // const image_result = await getImage(city.value)
    // console.log(image_result)

    // P1 results
    const high_c = result.main.temp_max
    console.log(high_c)
    const high = convert(high_c)
    const low_c = result.main.temp_min
    console.log(low_c)
    const low = convert(low_c)
    const forecast = result.weather[0].main
    console.log(forecast)
    const humidity = result.main.humidity
    console.log(humidity)
    //const photo = image_result.results[0].urls.regular
    

    //document.getElementById("body-image").innerHTML = `<img src=${photo}/>`
    document.getElementById("city-text").innerHTML = `${city.value}`
    document.getElementById("high").innerHTML = `${high}`
    document.getElementById("low").innerHTML = `${low}`
    document.getElementById("forecast").innerHTML = `${forecast}`
    document.getElementById("humidity").innerHTML = `${humidity}`

})

// Convert to Farenheit
const convert = (K) => {
    let F = (K - 273.15) * 1.8 + 32
    return Math.round(F)
}