import React from 'react';
import './loading.css';
import NoContent from '../error/NoContent';

export default function LoadingContent(): JSX.Element {
  const [showNoData, setShowNoData] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowNoData(true);
    }, 3000);
  }, []);

  if (showNoData) {
    return <NoContent/>;
  }

  return (
      <div className="grid ai-center jc-center gs32 md:fd-column mt128">
        <div id="wrap">
          <div className="item">
            <div className="spinner"/>
            <h5>
              Loading<span className="dot">.</span>
            </h5>
          </div>
        </div>
      </div>
  );
}
