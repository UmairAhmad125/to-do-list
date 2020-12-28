const Projectgenertor=(name)=>{
return{
  id:Math.round(Math.random()*20000000).toString(),
  name:name,
  todo:[]
}
}


export default Projectgenertor;
