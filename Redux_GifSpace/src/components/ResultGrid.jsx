import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTabs, results, loading, error } = useSelector(
    (store) => store.search,
  );
  useEffect(() => {
    if(!query)
    {
        return;
    }
    const getData = async () => {
      try {
        dispatch(setLoading())
        let data = [];
        if (activeTabs == "Photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url:item.links.html
          }));
        }
        if (activeTabs == "Videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url:item.url
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error));
      }
    };
    getData();
  }, [query, activeTabs]);

  if(error)
  {
    return <h1>Error</h1>
  }
  if(loading)
  {
    return <h1>Loading...</h1>
  }

  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-5">
        {
            results.map((item,idx)=>(
                 <div key={idx}>
                    <ResultCard item={item}/>
                 </div>
            ))
        }
    </div>
  );
};

export default ResultGrid;
