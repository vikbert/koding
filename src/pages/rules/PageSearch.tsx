import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ListRules from '../../components/Rule/ListRules';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector, useDispatch} from 'react-redux';
import HeadlineWithInsertButton from '../../components/headline/HeadlineWithInsertButton';
import {useParams} from 'react-router-dom';
import TagList from '../../components/tag/TagList';
import {Tag} from '../../types/Tag';
import TagLink from '../../components/tag/TagLink';
import {searchTags, searchRules} from '../../components/search/searchWidget';

const PageSearch = () => {
  const {keyword} = useParams<{keyword?: string}>();

  useDocumentTitle(`Search: ${keyword}`);
  const reduxSearch = useSelector((state: any) => state.reduxSearch);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (keyword) {
      dispatch(searchTags(keyword.toLowerCase()));
      dispatch(searchRules(keyword.toLowerCase()));
    }
  }, [keyword]);
  return (
    <>
      <div id="mainbar">
        <HeadlineWithInsertButton headline={`Search by "${keyword}"`} />
        <>
          <div className="pb12">Conventions:</div>
          <ListRules rules={reduxSearch.rules} />

          <div className="pb12">Tags:</div>
          <TagList>
            {reduxSearch.tags.map((item: Tag, index: number) => (
              <TagLink
                path={`/tag/${item.name}`}
                name={item.name}
                key={index}
              />
            ))}
          </TagList>
        </>
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
};

export default PageSearch;
