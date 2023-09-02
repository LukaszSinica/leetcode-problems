Array.prototype.last = function() {
    let last = this.slice(-1).pop()
    console.log(last)
    if(last === "" || last === null || last === 0) {
        return last;
    } else if (last) {
        return last
    } else {
        return -1
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */