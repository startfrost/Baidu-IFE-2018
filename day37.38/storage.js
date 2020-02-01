function setTotalDatas() {
    for (var i = 0; i < sourceData.length; i++) {
        var dataObject = JSON.stringify(sourceData[i]);
        localStorage.setItem(i.toString(), dataObject);
    }
}

function getTotalDatas() {
    var totalDatas = [];
    for (var i = 0; i < 9; i++) {
        var datas = JSON.parse(localStorage.getItem(i.toString()));
        totalDatas.push(datas);
    }
    return totalDatas;
}