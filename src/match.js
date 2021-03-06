const deepEqual = require('deep-equal')

module.exports = (match, subjectToMatch) => {
  const hasMatchValue = match.args[0].length >= 2
  if(!hasMatchValue){
    return subjectToMatch
  }

  const matchValue = match.args[0][1]

  //if is a type check, check type
  if(matchValue === Boolean && typeof subjectToMatch === 'boolean') return subjectToMatch
  //TODO check these!
  //if(matchValue === Null && typeof subjectToMatch === 'string') return subjectToMatch
  //if(matchValue === Undefined && typeof subjectToMatch === 'string') return subjectToMatch
  if(matchValue === Number && typeof subjectToMatch === 'number') return subjectToMatch
  if(matchValue === String && typeof subjectToMatch === 'string') return subjectToMatch
  //TODO check it!
  //if(matchValue === Symbol && typeof subjectToMatch === 'string') return subjectToMatch
  if(matchValue === Object && typeof subjectToMatch === 'object') return subjectToMatch

  //if is instance check, check instance
  if(typeof matchValue === "function" && subjectToMatch instanceof matchValue){
    return subjectToMatch
  }

  //if is object or array check, check deep equality
  if(typeof subjectToMatch === 'object'){
    if(deepEqual(subjectToMatch, matchValue)){
      return subjectToMatch
    }
  }

  //if is value check, check value
  if(subjectToMatch === matchValue){
    return subjectToMatch
  }

  return undefined
}
