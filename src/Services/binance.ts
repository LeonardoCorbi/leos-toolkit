import axios from 'axios';
import querystring from 'querystring';
import crypto from 'crypto';

const API_KEY = 'lqs0zegr0z5NCAMNGxgKYWgqSWsdfxkFSUw2bq8OLfGEOWVLDGKdnJgcR0ye5w6D';
const SECRET_KEY = 'dsTrEFOd7eB8VzidpF7cMCNgqbq9jNvVFqfA7H5b9MiRQAAfbhdGyaxFvzjsgYgX';
const API_URL = 'https://api.binance.com/api/v3';

const publicCall = async (path: string, payload?: any, method = 'GET') => {
  const qs = payload ? `?${querystring.stringify(payload)}` : '';

  try {
    const { data } = await axios({
      method: method as any,
      url: `${API_URL}${path}${qs}`,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

const privateCall = async (path: string, payload = {}, method = 'GET') => {
  const timestamp = Date.now();
  const signature = crypto.createHmac('SHA256', SECRET_KEY)
    .update(`${querystring.stringify({ ...payload, timestamp })}`)
    .digest('hex');

  const newData = { ...payload, timestamp, signature };
  const qs = `?${querystring.stringify(newData)}`;

  try {
    const { data } = await axios({
      method: method as any,
      url: `${API_URL}${path}${qs}`,
      headers: { 'X-MBX-APIKEY': API_KEY },
    });

    return data;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

export const time = async () => publicCall('/time');

export const depth = async (symbol: string, limit: number = 5) => publicCall('/depth', { symbol, limit });

export const trades = async (symbol: string, limit: number = 5) => publicCall('/trades', { symbol, limit });

export const average = async (symbol: string) => publicCall('/avgPrice', { symbol });

export const exchangeInfo = async () => publicCall('/exchangeInfo');

export const accountInfo = async () => privateCall('/account');

export const newOrder = async (symbol: string, quantity: number, price: number, side: string = 'BUY', type = 'MARKET') => {
  const data = {
    symbol, side, type, quantity, price, timeInForce: 'GTC',
  };

  if (!price) delete data.price;
  if (type !== 'LIMIT') delete data.timeInForce;

  return privateCall('/order', data, 'POST');
};
