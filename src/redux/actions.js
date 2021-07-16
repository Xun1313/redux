import { ADD, DELETE } from './types'

export const selectSong = value => dispatch => 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => dispatch(song(`${res[0].title}${value}`)))

export const song = song => {
  return {
    type: DELETE,
    payload: song
  }
}