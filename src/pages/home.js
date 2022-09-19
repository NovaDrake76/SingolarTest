import React, {useState, useEffect} from "react"
import { Helmet } from "react-helmet"


const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])


  return (
    <>
      <Helmet>
        <title>Home | SingolarTest</title>
      </Helmet>
      <div>
        <h1>Home</h1>
        <div>
            {/* {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    </div>
            ))} */}
      </div>      </div>

    </>
  )
}

export default Home
