let fruits=['apple','banana','orange']
const getfruits=()=>{
    setTimeout(()=>{
        fruits.forEach(data=>{
        console.log(data)
    })
    },1000)
    
}
const postfruit=(fruit)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fruits.push(fruit)
           let err=false
           if(!err){
            resolve()
           }
           else{
            reject("something went wrong")
           }
        },2000)
    })
}
const init=async()=>{
    try{
await postfruit("kiwi")
getfruits()
    }catch(err){
        console.log(err)
    }

}
init()