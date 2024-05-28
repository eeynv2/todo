import React, { useEffect, useState } from 'react';
import Layout from "./Layout"

function Home(){
    let [example, setExample] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/example')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setExample(json.example);
            });
    });

    return (
        <div>
            <Layout>Hello</Layout>
            <h1>Home</h1>
            <p>{example}</p>
            
        </div>
    )
}
export default Home;