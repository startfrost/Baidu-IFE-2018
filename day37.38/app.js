var regionRadioWrapper = document.querySelector("#region-radio-wrapper");
var productRadioWrapper = document.querySelector("#product-radio-wrapper");
var lineCanvas = document.querySelector("#line-canvas");
setTotalDatas();
var totalDatas = getTotalDatas();
drawMultiLines(lineCanvas, totalDatas);


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
    changeTable();
});

productRadioWrapper.addEventListener("change", function (e) {
    changeTable();
});

function changeTable() {
    var dataSelected = getDataSelected(totalDatas);
    var table = renderTable(dataSelected);
    drawMultiLines(lineCanvas, dataSelected);
    table.addEventListener("mouseover", function (e) {
        if (e.target.localName == "td") {
            var tr = e.target.parentElement;
            var tds = tr.getElementsByTagName("td");
            var datas = [];
            for (var i = tds.length - 1; i > tds.length - 13; i--) {
                datas.unshift(tds[i].innerHTML);
            }
            drawLine(lineCanvas, datas);
        }
    });
    table.addEventListener("mouseleave", function (e) {
        drawMultiLines(lineCanvas, dataSelected);
    });
    table.addEventListener("click", function(e) {
        var target = e.target;
        if (target.localName == "td") {
            editCell(target);
        }
    });
}
