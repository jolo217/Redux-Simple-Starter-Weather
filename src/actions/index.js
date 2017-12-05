import axios from 'axios';

const API_KEY = '64ad006caf75d72688b6656cf50d8bd7';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}