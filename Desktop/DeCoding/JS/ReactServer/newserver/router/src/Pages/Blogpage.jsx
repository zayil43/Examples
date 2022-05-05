import React, {useState, useEffect} from 'react'
import { Link,  useSearchParams } from 'react-router-dom';
import BlogFilter from '../Components/BlogFilter';


const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();


  const postQuery = searchParams.get('post') || ''
  // URL.ru/posts?post=abc&data= и т.д.
  // get получит всю часть после знака вопроса и вернёт нужное значение по нашему ключу 
  // т.е. там идёт ключ=значение&следующий ключ=значение следующего ключа и т.д.
  // & - напоминаю, что это амперсант 
  const latest = searchParams.has('latest')

  const startsFrom = latest ? 80 : 1
  

  
  useEffect(()=> {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  
  
  return (
    <div>
      <h1>Our News</h1>
      <BlogFilter postQuery={postQuery} latest ={latest} setSearchParams={setSearchParams} />
      <Link to='/posts/new' > Add new post</Link>
    {posts.filter(
      post => post.title.includes(postQuery) && post.id >=startsFrom
    ).map(post => (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <li>{post.title}</li>
      </Link>
    ))
    }
    </div>
  )
}

export default Blogpage