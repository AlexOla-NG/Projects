//
// ────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: D Y N A M I C   S E A R C H   F U N C T I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//
// NOTE: dynamic search function, plug this to the search bar
// <script>
// function myFunction() {
//   var input, filter, table, tr, td, i, txtValue;chichi
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }
// </script>


//
// ──────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: D E C L A R E   G L O B A L   V A R I A B L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────
//

// NOTE: global variables

let addClientModal = document.querySelector("#addClientModal")
let editClientModal = document.querySelector("#editClientModal")
let deleteClientModal = document.querySelector("#deleteClientModal")
let modalDialogList = document.querySelectorAll(".modal")
let modalAddBtn = document.querySelector("button[data-value='add']")
let addModalForm = document.querySelector("#addClientModal > form[method='modal']")
let modalCloseBtn = document.querySelectorAll("button[data-value='cancel']")
let modalDeleteBtn = document.querySelectorAll("[data-value='delete']")
let modalEditBtn = document.querySelectorAll("[data-value='edit']")
let modalForms = document.querySelectorAll("form[method='modal']")
let headerCheckbox = document.querySelector("#headerCheckbox")
let tbodyCheckboxList = document.querySelectorAll(".clientCheckboxes")
let tableLastCol = document.querySelector("tbody > tr:last-child > td:last-child")
let tableFirstCol = document.querySelector("tbody > tr:last-child > td:first-child")
let tbody = document.querySelector("tbody")
console.log(tableFirstCol)
console.log(tableLastCol)

//
// ──────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: B U T T O N   E V E N T   L I S T E N E R S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//


// NOTE: button event listeners

window.addEventListener("DOMContentLoaded", () => {
    
    // STUB: popup add-new-client modal, disable bg scrolling
    modalAddBtn.addEventListener("click", () => {
        addClientModal.showModal()
        document.body.style.overflow = "hidden"
    })
    
    // STUB: popup delete-client modal, disable bg scrolling
    modalDeleteBtn.forEach(delIcon => {
        delIcon.addEventListener("click", () => {
            deleteClientModal.showModal()
            document.body.style.overflow = "hidden"
        })
    })
    
    // STUB: popup edit-client modal, disable bg scrolling
    modalEditBtn.forEach(editIcon => {
        editIcon.addEventListener("click", () => {
            editClientModal.showModal()
            document.body.style.overflow = "hidden"
        })
    })
    
    // STUB: close modalDialogList & enable bg scrolling, reset all form input
    modalCloseBtn.forEach(closeBtn => {
        closeBtn.addEventListener("click", () => {
            modalDialogList.forEach(dialog => {
                closeDialog(dialog)
            })

            // REVIEW: this might prevent us from saving user input as a draft via the editModal eventListener
            modalForms.forEach(form => resetForm(form))
        })
    })

    // STUB: convert submitted form to formDataobj, convert formDataObj to array, reset form & close modal, collect mapped data in convertFormData
    // since we converted formData straight to array, convertFormData is redundant
    addModalForm.addEventListener("submit", (ev) => {
        ev.preventDefault()
        
        // STUB: save submitted form in formDataObj as addClientForm
        let addClientForm = new FormData(ev.target)
        let arrFormData = formData2Array(addClientForm)

        console.log(arrFormData)
         
        console.log(pushFormData2Table(arrFormData, tbody))
        
        alert(`Form successfully uploaded✔️`)
        resetForm(addModalForm)
        closeDialog(addClientModal)
        
    })
    
    // TODO: create function that dynamically adds rows to table
    // STUB: create function that takes formData as array, and dynamically adds as td of new row to table.
    function pushFormData2Table(arr, tbodyElement) {
        let newArray = [...arr]
        let newTableRow = document.createElement("tr")
        let tdArray = []

        // TODO: stopped here, map the 2nd element in newArray to the td tag
        tdArray = newArray.forEach([, value] => {
            `<td></td>`
        })

        console.log(tdArray)

        tdArray.reduce((tableRow, td) => {
            tableRow += td
        }, 0)

        // newTableRow = newArray.reduce((tableRow, elem) => {
        //     tableRow.insertAdjacentElement("beforeend", elem)
        // }, 0)

        tbodyElement.append(newTableRow)


    }

    // TODO: run selectAllCheckbox function inside headerCheckbox event listener
    // STUB: add event listener to selectAllCheckbox, check event object returned
    headerCheckbox.onchange = e => {
        console.log(e.target.checked)
    }

    // TODO: stopped here
    // collect clientCheckbox return values
    // STUB: add event listener to clientCheckboxes, check object event returned
    let clientCheckboxMap = []
    tbodyCheckboxList.forEach((clientCheckbox, currentIndex) => {
        let clientCheckboxList = []
        
        // TODO: stopped here
        // write function to handle clientCheckbox onchange event
        clientCheckbox.addEventListener("change", (event) => {
            let checkboxValue = Boolean

            checkboxValue = event.target.checked

            clientCheckboxList.push(checkboxValue)
            console.log(clientCheckboxList)
        })

        clientCheckboxMap.push(currentIndex, clientCheckboxList)

        // clientCheckbox.onchange = isCheckboxActive
        
        // clientCheckbox.onchange = e => {
        //     let checkboxValue = e.target.checked
        //     let checkboxMap = new Map()
            
        //     checkboxMap.set(currentIndex, checkboxValue)
        //     console.log(checkboxMap)
        //     return checkboxMap
        // }

        // clientCheckboxList.set(currentIndex, clientCheckbox)
        
        // clientCheckbox.onchange = e => {
            //     console.log(`${currentIndex}: ${e.target.checked}`)
        //     let clientCheckboxValue = []
        
        //     clientCheckboxValue = [currentIndex, e.target.checked]
            
        //     console.log(clientCheckboxValue)
        //     clientCheckboxList.push(clientCheckboxValue)
        //     // console.log(clientCheckboxList)
        //     return clientCheckboxValue
        // }
        // clientCheckboxList.push(clientCheckbox)
        // console.log(clientCheckboxList)
    })
    console.log(clientCheckboxMap)
}) 

