function generateCheckbox(container, objects) {
    // 生成选择全部的选择框
    var checkboxAll = document.createElement("input");
    checkboxAll.setAttribute("type", "checkbox");
    checkboxAll.setAttribute("checkbox-type", "all");
    checkboxAll.setAttribute("id", "checkbox-all");
    container.appendChild(checkboxAll);
    // 生成选择全部的标签
    var lableAll = document.createElement("label");
    lableAll.setAttribute("for", "checkbox-all");
    lableAll.innerHTML = "全部选择";
    container.appendChild(lableAll);
    // 生成每个选项的选择框和标签
    for (var object of objects) {
        var checkboxSub = document.createElement("input");
        // label需要通过for根据input的id绑定，object.value可能相同，但id唯一，故加一个随机数
        var randomNum = Math.floor(Math.random() * 10000);
        checkboxSub.setAttribute("type", "checkbox");
        checkboxSub.setAttribute("checkbox-type", "sub");
        checkboxSub.setAttribute("id", randomNum + object.value);
        container.appendChild(checkboxSub);
        var labelSub = document.createElement("label");
        labelSub.setAttribute("for", randomNum + object.value);
        labelSub.innerHTML = object.text;
        container.appendChild(labelSub);
    }
    // 用容器实现事件委托
    container.addEventListener("click", function (e) {
        // console.log(e);
        if (e.target.type == "checkbox") {
            var checkboxType = e.target.attributes["checkbox-type"].value;
            var checkboxs = container.getElementsByTagName("input");
            if (checkboxType == "all") {
                // 点击全选checkbox时
                if (e.target.checked == true) {
                    for (var checkbox of checkboxs) {
                        checkbox.checked = true;
                    }
                } else {
                    e.target.checked = true;
                }
            } else if (checkboxType == "sub") {
                // 点击单选checkbox时
                var countChecked = 0;
                // 统计子选项勾选个数
                for (var i = 1; i < checkboxs.length; i++) {
                    if (checkboxs[i].checked == true) {
                        countChecked++;
                    }
                }
                // 只剩一个时不允许取消勾选
                if (countChecked == 0) {
                    e.target.checked = true;
                    countChecked++;
                }
                // 设置全选checkbox
                if (countChecked == checkboxs.length - 1) {
                    checkboxs[0].checked = true;
                } else {
                    checkboxs[0].checked = false;
                }
            }
        }
    })
}


