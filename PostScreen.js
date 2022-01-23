import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './PostScreen.css'
export const PostScreen = ({ params }) => {
    const { state } = useLocation();
    let [post, setPost] = useState([])
    useEffect(() => {
        fetchData(state.id)
    }, [state.id])

    const fetchData = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
            .catch((err) => {
                console.log(err)
            })
    }
let navigate = useNavigate()
    return (
        <div >
            <button style={{marginTop:20,marginLeft:20}} onClick={()=>{navigate('/user')}}>Go Back</button>
            <h2 className='postContainer'>{state.name} Posts</h2>

            {
                post?.map((item , index)=>{
                    return(
                        <div className='postView' key={index}>
                        <div style={{ display: 'flex', alignItems: 'center',marginTop:5,marginBottom:5 }}>
                            <h3 style={{margin:0,padding:0}}>Post no:</h3>
                            <p style={{margin:0,padding:0}}>{index+1}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' ,marginTop:5,marginBottom:5}}>
                            <h3 style={{margin:0,padding:0}}>Title:</h3>
                            <p style={{margin:0,padding:0}}>{item?.title}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' ,marginTop:5,marginBottom:5}}>
                            <h3 style={{margin:0,padding:0}}>Post:</h3>
                            <p style={{margin:0,padding:0}}>{item?.body}</p>
                        </div>
                    </div>
                    )
                })
            }
           

        </div>
    )
}

export default PostScreen;