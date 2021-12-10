import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {

    const params = useParams()
    const [post, setPosts] = useState({})
    const [comments, setComments] = useState([])

    const [fetchingPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPosts(response.data)
    })

    const [fetchingPostByIdComments, isComLoading, errorCom] = useFetching(async (id) => {
        const response = await PostService.getByIdComments(id) 
        //const data = Array.from(response.data);
         
        setComments(response.data)
    })

    useEffect(() => {
        fetchingPostById(params.id)
        fetchingPostByIdComments(params.id)
    }, [])
 

    return (
        <div>
            <h1>Post with id = {post.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id} - {post.title}</div>
            }

            {isComLoading
                ? <Loader />
                : <div> 
                    {comments.map( comm => 
                        <div key={comm.id} style={{margin: '30px 0'}}>
                            <div>{comm.email}</div>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;