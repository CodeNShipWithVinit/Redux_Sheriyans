import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard';
import { clearCollection } from '../redux/features/collectionSlice';

const CollectionPage = () => {

  const collection=useSelector(state=>state.collection.items);
  const dispatch=useDispatch();

  const clearAll=()=>{
    dispatch(clearCollection);
  }

  return (
    <div className='overflow-auto px-6 py-6'>
      <div className='flex justify-between mb-6'>
        <h2 className='text-2xl font-medium'>Your Collection</h2>
        <button onClick={()=>{
          clearAll()
        }}
        className='active:scale-95 transition cursor-pointer bg-red-600 px-8 py-3 text-xl font-medium rounded'>Clear Collection</button>
      </div>

      <div className="flex justify-start w-full flex-wrap gap-5 ">
      {collection.map((item,idx)=>(
        <div key={idx}>
          <CollectionCard item={item}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CollectionPage