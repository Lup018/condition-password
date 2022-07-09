let button = document.getElementById('button');
button.addEventListener ('click', (e) => {
    let select1 = document.getElementById('select-1').value;
    let select2 = document.getElementById('select-2').value;
    let select3 = document.getElementById('select-3').value;
    let password = select1 + select2 + select3;
    if(password === '911') {
        let enter = document.getElementById('enter');
        enter.innerHTML = 'Password correcta 1';
    } else if (password === '714') {
        let enter = document.getElementById('enter');
        enter.innerHTML = 'Password correcta 2';
    } else {
        enter.innerHTML = 'Password incorrecta';
    }
    
        

})
