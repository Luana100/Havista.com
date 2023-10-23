<?php
$valor =filter_input(INPUT_POST,"valor");
$horas =filter_input(INPUT_POST,"hora");
$nome =filter_input(INPUT_POST,"nome");
$sb = "";
$Inss =  8/100;
$ImpostoR = 11/100;
$ValeTr = 6/100;


 if($horas && $valor){
    $sb = $horas * $valor;
 }
 if($sb && $Inss){
   $tb = $sb * $Inss;
 }
 if($sb && $ImpostoR){
   $sv = $sb * $ImpostoR;
 }
 if($sb && $ValeTr){
  $lc = $sb * $ValeTr;
 }
if($tb && $sv && $lc){
      $sl = ($tb + $sv + $lc) - $sb;
   }



 echo "Olá ".$nome;
 echo "<br>----------------------------------------------------------------------->";
 echo "<br>O seu salario é: R$".$sb;
 echo "<br>----------------------------------------------------------------------->";
 echo "<br>O desconto de 8%, do INSS é de: R$".$tb;
 echo "<br>----------------------------------------------------------------------->";
 echo "<br>O desconto de 11%, do Imposto de Renda é de: R$".$sv;
 echo "<br>----------------------------------------------------------------------->";
 echo "<br>O descomto de 6%, do Vale Transporte é de: R$".$lc;
 echo "<br>----------------------------------------------------------------------->";
 echo "<br>O salario líquido é: R$".$sl;
 echo "<br>----------------------------------------------------------------------->";
?>