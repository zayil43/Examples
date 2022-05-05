import React, {useState,useEffect} from 'react'
import {useParams,Link, useNavigate} from 'react-router-dom'

const Singlepage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPosts] = useState(null);
    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true})
  
  useEffect(()=> {
    fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [id])

    console.log(useParams())
  return (
    <div>
        <button onClick={goBack}>Go back</button>
        {/* goHome вот так лучше не делать, т.к. лучше здесь использовать Link  */}
        <button onClick={goHome}>Go home</button> 
        {post && (
            <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${id}/edit`}>Edit this post </Link>
            </div>
        )}
    </div>
  )
}

export default Singlepage