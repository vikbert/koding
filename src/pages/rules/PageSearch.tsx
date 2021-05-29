import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ListRules from '../../components/Rule/ListRules';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import TagList from '../../components/tag/TagList';
import {Tag} from '../../types/Tag';
import TagLink from '../../components/tag/TagLink';
import {searchTags, searchRules} from '../../components/search/searchWidget';
import {removeDuplicatedRules, removeDuplicatedTags} from '../../utils/Array';
import Headline from '../../components/headline/Headline';
import {slugify} from '../../utils/String';

const PageSearch = () => {
  const {keyword} = useParams<{keyword?: string}>();

  useDocumentTitle(`Search: ${keyword}`);
  const reduxSearch = useSelector((state: any) => state.reduxSearch);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (keyword) {
      keyword.split('+').forEach((item: string) => {
        dispatch(searchTags(item.toLowerCase()));
        dispatch(searchRules(item.toLowerCase()));
      });
    }
  }, [keyword]);

  const rulesFound = reduxSearch.rules.length > 0;
  const tagsFound = reduxSearch.tags.length > 0;

  return (
    <>
      <div id="mainbar">
        <Headline headline={`Search by "${keyword}"`} />
        <span className="w64 h8 bar-pill d-block bg-black-200 mx-auto" />
        <>
          {rulesFound && <div className="pb12 fw-bold">Conventions:</div>}
          <ListRules rules={removeDuplicatedRules(reduxSearch.rules)} />

          {tagsFound && (
            <>
              <div className="pb12 fw-bold">Tags:</div>
              <TagList>
                {removeDuplicatedTags(reduxSearch.tags).map(
                  (item: Tag, index: number) => (
                    <TagLink
                      path={`/tag/${slugify(item.name)}`}
                      name={item.name}
                      key={index}
                    />
                  ),
                )}
              </TagList>
            </>
          )}
        </>
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
};

export default PageSearch;
