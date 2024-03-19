// callback function may function ka namse nahi likhate h

const coding = ['js','py','rb','java']

coding.forEach((item)=>{
    // console.log(item);
})


coding.forEach((item,index,coding)=>{
    // console.log(item,index,coding);
})

const mycoding= [
    {
        laungageName:"java",
        laungaugefile:"java"
    },
    {
        laungageName:"puthon",
        laungaugefile:"py"
    },
    {
        laungageName:"javascript",
        laungaugefile:"js"
    }
]

mycoding.forEach((item)=>{
    console.log(item.laungageName);
})