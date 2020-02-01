function drawLine(container, datas) {
    var lineContext = container.getContext("2d");
    lineCanvas.height = lineCanvas.height;  // 清空画布
    var blockWidth = 50;
    var maxHeight = getMaxHeight(datas);
    drawAxis(lineContext, blockWidth);
    drawBrokenLine(lineContext, datas, maxHeight, blockWidth);
}

function drawMultiLines(container, totalDatas) {
    var lineContext = container.getContext("2d");
    lineCanvas.height = lineCanvas.height;  // 清空画布
    var blockWidth = 50;
    var totalMaxHeight = getTotalMaxHeight(totalDatas);
    var lineColorNum = 0;
    var lineColor = ["red", "orange", "indianred", "green", "aqua", "blue", "purple", "olive", "teal", "brown", "darkgoldenrod", "deeppink"];
    drawAxis(lineContext, blockWidth);
    for (var datas of totalDatas) {
        drawBrokenLine(lineContext, datas.sale, totalMaxHeight, blockWidth, lineColor[lineColorNum]);
        lineColorNum++;
    }
}

function drawAxis(ctx, blockWidth) {
    // 绘制x轴与y轴
    ctx.beginPath();
    ctx.moveTo(120 + blockWidth * 12, 100 + blockWidth * 12);
    ctx.lineTo(100, 100 + blockWidth * 12);
    ctx.lineTo(100, 100);
    ctx.stroke();
    ctx.closePath();
    // 添加x轴文字
    ctx.font = "20px serif";
    for (var i = 1; i < 13; i++) {
        ctx.fillText(i + "月", 100 + i * blockWidth - 40, 120 + blockWidth * 12)
    }
}

function drawBrokenLine(ctx, datas, maxHeight, blockWidth, color="black") {
    var eachHeight = 500 / maxHeight;
    // 绘制线
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(100 + blockWidth / 2, 700 - datas[0] * eachHeight);
    for (var i = 1; i < 13; i++) {
        ctx.lineTo(100 + blockWidth * i - blockWidth / 2, 700 - datas[i - 1] * eachHeight);
    }
    ctx.stroke();
    ctx.closePath();
    // 绘制点
    ctx.beginPath();
    ctx.moveTo(100 + blockWidth / 2, 700 - datas[0] * eachHeight);
    for (var i = 1; i < 13; i++) {
        ctx.arc(100 + blockWidth * i - blockWidth / 2, 700 - datas[i - 1] * eachHeight, 5, 0, 2 * Math.PI);
        ctx.fillText(datas[i - 1], 100 + blockWidth * i - blockWidth / 2 - 15, 700 - datas[i - 1] * eachHeight - 10)
        ctx.moveTo(100 + blockWidth * (i + 1) - blockWidth / 2, 700 - datas[i] * eachHeight)
    }
    ctx.fill();
    ctx.closePath();
}

function getMaxHeight(datas) {
    var maxHeight = 0;
    for (var data of datas) {
        if (Number(data) > maxHeight) {
            maxHeight = Number(data);
        }
    }
    return maxHeight;
}

function getTotalMaxHeight(totalDatas) {
    var totalMaxHeight = 0;
    for (var datas of totalDatas) {
        for (var data of datas.sale) {
            if (Number(data) > totalMaxHeight) {
                totalMaxHeight = Number(data);
            }
        }
    }
    return totalMaxHeight;
}