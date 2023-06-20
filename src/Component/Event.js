import React, { useEffect ,useState} from 'react'

const Event = () => {
    const [posts,setposts]=useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts) => setposts(posts.slice(0, 10)))
    });
    return (
        <div>
            {posts.map((post) => (
                <div>
                    <h1 style={{backgroundColor:"#f0e3c0", color:"#0202f5" }}>{post.title}</h1>
                    <p style={{backgroundColor:"#f0d17f",color:"#f50202" }}>{post.body}</p>
                </div>
    
    ))}
    </div>
    );
};


export default Event