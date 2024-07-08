const apiKey = '32f5a68131dd43268a4112659220306'
const baseUrl = 'http://api.weatherapi.com/v1'
const requests = {
    forecast: '/forecast.json'
}

const getTodayApi = `${baseUrl}${requests.forecast}?key=${apiKey}&q=hanoi&lang=en`

const getConditionSymbol = (conditionName) => {
    const allConditionSymbols = {
        'Partly cloudy': '⛅',
        'Sunny': '☀️',
        'Cloudy': '☁️',
        'Patchy rain possible': '⛈️',
        'Moderate rain': '🌧️',

    }
    const foundSymbol = allConditionSymbols[conditionName]
    return foundSymbol || '';
}

const getToday = async () => {
    const response = await fetch(getTodayApi);
    const result = await response.json();
    const {day: {mintemp_c, maxtemp_c, condition}, astro} = result.forecast.forecastday[0];
    console.log(result)
    return `# ${result.location.name} | ${mintemp_c}°C - ${maxtemp_c}°C | ${condition.text} ${getConditionSymbol(condition.text)}`
}

getToday()

const functions = {
    getToday
}

module.exports = (functionName) => {
    return functions[functionName]
}