function totalProduto(){
    P1 = 40;
    P2 = 250;
    P3 = 300;
    
    Q1 = parseFloat(document.getElementById("produto1").value) || 0;
    Q2 = parseFloat(document.getElementById("produto2").value) || 0;
    Q3 = parseFloat(document.getElementById("produto3").value) || 0;
    
    somaP1 = Q1*P1;
    somaP2 = Q2*P2;
    somaP3 = Q3*P3;
    
  
    document.getElementById("totalP1").textContent = somaP1.toFixed(2);
    document.getElementById("totalP2").textContent = somaP2.toFixed(2);
    document.getElementById("totalP3").textContent = somaP3.toFixed(2);
    
    P4 = somaP1 + somaP2 + somaP3;
    document.getElementById("Vtotal").textContent = P4.toFixed(2);
     
    //var valorTotal = P4; // O valor total da compra
    //window.location.href = "pagamento.html" + valorTotal;
    $(document).ready(function totalProduto(){
        $("#flip").click(function totalProduto(){
          $("#panel").slideDown("slow");
        });
      });
    }