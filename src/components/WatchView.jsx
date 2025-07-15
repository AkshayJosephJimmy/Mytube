import React from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
function WatchView() {
    const { id } = useParams();
    console.log(id);
  return (
    <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=2qCpY38ompo`} controls  playing  width="100%"
        height="480px"/>
      
    </div>
  )
}

export default WatchView
//https://www.youtube.com/watch?v=${id}