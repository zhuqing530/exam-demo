const preDefinedAnswers = [{
    unitMark: 5,
    answers: [["统一建模语言"], ["封装性", "继承性", "多态性"]]
}, {
    unitMark: 10,
    answers: ["B", "A"]
}, {
    unitMark: 10,
    answers: [["A", "B", "D"], ["A", "B", "C"]]
}, {
    unitMark: 10,
    answers: [false, true]
}, {
    unitMark: 20,
    answers: ["模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"]
}];

function updateTotalMark(totalMark) {
    document.getElementById("total-mark").innerHTML = totalMark;
}

function checkInfoValid() {
    const clazz = document.getElementById("class").value;
    if (clazz.trim().length === 0) {
        alert("班级信息为空，请填写");
        return false;
    }

    const studentNumber = document.getElementById("student-number").value;
    if (studentNumber.trim().length === 0) {
        alert("学号信息为空，请填写");
        return false;
    }

    const username = document.getElementById("username").value;
    if (username.trim().length === 0) {
        alert("姓名信息为空，请填写");
        return false;
    }

    return true;
}

function calculateTotalMark() {
    if (checkInfoValid()) {
        updateTotalMark(99);
    }
    return false;
}