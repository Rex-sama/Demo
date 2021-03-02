class Film{
    constructor(movie,director,ratings){
        this.movie=movie;
        this.director=director;
        this.ratings=ratings;
    }
}
class Store{
    static getMovie(){
        let movies;
        if(localStorage.getItem('movies')===null){
            movies=[];
        }else{
            movies= JSON.parse(localStorage.getItem('movies'));
        }
        return movies;
    }
    static addmovie(movie){
        let movies=Store.getMovie();
        movies.push(movie);
        localStorage.setItem('movies',JSON.stringify(movies));
    }
    static removeMovie(rating){
        let movies=Store.getMovie();
        movies.forEach((movie,index)=>{
            if(movie.ratings==rating){
                  movies.splice(index,1) 
            }
        });
        localStorage.setItem('movies',JSON.stringify(movies));
    }
}


//Display Movie
class UI{
    static Display(){
        let pictures=Store.getMovie();
        pictures.forEach((film)=>UI.AddMovie(film))
       
    }
    //Add Movie
    static AddMovie(film){
        const element=document.getElementById('table-id');
        const row=document.createElement('tr');
        row.className='trow';
        row.innerHTML=
        `   <td>${film.movie}</td>
            <td>${film.director}</td>
            <td>${film.ratings}</td>
            <td><a class='btn btn-danger btn-sm delete'>x</a></td>
        `;
        element.appendChild(row); 
       
    }
    static Clear(){
        const movie=document.getElementById('movie').value='';
        const director=document.getElementById('director').value='';
        const ratings=document.getElementById('ratings').value='';
    }
    static Remove(del){
        if(confirm('Are You Sure..')){
            UI.Alert('Movie Remove','info');
            del.remove();
        }
        else{
            return 0;
        }
        
    }
    static Alert(message,className){
        const div = document.createElement('div')
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const first = document.getElementById('cont1');
        const second=document.getElementById('form1');
        first.insertBefore(div,second);
        setTimeout(()=>document.querySelector('.alert').remove(),3000);
    }

}
document.addEventListener('DOMContentLoaded',UI.Display);
document.getElementById('form1').addEventListener('submit',(e)=>{
    e.preventDefault();
    const movie=document.getElementById('movie').value;
    const director=document.getElementById('director').value;
    const ratings=document.getElementById('ratings').value;
    if( movie ==='' || director ==='' || ratings ===''){
        UI.Alert('Please fill in all Details','danger');
    }
    else{
    const cinema= new Film(movie,director,ratings);
    UI.AddMovie(cinema);
    Store.addmovie(cinema);
    UI.Alert('Movie Added','info');
    UI.Clear();
    }
})
document.querySelector('#table-id').addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        UI.Remove(e.target.parentNode.parentNode);
        Store.removeMovie(e.target.parentNode.previousElementSibling.textContent);
      
    }
})
document.getElementById('div2').style.visibility='hidden';
document.getElementById('show').addEventListener('click',(e)=>{
    document.getElementById('div2').style.visibility='visible';
});

document.getElementById('search').addEventListener('keyup',(e)=>{
    let text=e.target.value.toLowerCase();
    let a=document.getElementById('table-id');
    let c= e.target.nextElementSibling.lastElementChild.children;
    for(let i=0;i<c.lenght;i++){
        console.log(c[i]);
    }
    // let b=Object.entries(c);
    // var d;
    // b.forEach((i)=>{
    // d=Object.entries(b[i+1][i+1].children);
    // console.log(d[i][i+1].innerText);
    // })
    
    
    // console.log(e.target.nextElementSibling.lastElementChild);


    // .forEach((item)=>{
    //     let arr=item.firstElementChildren.textContent;
    //     console.log(arr);
    // })
    });

