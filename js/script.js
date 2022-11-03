(function() {

	var date = new Date(),
	weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

	document.getElementById('weekday').innerHTML = weekday[date.getDay()];
	document.getElementById('day').innerHTML = date.getDate();

}) ();