
function* getResult() {

    yield 'getUserID'
    
    yield 'getUserName'
    
    return 'name'
    
    }
    
    let result = getResult()
    
    console.log(result.next().value)
    
    console.log(result.next().value)
    console.log(result.next().value)