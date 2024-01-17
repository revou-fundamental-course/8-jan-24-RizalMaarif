const calculator = document.getElementById("calculator");
const sideLength = document.getElementById("sideLength");
const result = document.getElementById("result");

calculator.addEventListener("submit", function(event) {
	event.preventDefault();
	const area = sideLength.value * sideLength.value;
	result.textContent = `Luas Persegi: ${area}`;
});

calculator.addEventListener("reset", function() {
	result.textContent = "";
});


document.getElementById('hitung-keliling').addEventListener('click', function() {
	var sisi = document.getElementById('sisi').value;
	if (sisi <= 0 || isNaN(sisi)) {
		alert('Masukkan nilai sisi yang benar.');
		return;
	}
	var keliling = hitungKelilingPersegi(sisi);
	tampilkanHasil(keliling);
});

document.getElementById('reset').addEventListener('click', function() {
	document.getElementById('sisi').value = '';
	tampilkanHasil('');
});

function hitungKelilingPersegi(sisi) {
	return 4 * sisi;
}

function tampilkanHasil(hasil) {
	document.getElementById('hasil').textContent = 'Keliling persegi: ' + hasil;
}