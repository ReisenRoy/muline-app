<script>
  let isfullTable = false;

  function toggleTable() {
    const elementsFT = document.querySelectorAll(".elementsFT");
    for(let i = 0; i < elementsFT.length; i++){
      elementsFT[i].classList.toggle("invis");
    }
  }

  function inStock() {
    const inStock = document.querySelectorAll(".inStock");
    const stockNum = document.querySelector(".stockNum");
    const tr = document.querySelectorAll("tr");
    let count = 0;
    for(let i = 0; i < inStock.length; i++ ){
      if (Number(inStock[i].innerHTML) <= 0) {
        tr[i].classList.toggle("invisRow");
      }
      count += Number(inStock[i].innerHTML);
      stockNum.innerHTML = count + " шт";
    }

    isfullTable = true;
  }
</script>

<div class="container">
  <div class="ui fluid buttons">
    <button class="ui button" on:click={inStock}>В наличии</button>
    <button 
      class="ui button" class:purple={isfullTable} on:click={toggleTable}>Неполная таблица</button>
  </div>
</div>