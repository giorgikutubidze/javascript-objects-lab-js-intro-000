var recipes = {
  diner: 'din1',
  lunch: 'lunch1'
}
function updateObjectWithKeyAndValue(object,key,value){

var obj = Object.assign({},object,{[key]: value});

  return obj;
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){

  object[key] = value;

  return object;
}
function deleteFromObjectByKey(object,key){
  var obj = Object.assign({},object)
  delete obj[key];
  return obj;
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object;
}
