const getFlightsByOrigin = async (code, dateDeparture) => {
  const response = await fetch(`https://run.mocky.io/v3/dc9888ff-5d25-4ace-ba7d-05329c440194`, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  const responseWithDeparture = data.flightsOrigin && data.flightsOrigin.find(element => element.code === code)
  if(responseWithDeparture) {
    responseWithDeparture.date = dateDeparture
  }
  return responseWithDeparture && responseWithDeparture ;
}

export default getFlightsByOrigin;