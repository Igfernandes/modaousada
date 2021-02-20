var col = [];
var it = 0;
var ter = it;
a = '+'; b = '-'; 
function cartAction(x){
    var data = x.dataset.iten
    if(data != ""){
        var sizes;
        var divPai = document.querySelector('div[data-serie="'+data+'"]')
        var quest = divPai.dataset.wish
        if(quest == 'no'){
            if(divPai.querySelector('[data-product="values"]').value != ''){
                var nome = divPai.querySelector('[data-product="name"]').innerText
                var qtd = divPai.querySelector('[data-product="values"]').value
                var values = divPai.querySelector('[data-product="price"]').innerText
                var divSizes = divPai.querySelector('[data-sizes]')
                divSizes = divSizes.dataset.sizes
                sizesarray = divSizes.split(',')
                for(var x in sizesarray){
                    if(sizesarray[x] == ' Pequeno' || sizesarray[x] == 'Pequeno'){
                        if(x < 1){
                            sizes = 'P'
                        }else{
                            sizes += "," + "P";
                        } 
                    }
                    else if(sizesarray[x] == ' Medio' || sizesarray[x] == 'Medio'){
                        if(x < 1){
                            sizes = 'M'
                        }else{
                            sizes += "," + "M";
                        } 
                    }
                    else if(sizesarray[x] == ' Grande' || sizesarray[x] == 'Grande'){
                        if(x < 1){
                            sizes = 'G'
                        }else{
                            sizes += "," + "G";
                        } 
                    }
                    else if(sizesarray[x] == ' Extra Grande' || sizesarray[x] == 'Extra Grandes'){
                        if(x < 1){
                            sizes = 'GG'
                        }else{
                            sizes += "," + "GG";
                        } 
                    }
                    else if(sizesarray[x] == ' Extra x Grande' || sizesarray[x] == 'Extra x Grande'){
                        if(x < 1){
                            sizes = 'XG'
                        }else{
                            sizes += "," + "XG";
                        } 
                    }
                }

                /* JOGANDO PARA A TABELA */ 

                var  Subtot = document.querySelector('.cart span[data-value="sub"]').innerText
                Subtot = parseFloat(Subtot)
                var tot = 0.0;
                var escopo = "<tr  data-it='"+ter+"'><td><div style='display:flex;border: 1px solid #840731;'><input type='number' min='1' value='"+qtd+"' data-order="+data+" onchange='newChange()'><div class='btn-calc'><div class='calc' onclick='moreValues("+data+")'>+</div><div class='calc' onclick='fewerValues("+data+")'>-</div></div></div></td><td><span data-name>"+nome+"</span></td><td><span data-sizes>"+sizes+"</span></td><td><span data-price>"+values+"</span></td><td><span class='del' onclick='delCol(this, "+it+", "+data+", "+qtd+")'>x</span></td></tr>"
                document.querySelector('#cart-checkout').innerHTML += escopo

                values = parseFloat(values.replace(",", "."))
                Subtot += parseFloat(values * qtd) 
                tot +=  (Subtot - ((Subtot/100) * 15)) 
                tot = Math.round(tot, -2)
               

                document.querySelector('[data-value="sub"]').innerText = Subtot.toLocaleString('pt-br', {minimumFractionDigits: 2});
                document.querySelector('[data-value="tot"]').innerText = tot.toLocaleString('pt-br', {minimumFractionDigits: 2});


                //ADD NEW ROW
                col[it] = "*Nome:* "+nome+";\n *Quantidade:* "+qtd+"; \n*Tamanhos disponíveis:* "+sizes
                it += 1
                ter = it;
            }else{
                alert('Adicione a quantidade que deseja antes de adicionar no carrinho')
            }
        }else{

            //REMOVENDO A LINHA ANTIGA
                var nome = divPai.querySelector('[data-product="name"]').innerText
                var qtd = divPai.querySelector('[data-product="values"]').value
                var values = divPai.querySelector('[data-product="price"]').innerText
                var divSizes = divPai.querySelector('[data-sizes]')
                divSizes = divSizes.dataset.sizes
                sizesarray = divSizes.split(',')
                for(var x in sizesarray){
                    if(sizesarray[x] == ' Pequeno' || sizesarray[x] == 'Pequeno'){
                        if(x < 1){
                            sizes = 'P'
                        }else{
                            sizes += "," + "P";
                        } 
                    }
                    else if(sizesarray[x] == ' Medio' || sizesarray[x] == 'Medio'){
                        if(x < 1){
                            sizes = 'M'
                        }else{
                            sizes += "," + "M";
                        } 
                    }
                    else if(sizesarray[x] == ' Grande' || sizesarray[x] == 'Grande'){
                        if(x < 1){
                            sizes = 'G'
                        }else{
                            sizes += "," + "G";
                        } 
                    }
                    else if(sizesarray[x] == ' Extra Grande' || sizesarray[x] == 'Extra Grandes'){
                        if(x < 1){
                            sizes = 'GG'
                        }else{
                            sizes += "," + "GG";
                        } 
                    }
                    else if(sizesarray[x] == ' Extra x Grande' || sizesarray[x] == 'Extra x Grande'){
                        if(x < 1){
                            sizes = 'XG'
                        }else{
                            sizes += "," + "XG";
                        } 
                    }
                }

                /* JOGANDO PARA A TABELA */ 
                
                var qtdAtual = document.querySelector('#cart-checkout tr td input[data-order="'+data+'"]').value
                var Subtot = document.querySelector('.cart span[data-value="sub"]').innerText
                Subtot = parseFloat(Subtot.replace(",", "."))
                var tot = 0.0;
                var divtio = document.querySelector('[data-order="'+data+'"')
                var dataIt = divtio.closest('[data-it]')
                dataIt = dataIt.dataset.it
                if(qtd > qtdAtual){
                    tot = 0
                    values =  parseFloat(values.replace(",", "."))
                    newValue = (qtd - qtdAtual) * values
                    Subtot += parseFloat(newValue) 
                    tot += (Subtot - ((Subtot/100) * 15)) 
                    tot = Math.round(tot, -2)
                }else if(qtd < qtdAtual){
                    var  tot = document.querySelector('.cart span[data-value="tot"]').innerText
                    tot = parseFloat(tot.replace(",", "."))
                    values =  parseFloat(values.replace(",", "."))
                    vm =  qtdAtual - qtd
                    Subtot -= parseFloat(values * vm) 
                    tot = (Subtot - ((Subtot/100) * 15) )
                    tot = Math.round(tot, -2)
                    if(tot < 0 ){
                        tot = 00,00;
                    }
                }
                else{
                     return false;
                }
                 
                var at = document.querySelector('#cart-checkout tr td input[data-order="'+data+'"]')
                del =  at.closest('tr')
                del.remove()

                var escopo = "<tr data-it='"+dataIt+"'><td><div style='display:flex;border: 1px solid #840731;'><input type='number' min='1' value='"+qtd+"' data-order="+data+" onchange='newChange()'><div class='btn-calc'><div class='calc' onclick='moreValues("+data+")'>+</div><div class='calc' onclick='fewerValues("+data+")'>-</div></div></div></td><td><span data-name>"+nome+"</span></td><td><span data-sizes>"+sizes+"</span></td><td><span data-price>"+values+"</span></td><td><span class='del' onclick='delCol(this, "+it+", "+data+", "+qtd+")'>x</span></td></tr>"
                document.querySelector('#cart-checkout').innerHTML += escopo

                document.querySelector('[data-value="sub"]').innerText = Subtot.toLocaleString('pt-br', {minimumFractionDigits: 2});
                document.querySelector('[data-value="tot"]').innerText = tot.toLocaleString('pt-br', {minimumFractionDigits: 2});


            //ADICIONANDO UMA NOVA
            var values = divPai.querySelector('[data-product="price"]').innerText
            var qtd = divPai.querySelector('[data-product="values"]').value
           

            //ADD COL
            
            var divtio = document.querySelector('[data-order="'+data+'"')
            var dataIt = divtio.closest('[data-it]')
            dataIt = dataIt.dataset.it

            col[dataIt] = "*Nome:* "+nome+";\n *Quantidade:* "+qtd+"; \n*Tamanhos disponíveis:* "+sizes
        }
                        
    }else{
        alert('Ocorreu um erro na página, recarregue porfavor')
    }
    ter = it
    divPai.dataset.wish = 'yes';
    
}


