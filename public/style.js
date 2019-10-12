//      animation for buttons
var btn = document.querySelectorAll(".button");
for (var i = 0; i < btn.length; ++i) {
  btn[i].addEventListener("click", function(){
    this.classList.toggle("purple");
});
}

//    full/short table config
var fullTable = document.querySelector("#fullTable");
var elementsFT = document.querySelectorAll(".elementsFT");
fullTable.addEventListener("click", function(){
  for( var i = 0; i < elementsFT.length; i++){
    elementsFT[i].classList.toggle("invis");
}
});

//    stock config
var inStockBtn = document.querySelector("#inStockBtn");
var inStock = document.querySelectorAll(".inStock");
var tr = document.getElementsByTagName("tr");
var stockNum = document.querySelector("#stockNum");
inStockBtn.addEventListener("click",function(){
  for(var i = 0; i < inStock.length; i++ ){
    if (Number(inStock[i].textContent) == 0){
      tr[i].classList.toggle("invisRow");
    }
  }
  
  // count inStock
  var count = Number(inStock[1].textContent);
  for (var i = 1; i <= inStock.length; i++ ){
    count = count + Number(inStock[i+1].textContent);
    stockNum.textContent = count + " шт";
  }
});

//search
function search(){
let input = document.getElementById('search'),
    filter = input.value.toUpperCase(),
    tr = document.getElementsByTagName('tr');
for (let i = 0; i < tr.length; i++) {
    let txtValue = tr[i].textContent || tr[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}