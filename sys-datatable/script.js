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
let modal = document.querySelectorAll(".modal")
let modalAddBtn = document.querySelector("button[data-value='add']")
let addModalForm = document.querySelector("#addClientModal > form[method='modal']")
let modalCloseBtn = document.querySelectorAll("button[data-value='cancel']")
let modalDeleteBtn = document.querySelectorAll("[data-value='delete']")
let modalEditBtn = document.querySelectorAll("[data-value='edit']")
let modalForms = document.querySelectorAll("form[method='modal']")
let selectAllCheckbox = document.querySelector("#selectAllCheckbox")
let clientCheckboxes = document.querySelectorAll(".clientCheckboxes")
console.log(clientCheckboxes)

//
// ──────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: B U T T O N   E V E N T   L I S T E N E R S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//


// NOTE: button event listeners

document.addEventListener("DOMContentLoaded", () => {
    
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
    
    // STUB: close modal, enable bg scrolling, reset all form input
    modalCloseBtn.forEach(closeBtn => {
        closeBtn.addEventListener("click", () => {
            modal.forEach(elem => {
                closeDialog(elem)
    
                // REVIEW: this might cause unintended consequences for editModal
                modalForms.forEach(form => resetForm(form))
            })
        })
    })

    // STUB: collect addModal form response, convert it to obj,reset form & close modal
    addModalForm.addEventListener("submit", (ev) => {
        ev.preventDefault()
        
        let addClientForm = new FormData(ev.target)
        let newClient = new Client()
    
        // convertFormData(addClientForm)
        console.log(convertFormData(addClientForm))

        // REVIEW: why are we trying to convert a map into an object (Class)? See 163
        // convertObj2Class(convertFormData(addClientForm), newClient)
        // console.log(convertObj2Class(convertFormData(addClientForm), newClient))
    
        resetForm(addModalForm)
        closeDialog(addClientModal)
    })

    // STUB: add event listener to selectAllCheckbox, check event object returned
    selectAllCheckbox.onchange = e => {
        console.log(e.target.checked)
    }

    // TODO: stopped here
    // collect clientCheckbox return values
    // STUB: add event listener to clientCheckboxes, check event object returned
    clientCheckboxes.forEach((clientCheckbox, currentIndex) => {
        clientCheckbox.onchange = e => {
            console.log(`${currentIndex}: ${e.target.checked}`)
        } 
    })
}) 



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

// STUB: create function for close dialog events
function closeDialog(dialog) {
    dialog.close()
    document.body.style.overflow = ""
}

// STUB: create function for reset forms
function resetForm(form) {
    form.reset()
    alert(`Form successfully uploaded✔️`)
}

// STUB: create function that converts formData object into map
function convertFormData(formDataObj) {
    // let obj = {}
    // let newArray = []
    let newMap = new Map()
    newMap.set("isChecked", undefined)
    
    for(const[key, value] of formDataObj) {
        // newArray[key] = value
        newMap.set(key, value)
    }
    console.log(`The size of the map is: ${newMap.size}`)

    return newMap
}


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