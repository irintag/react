import React, { useEffect, useMemo, useState} from "react";  
import axios from "axios";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import Postitem from "./components/Postitem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/select/modal/MyModal";
import MySelect from "./components/UI/select/MySelect";
import { usePosts } from "./hooks/usePosts"; 
import { useFetching } from "./hooks/useFetching";
import './styles/App.css';
import Loader from "./components/UI/loader/Loader";

function App() { 

  const [posts, setPosts] = useState([]) 
  const [filter, setFilter] = useState({sort: '', query: ''}) 
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)   

  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })


  useEffect( () => {
    fetchPosts()
  },[])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
 
  
    
  return (
    <div className="App"> 
      
      <MyButton onClick={() => setModal(true)}>
          Create
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
         <PostForm create={createPost}  setVisible={setModal} />
      </MyModal>

      <hr style={{margin: '15px 0'}}/>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {isPostsLoading
        ? <div style={{display: 'flex', marginTop: '50', justifyContent: 'center'}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} /> 
      }

      
    </div>
  );
}

export default App;
