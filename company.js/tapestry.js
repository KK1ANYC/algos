const data = {
  brand: {
    families: [
      {
        id: "f1",
        name: "abc",
        parents: [
          { id: "p1", name: "ghi", children: [{ id: "c1", name: "mno" }] },
        ],
      },
      {
        id: "f2",
        name: "def",
        parents: [
          {
            id: "p2",
            name: "jkl",
            children: [
              { id: "c2", name: "pqr" },
              { id: "c3", name: "stu" },
              { id: "c4", name: "vwx" },
            ],
          },
        ],
      },
    ],
  },
};

const nestedArraysToObjects = (obj, identifier) => {
  // ADD YOUR CODE HERE

  let result = {};
  result.brand = {};
  let memo = {};

  if (Array.isArray(obj.brand.families)) {
    for (let i = 0; i < obj.brand.families.length; i++) {
      let currentVal = obj.brand.families[i];
      let currId = currentVal[identifier];
      memo[currId] = obj.brand.families[i];
    }
    result.brand.families = memo;
    memo = {};
  } else if (!Array.isArray(obj.brand.families)) {
    result.brand = obj.brand;
  }

  for (let val1 in result.brand.families) {
    let family = result.brand.families[val1];
    for (let key in family) {
      if (key === "parents" && Array.isArray(family[key])) {
        for (let i = 0; i < family[key].length; i++) {
          let currentVal = family[key][i];
          let currId = currentVal[identifier];
          memo[currId] = currentVal;
        }
        family[key] = memo;
        memo = {};
      } else if (key === "parents" && !Array.isArray(family[key])) {
        result.brand.families = obj.brand.families;
      }
    }
  }

  for (let val1 in result.brand.families) {
    let family = result.brand.families[val1];

    for (let key1 in family) {
      let parent = family[key1];
      if (key1 === "parents") {
        for (let key2 in parent) {
          let child = parent[key2];

          for (let key3 in child) {
            let kid = child[key3];
            if (key3 === "children" && Array.isArray(child[key3])) {
              for (let i = 0; i < kid.length; i++) {
                let currentVal = kid[i];

                let currId = currentVal[identifier];

                memo[currId] = currentVal;
              }

              child[key3] = memo;
              memo = {};
            } else if (key3 === "children" && !Array.isArray(child[key3])) {
              return result;
            }
          }
        }
      }
    }
  }
  return result;
};

console.log(nestedArraysToObjects(data, "id"));
