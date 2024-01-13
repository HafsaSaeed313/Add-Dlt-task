// function deleteRow(rowId) {
//     var row = document.getElementById(rowId);

//     if (row) {
//         row.remove();
//     }
// }

function deleteRow(button) {
    button.parentNode.parentNode.style.display = 'none';
  }

  
function addRow() {
    var table = document.getElementById('Table').getElementsByTagName('tbody')[0];
    var Row = table.insertRow();
    var cell1 = Row.insertCell(0);
    var cell2 = Row.insertCell(1);
    var cell3 = Row.insertCell(2);
    
  
    cell1.innerText = document.getElementById('nameInput').value;
    cell2.innerText = document.getElementById('rollNumberInput').value;
    cell3.innerHTML = '<button  onclick="deleteRow(this)">Delete</button>';
  }
