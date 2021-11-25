let divs=['errFirst','errLast','errEmail','erruid','errpwd','errpwd2']
function validate(){
    let inputs=new Array();
    inputs[0]=document.getElementById("fname").value;
    inputs[1]=document.getElementById('lname').value;
    inputs[2]=document.getElementById('email').value;
    inputs[3]=document.getElementById('uid').value;
    inputs[4]=document.getElementById('password').value;
    inputs[5]=document.getElementById('confirm').value;

    let errors=new Array();
    errors[0]="<span style='color:red'>please enter first name!</span>";
    errors[1]="<span style='color:red'>please enter last name!</span>";
    errors[2]="<span style='color:red'>please enter email!</span>";
    errors[3]="<span style='color:red'>please enter userId!</span>";
    errors[4]="<span style='color:red'>please enter password!</span>";
    errors[5]="<span style='color:red'>please enter confirm password!</span>";

    for(i in inputs){
        if(inputs[i]==""){
            document.getElementById(divs[i]).innerHTML=errors[i];
        }
        else if(i==2){
            let regex=/^([a-zA-Z0-9-\._]+)@([a-zA-Z0-9]+)\.([a-z]+)(\.[a-z]+)?$/
            if(regex.test(inputs[i])){
                document.getElementById(divs[i]).innerHTML="OK!"
            }else{
                document.getElementById(divs[i]).innerHTML=errors[i];
            }
        }else if(i==5){
            if(inputs[4]!=inputs[5]){
                document.getElementById('errpwd2').innerHTML="<span style='color:red'>password won't match</span>";
            }
            else{
                document.getElementById(divs[i]).innerHTML='OK!';
            }
        }
        else{
            document.getElementById(divs[i]).innerHTML="OK!";
        }
    }
}

function finalvalidate(){
    alert("hello")
    let count=0
    for(let i=0;i<6;i++){
        if(document.getElementById(divs[i]).innerHTML=='OK!'){
            count+=1
        }
    }
    if(count==6){
        document.getElementById('errFinal').innerHTML=='All the data you entered is correct!';
    }
    console.log(count)
}