function theBeatlesPlay(musicians, instruments){
  var playing = []
  for (var i = 0; i < musicians.length; i++){
    playing.push(`${musicians[i]} plays the ${instruments[i]}`)
  }
  return playing
}
