// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(word="special") {
        return `You are ${flair}${word}${flair}!`
    }
}

let Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3;
    },
    divide: function() {
        return 10 / 5
    }
}

function actionApplyer(integer, arr) {
    for (let i = 0; i < arr.length; i++) {
        integer = arr[i](integer);
    }
    return integer;
}