/**
 * List route `/company`
 */
export const List = (req, res, next) => {
  // List stuff here
  res.send([
    { id: 1, name: 'Company 1' },
    { id: 2, name: 'Company 2' },
    { id: 3, name: 'Company 3' },
    { id: 4, name: 'Company 4' }
  ])
}

export const View = (req, res, next) => {
  res.send({ id: req.params.id, name: 'Demo company' })
}
