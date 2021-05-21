import React from 'react';
import Layout from '../Layout';
import NoContent from '../../components/error/NoContent';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector, useDispatch} from 'react-redux';
import {loadTags} from '../../components/tag/tagAction';
import TagList from '../../components/tag/TagList';
import TagLink from '../../components/tag/TagLink';

type PropsT = {
  name?: string;
};

export default function PageTags(props: PropsT): JSX.Element {
  const dispatch = useDispatch();
  const reduxTag = useSelector((state: any) => state.reduxTag);
  const tagNames = Object.keys(reduxTag);

  React.useEffect(() => {
    dispatch(loadTags());
  }, []);

  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <div className="grid">
              <h1 className={'grid-cell fl1'}>Tags</h1>
            </div>
            <div className="grid">
              <div className="grid--cell12 text-centered">
                {tagNames.length === 0 ? (
                  <NoContent />
                ) : (
                  <TagList>
                    {tagNames.map((item: string) => (
                      <TagLink path={'/'} name={item} key={item} />
                    ))}
                  </TagList>
                )}
              </div>
            </div>
          </div>
          <div id="sidebar">
            <AsideReadingTips />
          </div>
        </div>
      </Layout>
    </>
  );
}
