import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import CardImage from './Components/CardImage/CardImage.jsx'
import CardCategory from './Components/CardCategory/CardCategory.jsx'
import CardPrice from './Components/CardPrice/CardPrice.jsx'
import CardButton from './Components/CardButton/CardButton.jsx'
import LoadingImage from './Components/LoadingImage/LoadingImg.jsx'
import CardParents from './Components/CardParents/CardParents.jsx'
import CardChild from './Components/CardChild/CardChild.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';


const App = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {

    axios.get('https://fakestoreapi.com/products/')
      .then(success => setProduct(success.data), setIsLoading(false))
      .catch(error => console.log(error),setIsLoading(false))
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(product);
const cartPlus = ()=>{
  setCount((prev)=>prev+1)
}

  return(
    <div>
<Navbar label={count}/>
<div  style={{height:'70px',border: '1px solid black'}}></div>
<div style={{textAlign:'center',fontFamily:'monospace',color:'cadetblue'}}><h1>All Api Store Card Rendering</h1></div>
<Container>
{
  isLoading ? <LoadingImage/>:
  <>
<CardParents label={product.map((e,i)=>{
return ( <CardChild key={i} label={
      <> 
  <CardImage label={e.image} />
  <CardCategory label={e.category} /><hr/>
  <CardPrice label={e.price}/>
  <CardButton onClick={cartPlus}/>
      </>
 }/>
    
)})} />
  </>
}
</Container>
  </div>
  )
}
export default App;