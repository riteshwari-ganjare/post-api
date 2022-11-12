import React from 'react'

const Card = ({post}) => {
  return (
                <div className='container'>
                  <div>
            {/* <h3>ID: {post.id}</h3> */}
            <img src={post.image} alt=""/>
            <h4>Title: {post.title}</h4>
            <h3>{post.price}</h3>
            </div>
        </div>
    
  )
}

export default Card