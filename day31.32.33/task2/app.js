var regionRadioWrapper = document.querySelector("#region-radio-wrapper");
var productRadioWrapper = document.querySelector("#product-radio-wrapper");


generateCheckbox(regionRadioWrapper, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华北"
}, {
    value: 3,
    text: "华南"
}]);

generateCheckbox(productRadioWrapper, [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
}, {
    value: 3,
    text: "智能音箱"
}]);

regionRadioWrapper.addEventListener("change", function (e) {
    var dataSelected = getDataSelected();
    renderTable(dataSelected);
})

productRadioWrapper.addEventListener("change", function (e) {
    var dataSelected = getDataSelected();
    renderTable(dataSelected);
})