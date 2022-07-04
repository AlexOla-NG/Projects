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

let searchBar = document.querySelector("#searchInp")

// STUB: search for events on click
searchBar.addEventListener("keydown", () => {
    // TODO: stopped here
        // convert input.value to upper/lowercase, save to filter var
        // get all valid td in table; save td textcontent in txtValue var; convert to upper/lowercase
        // if filter and txtValue match (> -1), set display to ""; else set to none
})

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
let modalDialogList = Array.from(modalDialogNodeList)
let groupDelBtn = document.querySelector("[data-value='group-delete']")
let addModalForm = document.querySelector("#addClientModal > form[method='modal']")
let editModalForm = document.querySelector("#editClientModal > form[method='modal']")
let delModalForm = document.querySelector("#deleteClientModal > form[method='modal']")
let modalCloseBtnNodeList = document.querySelectorAll("button[data-value='cancel']")
let modalCloseBtnList = Array.from(modalCloseBtnNodeList)
let modalDeleteBtnNodeList = document.querySelectorAll("[data-value='delete']")
let modalDeleteBtnList = Array.from(modalDeleteBtnNodeList)
let modalEditBtnNodeList = document.querySelectorAll("[data-value='edit']")
let modalEditBtnList = Array.from(modalEditBtnNodeList)
let modalFormsNodeList = document.querySelectorAll("form[method='modal']")
let modalFormsList = Array.from(modalFormsNodeList)
let headerCheckbox = document.querySelector("#headerCheckbox")
let tableLastCol = document.querySelector("tbody > tr:last-child > td:last-child")
let tableFirstCol = document.querySelector("tbody > tr:last-child > td:first-child")
let tbody = document.querySelector("tbody")


//
// ──────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: B U T T O N   E V E N T   L I S T E N E R S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//


// NOTE: button event listeners

