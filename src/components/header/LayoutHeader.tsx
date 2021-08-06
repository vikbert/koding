import React from 'react';
import useVisibility from "../../hooks/useVisibility";
import Beta from "../beta/Beta";
import Popup from "../popup";
import Logo from './logo.png';
import './header.css';
import {useHistory, Link} from 'react-router-dom';
import {slugify} from '../../utils/String';
import {useDispatch} from 'react-redux';
import {SEARCH_TAGES_RESET} from '../search/searchWidget';

export default function LayoutHeader(): JSX.Element {
  const {visible, hide, show} = useVisibility();
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');

  function handleSubmitSearch(event: any) {
    event.preventDefault();
    dispatch({type: SEARCH_TAGES_RESET});

    history.push(`/search/${slugify(search.trim()).replaceAll('-', '+')}`);
  }

  return (
    <>
      {visible && (
          <Popup visible={true} hide={hide}>
            <Beta/>
          </Popup>
      )}
      <header className="top-bar js-top-bar top-bar__network">
        <div className="wmx12 mx-auto grid ai-center h100">
          <div className="-main grid--cell">
            <a
              href="#"
              className="left-sidebar-toggle p0 ai-center jc-center js-left-sidebar-toggle"
              role="menuitem"
              aria-haspopup="true"
              aria-controls="left-sidebar"
              aria-expanded="true"
            >
              <span className="ps-relative" />
            </a>
            <div className="topbar-dialog leftnav-dialog js-leftnav-dialog dno">
              <div className="left-sidebar js-unpinned-left-sidebar" />
            </div>
            <Link to="/convention/newest" className="-logo">
              <img className={'-img'} src={Logo} alt="koding" />
            </Link>
          </div>
          <ol className="list-reset grid gs4" role="presentation">
            <li className="grid--cell">
              <a
                href="#"
                title="koding beta version"
                className="-marketing-link js-products-menu"
                onClick={show}
              >
                Beta
              </a>
            </li>
          </ol>
          <form
            id="search"
            role="search"
            onSubmit={handleSubmitSearch}
            className="grid--cell fl-grow1 searchbar px12 js-searchbar "
            autoComplete="off"
          >
            <div className="ps-relative">
              <input
                name="query"
                type="text"
                placeholder="Search convention …"
                autoComplete="off"
                maxLength={240}
                className="s-input s-input__search js-search-field "
                aria-label="Search"
                onChange={(event) => setSearch(event.target.value)}
              />
              <svg
                aria-hidden="true"
                className="s-input-icon s-input-icon__search svg-icon iconSearch"
                width={18}
                height={18}
                viewBox="0 0 18 18"
              >
                <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z" />
              </svg>
            </div>
          </form>
          <ol
            className="overflow-x-auto ml-auto -secondary grid ai-center list-reset h100 user-logged-in"
            role="presentation"
          >
            <li className="-item searchbar-trigger">
              <a
                href="#"
                className="-link js-searchbar-trigger"
                role="button"
                title="Click to show search"
              >
                <svg
                  aria-hidden="true"
                  className="svg-icon iconSearch"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                >
                  <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z" />
                </svg>
              </a>
            </li>
            <li className="-item">
              <a
                href="https://github.com/vikbert/koding"
                target="_blank"
                className="-link js-help-button"
                title="Project Source Code"
              >
                <div style={{fontSize: '19px'}}>
                  <span
                    className="iconify"
                    data-icon="ant-design:github-filled"
                  />
                </div>
              </a>
            </li>
          </ol>
        </div>
      </header>
    </>
  );
}
