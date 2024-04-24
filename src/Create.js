import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(null);
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog = {title, author, body};
        setIsPending(true);
        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setIsPending(false);
        })
        
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
            <label >Title:</label>
            <input 
            type="text" 
            required 
            placeholder="add your title here" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="">Author</label>
            <input type="text" 
            required 
            placeholder="John Doe"
            onChange={(e) => setAuthor(e.target.value)}
            />
            <label htmlFor="">Content:</label>
            <textarea name="" id="" onChange={(e) => setBody(e.target.value)}></textarea>
            {!isPending && <button type="submit">Add Blog..</button>}
            {isPending && <button type="submit" disabled>Adding blog......</button>}
            </form>

            <p>{title}</p>
            <p>{author && 'written by '+author}</p>
            <p>{body}</p>
        </div>
     );
}
 
export default Create;