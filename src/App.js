import React from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

import Projects from "./Projects/Projects";
import Project from "./Projects/Project";

const client = new ApolloClient({
  // uri: "http://localhost/wordpress/qraphql",
  link: new HttpLink({ uri: "https://admin.shapon.me/qraphql" }),
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    Origin: "http://localhost:3000",
  },
  fetchOptions: {
    mode: "no-cors",
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="main">
          <div>
            <h2>wordpress Graphql React Starter Project</h2>
          </div>
          <div className="container">
            <Route exact path="/" component={Projects} />
            <Route path="/projects" component={Projects} />
            <Route path="/project/:slug" component={Project} />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
