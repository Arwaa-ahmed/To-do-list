let inp = document.querySelector(".inp input");
let plus = document.querySelector('.inp .sp');
let taskcontent = document.querySelector('.text');
let count = document.querySelector('.tasks span');
let completed = document.querySelector('.complete span');
let a = []
window.onload = function () {
    inp.focus();
}
plus.onclick = function () {
    if (inp.value == '') {
        console.log('nodata')
        swal("wrong!", "No text to add !", "error");
    }
    else {
        let notasks = document.querySelector('.text .no-tasks')
        if (document.contains(notasks)) {
            notasks.remove();
        }
        if(a.includes(inp.value)){
            swal("error!", "this task is already exist !", "warning");
        }
        else{
            a += inp.value
            let main_span = document.createElement('span');
            let delete_span = document.createElement('span');
            delete_span.className = 'delete'
            let text = document.createTextNode(inp.value);
            let deltext = document.createTextNode('Delete');
            main_span.className = 'task-box';
            delete_span.appendChild(deltext);
            main_span.appendChild(delete_span);
            main_span.appendChild(text);
            taskcontent.appendChild(main_span);
            inp.value = '';
        }
    }
}

document.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        e.target.parentNode.remove();
    }
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle('finished')
    }
})
/**
  [3] Create Delete All Tasks Button
  [4] Create Finish All Tasks Button
 */