const Home = () => {
    const greet = (name) => {
        console.log(`Hello ${name}`)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={()=>{greet("Tolu")}}>click</button>
        </div>
    );
}
 
export default Home;