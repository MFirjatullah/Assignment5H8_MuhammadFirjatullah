import React, { useEffect, useState } from 'react'
import './App.css';


function App() {
 const [data, setData,] = useState ([])


 
 useEffect(() => {
    fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}`)
    .then(response => response.json())
    .then(result => {
      console.log(result.rates)
      let rates = [
        {
          currency: 'CAD',
          exchange_rate: result.rates.CAD,
          we_buy: 1.05 * result.rates.CAD,
          we_sell: 0.95 * result.rates.CAD
        },{
          currency: 'IDR',
          exchange_rate: result.rates.IDR,
          we_buy: 1.05 * result.rates.IDR,
          we_sell: 0.95 * result.rates.IDR
        },{
          currency: 'JPY',
          exchange_rate: result.rates.JPY,
          we_buy: 1.05 * result.rates.JPY,
          we_sell: 0.95 * result.rates.JPY
        },{
          currency: 'CHF',
          exchange_rate: result.rates.CHF,
          we_buy: 1.05 * result.rates.CHF,
          we_sell: 0.95 * result.rates.CHF
        },{
          currency: 'EUR',
          exchange_rate: result.rates.EUR,
          we_buy: 1.05 * result.rates.EUR,
          we_sell: 0.95 * result.rates.EUR
        },{
          currency: 'GBP',
          exchange_rate: result.rates.GBP,
          we_buy: 1.05 * result.rates.GBP,
          we_sell: 0.95 * result.rates.GBP
        },
      ]
      setData(rates)
    })
   }, [])

  return (
    <>
    <table className='table'  border="1" cellPadding="10" cellSpacing="0">
      <tr>
        <th>Currency</th>
        <th>Exchange Rates</th>
        <th>We Buy</th>
        <th>We Sell</th>
      </tr>
      {
        data.map((rate, index) => {
          return(
            <tr key = {index}>
              <td>{rate.currency}</td>
              <td>{rate.exchange_rate}</td>
              <td>{rate.we_buy}</td>
              <td>{rate.we_sell}</td>
            </tr>
          )
        })
      }
    </table>
    </>
  )
}

export default App;
