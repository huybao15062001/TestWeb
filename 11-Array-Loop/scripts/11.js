const arrayList = [];
renderList()
function renderList(){
    const jsResult = document.querySelector('.js-Result')
    let todoListHTML = '';
    for(i = 0; i< arrayList.length; i++){
        const todoObject = arrayList[i]
        const nameOJ = todoObject.name
        const dateOJ = todoObject.date
        const html =`
        <p>
            ${nameOJ}</p> <p>${dateOJ}
            
        </p>
        <button onclick="
                arrayList.splice(${i},1);
                renderList(); 
            " class="delBT">Delete</button>`
        todoListHTML +=html
    }
    jsResult.innerHTML = todoListHTML
}


function submitBT(){
    const jsInput = document.querySelector('.js-Input')
    const jsDate = document.querySelector('.js-Date') 

    const nameValue = jsInput.value
    const dateValue = jsDate.value

    if (nameValue !== '' && arrayList.date !== ''){
        arrayList.push({name: nameValue, date: dateValue});
        renderList()
    }

    jsInput.value = ''
    jsDate.value = ''
    
}

