import React from 'react'

function Thumbnail() {
  return (
    <div>
        <img src="https://via.placeholder.com/150" alt="Thumbnail" className="w-full h-auto rounded-lg shadow-md" />
        <h2 className="text-lg font-semibold mt-2">Video Title</h2>
        <p className="text-sm text-gray-600">Channel Name</p>
        <p className="text-xs text-gray-500">2M views </p>
        <p className="text-xs text-gray-500">1 week ago</p>
    </div>
  )
}

export default Thumbnail
