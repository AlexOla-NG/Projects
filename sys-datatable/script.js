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
let modalDialogNodeList = document.querySelectorAll("dialog")
let modalDialogList = [...modalDialogNodeList]
let modalAddBtn = document.querySelector("button[data-value='add']")
let addModalForm = document.querySelector("#addClientModal > form[method='modal']")
let modalCloseBtn = document.querySelectorAll("button[data-value='cancel']")
let modalDeleteBtn = document.querySelectorAll("[data-value='delete']")
let modalEditBtn = document.querySelectorAll("[data-value='edit']")
let modalForms = document.querySelectorAll("form[method='modal']")
let headerCheckbox = document.querySelector("#headerCheckbox")
let tbodyCheckboxList = document.querySelectorAll(".clientCheckboxes")
// let
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
    
    // STUB: popup add-new-client modal
    addGlobalEventListener("click", "[data-value='add']", showModalFunc, addClientModal)
    
    // STUB: popup delete-client modal
    addGlobalEventListener("click", "[data-value='delete']", showModalFunc, deleteClientModal)

    // STUB: popup edit-client modal
    addGlobalEventListener("click", "[data-value='edit']", showModalFunc, editClientModal)
    
    // TODO: stopped here
        // addmodal form should reset after closing the addClientModal dialog
    // STUB: close modalDialogList & enable bg scrolling, reset all form input
    // modalCloseBtn.forEach(closeBtn => {
    //     closeBtn.addEventListener("click", () => {
    //         modalDialogList.forEach(dialog => {
        //             closeDialog(dialog)
    //         })
    
    //         // REVIEW: this might prevent us from saving user input as a draft via the editModal eventListener
    //         modalForms.forEach(form => resetForm(form))
    //     })
    // })
    modalDialogList.forEach(dialog => {
        addGlobalEventListener("click", "[data-value='cancel']", closeDialog, dialog)
        
        // REVIEW: the snippet below is not working properly. 
                // addmodal form should reset after closing the addClientModal dialog
        if (dialog.matches("#addClientModal")) {
            resetForm(addModalForm)
        }
    })


    // STUB: convert submitted form to formDataobj, convert formDataObj to array, reset form & close modal, collect mapped data in convertFormData
    // since we converted formData straight to array, convertFormData is redundant
    addModalForm.addEventListener("submit", (ev) => {
        ev.preventDefault()
        
        // STUB: save submitted form in formDataObj as addClientForm
        let addClientForm = new FormData(ev.target)
        let arrFormData = formData2Array(addClientForm)
        let trElem = mapValue2TD(arrFormData, tableFirstCol, tableLastCol)

        console.log(arrFormData)
         
        console.log(mapValue2TD(arrFormData, tableFirstCol, tableLastCol))
        console.log(pushTr2Tbody(trElem, tbody))
        
        alert(`Form successfully uploaded✔️`)
        resetForm(addModalForm)
        closeDialog(addClientModal)
        
    })
    
    // STUB: create function that appends tr to tbody.
    function pushTr2Tbody(trElement, tbodyElement) {
       
        tbodyElement.append(trElement)
    }
    
    // STUB: create function that maps each 2nd element in array to a td element, and appends it to a tr element along with the checkbox and editDel action btns
    function mapValue2TD (array, checkboxElem, actionBtnsElem) {
        let newArray = [...array]
        let newTableRow = document.createElement("tr")
        let newCheckbox = document.createElement("td")
        let newActionBtns = document.createElement("td")

        newCheckbox = checkboxElem.cloneNode(true)
        newTableRow.insertAdjacentElement("afterbegin",newCheckbox)
        
        newArray.map(([, value]) => {
            let newTableData = document.createElement("td")

            newTableData.innerHTML = value
            
            newTableRow.append(newTableData)
        })

        newActionBtns = actionBtnsElem.cloneNode(true)
        newTableRow.insertAdjacentElement("beforeend", newActionBtns)

        return newTableRow
    }

    // TODO: run selectAllCheckbox function inside headerCheckbox event listener
    // STUB: add event listener to selectAllCheckbox, check event object returned
    headerCheckbox.onchange = e => {
        console.log(e.target.checked)
    }

    // TODO: stopped here
    // collect clientCheckbox return values
    // STUB: add event listener to clientCheckboxes, check if object event returned is Boolean
    let clientCheckboxMap = []
    tbodyCheckboxList.forEach((clientCheckbox, currentIndex) => {
        // let clientCheckboxList = []
        
        // TODO: stopped here
        // write function to handle clientCheckbox onchange event
        clientCheckbox.addEventListener("change", checkValueOfCheckbox(checkboxEvent))

        // => {
        //     // NOTE: set default value to false, since checkbox is unchecked by default in HTML
        //     let checkboxValue = false

        //     checkboxValue += checkboxEvent.target.checked
            
        //     clientCheckboxList.push(checkboxValue)
        //     // TODO: stopped here
        //             // clear clientCheckboxList after event is added
        //     console.log(clientCheckboxList)
        // })

        // addGlobalEventListener("change", ".clientCheckboxes", checkValueOfCheckbox, "event")
        
        
        let clientCheckboxList = []
        
        // TODO: stopped here
        // return value of checkValueOfCheckbox function in clientCheckboxList
        function checkValueOfCheckbox (onChangeEvent) {

            if (onChangeEvent.target.checked) {

                let checkboxValue = new Boolean
                
                checkboxValue = onChangeEvent.target.checked
                
                return checkboxValue
                
            }
    
            
            // clientCheckboxList.push(checkboxValue)
            // TODO: stopped here
            // clear clientCheckboxList after event is added
            // console.log(clientCheckboxList)
            
        }
        
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

//
// ────────────────────────────────────────────────────────── V ──────────
//   :::::: F U N C T I O N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

// NOTE: function definitions

// STUB: popup modal on window
function showModalFunc(targetModal) {
    targetModal.showModal()
    document.body.style.overflow = "hidden"
}

// STUB: close dialog box
function closeDialog(targetModal) {
    targetModal.close()
    restoreOverflow()
}

// STUB: create function to reset overflow
function restoreOverflow() {
    document.body.style.overflow = ""
}

// STUB: reset forms
function resetForm(form) {
    form.reset()
}

// STUB: create function that dynamically add event listeners to elements.
function addGlobalEventListener(type, selector, callback, eventHandler) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            callback(eventHandler)
        }
    })
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