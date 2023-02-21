const Movies = ({ movies }) => {
    // movies is name of attribute 
    // (props)
    // const movies = props.movies;
    //const { movies } = props;
    return (<table>
        <thead>
            <tr>
                <th>Title (year)</th>
                <th>Director</th>
                <th>Length</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>{
            //if you loop through array and you want to return array with same amount of elements use map
            // and if you want to remove some elements from array by criteria use filter
            //if return and next element not in same line  it won't work
            movies.map(({ title, year, director, length, country }) => {
                return <tr key={`${title} ${year}`} >
                    <td>{title} ({year})</td>
                    <td>{director}</td>
                    <td>{length}</td>
                    <td>{country}</td>
                </tr>    
        })
        }</tbody>
    </table>)
}
export default Movies;