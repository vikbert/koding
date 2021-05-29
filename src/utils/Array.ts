import {Tag} from '../types/Tag'
import {Rule} from '../types/Rule'

export const removeDuplicatedScalaValues = (list: any[]): any[] => {
  return list.filter((item: any, index: number) => list.indexOf(item) === index)
}

export const removeDuplicatedTags = (list: Tag[]): Tag[] => {
  const cache: {[key: string]: Tag} = {}

  list.forEach((item: Tag) => {
    cache[item.name] = item
  })

  return Object.values(cache)
}

export const removeDuplicatedRules = (list: Rule[]): Rule[] => {
  const cache: {[key: string]: Rule} = {}

  list.forEach((item: Rule) => {
    cache[item.id] = item
  })

  return Object.values(cache)
}
