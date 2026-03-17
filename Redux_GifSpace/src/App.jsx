import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CollectionPage from "./pages/CollectionPage"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-gray-950'>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
    </div>
  )
}

export default App