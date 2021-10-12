// const btn = document.querySelector('button');
// const div = document.querySelector('div');
// const p = document.querySelector('p');




// btn.onclick = function(){
//     if(div.classList.contains('dark')){
//         div.classList.remove('dark');
//         btn.classList = "btn btn-dark";
//         btn.innerText = "Dark Mood";
//     }else{
//         div.classList.add('dark')
//         btn.classList = "btn btn-light";
//         btn.innerText = "Light Mood";
//     }
// }






let taskInput = document.getElementById('taskInput');
console.log(taskInput);
let addBtn = document.getElementById('addBtn');
console.log(addBtn);
let allTasks = document.getElementById('allTasks');
console.log(allTasks);
let noTasks = document.getElementById('noTasks');
console.log(noTasks);
let invalid = document.querySelector('.from-group .invalid');
console.log(invalid);
let closeValidMessage = document.querySelector('.invalid, .close');
console.log(close);
let showmodil = document.getElementById('showmodil');
console.log(showmodil);
let model = document.getElementById('model');
console.log(model);
let btn2 = document.getElementById('btn2');
console.log(btn2);
let div = document.querySelector('div');
console.log(div);


btn2.onclick = function(){
    if(div.classList.contains('dark')){
        div.classList.remove('dark');
        btn2.classList = "btn btn-dark btn-block btn2";
        btn2.innerText = "Dark Mood";
    } else{
        div.classList.add('dark');
        btn2.classList = "btn btn-light btn-block btn2";
        btn2.innerText = "Light Mood";
    }
}






let showmodilfun = ()=>{
    model.classList.toggle('block')
}
showmodil.addEventListener('click', showmodilfun)


let noTasksShwo = ()=> {
    if(allTasks.childElementCount == 0){
        noTasks.classList.remove('none');
    }
}


let addTask = () => {
    let taskData = taskInput.value;
    if(taskData.trim() == "" || taskInput.value.length < 3 ){
        invalid.classList.remove('none')
    }else{
        noTasks.classList.add('none');
        allTasks.innerHTML += `<div id="noTasks" class="task alert alert-info">
        ${taskData}
         <button class="delete btn btn-danger" style="float:right">Delete</butoon>
        <i class="fas fa-trash-alt float-right" style="font-size: 20px"></i>
        </div>`;
        taskInput.value = "";
        showmodilfun();

        allTasks.addEventListener('click', function(e){
            if(e.target.classList.contains('task')){
                e.target.classList.toggle('ckeck');
            }
        })
    }
}

addBtn.addEventListener('click', addTask);

document.addEventListener('click', function (e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        noTasksShwo();
    }
})
