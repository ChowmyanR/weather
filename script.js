async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'c96b1114ea05e9abf222ecafd05a50e4';  // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weather = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
    document.getElementById('weather').innerHTML = weather;
}
