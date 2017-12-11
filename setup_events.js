setupEvents  = () => {
    
    var htmlInputDegrees = document.getElementById('degrees');
    var htmlInputRounds = document.getElementById('rounds');
    
    console.log(htmlInputDegrees);
    console.log(htmlInputRounds);
    
    addEvent('degrees', 'degrees', parameters.degrees);
    addEvent('rounds', 'rounds', parameters.rounds);
    
}

addEvent = (id, parameter, initialValue) => {
    var htmlInput = document.getElementById(id);
    console.log(htmlInput);
    htmlInput.value = initialValue;
    
    htmlInput.addEventListener('change', (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        parameters[parameter] = e.target.value;
        loop();
    });
}