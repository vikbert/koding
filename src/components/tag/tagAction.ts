import {Tag} from '../../types/Tag';
import LocalStorageClient from '../../services/LocalStorageClient';

export const TAG_ADDED = 'tags.tags_added';
export const TAGS_LOADED = 'tags.tags_loaded';

export const tagUpdated = (tag: Tag) => ({
  type: TAG_ADDED,
  tag,
});

export const tagsLoaded = (tags: any) => ({
  type: TAGS_LOADED,
  tags,
});

export const createAndUpdateTag = (tag: Tag) => {
  const client = new LocalStorageClient();
  client.createAndUpdateTag(tag);

  return tagUpdated(tag);
};

export const loadTags = () => {
  const client = new LocalStorageClient();
  const tags = client.listTags();

  return tagsLoaded(tags);
};
