import './CardImage.css'

const CardImage= ({label})=>{

    return(
<div className='card-Image'> <img src={label} width='100%' height='100%'/></div>
    )
}
export default CardImage;