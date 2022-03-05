var x, y, z;
function sub1(){
    x = 1;
    y = 2;
    z = 3;
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("z = " + z);
    console.log("");
    sub1();
    function sub2(){
        x = x + 2;
        y = y - 8;
        z = z + z;
        console.log("x = " + x);
        console.log("y = " + y);
        console.log("z = " + z);
        console.log("");
        sub3();
        function sub3(){
            x = x + 100;
            y = y + 100;
            z = z + 100;
            var suma = x + y + z;
            console.log("x = " + x);
            console.log("y = " + y);
            console.log("z = " + z);
            console.log("x + y + z = " + suma);
        }
    }
}
sub1();