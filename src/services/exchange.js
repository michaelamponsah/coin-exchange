const baseURL = 'https://api.coingecko.com/api/v3/exchanges';

const getAllExchanges = async () => {
  let payload;
  try {
    const response = await fetch(baseURL);
    const exchanges = await response.json();

    if (!exchanges) {
      throw new Error('No data found :(');
    } else {
      payload = exchanges;
    }
  } catch (error) {
    return error;
  }
  return payload;
};

const exchangeService = {
  getAllExchanges,
};

export default exchangeService;
