
let listcon= document.getElementById('myUL')
let head= document.querySelector('head')
let input = document.getElementById('myInput')

function addtask(){
  if(input.value ==''){
    alert('please enter a task')
  }
  else{
    const task = document.createElement('li')
    task.textContent = input.value;
    listcon.appendChild(task)

    let span = document.createElement('span');
    span.textContent='\u00d7';
    task.appendChild(span)
    span.style.Right='0px'
}
input.value='';
saveDate()
}

listcon.addEventListener('click', (e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
    saveDate()
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove()
    saveDate()
  } 
})

function saveDate(){
  localStorage.setItem('data', listcon.innerHTML)
}

function showTask(){
  listcon.innerHTML = localStorage.getItem('data')
}
showTask()













// let listcon= document.getElementById('myUL')
// let head= document.querySelector('head')
// let input= document.getElementById('myInput')

// function addtask(){
//   if(input.value ==''){
//     alert('please enter a task')
//   }
//   else{
//     let task = document.createElement('li')
//     task.listcon = input.value
//     listcon.appendChild(task)

//     let span = document.createElement('span');
//     span.textContent='\u00d7';
//     task.appendChild(span)
//     console.log(task);
//   }
//   input.value=''
//   saveData()
// }

// listcon.addEventListener('click', function(e){
//   if(e.target.tagName === 'LI'){
//     e.target.classList.toggle('checked')
//     saveData()
//   }
//   else if(e.target.tagName === 'SPAN'){
//     e.target.parentElement.remove()
//     saveData()
//   }
// })
// function saveData(){
//   localStorage.setItem('data', listcon.innerHTML)
// }
//  function showTask(){
//    listcon.innerHTML = localStorage.getItem('data')
//  }
//  showTask()