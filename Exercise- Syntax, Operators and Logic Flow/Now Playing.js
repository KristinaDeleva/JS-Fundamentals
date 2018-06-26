function playing(arr) {
    let track = arr[0]
    let artist = arr[1]
    let duration = arr[2]
    console.log(`Now Playing: ${artist} - ${track} [${duration}]`)
}
playing(['Number One', 'Nelly', '4:09'])