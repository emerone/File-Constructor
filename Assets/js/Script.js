const textArea = document.querySelector('textarea')
const btnFileExt = document.querySelector('select')
const inpNameFile = document.querySelector('input')
const btnSave = document.querySelector('button')

btnSave.addEventListener("click", () => {
    if(textArea.value && inpNameFile.value != ""){
        const blob = new Blob([textArea.value], {type: btnFileExt.value})

        const fileUrl = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.download = inpNameFile.value
        link.href = fileUrl
        link.click()
    }
})