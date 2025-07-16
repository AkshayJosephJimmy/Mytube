import React, { use } from 'react'
import SideBar from './SideBar'
import Thumbnail from './Thumbnail'
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../utils/videoSlice';


function Home() {

//const api_key='AIzaSyChybMFGahJyBPOveab8QHXw9m9MMVZ7-w';
//const api_url=`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${api_key}`;
const dispatch=useDispatch();
const {videos,loading,error}=useSelector((state)=>state.video);

React.useEffect(() => {
dispatch(fetchVideos());
   

},[dispatch]);
 if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading videos</p>;
    
  return (
    <div className='flex '>
        
        
        <SideBar />
            <div className='flex flex-wrap gap-2'>

      
      {videos.map((video)=> <Thumbnail key={video.id} video={video} />)}
            </div>
              
    </div>
  )
}

export default Home



//AIzaSyChybMFGahJyBPOveab8QHXw9m9MMVZ7-w
//https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=YOUR_API_KEY
