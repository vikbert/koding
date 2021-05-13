import React from 'react';
import Logo from './logo.png';
import './header.css';

type PropsT = {
  name?: string;
};

export default function OverflowHeader(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <header className="top-bar js-top-bar top-bar__network">
        <div className="wmx12 mx-auto grid ai-center h100" role="menubar">
          <div className="-main grid--cell">
            <a
              href="#"
              className="left-sidebar-toggle p0 ai-center jc-center js-left-sidebar-toggle"
              role="menuitem"
              aria-haspopup="true"
              aria-controls="left-sidebar"
              aria-expanded="false"
            >
              <span className="ps-relative" />
            </a>
            <div className="topbar-dialog leftnav-dialog js-leftnav-dialog dno">
              <div
                className="left-sidebar js-unpinned-left-sidebar"
                data-is-here-when="sm"
                data-can-be="left-sidebar"
              />
            </div>
            <a href="/" className="-logo">
              <img className={'-img'} src={Logo} alt="koding" />
            </a>
          </div>
          <ol className="list-reset grid gs4" role="presentation">
            <li className="grid--cell">
              <a
                href="#"
                className="-marketing-link js-gps-track js-products-menu"
                aria-controls="products-popover"
                data-controller="s-popover"
                data-action="s-popover#toggle"
                data-s-popover-placement="bottom"
                data-s-popover-toggle-class="is-selected"
                data-gps-track="top_nav.products.click({location:1, destination:1})"
                data-ga='["top navigation","products menu click",null,null,null]'
              >
                Products
              </a>
            </li>
          </ol>
          <div
            className="s-popover ws2 mtn2 p0"
            id="products-popover"
            role="menu"
            aria-hidden="true"
          >
            <div className="s-popover--arrow" />
            <ol className="list-reset s-anchors s-anchors__inherit">
              <li className="m6">
                <a
                  href="/"
                  className="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                  data-gps-track="top_nav.products.click({location:1, destination:2})"
                  data-ga='["top navigation","public qa submenu click",null,null,null]'
                >
                  <span className="fs-body1 d-block">Stack Overflow</span>
                  <span className="fs-caption d-block fc-light">
                    Public questions &amp; answers
                  </span>
                </a>
              </li>
              <li className="m6">
                <a
                  href="/teams"
                  className="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                  data-gps-track="top_nav.products.click({location:1, destination:3})"
                  data-ga='["top navigation","teams submenu click",null,null,null]'
                >
                  <span className="fs-body1 d-block">
                    Stack Overflow for Teams
                  </span>
                  <span className="fs-caption d-block fc-light">
                    Where developers &amp; technologists share private knowledge
                    with coworkers
                  </span>
                </a>
              </li>
              <li className="m6">
                <a
                  href="/jobs?so_source=ProductsMenu&so_medium=StackOverflow"
                  className="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                  data-gps-track="top_nav.products.click({location:1, destination:9})"
                  data-ga='["top navigation","jobs submenu click",null,null,null]'
                >
                  <span className="fs-body1 d-block">Jobs</span>
                  <span className="fs-caption d-block fc-light">
                    Programming &amp; related technical career opportunities
                  </span>
                </a>
              </li>
              <li className="m6">
                <a
                  href="https://stackoverflow.com/talent"
                  className="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                  data-gps-track="top_nav.products.click({location:1, destination:5})"
                  data-ga='["top navigation","talent submenu click",null,null,null]'
                >
                  <span className="fs-body1 d-block">Talent</span>
                  <span className="fs-caption d-block fc-light">
                    Recruit tech talent &amp; build your employer brand
                  </span>
                </a>
              </li>
              <li className="m6">
                <a
                  href="https://stackoverflow.com/advertising"
                  className="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                  data-gps-track="top_nav.products.click({location:1, destination:6})"
                  data-ga='["top navigation","advertising submenu click",null,null,null]'
                >
                  <span className="fs-body1 d-block">Advertising</span>
                  <span className="fs-caption d-block fc-light">
                    Reach developers &amp; technologists worldwide
                  </span>
                </a>
              </li>
              <li className="bg-black-025 bt bc-black-075 py6 px6 bbr-sm">
                <a
                  href="/company"
                  className="fc-light d-block py6 px6 h:fc-black-800 js-gps-track"
                  data-gps-track="top_nav.products.click({location:1, destination:7})"
                  data-ga='["top navigation","about submenu click",null,null,null]'
                >
                  About the company
                </a>
              </li>
            </ol>
          </div>
          <form
            id="search"
            role="search"
            action="/search"
            className="grid--cell fl-grow1 searchbar px12 js-searchbar "
            autoComplete="off"
          >
            <div className="ps-relative">
              <input
                name="q"
                type="text"
                placeholder="Search…"
                autoComplete="off"
                maxLength={240}
                className="s-input s-input__search js-search-field "
                aria-label="Search"
                aria-controls="top-search"
                data-controller="s-popover"
                data-action="focus->s-popover#show"
                data-s-popover-placement="bottom-start"
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
              <div
                className="s-popover p0 wmx100 wmn4 sm:wmn-initial js-top-search-popover"
                id="top-search"
                role="menu"
              >
                <div className="s-popover--arrow" />
                <div className="js-spinner p24 grid ai-center jc-center d-none">
                  <div className="s-spinner s-spinner__sm fc-orange-400">
                    <div className="v-visible-sr">Loading…</div>
                  </div>
                </div>
                <span className="v-visible-sr js-screen-reader-info" />
                <div className="js-ac-results overflow-y-auto hmx3 d-none" />
                <div
                  className="js-search-hints"
                  aria-describedby="Tips for searching"
                />
              </div>
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
                aria-label="Search"
                aria-haspopup="true"
                aria-controls="search"
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
                href="/users/2636541/vikbert"
                className="my-profile js-gps-track"
                data-gps-track="profile_summary.click()"
              >
                <div className="gravatar-wrapper-24" title="vikbert">
                  <img
                    src="https://i.stack.imgur.com/rSdt7.jpg?s=48&g=1"
                    alt=""
                    width={24}
                    height={24}
                    className="bar-sm -avatar js-avatar-me"
                  />
                </div>{' '}
                <span className="v-visible-sr">vikbert</span>
                <div
                  className="-rep js-header-rep"
                  title="your reputation: 710"
                  aria-hidden="true"
                >
                  710
                </div>
                <span className="v-visible-sr">, 710 reputation</span>
                <div className="-badges">
                  <span title="7 silver badges" aria-hidden="true">
                    <span className="badge2">●</span>
                    <span className="badgecount">7</span>
                  </span>
                  <span className="v-visible-sr">7 silver badges</span>
                  <span title="8 bronze badges" aria-hidden="true">
                    <span className="badge3">●</span>
                    <span className="badgecount">8</span>
                  </span>
                  <span className="v-visible-sr">8 bronze badges</span>{' '}
                </div>
              </a>
            </li>
            <li className="-item inbox-button-item">
              <a
                href="https://stackexchange.com/users/191459?tab=inbox"
                className="-link js-inbox-button"
                aria-label="Inbox (2 unread messages)"
                title="You have unread inbox messages"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                data-unread-count={2}
              >
                <svg
                  aria-hidden="true"
                  className="svg-icon iconInbox"
                  width={20}
                  height={18}
                  viewBox="0 0 20 18"
                >
                  <path d="M4.63 1h10.56a2 2 0 011.94 1.35L20 10.79V15a2 2 0 01-2 2H2a2 2 0 01-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35zm8.28 12l2-2h2.95l-2.44-7.32a1 1 0 00-.95-.68H5.35a1 1 0 00-.95.68L1.96 11h2.95l2 2h6z" />
                </svg>
                <span className="indicator-badge js-unread-count _important">
                  2
                </span>
              </a>
            </li>
            <li className="-item achievements-button-item">
              <a
                href="https://stackexchange.com/users/191459?tab=reputation"
                className="-link js-achievements-button _highlighted-positive"
                data-unread-class="_highlighted-positive"
                aria-label="Achievements (70 new reputation)"
                title="You have new reputation changes"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                data-unread-count={70}
                data-lit-up="true"
              >
                <svg
                  aria-hidden="true"
                  className="svg-icon iconAchievements"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                >
                  <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3zM3 7c-.5 0-1-.5-1-1V4h1v3zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1zM16 6c0 .5-.5 1-1 1V4h1v2z" />
                </svg>
                <span className="indicator-badge js-unread-count _positive">
                  +70
                </span>
              </a>
            </li>
            <li className="-item review-button-item">
              <a
                href="/review"
                id="review-button"
                className="-link js-gps-track js-review-button _danger-indicator"
                aria-label="Review (needs attention)"
                title="Review queues - help improve the site"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                data-gps-track="review_popup.click({ in_danger: true })"
              >
                <svg
                  aria-hidden="true"
                  className="svg-icon iconReviewQueue"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                >
                  <path d="M11 12.47l5-4.97V3a2 2 0 00-2-2H2a2 2 0 00-2 2v12a2 2 0 002 2h6.5l-2.79-2.8a1 1 0 010-1.4l2.1-2.1a1 1 0 011.4 0L11 12.47zM2 7h10v2H2V7zm0-4h12v2H2V3zm0 10v-2h3v2H2zm9 4.5l7-7L16.5 9 11 14.5 8.5 12 7 13.5l4 4z" />
                </svg>
              </a>
            </li>
            <li className="-item help-button-item">
              <a
                href="#"
                className="-link js-help-button"
                title="Help Center and other resources"
                role="menuitem"
                aria-haspopup="true"
                aria-controls="topbar-help-dialog"
                data-ga='["top navigation","help menu click",null,null,null]'
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
            <div
              className="topbar-dialog help-dialog js-help-dialog dno"
              id="topbar-help-dialog"
              role="menu"
            >
              <div className="modal-content">
                <ul>
                  <li>
                    <a
                      href="/tour"
                      className="js-gps-track"
                      data-gps-track="help_popup.click({ item_type:1 })"
                      data-ga='["top navigation","tour submenu click",null,null,null]'
                    >
                      Tour
                      <span className="item-summary">
                        Start here for a quick overview of the site
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/help"
                      className="js-gps-track"
                      data-gps-track="help_popup.click({ item_type:4 })"
                      data-ga='["top navigation","help center",null,null,null]'
                    >
                      Help Center
                      <span className="item-summary">
                        Detailed answers to any questions you might have
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://meta.stackoverflow.com"
                      className="js-gps-track"
                      data-gps-track="help_popup.click({ item_type:2 })"
                      data-ga='["top navigation","meta submenu click",null,null,null]'
                    >
                      Meta
                      <span className="item-summary">
                        Discuss the workings and policies of this site
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stackoverflow.com/company"
                      className="js-gps-track"
                      data-gps-track="help_popup.click({ item_type:6 })"
                      data-ga='["top navigation","about us submenu click",null,null,null]'
                    >
                      About Us
                      <span className="item-summary">
                        Learn more about Stack Overflow the company
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stackoverflowbusiness.com/?ref=topbar_help"
                      className="js-gps-track"
                      data-gps-track="help_popup.click({ item_type:7 })"
                      data-ga='["top navigation","business submenu click",null,null,null]'
                    >
                      Business
                      <span className="item-summary">
                        Learn more about hiring developers or posting ads with
                        us
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <li className="-item site-switcher-item">
              <a
                href="https://stackexchange.com"
                className="-link js-site-switcher-button js-gps-track"
                data-gps-track="site_switcher.show"
                aria-label="Site switcher"
                title="A list of all 176 Stack Exchange sites"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                data-ga='["top navigation","stack exchange click",null,null,null]'
              >
                <svg
                  aria-hidden="true"
                  className="svg-icon iconStackExchange"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                >
                  <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2zM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2zm16-7H1v4h16V6z" />
                </svg>
              </a>
            </li>
            <li className="js-topbar-dialog-corral" role="presentation">
              <div
                className="topbar-dialog siteSwitcher-dialog dno"
                role="menu"
              >
                <div className="header">
                  <h3>
                    <a href="https://stackoverflow.com">current community</a>
                  </h3>
                </div>
                <div className="modal-content bg-powder-050">
                  <ul className="current-site">
                    <li className="grid">
                      <div className="fl1">
                        <a
                          href="https://stackoverflow.com"
                          className="current-site-link site-link js-gps-track grid gs8 gsx"
                          data-id={1}
                          data-gps-track="site_switcher.click({ item_type:3 })"
                        >
                          <div
                            className="favicon favicon-stackoverflow site-icon grid--cell"
                            title="Stack Overflow"
                          />
                          <span className="grid--cell fl1">Stack Overflow</span>
                        </a>
                      </div>
                      <div className="related-links">
                        <a
                          href="https://stackoverflow.com/help"
                          className="js-gps-track"
                          data-gps-track="site_switcher.click({ item_type:14 })"
                        >
                          help
                        </a>
                        <a
                          href="https://chat.stackoverflow.com/?tab=site&host=stackoverflow.com"
                          className="js-gps-track"
                          data-gps-track="site_switcher.click({ item_type:6 })"
                        >
                          chat
                        </a>
                        <a
                          href="https://stackoverflow.com/users/logout"
                          className="js-gps-track"
                          data-gps-track="site_switcher.click({ item_type:8 })"
                        >
                          log out
                        </a>
                      </div>
                    </li>
                    <li className="related-site grid">
                      <div className="L-shaped-icon-container">
                        <span className="L-shaped-icon" />
                      </div>
                      <a
                        href="https://meta.stackoverflow.com"
                        className=" site-link js-gps-track grid gs8 gsx"
                        data-id={552}
                        data-gps-track="site.switch({ target_site:552, item_type:3 }),site_switcher.click({ item_type:4 })"
                      >
                        <div
                          className="favicon favicon-stackoverflowmeta site-icon grid--cell"
                          title="Meta Stack Overflow"
                        />
                        <span className="grid--cell fl1">
                          Meta Stack Overflow
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header" id="your-communities-header">
                  <h3>
                    <a href="https://stackexchange.com/users/191459/?tab=accounts">
                      your communities
                    </a>
                  </h3>
                  <a href="#" id="edit-pinned-sites">
                    edit
                  </a>
                  <a
                    href="#"
                    id="cancel-pinned-sites"
                    style={{display: 'none'}}
                  >
                    cancel
                  </a>
                </div>
                <div className="modal-content" id="your-communities-section">
                  <ul className="my-sites">
                    <li>
                      <a
                        href="https://stackoverflow.com"
                        className=" site-link js-gps-track grid gs8 gsx"
                        data-id={1}
                        data-gps-track="site.switch({ target_site:1, item_type:3 }),site_switcher.click({ item_type:1 })"
                      >
                        <div
                          className="favicon favicon-stackoverflow site-icon grid--cell"
                          title="Stack Overflow"
                        />
                        <span className="grid--cell fl1">Stack Overflow</span>
                        <span className="rep-score grid--cell">710</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://apple.stackexchange.com"
                        className=" site-link js-gps-track grid gs8 gsx"
                        data-id={118}
                        data-gps-track="site.switch({ target_site:118, item_type:3 }),site_switcher.click({ item_type:1 })"
                      >
                        <div
                          className="favicon favicon-apple site-icon grid--cell"
                          title="Ask Different"
                        />
                        <span className="grid--cell fl1">Ask Different</span>
                        <span className="rep-score grid--cell">121</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://superuser.com"
                        className=" site-link js-gps-track grid gs8 gsx"
                        data-id={3}
                        data-gps-track="site.switch({ target_site:3, item_type:3 }),site_switcher.click({ item_type:1 })"
                      >
                        <div
                          className="favicon favicon-superuser site-icon grid--cell"
                          title="Super User"
                        />
                        <span className="grid--cell fl1">Super User</span>
                        <span className="rep-score grid--cell">121</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://softwareengineering.stackexchange.com"
                        className=" site-link js-gps-track grid gs8 gsx"
                        data-id={131}
                        data-gps-track="site.switch({ target_site:131, item_type:3 }),site_switcher.click({ item_type:1 })"
                      >
                        <div
                          className="favicon favicon-softwareengineering site-icon grid--cell"
                          title="Software Engineering"
                        />
                        <span className="grid--cell fl1">
                          Software Engineering
                        </span>
                        <span className="rep-score grid--cell">101</span>
                      </a>
                    </li>
                  </ul>
                  <div
                    className="pinned-site-editor-container"
                    style={{display: 'none'}}
                  >
                    <input
                      type="hidden"
                      name="fkey"
                      defaultValue="2ecb9113e86f10c7ec20283723c1a3b0b2d216a9e64948454405ed26eb523e54"
                    />
                    <div className="grid p12">
                      <div className="grid--cell fl1 ps-relative">
                        <input
                          id="js-site-search-txt"
                          type="text"
                          className="s-input s-input__sm w100 h100 site-filter-input"
                          placeholder="Add a Stack Exchange community"
                        />
                        <ul className="js-found-sites found-sites hmx1 l0 r0 ps-absolute overflow-y-auto" />
                      </div>
                      <button
                        className="ml8 s-btn s-btn__sm"
                        type="submit"
                        id="pin-site-btn"
                        disabled
                      >
                        Add
                      </button>
                    </div>
                    <ul
                      className="pinned-site-list sortable"
                      data-custom-list="False"
                    ></ul>
                    <div className="grid p12 jc-end">
                      <a
                        className="grid--cell s-btn s-btn__sm js-reset-pinned-sites"
                        href="#"
                      >
                        Reset
                      </a>
                      <button
                        className="ml8 grid--cell s-btn s-btn__primary s-btn__sm"
                        type="submit"
                        id="save-pinned-sites-btn"
                        disabled
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="header">
                  <h3>
                    <a href="https://stackexchange.com/sites">
                      more stack exchange communities
                    </a>
                  </h3>
                  <a href="https://stackoverflow.blog" className="fr">
                    company blog
                  </a>
                </div>
                <div className="modal-content">
                  <div className="child-content" />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </header>
    </>
  );
}
