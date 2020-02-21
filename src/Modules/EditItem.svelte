<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let muline;

  function submitForm() {
    dispatch("save", muline);
    closeModal();
  }

  function closeModal() {
    dispatch("cancel");
  }
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    padding: 1em 0;
    background-color: #B993D6;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }

  .modal label {
    color: white;
  }
</style>

<div class="modal-backdrop" on:click={closeModal} />
<div class="modal">
  <!-- <form class="ui form" action="/list/{muline.DMC}?_method=PUT" method="POST"> -->
  <form class="ui form">
    <h1>Редактирование DMC {muline.DMC}</h1>

    <div class="container">
      <button class="ui inverted primary basic huge fluid button" on:click={closeModal} >Отменить</button>
      <div class="field">
        <label>Наличие</label>
        <input 
          type="number" 
          name="stock" 
          value={ muline.stock } 
          on:input={ e => muline.stock = e.target.value } >
      </div>
      <div class="field">
        <label>ПНК им.Кирова</label>
        <input 
          type="number" 
          name="Kirova" 
          value={ muline.Kirova } 
          on:input={ e => muline.Kirova = e.target.value } >
      </div>
      <div class="field">
        <label>Anchor</label>
        <input 
          type="number" 
          name="Anchor" 
          value={ muline.Anchor } 
          on:input={ e => muline.Anchor = e.target.value } >
      </div>
      <div class="field">
        <label>Madeira</label>
        <input 
          type="number" 
          name="Madeira" 
          value={ muline.Madeira } 
          on:input={ e => muline.Madeira = e.target.value } >
      </div>
      <div class="field">
        <label>Цвет</label>
        <input 
          type="text" 
          name="color_ru" 
          value={ muline.color_ru } 
          on:input={ e => muline.color_ru = e.target.value } >
      </div>
      <div class="field">
        <label>Color</label>
        <input 
          type="text" 
          name="color_en" 
          value={ muline.color_en }
          on:input={ e => muline.color_en = e.target.value } >
      </div>
      <div class="field">
        <label>Hex (вводить без #)</label>
        <input 
          style="background-color: #{muline.color}" 
          type="text" 
          name="color" 
          bind:value={ muline.color } 
          on:input={ e => muline.color = e.target.value } >
      </div>

      <button 
        type="submit" 
        class="ui inverted red basic huge fluid button" 
        on:click|preventDefault={ submitForm(muline) } >
        Сохранить
      </button>
    </div>
  </form>
</div>