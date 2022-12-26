const mainDiv=document.getElementById("mainDiv");

const button=document.createElement("button");
mainDiv.appendChild(button);
button.innerHTML="Add Todo";
button.classList.add("btn");
button.addEventListener("click",btnFunction);
function btnFunction(){
    function fetchDetails(){
        const url='https://jsonplaceholder.typicode.com/todos';
        const todos=fetch(url)
        .then(response =>response.json())
        .then(data =>{
            const items=data;
            console.log(items);
            const form=document.createElement("form");
            const heading=document.createElement("h2");
            const status=document.createElement("p");
            for( let obj of items){
                heading.innerHTML=`${items[0].title}`
                status.innerHTML=`${items[0].completed}`
            }
            form.appendChild(heading);
            form.appendChild(status);
            mainDiv.appendChild(form);
        })
    }
    fetchDetails();
}