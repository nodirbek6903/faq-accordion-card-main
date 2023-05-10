const card = document.querySelectorAll(".card");

// card.classList.toggle
card.forEach((cards) => {
    const cardHeader  = cards.querySelector("div");
    const heading3 = cardHeader.querySelector("h3");
    const cardPage = cards.querySelector("p");
    const image = cardHeader.querySelector("img");
    cardHeader.addEventListener("click",() => {
        cardPage.classList.toggle("active");
        heading3.classList.toggle("active_rang");
        image.classList.toggle("teskari");
    })
})