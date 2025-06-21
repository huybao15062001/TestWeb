function clickbt(select){
    const btEle = document.querySelector(select)
    if(!btEle.classList.contains('is-clicked')){
        unClick()
        btEle.classList.add('is-clicked')
    }
    else{
        btEle.classList.remove('is-clicked')
    }
function unClick(){
    const isClicke = document.querySelector('.is-clicked')
    if(isClicke){
        isClicke.classList.remove('is-clicked')
    }
}            
}