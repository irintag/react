import React, {useState} from 'react'; 
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create, setVisible}) => {

    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault()        
        const newPost = {
            ...post, id: Date.now()
        }
        setVisible(false)
        create(newPost)    
        setPost({title:'', body: ''})    
    }


    return (
        <div>
            <MyInput type="text" placeholder='title'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <MyInput type="text" placeholder='desc'
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />

            <MyButton onClick={addNewPost}>
                Create
            </MyButton>
        </div>
    );
};
 

export default PostForm;