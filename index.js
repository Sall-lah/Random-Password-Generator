const TypeNumeric = document.getElementById("Numeric");
const TypeUppercase = document.getElementById("Uppercase");
const TypeLowercase = document.getElementById("Lowercase");
const TypeSymbol = document.getElementById("Symbol");
const GenerateButton = document.getElementById("Generate");
const Result = document.getElementById("Result");
const Size = document.getElementById("Size");

const Numeric = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`];
const Upper = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];
const Lower = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
const Symbol = [`!`,`@`,`#`,`$`,`%`,`&`,`*`,`?`];

GenerateButton.onclick = function(){
    const input = [];// What type of password
    const structure = []; // Before Shuffled and Converted
    const FinalValue = []; // Before Converted 

    if(Size.value < 8 || Size.value >64){// check if the value is above 8
        Result.textContent = "The Password Length Cannot Go Below 8 or Above 64";
        Return;
    }

    if(TypeNumeric.checked){
        input.push(1)
        structure.push(1) // setting to atleast have one "1"
    }
    if(TypeUppercase.checked){
        input.push(2)
        structure.push(2) // setting to atleast have one "2"
    }
    if(TypeLowercase.checked){
        input.push(3)
        structure.push(3) // setting to atleast have one "3"
    }
    if(TypeSymbol.checked){
        input.push(4)
        structure.push(4) // setting to atleast have one "4"
    }
    
    if(TypeNumeric.checked === false && TypeUppercase.checked === false && 
        TypeLowercase.checked === false && TypeSymbol.checked === false)
        {
        Result.textContent = "Please Choose the Password Type"
        return
    }

    const staticlength = structure.length

    for (let i = 0; i < Size.value - staticlength; i++) { // gettin an random input of number
        const Eq = Math.ceil(Math.random() * input.length - 1)
        structure.push(input[Eq])
    }

    for (let i = Size.value - 1; i > 0; i--) { // fisher yates shuffle algorithm
        const j = Math.floor(Math.random() * (i + 1));
        [structure[i], structure[j]] = [structure[j], structure[i]];
    }

    structure.forEach((n) => { // translating to keyword like 1 = numeric 2 = upper
        switch(n){
            case 1:
                FinalValue.push(Numeric[Math.floor(Math.random() * Numeric.length)])
                break
            case 2:
                FinalValue.push(Upper[Math.floor(Math.random() * Upper.length)])
                break
            case 3:
                FinalValue.push(Lower[Math.floor(Math.random() * Lower.length)])
                break
            case 4:
                FinalValue.push(Symbol[Math.floor(Math.random() * Symbol.length)])
                
        }
    })

    Result.textContent = FinalValue.join("");
}