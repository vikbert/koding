import React from 'react';
type PropsType = {
  title: string;
  children?: any;
};

export default function AsideInformation({
  title,
  children,
}: PropsType): JSX.Element {
  return (
    <aside className="fl-shrink0">
      <div className="ws3 ml24 md:d-none">
        <div className="s-sidebarwidget s-sidebarwidget__yellow s-anchors mb24">
          <div className="s-sidebarwidget--header grid">
            <div className="grid--cell grid--cell1 vertical-center">{'🔔'}</div>
            <div className="grid--cell">
              <span>{title}</span>
            </div>
          </div>
          <div className="s-sidebarwidget--content d-blocks pb0 bbr-sm">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
