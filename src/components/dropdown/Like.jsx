import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className='like'id="like"
      onClick={handleLikeClick}
      style={{ color: liked ? 'red' : 'white' }}
    >
      <FaHeart />
      
    </div>
  );
}
export default LikeButton;
