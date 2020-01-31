// 渲染表格
function renderTable(datas) {
    var tableWrapper = document.querySelector("#table-wrapper");
    // 清空已有表格
    tableWrapper.innerHTML = "";
    // 创建新表格
    var table = document.createElement("table");
    tableWrapper.appendChild(table);
    renderTrHead(table);
    renderTrData(table, datas);
    return table;
}

// 渲染表格表头
function renderTrHead(table) {
    // 创建tr表头
    var trHead = document.createElement("tr");
    table.appendChild(trHead);
    // 创建表头元素
    if (regionRenderFirst()) {
        var region = document.createElement("th");
        region.innerHTML = "地区";
        trHead.appendChild(region);
        var product = document.createElement("th");
        product.innerHTML = "商品";
        trHead.appendChild(product);
    } else {
        var product = document.createElement("th");
        product.innerHTML = "商品";
        trHead.appendChild(product);
        var region = document.createElement("th");
        region.innerHTML = "地区";
        trHead.appendChild(region);
    }
    for (var i = 1; i < 13; i++) {
        var month = document.createElement("th");
        month.innerHTML = i + "月";
        trHead.appendChild(month);
    }
}

// 渲染表格数据
function renderTrData(table, datas) {
    var regionBefore = document.createElement("td");
    var regionRowspan = 0;
    var productBefore = document.createElement("td");
    var productRowspan = 0;
    for (var data of datas) {
        // 创建tr数据
        var trObject = document.createElement("tr");
        table.appendChild(trObject);
        // 创建数据元素
        var region = document.createElement("td");
        region.innerHTML = data.region;
        var product = document.createElement("td");
        product.innerHTML = data.product;
        /**
         * 首先判断是不是“地区”放在前面
         * 接着根据当前条目的上一条情况来判断是否合并
         * (效果是实现了，但实现的代码有些冗长，待以后优化)
         */
        if (regionRenderFirst()) {
            if (region.innerHTML != regionBefore.innerHTML) {
                trObject.appendChild(region);
                regionBefore = region;
                regionRowspan = 1;
            } else {
                regionRowspan++;
                regionBefore.setAttribute("rowspan", regionRowspan);
            }
            if (product.innerHTML != productBefore.innerHTML) {
                trObject.appendChild(product);
                productBefore = product;
                productRowspan = 1;
            } else {
                productRowspan++;
                productBefore.setAttribute("rowspan", productRowspan);
            }
        } else {
            if (product.innerHTML != productBefore.innerHTML) {
                trObject.appendChild(product);
                productBefore = product;
                productRowspan = 1;
            } else {
                productRowspan++;
                productBefore.setAttribute("rowspan", productRowspan);
            }
            if (region.innerHTML != regionBefore.innerHTML) {
                trObject.appendChild(region);
                regionBefore = region;
                regionRowspan = 1;
            } else {
                regionRowspan++;
                regionBefore.setAttribute("rowspan", regionRowspan);
            }
        }
        for (var i = 0; i < data.sale.length; i++) {
            var month = document.createElement("td");
            month.innerHTML = data.sale[i];
            trObject.appendChild(month);
        }
    }
}

// 判断是否先渲染“地区”这一列
function regionRenderFirst() {
    var regionInputs = document.querySelectorAll("#region-radio-wrapper input");
    var productInputs = document.querySelectorAll("#product-radio-wrapper input");
    var regionChecked = 0;
    var productChecked = 0;
    for (var regionInput of regionInputs) {
        if (regionInput.checked == true) {
            regionChecked++;
        }
    }
    for (var productInput of productInputs) {
        if (productInput.checked == true) {
            productChecked++;
        }
    }
    if (regionChecked == 1 && productChecked > 1) {
        return true;
    } else {
        return false;
    }
}
