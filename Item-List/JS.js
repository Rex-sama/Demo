const b = document.querySelector('form');
const ul=document.getElementById('ulid');
const search=document.getElementById('search');
b.addEventListener('submit',new1);
ul.addEventListener('click',new2);
search.addEventListener('keyup',new3);

function new1(e){
    e.preventDefault();
    let text1 = document.getElementById("text").value;
    let element = document.createElement('li');
    element.className='list-group-item';
    let text2 = document.createTextNode(text1)
    if(text2.textContent=="")
    {
        alert('Enter Name');
    }
    else{
        element.appendChild(text2);    
        let but=document.createElement('button');
        but.id='newbut';
        but.className='ai';
        but.appendChild(document.createTextNode('x'));
        element.appendChild(but)
        ul.appendChild(element);
        }
}
function new2(e){
    if(e.target.classList.contains('ai')){
        if(confirm('Are You Sure')){
        ul.removeChild(e.target.parentNode);
        }
}
}
function new3(e){
    let text=e.target.value.toLowerCase();
    let lil=ul.getElementsByTagName('li');
    Array.from(lil).forEach(function(item){
        let arr=item.firstChild.textContent;
        if(arr.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none'
        }
    })

}

























// const a = document.getElementById('cont5');
// a.addEventListener('mousemove',fun);
// // console.log(a);
// function fun(e){
//     const output = document.getElementById('cont-6');
//     output.innerHTML = '<h3>Mouse X : '+e.offsetX+'</h3><h3>Mouse Y :'+e.offsetY+'</h3>';
  
// }































// const a = document.createElement('li');

// const b= document.createTextNode('Pineapple');
//  console.log(b);
// a.appendChild(b);
// console.log(a);

// const new1=document.getElementById('ulid');
// const new2=document.getElementById('lid1');

// new1.insertBefore(a,new2);

// const a =document.querySelector('.container-5');
// a.addEventListener('click',fun);

// function fun(e)
// {
// console.log(e.type);
// // confirm("Are you sure");
// }
