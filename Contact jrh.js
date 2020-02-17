var divs = new Array();
    divs[0] = "errName";
    divs[1] = "errPhone";
    divs[2] = "errServices";
    divs[3] = "errComment";
    function validate()
        {
            var inputs = new Array();
            inputs[0] = document.getElementById('name').value;
            inputs[1] = document.getElementById('phone').value;
            inputs[2] = document.getElementById('services').value;
            inputs[3] = document.getElementById('comment').value;
            var errors = new Array();
            errors[0] = "<span style='color:red'>Please enter your Name!</span>";
            errors[1] = "<span style='color:red'>Please enter Phone's Number!</span>";
            errors[2] = "<span style='color:red'>Please enter Services you Need!</span>";
            errors[3] = "<span style='color:red'>Please enter your Comment!</span>";
            for (i in inputs)
            {
                var errMessage = errors[i];
                var div = divs[i];
                if (inputs[i] == "")
                document.getElementById(div).innerHTML = errMessage;
                else 
                document.getElementById(div).innerHTML= "OK!"
            }
        }
            function finalvalidate() 
            { 
                var count = 0;
            for(i=0;i<4;i++)
            {
                var div = divs[i];
                if(document.getElementById(div).innerHTML == "OK!")
                count = count + 1;
            }
        }
            
        
        