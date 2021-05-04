import React from 'react';
import {Toast} from "../components/toast";

const Home = () => {
  return (
      <div className="page" id="page-home">
        <section className="header">
          <div className="action-title">Home</div>
        </section>
        <section className="content">
          <Toast
              type={'success'}
              title={'info title'}
              description={'my desc another description'}
          />
        </section>
      </div>
  );
};

export default Home;
