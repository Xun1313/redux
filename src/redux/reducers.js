import { ADD, DELETE } from './types'

const songsReducer = (state = 123, action) => {
  if (action.type === DELETE) {
    return action.payload
  }
  return state
}

const selectedSongsReducer = (state = 87, action) => {
  if (action.type === ADD) {
    return action.payload
  }
  return state
}

// eslint-disable-next-line
export default {
  song: songsReducer,
  selectedSongs: selectedSongsReducer
}