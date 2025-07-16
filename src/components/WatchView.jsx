import React from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
function WatchView() {
const video=useSelector((state) => state.video.videos);
console.log(`${video} helo`)

const curretVideo=video.find((vid) => vid.id === useParams().id);


 




    const { id } = useParams();
    console.log(id);
  return (
    <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls  playing  width="100%"
        height="480px"/>
        <div>
            <p className="font-bold">{curretVideo.snippet.title}</p>
            <p>{curretVideo.snippet.description}</p>
            <p>{curretVideo.snippet.channelTitle}</p>
            <p>{curretVideo.statistics.viewCount} views</p>
            <p>{curretVideo.statistics.likeCount} likes</p>
            <p>{curretVideo.statistics.dislikeCount} dislikes</p>
        </div>
      
    </div>
  )
}

export default WatchView
