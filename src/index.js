
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let rezult = []

  if ( matrix != undefined) {

    for(let i = 1; i <matrix.length; i +=2){
        matrix[i].reverse()
    }
      for(let items of matrix){
          for(let item of items) {
              rezult.push(item)
          }
      }
      return rezult
  }
  return []
}