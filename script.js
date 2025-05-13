document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("main-image");

    if (mainImage) {
        mainImage.addEventListener("click", function () {
            this.style.transition = "transform 0.5s ease-in-out";
            this.style.transform = "rotateY(180deg)";
            setTimeout(() => {
                this.style.transform = "rotateY(0deg)";
            }, 500);
        });
    }
});