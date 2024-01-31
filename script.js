async function getRate() {
	let response = await fetch("https://api.nbrb.by/exrates/rates/431", {
	headers: {
		"Accept": "application/json"
	}
})
	let cur_body = await response.json()
	let cur_rate = `$ ${cur_body.Cur_OfficialRate.toString().replace(".",",")}0000`.slice(0,8)
	let element = document.querySelector(".data-money") 
	element.textContent = cur_rate
}

async function get_weather() {
	resp = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=52.2319581&lon=21.0067249&appid=3d2197dafe6c10a788100c25f9bf6edf")
	body = await resp.json()
	weather = Math.round((body.main.temp-273.15)*10)/10
	element = document.querySelector(".data-weather")
	element.textContent = weather.toString()
}

let resp = getRate()
get_weather ()