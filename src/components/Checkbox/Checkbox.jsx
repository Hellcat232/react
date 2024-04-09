const Checkbox = ({ value, change }) => {
  return (
    <>
      <label>
        <input type="checkbox" name="terms" checked={value} onChange={change} />
        Do you wanna coffee?
      </label>
    </>
  );
};

export default Checkbox;
