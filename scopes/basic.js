var a = 10;
function abc () {
    var a = 15;
    function def() {
        var b = 10;
        console.log(a,b);
    }
    def();
    console.log(a);
}
abc();
console.log(a);
