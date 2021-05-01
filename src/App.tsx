import React from 'react';
import './App.css';

const App = () => {
  return (
      <>
        <div className="ct" id="t1">
          <div className="ct" id="t2">
            <div className="ct" id="t3">
              <div className="ct" id="t4">
                <div className="ct" id="t5">
                  <ul id="menu">
                    <a href="#t1">
                      <li className='icon' id="uno">
                        <span className="iconify" data-icon="fluent:home-12-regular" data-inline="false"></span>
                      </li>
                    </a>
                    <a href="#t2">
                      <li className='icon' id="dos">
                        <span className="iconify" data-icon="clarity:favorite-line" data-inline="false"></span>
                      </li>
                    </a>
                    <a href="#t3">
                      <li className='icon' id="tres">
                        <span className="iconify" data-icon="carbon:add-alt" data-inline="false"></span>
                      </li>
                    </a>
                    <a href="#t4">
                      <li className='icon' id="cuatro">
                        <span className="iconify" data-icon="ic:outline-thumb-up-off-alt" data-inline="false"></span>
                      </li>
                    </a>
                    <a href="#t5">
                      <li className='icon' id="cinco">
                        <span className="iconify" data-icon="ic:outline-thumb-down-off-alt" data-inline="false"></span>
                      </li>
                    </a>
                  </ul>
                  <div className="page" id="p1">
                    <section className="icon fa fa-bolt"><span className="title">Bolt</span><span className="hint">Like this pen to see the magic!... Just kidding, it won't happen anything but I'll be really happy If you do so.</span>
                    </section>
                  </div>
                  <div className="page" id="p2">
                    <section className="icon fa fa-keyboard-o"><span className="title">Type</span></section>
                  </div>
                  <div className="page" id="p3">
                    <section className="icon fa fa-rocket"><span className="title">Rocket</span></section>
                  </div>
                  <div className="page" id="p4">
                    <section className="icon fa fa-dribbble">
                      <span className="title">Dribbble</span>
                      <p className="hint">
                        <a href="https://dribbble.com/albertohartzet" target="_blank">Im ready to play, <span className="hint line-trough">invite me </span> find me</a>
                      </p>
                      <p className="hint">Already invited by <a href="http://www.dribbble.com/mrpeters" target="_blank">Stan Peters</a></p>
                    </section>
                  </div>
                  <div className="page" id="p5">
                    <section className="icon fa fa-plus-circle">
                      <span className="title">More</span>
                      <p className="hint">
                        <span>You love one page & CSS only stuff? </span><br/>
                        <a href="https://codepen.io/hrtzt/details/pgXMYb/" target="_blank">check this pen "Pure CSS One page vertical navigation"</a>
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default App;
