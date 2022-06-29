import React from "react";
import { Outlet } from "react-router-dom";
import PageTemplate from "./templates/PageTemplate";

function App() {
  return (
    <PageTemplate>
      <Outlet />
    </PageTemplate>  
  )
}

export default App;
