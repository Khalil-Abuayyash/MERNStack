import React,{useState} from 'react';
import styles from '../styles/search.module.css';
import {Link} from "@reach/router";

function Search() {
    const [id, setId] = useState(0);
    const [resource, setResource] = useState("people");

    const handleResource = (e) => {
        setResource(e.target.value);
    }

    const handleId = (e) => {
        setId(e.target.value);
    }

    return (
        <form >
            <h1>Search for:</h1>
            <select value={resource} onChange={handleResource}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <h1>ID:</h1>
            <input value={id} onChange={handleId} />
            {/* <input className={styles.search} type="submit" value="Search"/> */}
            <Link className={styles.search} to={"/"+resource+"/"+id}>Search</Link>
        </form>
    )
}

export default Search
