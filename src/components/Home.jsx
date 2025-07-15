import React, { use } from 'react'
import SideBar from './SideBar'
import Thumbnail from './Thumbnail'


function Home() {
const [videos,setVideos]=React.useState([]);
const api_key='AIzaSyChybMFGahJyBPOveab8QHXw9m9MMVZ7-w';
const api_url=`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${api_key}`;
React.useEffect(() => {

   const fetchVideos=async ()=>{
    const res=await fetch(api_url)
    const data=await res.json();
    setVideos(data.items);
   }
   fetchVideos();

},[]);
console.log(videos);
    
  return (
    <div className='flex '>
        
        
        <SideBar />
            <div className='flex flex-wrap gap-2'>

      
      {videos.map((video)=> <Thumbnail key={video.id} value={video} />)}
            </div>
              
    </div>
  )
}

export default Home



//AIzaSyChybMFGahJyBPOveab8QHXw9m9MMVZ7-w
//https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=YOUR_API_KEY
