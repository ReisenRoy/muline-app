<script>
  export let muline;

</script>

<style>
	tr {
		cursor: pointer;
	}
</style>

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