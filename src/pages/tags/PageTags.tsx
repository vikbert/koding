import React from 'react';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector, useDispatch} from 'react-redux';
import {loadTags} from '../../components/tag/tagWidget';
import TagList from '../../components/tag/TagList';
import TagLink from '../../components/tag/TagLink';
import LoadingContent from '../../components/loading/LoadingContent';
import HeadlineWithInsertButton from '../../components/headline/HeadlineWithInsertButton';

export default function PageTags(): JSX.Element {
  const dispatch = useDispatch();
  const reduxTag = useSelector((state: any) => state.reduxTag);

  React.useEffect(() => {
    dispatch(loadTags());
  }, []);

  return (
    <>
      <div id="mainbar">
        <HeadlineWithInsertButton headline={'Tags'} />
        <div className="grid page__tag-list">
          <div className="grid--cell12">
            {reduxTag.length === 0 ? (
              <LoadingContent />
            ) : (
              <TagList>
                {reduxTag.sort().map((item: string) => (
                  <TagLink
                    path={`/tag/${item}`}
                    name={item}
                    key={item}
                  />
                ))}
              </TagList>
            )}
          </div>
        </div>
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
}
