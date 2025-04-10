import React from "react";
import styles from "./App.module.css";

function App({ zohoId }) {
    return (
        <div className={styles.container}>
            <p>id: {zohoId}</p>
        </div>
    );
}

export default App;
