
import { RouterProvider } from 'react-router-dom'
import { router } from './ROUTERS/router'
import MainProvaider from './context/MainProvaider'
import MainProvaiderWishlist from './context/MainProvaiderWishlist'

function App() {

  return (
    <MainProvaider>
      <MainProvaiderWishlist>
        <RouterProvider router={router}></RouterProvider>
      </MainProvaiderWishlist>
    </MainProvaider>
  )
}

export default App
