function formatting([text]) {
    text = text.replace(/(\.|,|!|\?|:|;)\s*([a-zA-Z0-9])/g, "$1 $2")
    text = text.replace(/(\.|,|!|\?|:|;)\s*(.)/g, "$1 $2")
    text = text.replace(/\s+(\.|,|!|\?|:|;)/g, "$1")
    text = text.replace(/\.\s+(\d)/g, ".$1")
    text = text.replace(/"\s*([^"]+?)\s*"/g, '"$1"')
    console.log(text)
}
formatting(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also\n' +
'this date is pretty confusing : 20 . 12. 16 .'])