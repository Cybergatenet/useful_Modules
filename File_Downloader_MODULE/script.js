const userInput = document.querySelector(".input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading..."
    fetchFileToDownload(userInput.value)
})

const fetchFileToDownload = (url) => {
    fetch(url).then(res => res.blob()).then(file => {
        let fileUrl = URL.createObjectURL(file)
        let a = document.createElement("a")
        a.href = fileUrl
        a.download = url.replace(/^.*[\\\/]/,'')
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(fileUrl)
        downloadBtn.innerText = "Download File"
    }).catch(() => {
        downloadBtn.innerText = "Download File"
        alert('File Download Error!')
    })
}