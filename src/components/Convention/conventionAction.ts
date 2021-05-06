export const CONVENTION_ADDED = 'convention.convention_added'

export const conventionAdded = (convention: string) => ({
  type: CONVENTION_ADDED,
  convention,
})
