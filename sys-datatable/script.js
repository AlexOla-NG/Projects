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
let headerCheckbox = document.querySelector("#headerCheckbox")
let tableLastCol = document.querySelector("tbody > tr:last-child > td:last-child")
let tableFirstCol = document.querySelector("tbody > tr:last-child > td:first-child")
let tbody = document.querySelector("tbody")
let searchBar = document.querySelector("#searchInp")


//
// ──────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: E V E N T   L I S T E N E R S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//


// NOTE: event listeners

window.addEventListener("DOMContentLoaded", () => {
    
    // STUB: popup add-new-client modal
    // REVIEW: defining a addGlobalEventListener function is redundant. It is only used once in this document
    addGlobalEventListener("click", "[data-value='add']", showModalFunc, addClientModal)

    // STUB: add new client to html table
    addModalForm.addEventListener("submit", (ev) => {
        ev.preventDefault()
        
        // STUB: convert formData to array
        let addClientForm = new FormData(ev.target)
        let arrFormData = formData2Array(addClientForm)

        // STUB: save values from array to tr element
        let trElem = mapValue2TD(arrFormData, tableFirstCol, tableLastCol)
        
        // STUB: update table with new row
        pushTr2Tbody(trElem, tbody)
        
        alert(`Client information successfully added✔️`)
        resetForm(addModalForm)
        closeDialog(addClientModal)
        
    })
    
    // STUB: delete btn action
    // NOTE: there are two patterns for the delete btn action
        // 1. when the groupDelBtn is clicked
        // 2. when an individual del btn is clicked
    // STUB: when an individual del btn is clicked
    document.addEventListener("click", (ev) => {
        if (ev.target.matches("[data-value='delete']")) {
            let parentElementTR = ev.target.parentElement.parentElement

            showModalFunc(deleteClientModal)

            delModalForm.addEventListener("submit", (ev) => {
                ev.preventDefault()

                if (parentElementTR.parentNode) {
                    // STUB: removedNode contains removed row
                    let removedNode = parentElementTR.parentNode.removeChild(parentElementTR)
                }
                
                alert(`Client information deleted❌`)
                closeDialog(deleteClientModal)
            })

        }
    })

    // STUB: delete only selected items when the groupDelBtn is clicked
    groupDelBtn.addEventListener("click", () => {
        
        let tbodyCheckboxList = Array.from(document.querySelectorAll(".clientCheckboxes"))

        if (window.confirm("Are you sure you want to delete the selected items?")) {
            tbodyCheckboxList.forEach(checkbox => {
                let parentElementTR = checkbox.parentElement.parentElement
    
                if (checkbox.checked) {
                    parentElementTR.remove()
                }
            })
        }
    })

    // STUB: close modalDialogList & enable bg scrolling, reset all form input
    modalCloseBtnList.forEach(closeBtn => {
        closeBtn.addEventListener("click", () => {
            modalDialogList.forEach(dialog => {
                resetForm(addModalForm)
                closeDialog(dialog)
            })
        })
    })

    // STUB: popup edit-client modal
    document.addEventListener("click", (ev) => {
        if (ev.target.matches("[data-value='edit']")) {

            // STUB: get the children of the tr tag
            let parentElementTR = ev.target.parentElement.parentElement
            let trChildrenList = parentElementTR.children
            let trChildrenArray = Array.from(trChildrenList)

            let clientInfoList = trChildrenArray.slice(1, -1)
            let clientInfoListValues = clientInfoList.map(clientInfo => {
                return clientInfo.textContent
            })
    
            // STUB: call edit modal
            showModalFunc(editClientModal)
    
            // STUB: get input tags in edit modal form
            let editModalFormInpList = Array.from(editModalForm.querySelectorAll("input"))
    
            // STUB: map elems in clientInfoListValues to input values in edit modal form
            editModalFormInpList.map((inputElem, index) => {
                inputElem.value = clientInfoListValues[index]
            })
            
            // STUB: update html table on editform submit
            editModalForm.addEventListener("submit", (ev) => {
                let editClientForm = new FormData(ev.target)
                let arrFormData = formData2Array(editClientForm)
    
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
    
            tbodyCheckboxList.forEach(checkbox => {
                checkbox.checked = true
            })
        } else {
            tbodyCheckboxList.forEach(checkbox => {
                checkbox.checked = false
            })
        }
    })

    // STUB: search for text on click
    searchBar.addEventListener("keydown", (event) => {
        
        let searchInp = searchBar.value.toUpperCase()
        let tdList = Array.from(tbody.querySelectorAll("td"))
        let txtValue = ""

        if (searchInp == "") {
            return
        }

        // REVIEW: highlighted td should return to default style when searchInp is cleared
        if (event.key == "Enter") {
            tdList.forEach(td => {
                txtValue = td.textContent || td.innerText;
                
                if (txtValue.toUpperCase().indexOf(searchInp) == -1) {
                    td.style.backgroundColor = "none"
                } else {
                    td.style.backgroundColor = "lightblue"
                }
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