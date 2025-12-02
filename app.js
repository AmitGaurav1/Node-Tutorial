const lodash=require('lodash')

const items=["Kanchan",["Neha"],{'father': 'papa','Mother':'Mama',},[],["Shruti",["Archan"],["Mausi"]]]

const newitems=lodash.flattenDeep(items)

console.log(newitems)
