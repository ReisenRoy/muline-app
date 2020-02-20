<script>
	import EditItem from "./EditItem.svelte";
  import ShowItem from "./ShowItem.svelte";
	import Search from "./Modules/Search.svelte";
	import Navigation from "./Modules/Navigation.svelte";
	import { mulines } from "./Modules/muline-store.js";

	let mulineList;
	const unsubscribe = mulines.subscribe((value) => {
		mulineList = value;
	});

  function showItem() {
		console.log("show");
  }
</script>

<h1>Список</h1>

<Search />
<Navigation />

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
            { muline.DMC }
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