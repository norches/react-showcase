import React, { useEffect } from "react";
import "./App.css";
import Header from "./containers/header/Header";
import { default as msg } from "./messages/ru/ru.json";
import Form from "./pages/form/Form";
import Preview from "./pages/preview/Preview";
import Route from "./components/route/Route";

const App = () => {
  const pages = [
    {
      pageName: "form",
      path: "/form",
      label: msg.form,
      node: <Form />,
    },
    {
      pageName: "preview",
      path: "/preview",
      label: msg.preview,
      node: <Preview />,
    },
  ];
  useEffect(() => {
    if (window.location.pathname === "/")
      window.history.pushState({}, "", pages[0].path);
  });
  return (
    <div className="App">
      <Header links={pages} />
      <div>
        {pages.map((page) => {
          return (
            <React.Fragment key={`page-route-${page.pageName}`}>
              <Route path={page.path}>{page.node}</Route>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default App;
