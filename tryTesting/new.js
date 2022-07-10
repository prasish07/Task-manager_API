const data = [{name:"prasish", role:"student"},{name:"hari", role:"worker"}]

function getData(){
    setTimeout(()=>{
    output = ""
        data.forEach((data,index) => {
            output += `<li>${data.name}</li>`
        });
        document.body.innerHTML = output
    }, 1000)
}

// function createData(newData,callback){
//     setTimeout(()=>{
//         data.push(newData)
//         callback()
//     },2000)
// }

function createData(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.push(newData)
            let error = false
            if(!error){
                resolve()
            }
            else{
            reject("yeta error xa")
            }
        },2000)
    })
}



//call back
// createData({name:"ram",role:"something"},getData)


//promises

// createData({name:"ram",role:"something"}).then(getData).catch((err)=>{
//     console.log(err)
// })

// async and await
async function run(){
    await createData({name:"ram",role:"something"}).then(getData);
    
}

run()