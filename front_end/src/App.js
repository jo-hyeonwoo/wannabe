import React from "react";
import AppRoute from './component/route/RouterComponent';
import NavBar from "./component/route/NavBar";

import { Container } from "@material-ui/core";
function App() {
  return (
   
    <div>
      <NavBar/>
      <Container>
        <AppRoute/>
      </Container>
    </div>
  );
}

export default App;