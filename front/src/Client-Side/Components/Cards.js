
// import dncwlkfvjwlk
import '../Styles/Carts.css'
import Button from './MainButton'

const Cards = (prop)=>{
    const {children} = prop

    // console.log("fromcard to you : p, ", prop.id)
    return(
        <div className="Home-Cart">
            <img src={prop.image}/>
            <p className="Home-Product-Name">{prop.name}</p>
            <p className="Home-Product-Description">
                {prop.description}
            </p>
            <span>{children}</span>

        </div>
            
    )
}

export default Cards