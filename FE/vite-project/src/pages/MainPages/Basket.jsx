import { useContext } from "react"
import { MainContext } from "../../context/MainProvaider"

function Basket() {
  const {basket,removeBasket,addBasket,decreaseBasket,getTotal}=useContext(MainContext)
  return (
    <div>
      {basket.map((x)=>(
        <div key={x._id}>
          <img src={x.image} alt="" style={{width:"200px", height:"250px"}}/>
          <h3>{x.name}</h3>
          <h3>{x.price}</h3>
          <button onClick={()=>removeBasket(x)}>delete</button> <br />
          <button onClick={()=>addBasket(x)}>increase</button>
          {x.count}
          <button onClick={()=>decreaseBasket(x)}>decrease</button>
        </div>
      ))}
      <div>total:{getTotal()}</div>
    </div>
  )
}

export default Basket
