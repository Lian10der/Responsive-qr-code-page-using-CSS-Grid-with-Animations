const qrCodeButton = document.getElementById("qrCode")
const qrImagem = document.querySelector(".qrcode")


qrImagem.addEventListener("click", () => {
    qrImagem.classList.toggle('girar');
})

