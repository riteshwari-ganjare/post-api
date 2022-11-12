import axios from 'axios';
import Card from './Card'
import React, { useState,useEffect } from 'react'

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
     const url='https://fakestoreapi.com/products';
     axios.get(url)
     .then(res=>{
        setPosts(res.data)
     console.log(res.data)
     })
     .catch(err=>{
        console.log(err)
     })
    }, [])
    
 
  return posts.map(post => <Card key={post.id} post={post} />)
}
export default Post;
