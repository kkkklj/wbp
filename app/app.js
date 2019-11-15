require('../less/app.less');
let img=require('../img/111.jpg');
console.log('img==>',img);
window.onload=function(){
  let person=['a','b','c','d'];
  let ul=document.createElement('ul');
  person.map(
    (v,i,o)=>{
      let li=document.createElement('li');
      li.textContent=v;
      ul.appendChild(li);
    }
  )
  document.body.appendChild(ul);
  let lis=document.getElementById('ul').children;
  console.log(lis);
  for(let i=0;i<lis.length;i++){
    lis[i].onclick=function(){
      console.log('i===>',i);
      console.log(this.textContent);
    }
  }
}