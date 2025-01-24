import React, { useState, useEffect } from "react";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/hello")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error("Error fetching API:", err));
    }, []);

    return (
        <div>
            <h1>React + Flask App</h1>
            <p>{message || "Loading..."}</p>
        </div>
    );
};

export default App;