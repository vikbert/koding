import React from 'react';
import Bubble from '../../bubble/Bubble';
import SnippetPreview from '../../snippet/SnippetPreview';
import TagList from '../../tag/TagList';
import TagItem from '../../tag/TagItem';

type PropsT = {
  rule: string;
  description?: string;
  badSnippet: string;
  goodSnippet: string;
  tags: string[];
};

export default function FormPreview(props: PropsT): JSX.Element {
  const {rule, badSnippet, goodSnippet, description = '', tags = []} = props;

  return (
    <>
      <div className="post-layout">
        <div className="postcell post-layout--right">
          <TagList>
            {tags.map((item: string) => (
              <TagItem
                name={item}
                onClickCallback={() => null}
                editable={false}
              />
            ))}
          </TagList>
          <Bubble title={rule} description={description} />
          <SnippetPreview
            snippet={{id: '', body: badSnippet, isBad: true}}
            editable={false}
          />
          <SnippetPreview
            snippet={{id: '', body: goodSnippet, isBad: false}}
            editable={false}
          />
          <div className="mt24 mb12">{/*<TagList />*/}</div>
        </div>
      </div>
    </>
  );
}
