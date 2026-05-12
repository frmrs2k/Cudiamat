function number(num) {
    document.getElementById("result").value+=num;
}

function op(operator) {
    document.getElementById("result").value+=operator;
}

function clearResult() {
    document.getElementById("result").value="";
}

function calculate() {
    let calcu=document.getElementById("result").value;

    if (calcu) {
        calcu=calcu.replace(/÷/, "/");
        calcu=calcu.replace(/x/, "*");

        let correct=eval(calcu);
        let wrongCalcu=correct;

        if (correct>20){
            let y =correct % 1000;
            let rand=Math.floor(Math.random() *10); 
            wrongCalcu =y+rand;
        } else if(correct <20) { 
            wrongCalcu=Math.floor(Math.random() *9); 
        }

        document.getElementById("result").value =wrongCalcu;
    }
}