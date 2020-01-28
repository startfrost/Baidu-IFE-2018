var regionSelect = document.querySelector("#region-select");
var productSelect = document.querySelector("#product-select")
var tableWrapper = document.querySelector("#table-wrapper");

regionSelect.addEventListener("change", function(e) {
    var region = getValue(regionSelect);
    var product = getValue(productSelect);
    var dataSelected = selectData(region, product);
    renderTable(dataSelected);
})

productSelect.addEventListener("change", function(e) {
    var region = getValue(regionSelect);
    var product = getValue(productSelect);
    var dataSelected = selectData(region, product);
    renderTable(dataSelected);
})

// 获取select的值
function getValue(objectSelect) {
    var value;
    var index = objectSelect.selectedIndex;
    value = objectSelect.options[index].value;
    return value;
}

// 根据选择的内容，获取数据
function selectData(region, product) {
    var dataSelected = [];
    for (var object of sourceData) {
        if (object.region == region && object.product == product) {
            dataSelected.push(object);
        }
    }
    return dataSelected;
}

// 渲染表格
function renderTable(datas) {
    // 清空已有表格
    tableWrapper.innerHTML = "";
    // 创建新表格
    var table = document.createElement("table");
    tableWrapper.appendChild(table);
    renderTrHead(table);
    renderTrData(table, datas);
    
}

function renderTrHead(table) {
    // 创建tr表头
    var trHead = document.createElement("tr");
    table.appendChild(trHead);
    // 创建表头元素
    var product = document.createElement("th");
    product.innerHTML = "商品";
    trHead.appendChild(product);
    var region = document.createElement("th");
    region.innerHTML = "地区";
    trHead.appendChild(region);
    for (var i = 1; i < 13; i++) {
        var month = document.createElement("th");
        month.innerHTML = i + "月";
        trHead.appendChild(month);
    }
}

function renderTrData(table, datas) {
    for (var data of datas) {
        // 创建tr数据
        var trObject = document.createElement("tr");
        table.appendChild(trObject);
        // 创建数据元素
        var product = document.createElement("td");
        product.innerHTML = data.product;
        trObject.appendChild(product);
        var region = document.createElement("td");
        region.innerHTML = data.region;
        trObject.appendChild(region);
        for (var i = 0; i < data.sale.length; i++) {
            var month = document.createElement("td");
            month.innerHTML = data.sale[i];
            trObject.appendChild(month);
        }
    }
}