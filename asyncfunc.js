let fruits=['apple','banana','orange']
const getfruits=()=>{
    setTimeout(()=>{
        fruits.forEach(data=>{
        console.log(data)
    })
    },1000)
    
}
const postfruit=(fruit,calllback)=>{
    setTimeout(()=>{
        fruits.push(fruit)
        calllback()
    },2000)
}
postfruit("kiwi",getfruits)
// getfruits()