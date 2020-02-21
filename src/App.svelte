<script>
	import EditItem from "./EditItem.svelte";
  import ShowItem from "./Modules/ShowItem.svelte";
	import Search from "./Modules/Search.svelte";
	import Navigation from "./Modules/Navigation.svelte";
	import { mulines } from "./Modules/muline-store.js";

	let currentMuline = "";
	let mulineList;
	const unsubscribe = mulines.subscribe((value) => {
		mulineList = value;
	});

  function showMulineInfo(item) {
    currentMuline = item;
  }
</script>

<style>
	tr {
		cursor: pointer;
	}
</style>

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
        <tr on:click={showMulineInfo(muline)}>
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

{#if currentMuline}
	<ShowItem {currentMuline} />
{/if}