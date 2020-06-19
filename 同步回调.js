var myArray = ["water", "goods", "123", "like"];
function handlerArray(indexName,index){
    console.log(index + 1 + ". " + indexName); 
}
myArray.forEach(handlerArray)