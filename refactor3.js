function _convertToBoolean(value) {
    if (value === "") {
        return null;
    } else {
        return value === "right";
    }
}

// -----
function _convertToBoolean(value) {
    return value === "" ? null : value === "right";
}
