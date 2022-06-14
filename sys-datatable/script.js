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
let modalCloseBtn = document.querySelectorAll("button[data-value='cancel']")
let modalDeleteBtn = document.querySelectorAll("[data-value='delete']")
let modalEditBtn = document.querySelectorAll("[data-value='edit']")
let modalForm = document.querySelectorAll("form[method='modal']")
console.log(modalForm)

//
// ──────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: B U T T O N   E V E N T   L I S T E N E R S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//


// NOTE: button event listeners

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

// STUB: close modal, enable bg scrolling
modalCloseBtn.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        modal.forEach(elem => {
            elem.close()
            document.body.style.overflow = ""
        })
    })
})

// STUB: collect form response

// REVIEW: this snippet collects form responses from all modal submissions. An ideal approach would be to collect form response from each modal because they're doing different things.
modalForm.forEach(form => {
    form.addEventListener("submit", (ev) => {
        ev.preventDefault()
        console.log(ev.target)
    })
})

// TODO: stopped here
    // add event listener for each modal submission

//
// ──────────────────────────────────────────────────────────────────────────────────────────── IV ──────────
//   :::::: D E F I N E   C L I E N T   O B J E C T   C L A S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────
//

// NOTE: define Client object class

function Client(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.isChecked;
}

//
// ──────────────────────────────────────────────────────────────────────────── V ──────────
//   :::::: H A N D L I N G   F O R M   D A T A : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
//

// NOTE: handling form data on submit

// TODO: create function to handle form data object