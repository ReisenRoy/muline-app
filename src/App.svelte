<script>
	import EditItem from "./EditItem.svelte";
  import ShowItem from "./ShowItem.svelte";
  import Search from "./Modules/Search.svelte";
  import Button from "./UI/Button.svelte";
	import { mulines } from "./Modules/muline-store.js";

	let mulineList;
	const unsubscribe = mulines.subscribe((value) => {
		mulineList = value;
	});

  let isfullTable = false;

  function showItem() {
		console.log("show");
  }

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

<h1>Список</h1>

<Search />

<div class="container">
  <div class="ui fluid buttons">
    <button class="ui button" on:click={inStock}>В наличии</button>
    <button 
      class="ui button" class:purple={isfullTable} on:click={toggleTable}>Неполная таблица</button>
  </div>
</div>

<div class="container">
  <table class="ui celled center aligned table">
    <thead>
      <th class="stockNum">Наличие</th>
      <th>DMC</th>
      <th>ПНК им.Кирова</th>
      <th class="elementsFT">Anchor</th>
      <th class="elementsFT">Madeira</th>
      <th>Цвет</th>
    </thead>
    <tbody>
      {#each mulineList as muline}
        <tr>
          <td class="inStock">
            { muline.stock }
          </td>
          <td class="td_button">
            <Button on:click={showItem}>{ muline.DMC }</Button>
          </td>
          <td>
            { muline.Kirova }
          </td>
          <td class="elementsFT">
            { muline.Anchor }
          </td>
          <td class="elementsFT">
            { muline.Madeira }
          </td>
          <td style= "background: #{ muline.color }" class="color" title="{ muline.color_en }"></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<!-- <ShowItem {mulineList} /> -->
<!-- <EditItem {mulineList} /> -->