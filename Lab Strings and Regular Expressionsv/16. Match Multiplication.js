function matches(text) {
    let pattern = /(-?\d+)\s*\*\s*(-?\d+\.\d+)/g
    text = text.replace(pattern, (all, g1, g2) => +g1 * +g2)
    console.log(text)
}
matches('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')