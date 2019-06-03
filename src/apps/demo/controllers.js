/**
 * Index route  `/demo/`
 */
export const Index = (req, res, next) => {
  // Index stuff here
  res.send({ message: 'demo controller index' })
}

/**
 * List route `/demo/list/`
 */
export const List = (req, res, next) => {
  // List stuff here
  res.send([
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 4' }
  ])
}
