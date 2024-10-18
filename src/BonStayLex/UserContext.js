import React from "react";

const UserContext = React.createContext({
    userId: null,
    setUserId: (id) => { },
});

export default UserContext;
