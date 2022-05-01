function SearchBar() {
    return (
        <div 
            className="field has-addons" 
            style={{marginTop: '12px', height: '100px', display: 'flex', alignItems: 'center'}}
        >
            <div className="control">
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Search" 
                    style={{width: '726px'}} 
                />
            </div>
            <div className="control">
                <button className="button">
                    <span className="icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </button>
            </div>
            <figure className="image is-32x32 is-4by5">
                <img 
                    src="keyboard_voice.svg" 
                    style={{marginLeft: '1rem', alignItems: 'center'}} 
                />
            </figure>
        </div>
    );
}

export default SearchBar;
