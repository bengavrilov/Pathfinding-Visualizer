function maze1 () {

    // erase current start and end box (and middle if it exists)
    if (isCheckpointActive == true) {
        document.getElementById(convertToId(middleBoxNumber)).setAttribute("style", "background-color: white;");
        document.getElementById('insertCheckpoint').innerHTML = "Insert Checkpoint";
        gridBoxes[middleBoxNumber - 1].isCheckpoint = false;
        middleBoxNumber = -1;
        isCheckpointActive = false;
    }

    // set start
    document.getElementById(convertToId(startBoxNumber)).setAttribute("style", "background-color: white;");
    gridBoxes[startBoxNumber - 1].isStart = false;

    startBoxNumber = 1;
    gridBoxes[startBoxNumber - 1].isStart = true;
    document.getElementById(convertToId(startBoxNumber)).setAttribute("style", "background-color: green;");

    // set finish
    document.getElementById(convertToId(endBoxNumber)).setAttribute("style", "background-color: white;");
    gridBoxes[endBoxNumber - 1].isFinish = false;

    endBoxNumber = gridSize;
    gridBoxes[gridSize - 1].isFinish = true;
    document.getElementById(convertToId(endBoxNumber)).setAttribute("style", "background-color: red;");

    var firstCol = Math.floor(0.3333 * numColumns);
    var secondCol = 2 * firstCol;
    var rowHeight = Math.floor(numRows/9);
    var colWidth = Math.floor(firstCol/3);

    var firstRow = rowHeight;
    var secondRow = rowHeight * 2;
    var thirdRow = rowHeight * 3;
    var fourthRow = rowHeight * 4;
    var fifthRow = rowHeight * 5;
    var sixthRow = rowHeight * 6;
    var seventhRow = rowHeight * 7;
    var eighthRow = rowHeight * 8;

    var firstRCol = firstCol + colWidth;
    var secondRCol = firstRCol + colWidth;
    var thirdRCol = secondRCol + colWidth;
    var fourthRCol = thirdRCol + colWidth;

    for (var i = 0; i < gridSize; i++) {
        
        if (gridBoxes[i].col == firstCol && gridBoxes[i].row != (numRows - 1)) {
            gridBoxes[i].isWall = true;
            //document.getElementById(gridBoxes[i].divId).setAttribute("style", "background-color: black;");
        }
        else if (gridBoxes[i].col == secondCol && gridBoxes[i].row != 0) {
            gridBoxes[i].isWall = true;
            //document.getElementById(gridBoxes[i].divId).setAttribute("style", "background-color: black;");
        }
        else if ((gridBoxes[i].row == firstRow || gridBoxes[i].row == thirdRow || gridBoxes[i].row == fifthRow || gridBoxes[i].row == seventhRow)&& ((gridBoxes[i].col < firstCol - 1) || (gridBoxes[i].col > secondCol && gridBoxes[i].col < numColumns - 1))) {
            gridBoxes[i].isWall = true;
            //document.getElementById(gridBoxes[i].divId).setAttribute("style", "background-color: black;");
        }
        else if ((gridBoxes[i].row == secondRow || gridBoxes[i].row == fourthRow || gridBoxes[i].row == sixthRow || gridBoxes[i].row == eighthRow) && ((gridBoxes[i].col < firstCol && gridBoxes[i].col > 1) || (gridBoxes[i].col > secondCol + 1 && gridBoxes[i].col <= numColumns))) {
            gridBoxes[i].isWall = true;
            //document.getElementById(gridBoxes[i].divId).setAttribute("style", "background-color: black;");
        }
        else if ((gridBoxes[i].col == firstRCol) && gridBoxes[i].row != 0) {
            gridBoxes[i].isWall = true;
            //document.getElementById(gridBoxes[i].divId).setAttribute("style", "background-color: black;");
        }
        else if ((gridBoxes[i].col == secondRCol) && gridBoxes[i].row != (numRows - 1)) {
            gridBoxes[i].isWall = true;
            //document.getElementById(gridBoxes[i].divId).setAttribute("style", "background-color: black;");
        }
        else if (gridBoxes[i].isStart == false && gridBoxes[i].isFinish == false) {
            gridBoxes[i].isWall = false;
            //document.getElementById(gridBoxes[i].divId).setAttribute("style", "background-color: white;");
        }

    }

}