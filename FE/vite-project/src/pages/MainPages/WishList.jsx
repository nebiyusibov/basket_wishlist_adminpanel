import { useContext } from "react"
import { MainContextWishlist } from "../../context/MainProvaiderWishlist"

function WishList() {
const {wishlist}=useContext(MainContextWishlist)

  return (
    <div>
       {wishlist.map((x)=>(
        <div key={x._id}>
          <img src={x.image} alt="" style={{width:"200px", height:"250px"}}/>
          <h3>{x.name}</h3>
          <h3>{x.price}</h3>
        </div>
      ))}
    </div>
  )
}

export default WishList
