const callFilter = ({ isOpen , setIsOpen}) => {
    const handleFilterChange = (e) => {
        console.log(e.target.value)
    };

    if(!isOpen){
        return null;
    }

    return(
        <div>
            <select onChange={handleFilterChange}>
                <option value={'all'}>All</option>
                <option value={'men'}>Men</option>
                <option vlaue={'women'}>Women</option>
            </select>
            <button onClick={() => setIsOpen(false)}>Close Filter</button>
        </div>
    );

};


export default callFilter;