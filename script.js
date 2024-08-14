$(document).ready(function() {
    $('#joinForm').on('submit', function(e) {
        e.preventDefault();

        // Simulasi sukses pengiriman data
        $('#successMessage').removeClass('d-none');
        $('#joinForm')[0].reset();
    });
});
// Jika diperlukan, Anda bisa menambahkan interaktivitas tambahan di sini.
// Misalnya, untuk animasi atau redirection setelah beberapa detik.
$(document).ready(function() {
    // Contoh redirect otomatis setelah 5 detik
    setTimeout(function() {
        window.location.href = "page3.html";
    }, 5000);
});
