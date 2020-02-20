<script>
  function search() {
		const input = document.getElementById('search');
		const	filter = input.value.toUpperCase();
		const	tr = document.getElementsByTagName('tr');

		for (let i = 0; i < tr.length; i++) {
			const txtValue = tr[i].textContent || tr[i].innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
</script>

<div class="container">
  <div class="ui small icon fluid input" data-children-count="1">
    <input 
      type="search" 
      name="search" 
      placeholder="Поиск по таблице" 
      on:keyup={search} 
      id="search">

    <i class="search icon"></i>
  </div>
</div>