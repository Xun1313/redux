const Test1 = ({value, setValue}) => {
  return (
    <input type="text" value={value +1} onInput={e => setValue(e.target.value)}/>
  );
}

export default Test1;