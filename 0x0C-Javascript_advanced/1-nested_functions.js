let globalVariable = 'Welcome';

function outer() {
    alert(globalVariable);
    let course = 'Holberton';

    function inner() {
        alert (globalVariable + " " + course);
        const exclamation = '!';

        function inception(){
            alert(globalVariable + " " + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();