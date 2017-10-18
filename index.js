const pathsToPslg = require('paths-to-pslg')
const pslgToPaths = require('pslg-to-paths')
const pathtrimPslg = require('pathtrim-pslg')
const polyToPslg = require('poly-to-pslg')

function pathtrim(paths, polys, isIntersect) {
  const {points: pathPoints, edges: pathEdges} = pathsToPslg(paths)
  const {points: polyPoints, edges: polyEdges} = polyToPslg(polys)

  const {points, edges} = pathtrimPslg(pathPoints, pathEdges, polyPoints, polyEdges, isIntersect)
  return pslgToPaths(points, edges)
}

module.exports = pathtrim
