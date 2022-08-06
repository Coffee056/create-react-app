
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <React.Suspense fallback={<div>loading...</div>}>
          {renderRoutes(routes)}
        </React.Suspense>
      </div>
    </Router>
  );
}

