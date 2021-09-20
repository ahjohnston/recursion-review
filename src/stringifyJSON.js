// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //base case: input parameter is a number or string or boolean
  ////
  if(typeof obj === 'boolean'){
    return String(obj);
  }
  if(typeof obj === 'number'){
    return String(obj);
  }
  if(typeof obj === 'string'){
    return '"' + (obj) + '"'
  }
  if(obj === null){
    return String(null);
  }

  //recursive case: input is array or object
};