window.addEventListener("DOMContentLoaded", () => {
    
    // STUB: popup add-new-client modal
    addGlobalEventListener("click", "[data-value='add']", showModalFunc, addClientModal)
    
    // STUB: delete btn action
    // NOTE: there are two patterns for the delete btn action
        // 1. when the groupDelBtn is clicked
        // 2. when an individual del btn is clicked
    // STUB: when an individual del btn is clicked
    document.addEventListener("click", (ev) => {
        if (ev.target.matches("[data-value='delete']")) {
            let parentElementTR = ev.target.parentElement.parentElement
            console.log(parentElementTR)

            showModalFunc(deleteClientModal)

            delModalForm.addEventListener("submit", (ev) => {
                ev.preventDefault()

                if (parentElementTR.parentNode) {
                    // STUB: removedNode contains removed row
                    let removedNode = parentElementTR.parentNode.removeChild(parentElementTR)
                }
                
                alert(`Client information successfully deleted❌`)
                closeDialog(deleteClientModal)
            })

        }
    })

    // STUB: delete only selected items when the groupDelBtn is clicked
    groupDelBtn.addEventListener("click", () => {
        
        let tbodyCheckboxList = Array.from(document.querySelectorAll(".clientCheckboxes"))

        tbodyCheckboxList.forEach(checkbox => {
            let parentElementTR = checkbox.parentElement.parentElement
            if (checkbox.checked) {
                parentElementTR.remove()
            }
        })
    })

    
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
        // if (dialog.matches("#addClientModal")) {
        //     resetForm(addModalForm)
        // }
    })


    // STUB: add new client to html table
    addModalForm.addEventListener("submit", (ev) => {
        ev.preventDefault()
        
        // STUB: convert formData to array
        let addClientForm = new FormData(ev.target)
        let arrFormData = formData2Array(addClientForm)
        console.log(arrFormData)

        // STUB: save values from array to tr element
        let trElem = mapValue2TD(arrFormData, tableFirstCol, tableLastCol)
        console.log(trElem)
        
        // STUB: update table with new row
        let updatedTbody = pushTr2Tbody(trElem, tbody)
        console.log(updatedTbody)
        
        alert(`Form successfully uploaded✔️`)
        resetForm(addModalForm)
        closeDialog(addClientModal)
        
    })

    // STUB: popup edit-client modal
    document.addEventListener("click", (ev) => {
        if (ev.target.matches("[data-value='edit']")) {

            // STUB: get the children of the tr tag
            let parentElementTR = ev.target.parentElement.parentElement
            let trChildrenList = parentElementTR.children
            // console.log(trChildrenList)
            let trChildrenArray = Array.from(trChildrenList)
            // console.log(trChildrenArray)
            let clientInfoList = trChildrenArray.slice(1, -1)
            // console.log(clientInfoList);
            let clientInfoListValues = clientInfoList.map(clientInfo => {
                return clientInfo.textContent
            })
            // console.log(clientInfoListValues)
    
            // STUB: call edit modal
            showModalFunc(editClientModal)
    
            // STUB: get input tags in edit modal form
            let editModalFormInpList = Array.from(editModalForm.querySelectorAll("input"))
            // console.log(editModalFormInpList)
    
            // STUB: map elems in clientInfoListValues to input values in edit modal form
            editModalFormInpList.map((inputElem, index) => {
                inputElem.value = clientInfoListValues[index]
            })
            
            // STUB: update html table on editform submit
            editModalForm.addEventListener("submit", (ev) => {
                let editClientForm = new FormData(ev.target)
                let arrFormData = formData2Array(editClientForm)
                console.log(arrFormData);
    
                // STUB: set arrFormData value as HTML value
                clientInfoList.forEach((clientInfo, index) => {
                    clientInfo.textContent = arrFormData[index][1]
                })
    
                alert(`Client data successfully edited✔️`)
                closeDialog(editClientModal)
            })
        }
    })

    // STUB: add event listener to headerCheckbox, toggle value 
    headerCheckbox.addEventListener("change", () => {
        // STUB: define tbodyCheckboxList inside event listener to capture new checkboxes added from addForm modal
        let tbodyCheckboxList = Array.from(document.querySelectorAll(".clientCheckboxes"))

        if (headerCheckbox.checked) {
            console.log(`checkbox is checked, captn`)
    
            tbodyCheckboxList.forEach(checkbox => {
                checkbox.checked = true
            })
        } else {
            tbodyCheckboxList.forEach(checkbox => {
                checkbox.checked = false
            })
        }
    })
})

//
// ────────────────────────────────────────────────────────── V ──────────
//   :::::: F U N C T I O N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

// NOTE: function definitions

// STUB: popup modal on window
function showModalFunc(targetModal) {

    // TODO: stopped here
        // add logic to populate edit form with values from tr, when edit btn is clicked
    // if (targetModal == editClientModal) {

    // }

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
}

// STUB: create function that returns a tr element containing values from submitted formData, along with the checkbox and editDel action btns
function mapValue2TD (array, checkboxElem, actionBtnsElem) {
    let newArray = [...array]
    let newTableRow = document.createElement("tr")
    let newCheckbox = document.createElement("td")
    let newActionBtns = document.createElement("td")

    newCheckbox = checkboxElem.cloneNode(true)
    newTableRow.insertAdjacentElement("afterbegin", newCheckbox)
    
    newArray.map(([, value]) => {
        let newTableData = document.createElement("td")
        
        newTableData.innerHTML = value
        
        newTableRow.append(newTableData)
    })
    
    newActionBtns = actionBtnsElem.cloneNode(true)
    newTableRow.insertAdjacentElement("beforeend", newActionBtns)
    
    return newTableRow
}

// STUB: create function that appends tr to tbody.
function pushTr2Tbody(trElement, tbodyElement) {
       
    tbodyElement.append(trElement)
}

function selectAllCheckbox(topCheckbox, individualCheckboxList) {
    if (topCheckbox.checked) {
        console.log(`checkbox is checked, captn`)

        individualCheckboxList.forEach(checkbox => {
            checkbox.checked = true
        })
    } else {
        individualCheckboxList.forEach(checkbox => {
            checkbox.checked = false
        })
    }
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