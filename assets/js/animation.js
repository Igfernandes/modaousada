//SUMIR 
var status = 1;
function showForm(){
    if(status  == 1){
        $find('#slt-btn').classList.remove('rot-it-inverse')
        $find('#slt-btn').classList.add('rot-it');
        $find('.container-hidde').classList.remove("form-hidde"); 
        $find('.container-hidde').classList.add("form-hidde-reverse");
        status = 0;
    }
    else{
        $find('#slt-btn').classList.remove('rot-it')
        $find('#slt-btn').classList.add('rot-it-inverse')
        $find('.container-hidde').classList.remove("form-hidde-reverse");
        $find('.container-hidde').classList.add("form-hidde");       
        status = 1;
    }
}



//APARECER ITENS NO MOMENTO EM QUE PASSAR O MOUSE PELA SECTION
function $Animation(x,y,z, k){
    if(x.dataset.status == 'off'){
        x.dataset.status = k;
        var y = $find(y)
        y.classList.add(z);
    }
}