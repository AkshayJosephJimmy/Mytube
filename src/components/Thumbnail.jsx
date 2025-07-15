import React from 'react'

function Thumbnail() {
  return (
    <div className='w-70 h-60 bg-white shadow-lg rounded-lg p-4 flex flex-col items-start'>
        <img src="https://via.placeholder.com/150" alt="Thumbnail" className="w-full h-full rounded-lg shadow-md" />
        <h2 className="text-sm font-semibold mt-2">Video Title</h2>
        <p className="text-sm text-gray-600">Channel Name</p>
        <p className="text-sm text-gray-500">2M views </p>
        <p className="text-sm text-gray-500">1 week ago</p>
    </div>
  )
}

export default Thumbnail
