function saveState(regionState, productState) {
    var nowURL = "./task3.html#";
    var pageState = {
        region: regionState,
        product: productState
    };
    nowURL = nowURL + regionState[0] + regionState[1] + regionState[2] + productState[0] + productState[1] + productState[2];
    history.pushState(pageState, null, nowURL);
}

function getState(state) {
    var regionInputs = document.querySelectorAll("#region-radio-wrapper input[checkbox-type='sub']");
    var productInputs = document.querySelectorAll("#product-radio-wrapper input[checkbox-type='sub']");
    var regionAll = document.querySelector("#region-radio-wrapper input[checkbox-type='all']");
    var productAll = document.querySelector("#product-radio-wrapper input[checkbox-type='all']");
    for (var i = 1; i < 7; i++) {
        if (state[1] == 1) {
            // 华东地区选项
            regionInputs[0].checked = true;
        }
        if (state[2] == 1) {
            // 华北地区选项
            regionInputs[1].checked = true;
        }
        if (state[3] == 1) {
            // 华南地区选项
            regionInputs[2].checked = true;
        }
        if (state[4] == 1) {
            // 手机产品选项
            productInputs[0].checked = true;
        }
        if (state[5] == 1) {
            // 笔记本产品选项
            productInputs[1].checked = true;
        }
        if (state[6] == 1) {
            // 智能音箱选项
            productInputs[2].checked = true;
        }
    }
    if (state.slice(1,4) == "111") {
        // 地区全选选项
        regionAll.checked = true;
    }
    if (state.slice(4,7) == "111") {
        // 产品全选选项
        productAll.checked = true;
    }
}