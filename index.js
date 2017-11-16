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
    function _checkInput(inputId, infoName) {
        const clazz = document.getElementById(inputId).value;
        if (clazz.trim().length === 0) {
            alert(infoName + "信息为空，请填写");
            return false;
        } else {
            return true;
        }
    }

    return _checkInput("class", "班级")
        && _checkInput("student-number", "学号")
        && _checkInput("username", "姓名");
}

function getInputs(inputName) {
    return document.getElementById("form")[inputName];
}

function getInputValue(inputName) {
    return getInputs(inputName).value;
}

function getInputValues(inputName, condition) {
    const inputs = getInputs(inputName);
    const values = [];
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (condition(input)) {
            values.push(input.value.trim());
        }
    }
    return values;
}

function getUserAnswers1() {
    const answer1_1 = [getInputValue("1-1").trim()];
    const answer1_2 = getInputValues("1-2", function (input) {
        return true;
    });
    return [answer1_1, answer1_2];
}

function getUserAnswers2() {
    const answer2_1 = getInputValue("2-1");
    const answer2_2 = getInputValue("2-2");
    return [answer2_1, answer2_2];
}

function getUserAnswers3() {
    function condition(checkbox) {
        return checkbox.checked;
    }

    const answer3_1 = getInputValues("3-1", condition);
    const answer3_2 = getInputValues("3-2", condition);
    return [answer3_1, answer3_2];
}

function getUserAnswers4() {
    function _convertToBoolean(value) {
        return value === "" ? null : value === "right";
        if (value === "") {
            return null;
        } else {
            return value === "right";
        }
    }

    const answer4_1 = _convertToBoolean(getInputValue("4-1"));
    const answer4_2 = _convertToBoolean(getInputValue("4-2"));

    return [answer4_1, answer4_2];
}

function getUserAnswers5() {
    const answer5_1 = getInputValue("5-1").trim();
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