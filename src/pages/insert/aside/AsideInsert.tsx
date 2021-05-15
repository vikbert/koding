import React from 'react';

export default function AsideInsert(): JSX.Element {
  return (
    <aside className="fl-shrink0">
      <div className="ws3 ml24 md:d-none">
        <div className="s-sidebarwidget s-sidebarwidget__yellow s-anchors mb24">
          <div className="s-sidebarwidget--header grid">
            <div className="grid--cell grid--cell1 vertical-center">
              <span
                className="iconify"
                data-icon="fa-solid:info-circle"
                data-inline="false"
              />
            </div>
            <div className="grid--cell">
              <span>format code at first</span>
            </div>
          </div>
          <div className="s-sidebarwidget--content d-blocks pb0 bbr-sm">
            <p>
              To remove the unnecessary spacing and tab from the code, try to
              format the code snippets at first. <br />
              Try
              <a
                href="https://webformatter.com/html"
                className="s-btn s-btn__sm"
                target="_blank"
              >
                https://webformatter.com/
              </a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
