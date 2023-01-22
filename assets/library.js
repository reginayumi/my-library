function readMore(myLibrary) {
    let dots = document.querySelector(`.code[mycode="${myLibrary}"] .dots`);
    let moreText = document.querySelector(`.code[mycode="${myLibrary}"] .more`);
    let btnText = document.querySelector(`.code[mycode="${myLibrary}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}
