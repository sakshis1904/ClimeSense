const axios = require('axios');

async function FetchAPIdata(city) {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': 'a2b8cee08fmshf8ce534fdf59941p1031e5jsn95fae70bda7a',  // <-- USE ONLY THIS KEY
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const current = response.data.current;
    const location = response.data.location;

    // return a NEW fresh object
    return {
      Cloud: current.cloud,
      Time: location.localtime,
      UV: current.uv,
      Temp: current.temp_c,
      FeelsLike: current.feelslike_c,
      Wind: current.wind_mph,
      Pressure: current.pressure_mb,
      Visibility: current.vis_km,
      Gust: current.gust_mph,
      Location: `${location.name}, ${location.region}, ${location.country}`,
      Longitude: location.lon,
      Latitude: location.lat,
      WindDeg: current.wind_degree,
      WindDir: current.wind_dir,
      Precipitation: current.precip_in,
      Localtime: location.localtime,
      Humidity: current.humidity
    };

  } catch (error) {
    console.error("Weather API ERROR:", error.response?.data || error.message);
    return null;
  }
}

module.exports = { FetchAPIdata };
