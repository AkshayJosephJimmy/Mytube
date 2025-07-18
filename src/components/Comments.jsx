import React from 'react'
import { useState } from 'react';

function Comments() {
    const [comments, setComments] = useState([
  { id: 1, user: "John", text: "Nice video!" },
  { id: 2, user: "Jane", text: "Very informative." }
]);

  return (
  <div>
    <h3>Comments</h3>
    {comments.map((c) => (
      <div key={c.id}>
        <strong>{c.user}</strong>
        <p>{c.text}</p>
      </div>
    ))}
  </div>
);
}

export default Comments
