# Path trim

This is a simple library that takes a list of paths and a list of polygons, and
does a boolean subtraction. It returns either the parts of the paths which lie
outside the polygonal area, or the parts of the paths which lie inside it.

Right now due to a bug (laziness) in [pslg-to-paths](https://github.com/josephg/pslg-to-paths) the paths themselves get chopped up. Sorry about this.

# API

```javascript
const pathtrim = require('pathtrim')

const pathResult = pathtrim(<paths list>, <polygon list>, isIntersect)
```

- **Paths list** is specified as a list of paths, and each path is a list of connected points. Eg: `[[[-100, 100], [100, -100]]]`
- **Polygon list** is a list of polygons. Each polygon is a list of points that make up the polygon.
- **isIntersect** if true, keep the intersection of the polygon and lines. If false, discard the intersection and keep everything else
- **Result** is a list of paths


# Example

```javascript
const pathtrim = require('pathtrim')

const paths = pathtrim([
  [[-100, -100], [100, 100]]
], [
  [[-2, 1], [2, 1], [2, -1], [-2,-1]]  // Rectangle around origin
], true)

// Paths contains [[[-1, -1], [1, 1]]]
```

## TODO:

- Improve pslg-to-paths so it doesn't mince up the paths into chum
- Do basic occlusion culling on paths and polys for performance


# License

ISC
