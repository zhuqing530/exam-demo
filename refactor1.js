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

// -------------

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

    if (_checkInput("class", "班级")) {
        if (_checkInput("student-number", "学号")) {
            if (_checkInput("username", "姓名")) {
                return true;
            }
        }
    }

    return false;
}

// ---------

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
