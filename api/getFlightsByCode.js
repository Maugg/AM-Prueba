const getFlightsByCode = async (code) => {
  const response = await fetch(`https://run.mocky.io/v3/dc9888ff-5d25-4ace-ba7d-05329c440194`, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data.flights && data.flights.find(element => element.code === code);
}

export default getFlightsByCode