documentAllLoaded = false

document.addEventListener("DOMContentLoaded",() => {
documentAllLoaded = true
resizeAction()
setupEvents()
setup()
loop()
})
