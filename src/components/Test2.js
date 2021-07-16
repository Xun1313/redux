const Test2 = ({value, setValue}) => {
  return (
    <input type="text" value={value +2} onInput={e => setValue(e.target.value)}/>
  );
}

export default Test2;