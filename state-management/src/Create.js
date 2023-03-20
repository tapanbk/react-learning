import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('Hello');
    const [body, setBody] = useState('Test body');
    const [author, setAuthor] = useState('Tapan');
    const [isPending, setPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title,
            body,
            author
        };
        setPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setPending(false);
            // history.go(-1);
            history.push('/')

        }).catch((error) => {
            console.log(error);
        });

    }

    return (
        <div className='create'>
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Blog Body</label>
                <textarea  required
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Tapan BK">Tapan BK</option>
                    <option value="New User">New User</option>
                </select>
                { !isPending && <button>Add block</button> }
                { isPending && <button>Adding block...</button> }
            </form>
        </div>
    );
};

export default Create;
