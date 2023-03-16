import searchIcon from "./seatchItem.svg";
const SearchBar = ({ setValueSearchBar }) => {
    return (
        <div className="searchBarContainer">
            <form className="form" onChange={(e) => { setValueSearchBar(e.target.value) }}>
                <input className="search" placeholder="Поиск" type="search" />
                <button className="btnSearch" type="submit">
                    <img className="icon" src={searchIcon} alt="" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;