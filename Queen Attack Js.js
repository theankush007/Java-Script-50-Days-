process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}



function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var rQueen_temp = readLine().split(' ');
    var rQueen = parseInt(rQueen_temp[0]);
    var cQueen = parseInt(rQueen_temp[1]);
    
    var left = cQueen - 1;
    var right = n - cQueen;
    var above = n - rQueen;
    var below = rQueen - 1;
    var above_left = Math.min(above, left);
    var below_left = Math.min(below, left);
    var above_right = Math.min(above, right);
    var below_right = Math.min(below, right);

    
    for(var a0 = 0; a0 < k; a0++){
        var rObstacle_temp = readLine().split(' ');
        var rObstacle = parseInt(rObstacle_temp[0]);
        var cObstacle = parseInt(rObstacle_temp[1]);
        
        if (rObstacle === rQueen) {
            if (cObstacle < cQueen) {            
                left = Math.min(left, cQueen - cObstacle - 1);
            } else {
                right = Math.min(right, cObstacle - cQueen - 1);
            }
        } else if (cObstacle === cQueen) {
            if (rObstacle < rQueen) {
                below = Math.min(below, rQueen - rObstacle - 1);
            } else {
                above = Math.min(above, rObstacle - rQueen - 1);
            }
        } else if (rObstacle - cObstacle === rQueen - cQueen) {
            if (cObstacle < cQueen) {
                below_left = Math.min(below_left, cQueen - cObstacle - 1);
            } else {
                above_right = Math.min(above_right, cObstacle - cQueen - 1);
            }
        } else if (rObstacle + cObstacle === rQueen + cQueen) {
            if (cObstacle < cQueen) {
                above_left = Math.min(above_left, cQueen - cObstacle - 1);
            } else {
                below_right = Math.min(below_right, cObstacle - cQueen - 1);
            }
        }
        
        
    }

    console.log(left + right + above + below + above_left + below_left + above_right + below_right);
}