function selectAllCheckbox(topCheckbox, individualCheckboxList) {
    if(topCheckbox == true) {
        individualCheckboxList.forEach(clientCheckbox => {
            clientCheckbox == true
        })
    }
}

// STUB: create function to return checkbox value from onchange event
function isCheckboxActive(event) {
    let checkboxValue = Boolean
    
    checkboxValue = event.target.checked
    
    return checkboxValue
}

// REVIEW: this snippet collects form responses from all modal submissions. An ideal approach would be to collect form response from each modal because they're for different purposes.
// modalForm.forEach(form => {
    //     form.addEventListener("submit", (ev) => {
//         ev.preventDefault()
//         console.log(ev.target)
//     })
// })



//
// ────────────────────────────────────────────────────────── V ──────────
//   :::::: F U N C T I O N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

// NOTE: function definitions

// TODO: replace anonymous function for all modal calls with showModal
// STUB: create function to showModal on click
function showModal(userModal) {
    userModal.showModal()
    document.body.style.overflow = "hidden"
}

// STUB: create function for close dialog events
function closeDialog(dialog) {
    dialog.close()
    restoreOverflow()
}

// STUB: create function to reset overflow
function restoreOverflow() {
    document.body.style.overflow = ""
}

// STUB: create function for reset forms
function resetForm(form) {
    form.reset()
}

// STUB: create function that converts formDataObj to array
function formData2Array(obj) {
    let newArray = []

    newArray = Array.from(obj)

    return newArray

    // TODO: stopped here
        // create function that dynamically adds rows to table.
        // Use tableLastCol var to add the edit & del td. we only need to add one td from the list, so change querySelectorAll to just querySelector
}

// STUB: create function that converts formData object into map
// function convertFormData(formDataObj) {
//     // let obj = {}
//     // let newArray = []
//     let newMap = new Map()
//     newMap.set("isChecked", undefined)
//     console.log(`The size of the map is: ${newMap.size}`)
    
//     for(const[key, value] of formDataObj) {
    //         // newArray[key] = value
//         newMap.set(key, value)
//     }
//     console.log(`The map has been updated. New size is: ${newMap.size}`)

//     return newMap
// }


// STUB: create function that converts newMap into instance of Client class
// REVIEW: why are we trying to convert a map into an object (Class)? See 104 
function convertObj2Class(obj, constructorClass) {
        
    let objClass = constructorClass
    objClass = Object.fromEntries(obj) 
    
    return objClass
}

// STUB: create function that maps entries from formDataObj to instances of Client class
function convertMap2Class(formDataMap, constructorClass) {
    // let formMap = new Map()
    // let newClient = new Client()

    // for((key, value) in newClient) {

    // }


}
//
// ──────────────────────────────────────────────────────────────────────────────────────────── IV ──────────
//   :::::: D E F I N E   C L I E N T   O B J E C T   C L A S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────
//

// NOTE: define Client object class

class Client {
    constructor (_name, _email, _address) {
        this.name = _name;
        this.email = _email;
        this.address = _address;
        this.isChecked;
    }
}


//
// ──────────────────────────────────────────────────────────────────────────── V ──────────
//   :::::: H A N D L I N G   F O R M   D A T A : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
//

// NOTE: handling form data on submit

// TODO: create function to handle form data object