function change(value){
    if (value.className == 'main-box-items cards'){
        value.className = `main-box-items cards active`
    }
    else{
        value.className = 'main-box-items cards'
    }
}