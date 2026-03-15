import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen w-full text-white bg-gray-950'>App
      <button className='bg-green-400 p-3 m-2' onClick={async()=>{
        const data=await fetchPhotos("cat");
        console.log(data.results);
      }}>Get Photos</button>


      <button className='bg-green-400 p-3 m-2' onClick={async()=>{
        const data=await fetchVideos("cat");
        console.log(data.videos);
      }}>Get Videos</button>
    </div>
  )
}

export default App