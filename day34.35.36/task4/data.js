function getDataSelected() {
    var regionInputs = document.querySelectorAll("#region-radio-wrapper input[checkbox-type='sub']");
    var productInputs = document.querySelectorAll("#product-radio-wrapper input[checkbox-type='sub']");
    var dataSelected = [];
    // 创建向量，空间换时间以降低后续筛选时的时间复杂度
    var regionVector = generateVector(regionInputs);    // 华东：0 华北：1 华南：2
    var productVector = generateVector(productInputs);  // 手机：0 笔记本：1 智能音箱：2
    for (var data of sourceData) {
        if (judgeProduct(data, productVector) && judgeRegion(data, regionVector)) {
            dataSelected.push(data);
        }
    }
    return dataSelected;
}

function generateVector(inputs) {
    var inputVector = [];
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == true) {
            inputVector.push(1);
        } else {
            inputVector.push(0);
        }
    }
    return inputVector;
}

function judgeProduct(data, productVector) {
    if (data.product == "手机" && productVector[0] == 1) {
        return true;
    } else if (data.product == "笔记本" && productVector[1] == 1) {
        return true;
    } else if (data.product == "智能音箱" && productVector[2] == 1) {
        return true;
    } else {
        return false;
    }
}

function judgeRegion(data, productVector) {
    if (data.region == "华东" && productVector[0] == 1) {
        return true;
    } else if (data.region == "华北" && productVector[1] == 1) {
        return true;
    } else if (data.region == "华南" && productVector[2] == 1) {
        return true;
    } else {
        return false;
    }
}
