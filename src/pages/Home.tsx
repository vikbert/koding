import React from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle('Home')
  return (
      <div className="page">
        <section className="header">
          <h5>Home</h5>
        </section>
        <section className="page-content">
          <button className="button is-primary is-rounded">submit</button>
        </section>
      </div>
  );
};

export default Home;
