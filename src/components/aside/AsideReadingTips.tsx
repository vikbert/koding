import React from 'react'

export default function AsideReadingTips(): JSX.Element {
  type LinkProps = {
    title: string,
    url: string,
  }

  class ArticleLink extends React.Component<LinkProps> {
    render() {
      let {title, url} = this.props
      return (
        <li className="s-sidebarwidget--item grid px16">
          <div className="grid--cell1">🔗</div>
          <div className="grid--cell">
            <a href={url}>{title}</a>
          </div>
        </li>
      )
    }
  }

  return (
    <>
      <div
        className="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16"
        data-tracker="cb=1"
      >
        <div className="s-sidebarwidget--header s-sidebarwidget__small-bold-text fc-light d:fc-black-900 bb bbw1">
          Reading Tips
        </div>
        <ul className="d-block p0 m0">
          <ArticleLink
            title="Clean Code PHP"
            url="https://github.com/jupeter/clean-code-php"
          />
          <ArticleLink
            title="Clean Code Smell and Heuristics"
            url="https://moderatemisbehaviour.github.io/clean-code-smells-and-heuristics"
          />
          <ArticleLink
            title="Clean (PHP) Code"
            url="https://blog.devgenius.io/clean-php-code-57da4cf75537"
          />
          <ArticleLink
            title="Writing clean code in PHP"
            url="https://stackcoder.in/posts/writing-clean-code-in-php"
          />
          <ArticleLink
            title="Regeln für guten, sauberen Code"
            url="https://sebastianviereck.de/regeln-fur-guten-sauberen-code-clean-code/"
          />
        </ul>
      </div>
      <span
        aria-hidden="true"
        className="p-bits fc-orange-300 sm:d-none t50 r12 w128 h128"
      />{' '}
      <span
        aria-hidden="true"
        className="p-bits fc-black-300 sm:d-none b128 r96 w48 h48"
      />
    </>
  )
}
