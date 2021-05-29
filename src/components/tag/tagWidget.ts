import {Tag} from '../../types/Tag'
import TagReference from '../../http/TagReference'
import {Reference} from 'firebase-firestore-lite'

export const TAG_ADDED = 'tags.tags_added'
export const TAGS_LOADED = 'tags.tags_loaded'
export const tagState: string[] = []

export const tagReducer = (state = tagState, action: any) => {
  switch (action.type) {
    case TAG_ADDED:
      if (state.includes(action.tag.name)) {
        return state
      } else {
        return [action.tag.name, ...state]
      }
    case TAGS_LOADED:
      // @ts-ignore
      return [...new Set(action.tags.map((item: Tag) => item.name))]
    default:
      return state
  }
}

export const tagUpdated = (tag: Tag) => ({
  type: TAG_ADDED,
  tag,
})

export const tagsLoaded = (tags: any) => ({
  type: TAGS_LOADED,
  tags,
})

export const createAndUpdateTag = (tag: Tag) => {
  return function (dispatch: any) {
    const tagRef = new TagReference()
    return tagRef.add(tag).then((ref: Reference) => {
      dispatch(tagUpdated(tag))
    })
  }
}

export const loadTags = () => {
  return function (dispatch: any) {
    const tagRef = new TagReference()

    return tagRef.listAll().then((list: any) => {
      dispatch(tagsLoaded(list))
    })
  }
}
