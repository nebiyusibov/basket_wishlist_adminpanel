import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/MainProvaider"
import { MainContextWishlist } from "../../context/MainProvaiderWishlist"

function Home() {
  const {addBasket}=useContext(MainContext)
  const {isExist,addwishlist}=useContext(MainContextWishlist)


  const [product,setproduct]=useState([])

  async function getProduct() {
    const res=await fetch("http://localhost:3000/product")
    const data=await res.json()
    setproduct(data)
  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
      {product.map((x)=>(
        <div key={x._id} style={{border:"1px solid black", width:"220px"}}>
          <div onClick={()=>addwishlist(x)}>{isExist(x) ? <i className="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>}</div>
          <img src={x.image} alt="" style={{width:"200px", height:"250px"}}/>
          <h3>{x.name}</h3>
          <h3>{x.price}</h3>
          <button onClick={()=>addBasket(x)}>basket</button>
        </div>
      ))}
    </div>
  )
}

export default Home
