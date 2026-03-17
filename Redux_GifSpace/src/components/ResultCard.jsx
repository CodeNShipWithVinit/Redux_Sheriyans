import React from 'react'

const ResultCard= ({item}) => {

    const addToCollection=(item)=>{
        const oldData=JSON.parse(localStorage.getItem('collection')) || [];
        console.log(oldData);
        const newData=[...oldData,item];
        localStorage.setItem('collection',JSON.stringify(newData));
    }


  return (
    <div className='w-[18vw] h-50 relative bg-white rounded-xl overflow-hidden'>
        <a target='_blank' className='h-full' href={item.url}>
            {item.type==='photo'?<img  className='h-full w-full object-cover object-center' src={item.src} alt="" />:''}
            {item.type==='video'?<video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} alt=""></video>:''}
        </a>
        <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
            <h2 className='text-md font-semibold capitalize  line-clamp-2 overflow-hidden'>{item.title}</h2>
            <button onClick={()=>{addToCollection(item)}} className='bg-green-500 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'>Save</button>
        </div>

    </div>
  )
}

export default ResultCard