/* REMOVE */ 
function delCol(x,y,z){
    
    // EXCLUIR OS VALORES DO SUBTOT E TOTAL
    var qtd = document.querySelector('[data-order="'+z+'"]').value
    var price  = document.querySelector('[data-serie="'+z+'"]  [data-product="price"').innerText
    var oldsubtot = document.querySelector('[data-value="sub"]').innerText
    
    newvalue = parseFloat(price.replace(",", ".")) * parseFloat(qtd)
    newsubtot = parseFloat(oldsubtot) - parseFloat(newvalue)
    newtot = newsubtot - ((newsubtot / 100) * 15)
    if(newtot < 0 ){
        newtot = 0.0
    }
    if(newsubtot < 0){
        newsubtot = 0.0
    }

  
    document.querySelector('[data-value="sub"]').innerText = newsubtot.toLocaleString('pt-br', {minimumFractionDigits: 2});
    document.querySelector('[data-value="tot"]').innerText = newtot.toLocaleString('pt-br', {minimumFractionDigits: 2});

    var divPai = document.querySelector('div[data-serie="'+z+'"]')
    divPai.dataset.wish = "no"

    // EXCLUIR OS VALORES DA URL

    col.splice(y,1)
    // EXCLUIR A LINHA:
    var del = x.closest('tr')
    del.remove()
}



