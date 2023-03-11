import { useState, useEffect } from 'react'
import './App.css'
import products from './products.json'
import Header from './components/Header'
import Product from './components/Product'
import Basket from './components/Basket'

function App() {

  const [money, setMoney] = useState(128000000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * products.find(product => product.id === item.id).price)
      }, 0)
    )
    console.log(basket);
  }, [basket, total])

  return (
    <div className='container'>
      <Header total={total} money={money} />

      <div className="container products">
        {products.map(product => (
          <Product total={total} money={money} key={product.id} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </div>
      {total > 0 && <Basket resetBasket={resetBasket} total={total} basket={basket} />}

    </div>
  );
}

export default App;
