
function createClassRoom (numbersOfStudents) {
    function studentSeat (seat) {
        return function() {
            return seat + 1;
        }
    }
    let students = new Array(numbersOfStudents); 
    for (let i = 0; i < numbersOfStudents; i++) {
        students[i] = studentSeat(i);
    }
    return (students);
}

let classRoom = createClassRoom(10);
