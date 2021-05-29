import {Tag} from '../types/Tag';

export const removeDuplicatedScalaValues = (list: any[]): any[] => {
  return list.filter(
    (item: any, index: number) => list.indexOf(item) === index,
  );
};

export const removeDuplicatedTags = (list: Tag[]): Tag[] => {
  const cache: {[key: string]: Tag} = {};

  list.forEach((item: Tag) => {
    cache[item.name] = item;
  });

  return Object.values(cache);
};
