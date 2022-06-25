import React, { useState } from "react";

import Navbar from "./Navbar";

export default function() {
    const [auth, setAuth] = useState(false);

    return <Navbar auth={auth}/>
}