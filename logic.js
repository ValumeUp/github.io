function getResult(){
    let input= document.getElementById("text_input").value;
    let words=input.replace( /[^a-zA-Z]/g , " " ).split( ' ' ).filter(Boolean);
    
    let newArr=[];
    words.forEach(element => {
    let letter=element.split('');
    for (var i=0; i<letter.length; i++){
        
        if (letter.indexOf(letter[i], i+1)==(-1)) {
            newArr.push(letter[i]);
            break;
        }
    }

    });
    
        for (var i=0; i<newArr.length; i++){
        
            if (newArr.indexOf(newArr[i], i+1)==(-1)) {
                console.log(newArr[i]);
                break;
            }
        }

    }


