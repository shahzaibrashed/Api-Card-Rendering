import './CardPrice.css'

const CardPrice = ({label})=>{

    return(
        <div className='card-price'><p> Price : {label}$</p></div>
    )
}
export default CardPrice;