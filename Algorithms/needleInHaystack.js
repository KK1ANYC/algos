

function isSubsequence(string, subString) {
	let j = 0
	for(let i = 0; i < string.length; i++) {
	  let cv = string[i]
	  if (cv === subString[0]) {
	    while(subString[j] === string[j+i]) {
	      j++
	      if (j === subString.length) return true
	    }
	    j = 0
	  }
	}
	return false
      }

      console.log(isSubsequence("mississippi", "issip"))
