import './Mobile.css'

function Mobile(props){
    return(
        <div className="container">
            <div id="image">
                <img src={props.src} alt="image not available" />
         

            </div>
            <div id="details">
                <h3>{props.name}</h3>
                <ul>
                    <li>{props.spec1}</li>
                    <li>{props.spec2}</li>
                    <li>{props.spec3}</li>
                    <li>{props.spec4}</li>
                </ul>
            </div>
            <div id="price">
                <h2>₹{props.price}</h2>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" width='120px'/>

            </div>

        </div>  
        
    )
}

export default Mobile;