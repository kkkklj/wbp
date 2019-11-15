require('../less/app.less');
window.onload=function(){
  let person=['a','b','c'];
  let ul=document.createElement('ul');
  person.map(
    (v,i,o)=>{
      let li=document.createElement('li');
      li.textContent=v;
      ul.appendChild(li);
    }
  )
  document.body.appendChild(ul);
}