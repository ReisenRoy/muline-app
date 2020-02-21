<script>
	import EditItem from "./EditItem.svelte";
  import Item from "./Modules/Item.svelte";
	import Search from "./Modules/Search.svelte";
  import Navigation from "./Modules/Navigation.svelte";
  import { mulines } from "./Modules/muline-store.js";

	let mulineList;
	const unsubscribe = mulines.subscribe((value) => {
		mulineList = value;
	});
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
      {#each mulineList as muline, id (muline.DMC)}
        <Item {muline} />
      {/each}
    </tbody>
  </table>
</div>