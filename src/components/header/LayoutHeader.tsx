import React from 'react'
import Logo from './logo.png'
import './header.css'
import {useHistory} from 'react-router-dom'
import {slugify} from '../../utils/String'
import {useDispatch} from 'react-redux'
import {SEARCH_TAGES_RESET} from '../search/searchWidget'

export default function LayoutHeader(): JSX.Element {
  const history = useHistory()
  const dispatch = useDispatch()
  const [search, setSearch] = React.useState('')

  function handleSubmitSearch(event: any) {
    event.preventDefault()
    dispatch({type: SEARCH_TAGES_RESET})

    history.push(`/search/${slugify(search.trim()).replaceAll('-', '+')}`)
  }

  return (
    <>
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
            <a href="/" className="-logo">
              <img className={'-img'} src={Logo} alt="koding" />
            </a>
          </div>
          <ol className="list-reset grid gs4" role="presentation">
            <li className="grid--cell">
              <a
                href="#"
                title="koding beta version"
                className="-marketing-link js-products-menu"
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
            <li className="-item help-button-item">
              <a
                href="#"
                className="-link js-help-button"
                title="Help Center and other resources"
              >
                <svg
                  aria-hidden="true"
                  className="svg-icon iconHelp"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                >
                  <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23zM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 00-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44z" />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </header>
    </>
  )
}
