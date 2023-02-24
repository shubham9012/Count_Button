const numValue=document.querySelector('#Value')

const increment = () => {

    let fun=parseInt(numValue.innerText);
    fun=fun+1;
    numValue.innerText=fun;

};

const decrement=()=>{

    let fun=parseInt(numValue.innerText);
    fun=fun-1;
    numValue.innerText=fun;
};