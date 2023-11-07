import './CardButton.css'
const CardButton =  ({onClick})=> {
return(
<div className='card-button'><button onClick={onClick} className='btn'>Add to Cart</button></div>   
)
}
export default CardButton;