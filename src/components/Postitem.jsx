import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';

const Postitem = props => {
 
    const location = useLocation() 
     
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post-btn">                 
                <Link to={`${location.pathname}/${props.post.id}`}>
                    open
                </Link>                
                <MyButton onClick={() => props.remove(props.post)} >remove</MyButton>
            </div>
        </div>
    );
};
 

export default Postitem;