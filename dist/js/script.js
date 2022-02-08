var input = document.getElementById("amount");

input.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        var input = parseInt(e.target.value);
        var result = document.getElementById("result");
    
        input =  input + (input * 0.2);
    
        result.innerText = input;
        e.target.value = "";
    }
});
