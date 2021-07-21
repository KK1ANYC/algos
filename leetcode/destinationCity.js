var destCity = function (paths) {
  let path = {};
  for (let i = 0; i < paths.length; i++) {
    let cv = paths[i];
    if (!path[cv[0]]) path[cv[0]] = 1;
    if (!path[cv[1]]) path[cv[1]] = 1;
    if (path[cv[0]]) path[cv[0]]++;
  }
  for (let key in path) {
    if (path[key] === 1) return key;
  }
};
