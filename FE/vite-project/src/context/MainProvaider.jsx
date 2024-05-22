import { createContext, useState } from "react"

export const MainContext=createContext()

function MainProvaider({children}) {
    const [basket,setbasket]=useState([])

    function addBasket(item) {
        const index=basket.findIndex((x)=>x._id === item._id)
        if (index !== -1) {
            basket[index].count++
            setbasket([...basket])
        }
        else{
            setbasket([...basket,{...item,count:1}])
        }
    }
    function decreaseBasket(item) {
        const index=basket.findIndex((x)=>x._id === item._id)
        if (basket[index].count > 1) {
            basket[index].count--
            setbasket([...basket])
        }
    }
  
    function removeBasket(item) {
        setbasket(basket.filter((x)=>x._id !== item._id))
    }

    function getTotal() {
        return basket.reduce((prev,initial)=>prev + (initial.price * initial.count),0).toFixed(2)
        
    }
  
  return (
    <div>
      <MainContext.Provider value={{basket,addBasket,removeBasket,decreaseBasket,getTotal}}>
        {children}
      </MainContext.Provider>
    </div>
  )
}

export default MainProvaider
