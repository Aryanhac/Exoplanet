const {parse}=require('csv-parse');
const fs=require('fs');

let result=[];
fs.createReadStream('Exoplanet_data.csv')
.pipe(parse({
    comment:'#',
    columns:true
})).on('data',(data)=>{
     result.push(data);
}).on('error',(error)=>{
    console.log(error);
}).on('end',()=>{
    console.log(result);
    console.log("All done");
})