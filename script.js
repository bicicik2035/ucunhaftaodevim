document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modalImage = document.getElementById("modalImage");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            modalImage.src = this.src;
        });
    });
});
    