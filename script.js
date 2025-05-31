
function sendWhatsApp() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var url = `https://wa.me/923001234567?text=Name:%20${name}%0ANumber:%20${number}`;
    window.open(url, '_blank');
}
