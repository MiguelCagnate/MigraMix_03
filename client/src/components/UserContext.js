import React from "react"

const UserContext = React.createContext ({
    role: "",
    setRole: () => {},
})

export default UserContext