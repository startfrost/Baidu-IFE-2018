// function editCell(td) {
//     var beforeContent = td.innerHTML;
//     td.innerHTML = "";
//     var editDiv = document.createElement("div");
//     editDiv.addEventListener("keyup", function(e) {
//         // cancelEdit(td, beforeContent);
//     });
//     var inputElement = document.createElement("input");
//     inputElement.value = beforeContent;
//     editDiv.appendChild(inputElement);
//     var checkedBtn = document.createElement("img");
//     checkedBtn.setAttribute("src", "./image/checked.png");
//     checkedBtn.addEventListener("click", function(e) {
//         finishEdit(td, inputElement.value);
//     });
//     editDiv.appendChild(checkedBtn);
//     var cancelBtn = document.createElement("img");
//     cancelBtn.setAttribute("src", "./image/delete.png");
//     cancelBtn.addEventListener("click", function(e) {
//         cancelEdit(td, beforeContent);
//     });
//     editDiv.appendChild(cancelBtn);
//     td.appendChild(editDiv);
// }

function editCell(td) {
    var beforeContent = td.innerHTML;
    td.innerHTML = "";
    var editDiv = document.createElement("div");
    
    var inputElement = document.createElement("input");
    inputElement.value = beforeContent;
    editDiv.appendChild(inputElement);

    var checkedBtn = document.createElement("img");
    checkedBtn.setAttribute("id", "checkedBtn");
    checkedBtn.setAttribute("src", "./image/checked.png");
    editDiv.appendChild(checkedBtn);

    var cancelBtn = document.createElement("img");
    cancelBtn.setAttribute("id", "cancelBtn");
    cancelBtn.setAttribute("src", "./image/delete.png");
    editDiv.appendChild(cancelBtn);

    td.appendChild(editDiv);
    editDiv.addEventListener("click", function(e) {
        if (e.target.id == "cancelBtn") {
            cancelEdit(td, beforeContent);
        } else if (e.target.id == 'checkedBtn') {
            finishEdit(td, inputElement.value);
        }
    });
    editDiv.addEventListener("keyup", function(e) {
        if (e.keyCode == 13) {
            finishEdit(td, inputElement.value);
        } else if (e.keyCode == 27) {
            cancelEdit(td, beforeContent);
        }
    });
}

function cancelEdit(td, beforeContent) {
    td.innerHTML = beforeContent;
}

function finishEdit(td, newValue) {
    if (judgeNum(newValue)) {
        td.innerHTML = newValue;
    } else {
        alert("输入的不是数字");
    }
}

function judgeNum(newValue) {
    if (isNaN(Number(newValue))) {
        return false;
    } else {
        return true;
    }
}