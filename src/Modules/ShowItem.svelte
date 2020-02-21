<script>
  export let currentMuline;
</script>

<style>
  .modal {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    padding: 1% 20%;
    background: #B993D6;
	  background: -webkit-linear-gradient(to right, #8CA6DB, #B993D6);
	  background: linear-gradient(to right, #8CA6DB, #B993D6);
  }
</style>

<div class="modal">
  <h1>DMC { currentMuline.DMC }</h1>
  
  <div class="container">
    <a class="ui inverted primary basic huge fluid button" href="/">Назад к списку</a>
  </div>

  <table class="ui celled center aligned table">
    <thead>
      <th>Наличие</th>
      <th>ПНК</th>
      <th>Anchor</th>
      <th>Madeira</th>
      <th>Цвет RU</th>
      <th>Цвет EN</th>
      <th>Цвет</th>
    </thead>
    <tbody>
      <tr>
        <td>{ currentMuline.stock }</td>
        <td>{ currentMuline.Kirova }</td>
        <td>{ currentMuline.Anchor }</td>
        <td>{ currentMuline.Madeira }</td>
        <td>{ currentMuline.color_ru }</td>
        <td>{ currentMuline.color_en }</td>
        <td 
          style= "background: #{ currentMuline.color }"
          class="color"
          title="{ currentMuline.color_en }"
        ></td>
      </tr>
    </tbody>
  </table>

  <div class="container">
    <button class="ui inverted orange basic huge fluid button">Редактировать</button>
  </div>
</div>