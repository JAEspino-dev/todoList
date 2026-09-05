document.querySelector('#submit').addEventListener('click', addLiToList)

// variables to be able to identify html element ul 
const todoList = document.getElementById("displayedList")   

// 
let enableDelete = false
// adds a li to my existing ul

// on click:
function addLiToList(){
    let userEntry = document.querySelector('#itemToAddToList') //set variable to whatever was typed into input 
    let newTodoListItem = document.createElement('li') //creating new li
    newTodoListItem.innerText = userEntry.value //changing innertext of newly created li
    // add class to new li: 
    newTodoListItem.classList.add('listItem')

    // add event listener
    newTodoListItem.addEventListener('click', () => lineThrough(newTodoListItem))
    todoList.append(newTodoListItem) // appending li to ul
    // reset input field to be empty
    userEntry.value = ''
}

// linethrough:
function lineThrough(listItem){
    listItem.classList.toggle('linethrough')
    console.log(listItem, 'do')
}

// Delete an item from the list

document.querySelector('#selectItemsToDelete').addEventListener('click', removeTodoItemFromList)

function removeTodoItemFromList(){
    if(enableDelete){
        enableDelete = false
         document.querySelectorAll('.listItem').forEach((listItem) => {
        let button = listItem.children[0]
        button.remove()
        })
    } else {
        enableDelete = true
        document.querySelectorAll('.listItem').forEach((listItem) => {
            let button = document.createElement('button')
            button.innerHTML = 'Delete?'
            listItem.append(button)
            button.addEventListener('click', () => {
                listItem.remove()
            })
        })
    }
}