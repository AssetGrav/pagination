import React, { useState } from "react";
import api from "./api";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const newArrow = [];
    const handleToggleBookmark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                user.bookmark === false
                    ? (user.bookmark = true)
                    : (user.bookmark = false);
            }

            return user;
        });
        setUsers(newUsers);
    };
    return (
        <>
            {SearchStatus(users.length)}
            <Users
                users={users}
                {...users}
                onDelete={handleDelete}
                onChange={handleToggleBookmark}
            />
        </>
    );
}

export default App;
