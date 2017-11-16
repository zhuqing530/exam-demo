const preDefinedAnswers = [{
    unitMark: 5,
    answers: [["统一建模语言"], ["封装性", "继承性", "多态性"]]
}, {
    unitMark: 10,
    answers: ["B", "A"]
}, {
    unitMark: 10,
    answers: ["ABD", "ABC"]
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

function getUserAnswers1() {
    const answer1_1 = [document.getElementById("form")["1-1"].value.trim()];
    const answer1_2inputs = document.getElementById("form")["1-2"];
    const answers1_2 = [];
    for (let i = 0; i < answer1_2inputs.length; i++) {
        const input = answer1_2inputs[i];
        answers1_2.push(input.value.trim());
    }
    return [answer1_1, answers1_2];
}

function getUserAnswers2() {
    const answer2_1 = document.getElementById("form")["2-1"].value;
    const answer2_2 = document.getElementById("form")["2-2"].value;
    return [answer2_1, answer2_2];
}

function getUserAnswers3() {
    const answer3_1inputs = document.getElementById("form")["3-1"];
    let answer3_1 = "";
    for (let i = 0; i < answer3_1inputs.length; i++) {
        const checkbox = answer3_1inputs[i];
        if (checkbox.checked) {
            answer3_1 += checkbox.value;
        }
    }

    const answer3_2inputs = document.getElementById("form")["3-2"];
    let answer3_2 = "";
    for (let i = 0; i < answer3_2inputs.length; i++) {
        const checkbox = answer3_2inputs[i];
        if (checkbox.checked) {
            answer3_2 += checkbox.value;
        }
    }
    return [answer3_1, answer3_2];
}

function getUserAnswers4() {
    function _convertToBoolean(value) {
        if (value === "") {
            return null;
        } else {
            return value === "right";
        }
    }

    const answer4_1 = _convertToBoolean(document.getElementById("form")["4-1"].value);
    const answer4_2 = _convertToBoolean(document.getElementById("form")["4-2"].value);

    return [answer4_1, answer4_2];
}

function getUserAnswers5() {
    const answer5_1 = document.getElementById("form")["5-1"].value.trim();
    return [answer5_1];
}

function getUserAnswers() {
    const answers1 = getUserAnswers1();
    const answers2 = getUserAnswers2();
    const answers3 = getUserAnswers3();
    const answers4 = getUserAnswers4();
    const answers5 = getUserAnswers5();
    return [answers1, answers2, answers3, answers4, answers5];

}

function findSameElements(aa, bb) {
    function _contains(array, element) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return true;
            }
        }
        return false;
    }

    function _removeDuplicatedElements(array) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (_contains(result, element)) {

            } else {
                result.push(element);
            }
        }
        return result;
    }

    const newBb = _removeDuplicatedElements(bb);
    const result = [];
    for (let i = 0; i < newBb.length; i++) {
        const b = newBb[i];
        if (_contains(aa, b)) {
            result.push(b);
        }
    }
    return result;
}

function findCountOfSameElementsWithSamePosition(aa, bb) {
    let count = 0;
    for (let i = 0; i < aa.length; i++) {
        if (aa[i] === bb[i]) {
            count += 1;
        }
    }
    return count;
}

function calculateTotalMark(userAnswers) {
    let result = 0;

    const userAnswer0 = userAnswers[0];
    const predefinedAnswer0 = preDefinedAnswers[0];
    for (let i = 0; i < userAnswer0.length; i++) {
        const userAnswer = userAnswer0[i];
        const predefinedAnswer = predefinedAnswer0.answers[i];
        const correctCount = findSameElements(userAnswer, predefinedAnswer).length;
        result += correctCount * predefinedAnswer0.unitMark;
    }

    for (let i = 1; i < 5; i++) {
        const userAnswer = userAnswers[i];
        const predefinedAnswer = preDefinedAnswers[i];
        const count = findCountOfSameElementsWithSamePosition(userAnswer, predefinedAnswer.answers);
        result += count * predefinedAnswer.unitMark;
    }

    return result;
}

function execute() {
    if (checkInfoValid()) {
        const userAnswers = getUserAnswers();
        console.log("userAnswers: ");
        console.log(userAnswers);
        const totalMark = calculateTotalMark(userAnswers);
        updateTotalMark(totalMark);
        alert('计算完成');
    }
}