/* DENTRO DO CART */ 

function moreValues(x){
   var val = document.querySelector('[data-order="'+x+'"').value
   val++
   document.querySelector('[data-order="'+x+'"').value = val


   //RESGATANDO OS VALORES
    var price  = document.querySelector('[data-serie="'+x+'"]  [data-product="price"').innerText
    var oldsubtot = document.querySelector('[data-value="sub"]').innerText

    newsubtot = parseFloat(oldsubtot) + parseFloat(price)
    newtot = newsubtot - ((newsubtot / 100) * 15)
    if(newtot < 0 ){
        newtot = 0.0
    }
    if(newsubtot < 0){
        newsubtot = 0.0
    }

    var divtio = document.querySelector('[data-order="'+x+'"')
    var dataIt = divtio.closest('[data-it]')
    var dataname = dataIt.querySelector('[data-name]').innerText
    var datasizes = dataIt.querySelector('[data-sizes]').innerText
    dataIt = dataIt.dataset.it

    col[dataIt] = "*Nome:* "+dataname+";\n *Quantidade:* "+val+"; \n*Tamanhos disponíveis:* "+datasizes

    document.querySelector('[data-value="sub"]').innerText = newsubtot.toLocaleString('pt-br', {minimumFractionDigits: 2})
    document.querySelector('[data-value="tot"]').innerText = newtot.toLocaleString('pt-br', {minimumFractionDigits: 2});

}



function fewerValues(x){
  var val = document.querySelector('[data-order="'+x+'"').value
  val -= 1
  if(val <= 0 ){
      val = 0
  }
  document.querySelector('[data-order="'+x+'"').value = val

    
    var price  = document.querySelector('[data-serie="'+x+'"]  [data-product="price"').innerText
    var oldsubtot = document.querySelector('[data-value="sub"]').innerText
    
    newsubtot = parseFloat(oldsubtot) - parseFloat(price)
    newtot = newsubtot - ((newsubtot / 100) * 15)
    if(newtot < 0 ){
        newtot = 0.0
    }
    if(newsubtot < 0){
        newsubtot = 0.0
    }

    var divtio = document.querySelector('[data-order="'+x+'"')
    var dataIt = divtio.closest('[data-it]')
    var dataname = dataIt.querySelector('[data-name]').innerText
    var datasizes = dataIt.querySelector('[data-sizes]').innerText
    dataIt = dataIt.dataset.it

    col[dataIt] = "*Nome:* "+dataname+";\n *Quantidade:* "+val+"; \n*Tamanhos disponíveis:* "+datasizes
  
    document.querySelector('[data-value="sub"]').innerText = newsubtot.toLocaleString('pt-br', {minimumFractionDigits: 2})
    document.querySelector('[data-value="tot"]').innerText = newtot.toLocaleString('pt-br', {minimumFractionDigits: 2});

}



document.addEventListener('click', function(){
    var url = "";
    if(col != ''){
        for(var x in col){
            if(col[x] != '' || col[x] != null){
                if(x > 0){
                    url += "\n \n"+col[x]
                }else{
                    url += col[x]
                }
                
            }

        }
    }
    
    var subtot = document.querySelector('[data-value="sub"]').innerText
    var tot = document.querySelector('[data-value="tot"]').innerText

    var mensagem = "*Extrato Total das Compras:* \n\n"+url+"\n *Subtotal:* "+subtot+"\n *Desconto:* 15% \n *Total:* "+tot;
    
    mensagem = window.encodeURIComponent(mensagem);
    mensagem = mensagem.replace(/<b>/g, "*").replace(/<\/b>/g,"*"); 

    document.querySelector('.cart a').href ="https://api.whatsapp.com/send?phone=+55%2021%2097128-3432&text="+mensagem

})