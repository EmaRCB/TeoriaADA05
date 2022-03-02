var x, y, z;
function sub1(){
    x = 1;
    y = 2;
    z = 3;
    document.write("x = " + x + "<br />");
    document.write("y = " + y + "<br />");
    document.write("z = " + z + "<br />");
    function sub2(){
        x = x + 2;
        y = y - 8;
        z = z + z;
        document.write("x = " + x + "<br />");
        document.write("y = " + y + "<br />");
        document.write("z = " + z + "<br />");
        function sub3(){
            x = x + 100;
            y = y + 100;
            z = z + 100;
            var suma = x + y + z;
            document.write("x = " + x + "<br />");
            document.write("y = " + y + "<br />");
            document.write("z = " + z + "<br />");
            document.write("x + y + z = " + suma + "<br />");
        }
    }
}