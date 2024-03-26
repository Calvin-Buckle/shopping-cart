const CallFilter = ({ isOpen, setIsOpen, selected, setSelected }) => {
  const handleFilterChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSelected(value);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <select onChange={handleFilterChange} value={selected}>
        <option value={'all'}>All</option>
        <option value={`men's clothing`}>Men</option>
        <option value={`women's clothing`}>Women</option>
        <option value={`jewelery`}>Jewelery</option>
        <option value={`electronics`}>Electronics</option>
      </select>
      <button onClick={() => setIsOpen(false)}>Close Filter</button>
    </div>
  );
};

export default CallFilter;