
let btn = document.querySelector('.button button')

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


	option_from = inputType.value;
	option_to = resultType.value;



	if(option_from === "celsius" && option_to==="fahrenheit"){

        let f = (parseFloat(input.value) * 9) / 5 + 32;
        result.value =parseFloat(f.toFixed(2));

	}else if(option_from === "celsius" && option_to==="kelvin"){

       let k = (parseFloat(input.value) + 273.15);
        result.value =parseFloat(k.toFixed(2));

	}else if(option_from === "celsius" && option_to==="celsius"){
		result.value = input.value
	}

 


	if(option_from === "fahrenheit" && option_to==="celsius"){


        let c = ((parseFloat( input.value) - 32) * 5) / 9;
        result.value = parseFloat(c.toFixed(2));

	}else if(option_from === "fahrenheit" && option_to==="kelvin"){

    let k = (parseFloat(   input.value) - 32) * 5 / 9 + 273.15;
    result.value = parseFloat(k.toFixed(2));

	}else if(option_from === "fahrenheit" && option_to==="fahrenheit"){
		result.value = input.value
	}




	if(option_from === "kelvin" && option_to==="fahrenheit"){


            let f = (parseFloat(input.value) - 273.15) * 9 / 5 + 32;
             result.value = parseFloat(f.toFixed(2));
	}else if(option_from === "kelvin" && option_to==="celsius"){


            let c = (parseFloat(input.value) - 273.15);
            result.value = parseFloat(c.toFixed(2));
	}else if(option_from === "kelvin" && option_to==="kelvin"){
		result.value = input.value
	}
	if(isNaN(result.value)){
		result.value="";
	}
}

btn.addEventListener('click',()=>{
    input.value=""
    result.value=""
})