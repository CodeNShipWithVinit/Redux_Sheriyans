import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
    const Tabs=['Photos','Videos','Gifs'];
    const dispatch=useDispatch();
    const activeTab=useSelector((state)=>state.search.activeTabs)


  return (
    <div className='flex gap-5 p-10'>
        {Tabs.map((elem,idx)=>(
            <button
            className={`${activeTab===elem?'bg-blue-600':'bg-gray-600'} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
            onClick={()=>{
                dispatch(setActiveTabs(elem))
            }}
            key={idx}>{elem}</button>
        ))}
    </div>
  )
}

export default Tabs;