let slideIndex = 0;
    showSlides();

    // Fungsi untuk menampilkan slide
    function showSlides() {
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
    }

    // Fungsi untuk tombol Prev dan Next
    function plusSlides(n) {
        slideIndex += n - 1;
        showSlides();
    }

    // Fungsi untuk titik-titik penunjuk
    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }