import exchangeService from '../services/exchange';

describe('Exchanges', () => {
  test('Gets the correct data', async () => {
    const data = await exchangeService.getAllExchanges();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
