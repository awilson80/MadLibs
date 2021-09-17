// User values

let userInputs = { 
    in1:"", in2:"", in3:"", in4:"", in5:"", in6:"", in7:"", in8:"", in9:"", in10:"", in11:"", in12:"", in13:""
}; 

// Auto-fill values

const autoWords = {
    in1:"Haku", in2:"1234", in3:"daikon", in4:"the spirit world", in5:"distressed", in6:"working", in7:"Haku", in8:"the spirit world", in9:"wicked cool", in10:"living", in11:"life", in12:"vibing", in13:"broski" 
};

const dragonStory = "<h1>Best Friends With a Dragon!</h1><p>Let me introduce you to my dragon friend, <span id=\"output1\"></span>! They are <span id=\"output2\"></span> years old, and their favorite food is <span id=\"output3\"></span>. When I was little, I traveled to <span id=\"output4\"></span> with my mom and dad, and me them when I was <span id=\"output5\"></span>, because I'd been <span id=\"output6\"></span> all day long. When <span id=\"output1\"></span> flew right into <span id=\"output7\"></span> and landed right next to me, my mom fainted! But I didn't. I thought my dragon friend looked <span id=\"output8\"></span>, and I burst out laughing, and then they did too! We started talking about how we both like <span id=\"output9\"></span> <span id=\"output10\"></span> and <span id=\"output11\"></span> so I started calling them <span id=\"output12\"></span> and swapped phone numbers to stay in touch!"

// Submission

const submitInputs = () => {

    userInputs.in1 = document.getElementById('input1').value.charAt(0).toUpperCase() + document.getElementById('input1').value.slice(1); // Dragon name to uppercase
 
    userInputs.in2 = document.getElementById('input2').value;

    userInputs.in3 = document.getElementById('input3').value;

    userInputs.in4 = document.getElementById('input4').value;
 
    userInputs.in5 = document.getElementById('input5').value;
 
    userInputs.in6 = document.getElementById('input6').value;

    userInputs.in1 = document.getElementById('input7').value.charAt(0).toUpperCase() + document.getElementById('input7').value.slice(1); // Dragon name to uppercase
 
    userInputs.in8 = document.getElementById('input8').value;

    userInputs.in9 = document.getElementById('input9').value;

    userInputs.in10 = document.getElementById('input10').value;

    userInputs.in11 = document.getElementById('input11').value;

    userInputs.in12 = document.getElementById('input12').value;

    userInputs.in12 = document.getElementById('input13').value;

    createMadLibs();

};

// Auto-fill uses autoWords for values not given by user

const autoFill = () => {

    if (document.getElementById('input1').value == "") {
        userInputs.in1 = autoWords.in1;
        document.getElementById('input1').value = userInputs.in1;
    }

    if (document.getElementById('input2').value == "") {
        userInputs.in2 = autoWords.in2;
        document.getElementById('input2').value = userInputs.in2;
    }

    if (document.getElementById('input3').value == "") {
        userInputs.in3 = autoWords.in3;
        document.getElementById('input3').value = userInputs.in3;
    }

    if (document.getElementById('input4').value == "") {
        userInputs.in4 = autoWords.in4;
        document.getElementById('input4').value = userInputs.in4;
    }

    if (document.getElementById('input5').value == "") {
        userInputs.in5 = autoWords.in5;
        document.getElementById('input5').value = userInputs.in5;
    }

    if (document.getElementById('input6').value == "") {
        userInputs.in6 = autoWords.in6;
        document.getElementById('input6').value = userInputs.in6;
    }
    
    if (document.getElementById('input7').value == "") {
        userInputs.in7 = autoWords.in7;
        document.getElementById('input7').value = userInputs.in7;
    }

    if (document.getElementById('input8').value == "") {
        userInputs.in8 = autoWords.in8;
        document.getElementById('input8').value = userInputs.in8;
    }

    if (document.getElementById('input9').value == "") {
        userInputs.in9 = autoWords.in9;
        document.getElementById('input9').value = userInputs.in9;
    }

    if (document.getElementById('input10').value == "") {
        userInputs.in10 = autoWords.in10;
        document.getElementById('input10').value = userInputs.in10;
    }

    if (document.getElementById('input11').value == "") {
        userInputs.in11 = autoWords.in11;
        document.getElementById('input11').value = userInputs.in11;
    }

    if (document.getElementById('input12').value == "") {
        userInputs.in12 = autoWords.in12;
        document.getElementById('input12').value = userInputs.in12;
    }

    if (document.getElementById('input13').value == "") {
        userInputs.in13 = autoWords.in13;
        document.getElementById('input13').value = userInputs.in13;
    }

    submitInputs();
    
}


// Clears the form and user values

const clearForm = () => {

    userInputs = {
        in1:"", in2:"", in3:"", in4:"", in5:"", in6:"", in7:"", in8:"", in9:"", in10:"", in11:"", in12:"", in13:""
    };

	document.getElementById("dragonStory").innerHTML = "";

	document.getElementById('input1').value = "";

	document.getElementById('input2').value = "";

	document.getElementById('input3').value = "";

	document.getElementById('input4').value = "";

	document.getElementById('input5').value = "";

	document.getElementById('input6').value = "";

	document.getElementById('input7').value = "";

	document.getElementById('input8').value = "";

	document.getElementById('input9').value = "";

	document.getElementById('input10').value = "";

	document.getElementById('input11').value = "";

	document.getElementById('input12').value = "";

    document.getElementById('input13').value = "";

};

// Creates the story.

const createMadLibs = () => { 

	document.getElementById("dragonStory").innerHTML = dragonStory;

	document.getElementById("output1").innerHTML = userInputs.in1;

	document.getElementById("output2").innerHTML = userInputs.in2;

	document.getElementById("output3").innerHTML = userInputs.in3;

	document.getElementById("output4").innerHTML = userInputs.in4;

	document.getElementById("output5").innerHTML = userInputs.in5;

	document.getElementById("output6").innerHTML = userInputs.in6;

	document.getElementById("output7").innerHTML = userInputs.in7;

	document.getElementById("output8").innerHTML = userInputs.in8;

	document.getElementById("output9").innerHTML = userInputs.in9;

	document.getElementById("output10").innerHTML = userInputs.in10;

	document.getElementById("output11").innerHTML = userInputs.in11;

	document.getElementById("output12").innerHTML = userInputs.in12;

    document.getElementById("output12").innerHTML = userInputs.in13;
    
};

