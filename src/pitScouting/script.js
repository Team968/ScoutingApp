setTimeout( async () => {
    const awaiting = await fetch("../pitScoutingQuestions.json");
    const json = await awaiting.json();
    const questions = json.GameSpecificQuestions;
    
    for(let i = 0; i < questions.length; i++){
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("questionContainer");

        const questionIndex = document.createElement("h3");
        questionIndex.textContent = `Question ${i + 1}: ${questions[i][0]}`;
        questionDiv.appendChild(questionIndex);
        
        if(questions[i][1] == "multipleChoice"){
            const dropdown = document.createElement("select");
            for(let j = 0; j < questions[i][2].length; j++){
                const option = document.createElement("option");
                option.textContent = questions[i][2][j];
                dropdown.appendChild(option);
            }
            questionDiv.appendChild(dropdown);
        } else if(questions[i][1] == "freeResponse"){
            const textInput = document.createElement("input");
            textInput.classList.add("freeResponse");

            questionDiv.appendChild(textInput);
        } else if(questions[i][1] == "multipleSelection"){
            for(let j = 0; j < questions[i][2].length; j++){
                const checkbox = document.createElement("input");
                checkbox.id = j;
                checkbox.classList.add("multiSelection");
                checkbox.type = "checkbox";

                const lineBreak = document.createElement("br");
                
                const label = document.createElement("label");
                label.textContent = questions[i][2][j];
                label.htmlFor = j;

                questionDiv.appendChild(checkbox);
                questionDiv.appendChild(label);
                questionDiv.appendChild(lineBreak);
            }
        }
        document.getElementById("container").appendChild(questionDiv);
    }
}, 1000);
