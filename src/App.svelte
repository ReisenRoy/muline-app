<script>
  import Item from "./Modules/Item.svelte";
	import Search from "./Modules/Search.svelte";
  import Navigation from "./Modules/Navigation.svelte";
  import { mulines } from "./Modules/muline-store.js";

	let mulineList;
	const unsubscribe = mulines.subscribe((value) => {
		mulineList = value;
  });
  
  unsubscribe();
</script>

<h1>Список</h1>

<Search />
<Navigation />

<div class="container">
  <table class="ui celled center aligned table">
    <thead>
      <th>Кол-во <span class="stockNum"></span></th>
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