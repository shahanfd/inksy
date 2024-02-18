const Search = (props) => { 
    return(
        <div className="search-container">            
            <input type={props.type} placeholder={props.placeholder} className="form-control" />
        </div>
    )
  }

export default Search