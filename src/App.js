import { useState } from 'react'
import { connect } from 'react-redux'
import {selectSong} from './redux/actions'

import Test1 from './components/Test1'
import Test2 from './components/Test2'

function App(props) {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <Test1 value={value} setValue={setValue}></Test1>
      <Test2 value={value} setValue={setValue}></Test2>
      selectedSongs  {props.selectedSongs}
      <br />
      song  {props.song}
      <button type="button" onClick={() => props.selectSong(456)}>test</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    song: state.song,
    selectedSongs: state.selectedSongs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectSong: song => dispatch(selectSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* export default connect(mapStateToProps, {
  selectSong
})(App); */

/* import { useSelector, useDispatch } from 'react-redux'
import {selectSong} from './store/actions'

function App() {
  const selectedSongs = useSelector(state => state.selectedSongs)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>{selectedSongs}</div>
      <button type="button" onClick={() => dispatch(selectSong('喵喵'))}>test</button>
    </div>
  );
}


export default App; */