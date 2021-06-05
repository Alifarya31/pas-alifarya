import './App.css';
import Layout from "./Component/layout/layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
   <React.Fragment>
     <BrowserRouter>
      <Switch>
        <Route path="/">
          <Layout></Layout>
        </Route>
      </Switch>
     </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
