let myLeads = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
    console.log("button clicked")
    myLeads.push(inputEl.value)
    inputEl.value = ""
    //console.log(myLeads)
    renderleads()
})

function renderleads(){
    let listItems = ""

    for(let i=0;i<myLeads.length;i++){
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        //listItems += "<li><a target = '_blank' href='"+myLeads+"'>"  + myLeads[i] + "</a></li>"
        listItems += `<li>
                        <a target = '_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`

    /*const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)*/
    }
    ulEl.innerHTML = listItems
}
