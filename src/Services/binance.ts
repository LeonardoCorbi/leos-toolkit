import axios from 'axios'
import querystring from 'querystring'
import crypto from 'crypto'

const API_KEY= 'lqs0zegr0z5NCAMNGxgKYWgqSWsdfxkFSUw2bq8OLfGEOWVLDGKdnJgcR0ye5w6D'
const SECRET_KEY= 'dsTrEFOd7eB8VzidpF7cMCNgqbq9jNvVFqfA7H5b9MiRQAAfbhdGyaxFvzjsgYgX'
const API_URL= 'https://api.binance.com/api/v3'

const publicCall = async (path: string, payload?: any, method = 'GET') => {
  let qs = payload ? `?${querystring.stringify(payload)}` : '' 
  
  try {
    let { data } = await axios({
      method: method as any,
      url: `${API_URL}${path}${qs}`
    })

    return data
  } catch (err) {
    console.error(err)
  }
}

const privateCall = async (path: string, payload = {}, method = 'GET' ) => {
  let timestamp = Date.now()
  let signature = crypto.createHmac('SHA256', SECRET_KEY)
    .update(`${querystring.stringify({...payload, timestamp})}`)
    .digest('hex')
  
  let newData = {...payload, timestamp, signature}
  let qs = `?${querystring.stringify(newData)}`
  
  try {
    let { data } = await axios({
      method: method as any,
      url: `${API_URL}${path}${qs}`,
      headers: { 'X-MBX-APIKEY': API_KEY }
    })

    return data
  } catch (err) {
    console.error(err)
  }
}

export const time = async () => {
  return publicCall('/time')
}

export const depth = async (symbol: string, limit: number = 5) => {
  return publicCall('/depth', { symbol, limit })
}

export const trades = async (symbol: string, limit: number = 5) => {
  return publicCall('/trades', { symbol, limit })
}

export const average = async (symbol: string) => {
  return publicCall('/avgPrice', { symbol })
}

export const exchangeInfo = async () => {
  return publicCall('/exchangeInfo')
}



export const accountInfo = async () => {
  return privateCall('/account')
}


export const newOrder = async (symbol: string, quantity: number, price: number, side: string = "BUY", type = 'MARKET') => {
  let data = { symbol, side, type, quantity, price, timeInForce: 'GTC'}
  
  if(!price) delete data.price
  if(type !== 'LIMIT') delete data.timeInForce

  return privateCall('/order', data, 'POST')
}
