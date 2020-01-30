function drawBar(container, datas) {
    var barSvg = createSvg(container);
    var sepWidth = 10;
    var rectWidth = 30;
    drawAxis(barSvg, sepWidth, rectWidth);
    var maxHeight = getMaxHeight(datas);
    drawRect(barSvg, datas, sepWidth, rectWidth, maxHeight);
}

// 创建svg元素并完成初始设置
function createSvg(container) {
    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "800");
    svgElement.setAttribute("height", "800");
    svgElement.setAttribute("x", "0");
    svgElement.setAttribute("y", "0");
    container.appendChild(svgElement);
    return svgElement;
}

// 添加x轴y轴以及相关文字
function drawAxis(svg, sepWidth, rectWidth) {
    // 绘制x轴
    var xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxis.setAttribute("x1", "100");
    xAxis.setAttribute("x2", "720");
    xAxis.setAttribute("y1", "700");
    xAxis.setAttribute("y2", "700");
    xAxis.setAttribute("stroke", "black");
    xAxis.setAttribute("stroke-width", "2");
    svg.appendChild(xAxis);
    // 绘制y轴
    var yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    yAxis.setAttribute("x1", "100");
    yAxis.setAttribute("x2", "100");
    yAxis.setAttribute("y1", "100");
    yAxis.setAttribute("y2", "700");
    yAxis.setAttribute("stroke", "black");
    yAxis.setAttribute("stroke-width", "2");
    svg.appendChild(yAxis);
    // 添加x轴文字
    for (var i = 1; i < 13; i++) {
        var rectText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        rectText.setAttribute("x", (100 + (2 * sepWidth + rectWidth) * i - sepWidth - rectWidth).toString());
        rectText.setAttribute("y", "720");
        rectText.innerHTML = i + "月";
        svg.appendChild(rectText);
    }
}

function drawRect(svg, datas, sepWidth, rectWidth, maxHeight) {
    var eachHeight = 500 / maxHeight;
    for (var i = 1; i < 13; i++) {
        // 绘制矩形
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", (100 + (2 * sepWidth + rectWidth) * i -sepWidth - rectWidth).toString());
        rect.setAttribute("y", (700 - datas[i - 1] * eachHeight).toString());
        rect.setAttribute("width", rectWidth);
        rect.setAttribute("height", (datas[i - 1] * eachHeight).toString());
        rect.setAttribute("fill", "blue");
        svg.appendChild(rect);
        // 添加矩形描述
        var rectHint = document.createElementNS("http://www.w3.org/2000/svg", "text");
        rectHint.setAttribute("x", (100 + (2 * sepWidth + rectWidth) * i -sepWidth - rectWidth).toString());
        rectHint.setAttribute("y", (700 - datas[i - 1] * eachHeight - 10).toString());
        rectHint.innerHTML = datas[i - 1];
        svg.appendChild(rectHint);
    }
}

function getMaxHeight(datas) {
    var maxHeight = 0;
    for (var data of datas) {
        if (data > maxHeight) {
            maxHeight = data;
        }
    }
    return maxHeight;
}