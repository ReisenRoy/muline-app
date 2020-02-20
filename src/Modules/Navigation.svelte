<script>
  let isFullTable = false;
  let isInStock = false;

  function toggleTable() {
    const elementsFT = document.querySelectorAll(".elementsFT");
    elementsFT.forEach( e => e.classList.toggle("hide"));
    isFullTable = !isFullTable;
  }

  function inStock() {
    const inStock = document.querySelectorAll(".inStock");
    const stockNum = document.querySelector(".stockNum");
    const tr = document.querySelectorAll("tr");
    let count = 0;
    for(let i = 0; i < inStock.length; i++ ){
      if (Number(inStock[i].innerHTML) <= 0) {
        tr[i].classList.toggle("hideRow");
      }
      count += Number(inStock[i].innerHTML);
      stockNum.innerHTML = count + " шт";
    }
    isInStock = !isInStock;
  }
</script>

<div class="container">
  <div class="ui fluid buttons">
    <button class="ui button" class:purple={isInStock} on:click={inStock}>В наличии</button>
    <button class="ui button" class:purple={isFullTable} on:click={toggleTable}>Неполная таблица</button>
  </div>
</div>