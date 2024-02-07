let counter = 1;
let divCollection = document.body.getElementsByClassName("row");
let divList = [];

for (let i = 0; i < divCollection.length; i++) {
    divList.push(divCollection[i].children);
}

for (let i = 0; i < divList.length; i++) {
    for (let j = 0; j < divList.length; j++) {
        divList[i][j].style.backgroundColor = "grey";
        divList[i][j].onclick = function (event) {

            let target = event.target;

            if (target.style.backgroundColor == "grey") {
                if (counter % 2 == 0) {
                    target.style.backgroundColor = "blue";
                    counter++;
                } else {
                    target.style.backgroundColor = "red";
                    counter++
                }
            }
            if (counter >= 5) {
                checkWin();
            }
        }
    }
}
function resetGame() {
    for (let i = 0; i < divList.length; i++) {
        for (let j = 0; j < divList.length; j++) {
            divList[i][j].style.backgroundColor = "grey";
        }
    }
    counter = 1;
}
function checkWin() {
    if (isCellBlue(0, 0) && isCellBlue(0, 1) && isCellBlue(0, 2) ||
        isCellBlue(1, 0) && isCellBlue(1, 1) && isCellBlue(1, 2) ||
        isCellBlue(2, 0) && isCellBlue(2, 1) && isCellBlue(2, 2) ||

        isCellBlue(0, 0) && isCellBlue(1, 0) && isCellBlue(2, 0) ||
        isCellBlue(0, 1) && isCellBlue(1, 1) && isCellBlue(2, 1) ||
        isCellBlue(0, 2) && isCellBlue(1, 2) && isCellBlue(2, 2) ||

        isCellBlue(0, 0) && isCellBlue(1, 1) && isCellBlue(2, 2) ||
        isCellBlue(0, 2) && isCellBlue(1, 1) && isCellBlue(2, 0)
    ) {
        alert("Blue wins");
    }
    else if (isCellRed(0, 0) && isCellRed(0, 1) && isCellRed(0, 2) ||
        isCellRed(1, 0) && isCellRed(1, 1) && isCellRed(1, 2) ||
        isCellRed(2, 0) && isCellRed(2, 1) && isCellRed(2, 2) ||

        isCellRed(0, 0) && isCellRed(1, 0) && isCellRed(2, 0) ||
        isCellRed(0, 1) && isCellRed(1, 1) && isCellRed(2, 1) ||
        isCellRed(0, 2) && isCellRed(1, 2) && isCellRed(2, 2) ||

        isCellRed(0, 0) && isCellRed(1, 1) && isCellRed(2, 2) ||
        isCellRed(0, 2) && isCellRed(1, 1) && isCellRed(0, 2)
    ) {
        alert("Red wins");
    }
}
function getBackgroundColorCell(x, y) {
    return divList[x][y].style.backgroundColor;
}

function isCellRed(x, y) {
    return getBackgroundColorCell(x, y) == "red";
}
function isCellBlue(x, y) {
    return getBackgroundColorCell(x, y) == "blue";
}