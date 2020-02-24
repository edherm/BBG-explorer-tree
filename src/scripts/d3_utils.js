const klass = d => {
  debugger
  if (d.data.name.commonName) {
    return `leaves leaf${d.parent.parent.id}${d.parent.id}${d.id}`;
  } else if (d.depth === 3) {
    return "upper branches";
  } else if (d.depth === 2) {
    return "middle branches";
  } else if (d.depth === 1) {
    return "lower branches";
  } else {
    return "trunk";
  }
};

const onMouseOver = d => {
  if (d.depth === 4) {
  }
};

const onMouseOut = d => {
  if (d.depth === 4) {
  }
};

// Handle click - set visibility
const click = d => {
  console.log(d)
  if (d.depth === 3) {
    // displaySpecs(d);
  } else if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
    // console.log(d);
  }
}

const diagonal = (start, delta) => {
  return `M ${start.y} ${start.x} 
            C ${(start.y + delta.y) / 2} ${start.x},
            ${(start.y + delta.y) / 2} ${delta.x},
            ${delta.y} ${delta.x}`;
};

module.exports = {klass, onMouseOver, onMouseOut, click, diagonal}