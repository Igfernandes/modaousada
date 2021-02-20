function myFunction(x) {
    x.classList.toggle("change");

    var y = $find('.navbar')
    if(y.classList.contains("show-me") == false){
        y.classList.remove('no-show');
        y.classList.add('show-me');
    }
    else{
        y.classList.add('no-show');
        y.classList.remove('show-me');
    }
}