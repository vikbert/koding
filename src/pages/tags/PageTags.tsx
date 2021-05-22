import React from 'react';
import Layout from '../Layout';
import NoContent from '../../components/error/NoContent';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector, useDispatch} from 'react-redux';
import {loadTags} from '../../components/tag/tagWidget';
import TagList from '../../components/tag/TagList';
import TagLink from '../../components/tag/TagLink';
import {Tag} from "../../types/Tag";

type PropsT = {
  name?: string;
};

export default function PageTags(props: PropsT): JSX.Element {
  const dispatch = useDispatch();
  const reduxTag = useSelector((state: any) => state.reduxTag);

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
                {reduxTag.length === 0 ? (
                  <NoContent />
                ) : (
                  <TagList>
                    {reduxTag.map((item: string) => (
                      <TagLink path={`/tag/${item}`} name={item} key={item} />
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
