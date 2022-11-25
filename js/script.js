const xhr = new XMLHttpRequest;

xhr.onload = function () {

    let data=JSON.parse(this.response);

    let element=document.getElementById('details');

    for(let i=1;i<data.length;i++){
      document.getElementById('super'+i).src = data[i].show.image.medium;
  };
    
    element.innerHTML=html;
    

    // divelm.innerText=data.location.name;
    // element.appendChild(divelm);
    // console.log(data.location.name)
    // console.log(data);
    // console.log(data.current.temp_c);
    // console.log(data.current.humidity);
}

xhr.onerror = function () {

}

// For API URL

// https://openweathermap.org/current

let APIkey='4658da66a2b03fcccd06c6a66b0d0ac4'; // {your key};
document.getElementById("submit").addEventListener('click',(e)=>{
    let element=document.getElementById('details');
    let charname=document.getElementById('input').value;
    const URL=" https://api.tvmaze.com/search/shows?q="+charname;
    xhr.open("GET", URL);
    e.preventDefault();
    xhr.send();
});
function changeBackground(color){
  document.body.style.backgroundColor = color;
  let check = document.getElementsByClassName("btn");
  if(color=='#000000'){
      for(let ele of check){
          ele.style.color = "white";
      }
  }
  else{
      for(let ele of check){
          ele.style.color = "black";
      }
  }
}