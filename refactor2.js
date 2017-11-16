function getUserAnswers1() {
    const answer1_1 = [getInputValue("1-1").trim()];
    const answer1_2inputs = getInputs("1-2");
    const answers1_2 = [];
    for (let i = 0; i < answer1_2inputs.length; i++) {
        const input = answer1_2inputs[i];
        answers1_2.push(input.value.trim());
    }
    return [answer1_1, answers1_2];
}

function getUserAnswers3() {
    const answer3_1inputs = getInputs("3-1");
    let answer3_1 = "";
    for (let i = 0; i < answer3_1inputs.length; i++) {
        const checkbox = answer3_1inputs[i];
        if (checkbox.checked) {
            answer3_1 += checkbox.value;
        }
    }

    const answer3_2inputs = getInputs("3-2");
    let answer3_2 = "";
    for (let i = 0; i < answer3_2inputs.length; i++) {
        const checkbox = answer3_2inputs[i];
        if (checkbox.checked) {
            answer3_2 += checkbox.value;
        }
    }
    return [answer3_1, answer3_2];
}

// ------------------

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

function getUserAnswers3() {
    const answer3_1 = getInputValues("3-1", function (checkbox) {
            return checkbox.checked;
        }
    );
    const answer3_2 = getInputValues("3-2", function (checkbox) {
            return checkbox.checked;
        }
    );
    return [answer3_1, answer3_2];
}

// ---------

function getUserAnswers3() {
    function condition(checkbox) {
        return checkbox.checked;
    }

    const answer3_1 = getInputValues("3-1", condition);
    const answer3_2 = getInputValues("3-2", condition);
    return [answer3_1, answer3_2];
}

