const generate = document.querySelector('.generate')
const userInput = document.querySelector(".input")
const output = document.querySelector('.card-body img')
// card-body
const card = document.querySelector('.card')

const genFunc = () => {
    let qrUrl = userInput.value
    // qrUrl = "";
    generate.innerHTML = 'processing...'

    card.classList.add('active')

    

    const qrImg = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrUrl}`;

    // output.src =

    output.addEventListener('load', () => {
        // output.src = qrImg
        output.setAttribute("src", qrImg)

        // qrUrl = "";
        generate.innerHTML = 'Generate QR Code'
    })

    userInput.addEventListener("keyup", () => {
        if(userInput.value === ""){
            generate.innerHTML = 'Generate QR Code'
            card.classList.remove('active')
    
        }
    })

}

// Events to Run code [click && Key-13]
generate.addEventListener("click", () =>{
    genFunc()
    
})

document.addEventListener("keypress", (e) => {
    if(e.keyCode === 13 || e.key === "Enter"){
        // console.log("ENter Key press", e.key)
        genFunc()
    }
})
