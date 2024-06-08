import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Users from "./Users";

const Search = () => {
    const history = useHistory();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const initialText = query.get("seach") || "";
    const [text, setText] = useState(initialText);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (initialText) {
            searchUsers(initialText);
        }
    }, [initialText]);

    const searchUsers = async (text) => {
        try {
            const response = await axios.get(
                `https://api.github.com/search/users?q=${text}`
            );
            setUsers(response.data.items);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const clearUsers = () => {
        setUsers([]);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter something");
        } else {
            history.push(`/?seach=${text}`);
            searchUsers(text);
        }
    };

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search User" value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-success btn-block" />
            </form>
            {users.length > 0 && (
                <button className="btn btn-danger btn-block" onClick={clearUsers}> Clear </button>
            )}

            <Users users={users} />
        </div>
    );
};

export default Search;