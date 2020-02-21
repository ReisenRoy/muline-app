<script>
  export let muline;
</script>

<!-- <form class="ui form" action="/list/{muline.DMC}?_method=PUT" method="POST"> -->
<form class="ui form">
  <h1>Редактирование DMC {muline.DMC}</h1>

  <div class="container">
    <a class="ui inverted primary basic huge fluid button" href="/list/">Отменить</a>
  </div>
    
  <div class="container">
  <div class="field">
    <label>Наличие</label>
    <input type="number" name="stock" value="{ muline.stock }">
  </div>
  <div class="field">
    <label>ПНК им.Кирова</label>
    <input type="number" name="Kirova" value="{ muline.Kirova }">
  </div>
  <div class="field">
    <label>Anchor</label>
    <input type="number" name="Anchor" value="{ muline.Anchor }">
  </div>
  <div class="field">
    <label>Madeira</label>
    <input type="number" name="Madeira" value="{ muline.Madeira }">
  </div>
  <div class="field">
    <label>Цвет РУС</label>
    <input type="text" name="color_ru" value="{ muline.color_ru }">
  </div>
  <div class="field">
    <label>Цвет АНГЛ</label>
    <input type="text" name="color_en" value="{ muline.color_en }">
  </div>
  <div class="field">
    <label>Hex (вводить без #)</label>
    <input type="text" name="color" value="{ muline.color }">
  </div>

  </div>

  <div class="container">
    <button class="ui inverted red basic huge fluid button">Сохранить</button>
  </div>
</form>