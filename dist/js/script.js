function onTextChange(){
    var input = parseInt(document.getElementById("amount").value);
    var result = document.getElementById("result");
    
    input =  input + (input * 0.2);

    result.innerText = input;
}
