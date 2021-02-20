

function hoverImg(z, l){
  val = z.childNodes;
  if(l == 'off'){
      y = z.childElementCount
      x = 2;
      wait = setInterval(() =>{
          if(x <= y){
              if(x > 1){
                  val[x - 1].classList.remove('on')
                  val[x - 1].classList.add('off')
                  val[x].classList.remove('off')
                  val[x].classList.add('on')
              }else{
                  val[x].classList.add('on')
              }
              x++
          }else{
              clearInterval(wait);
          }
      }, 2500);
  }
  else{
      val[1].classList.add('on')
      for(x = 2; x <= z.childElementCount; x++ ){
          val[x].classList.remove('on')
          val[x].classList.add('off')
      }
  }
  
}