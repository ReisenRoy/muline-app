<script>
  import EditItem from "./EditItem.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let muline;
  let editMode = null;

  function openEdit(item) {
    editMode = "edit";
  }

  function cancelEdit() {
    editMode = null;
  }

  function saveEdit() {
    dispatch("update", muline);
  }
</script>

<style>
	tr {
		cursor: pointer;
	}
</style>

<tr on:click={openEdit(muline)}>
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
  <td 
    style= "background: #{ muline.color }" 
    class="color" 
    title="{ muline.color_en }"
  ></td>
</tr>

{#if editMode === "edit"}
  <EditItem {muline} on:save={saveEdit} on:cancel={cancelEdit} />
{/if}