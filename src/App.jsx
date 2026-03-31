
import { Suspense } from 'react'
import './App.css'
import Banner from './component/Homepage/Banner'
import Counter from './component/Homepage/Counter'
import Products from './component/Homepage/Products'
import NavBar from './component/navBar/NavBar'


const getProduct = async () =>{
  const res = await fetch("/products.json")
  return res.json()
}

function App() {

  const productPromise = getProduct()
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Counter></Counter>
    <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
      <Products productPromise={productPromise}></Products>
    </Suspense>
      
    </>
  )
}

export default App
