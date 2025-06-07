document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk scroll ke bagian tertentu dengan smooth
    function scrollToSection(selector) {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Tambahkan interaksi tombol beli
    const beliButtons = document.querySelectorAll('.beli-btn');
    beliButtons.forEach(button => {
        button.addEventListener('click', () => {
            const namaProduk = button
                .previousElementSibling
                .previousElementSibling
                .previousElementSibling
                .textContent;
            alert("Anda membeli " + namaProduk + ". Terima kasih!");
        });
    });

    // Event listener untuk menu navigasi
    document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('#contact');
    });

    document.querySelector('a[href="#"]').addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('#beranda');
    });

    document.querySelector('a[href="#produk"]').addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('#produk');
    });

    const keranjangLink = document.querySelectorAll('a[href="#"]')[1];
    if (keranjangLink) {
        keranjangLink.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection('#keranjang');
        });
    }
});
