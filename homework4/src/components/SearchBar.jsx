const SearchBar = ({ search, setSearch, maxLength, setMaxLength, ascending, setAscending }) => {
    // we have pass as well length
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const buttonHandler = (e) => {
        setAscending(false);
    }

    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick={buttonHandler} value={ascending}>Button</button>
    </>
}

export default SearchBar;