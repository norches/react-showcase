import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import msg from "./messages/ru/ru.json";
import Form from "./pages/form/Form";
import Preview from "./pages/preview/Preview";
import Route from "./components/route/Route";
import Page from "./containers/page/Page";
import { PagesProps, ParentData, PageObject } from "./interfaces";

const initialFormData: ParentData = {
  name: null,
  age: null,
  children: [],
};

const _pages: PageObject[] = [
  {
    pageName: "form",
    path: "/form",
    label: msg.form,
    node: Form,
  },
  {
    pageName: "preview",
    path: "/preview",
    label: msg.preview,
    node: Preview,
  },
];

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [previewData, setPreviewData] = useState(initialFormData);
  let pages = _pages.map((obj) => obj);
  const maxChildren = 5;

  const onDataChangeHandler = (data: ParentData) => {
    console.log("data has changed:", data);
    setFormData(data);
  };

  const onDataSaveHandler = () => {
    setFormData(formData);
    setPreviewData(formData);
    console.log("data has been saved:", formData);
  };

  const pagesProps: PagesProps = {
    form: {
      data: formData,
      maxChildren: maxChildren,
      onChange: onDataChangeHandler,
      onSave: onDataSaveHandler,
    },
    preview: { data: previewData },
  };

  useEffect(() => {
    if (window.location.pathname === "/")
      window.history.pushState({}, "", _pages[0].path);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  }, []);
  return (
    <div className="App">
      <Header links={pages} />
      <div className="page-wrapper">
        {pages.map((page) => {
          return (
            <React.Fragment key={`page-route-${page.pageName}`}>
              <Route path={page.path}>
                <Page>{<page.node {...pagesProps[page.pageName]} />}</Page>
              </Route>
            </React.Fragment>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
