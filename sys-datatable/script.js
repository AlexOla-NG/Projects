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
let modalAddBtn = document.querySelector(".addClientModal")
let modalCloseBtn = document.querySelectorAll(".close")
let modalDeleteBtn = document.querySelectorAll(".deleteClientModal")
console.log(modalCloseBtn)
let modalEditBtn = document.querySelectorAll(".editClientModal")


// NOTE: button event listeners

modalAddBtn.addEventListener("click", () => {
    addClientModal.showModal()
})

modalDeleteBtn.addEventListener("click", () => {
    deleteClientModal.showModal()
})

// STUB: add functionality for all .close elements
modalCloseBtn.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        modal.forEach(elem => elem.close())
    })
})

// TODO: stopped here
    // add editClientModal event listener for each edit icon

// modalEditBtn.addEventListener("click", () => {
//     editClientModal.showModal()
// })

modalEditBtn.forEach(editBtn => {
    editBtn.addEventListener("click", () => {
        editClientModal.showModal()
    })
})