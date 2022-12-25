import { SearchBar } from "../components/Search/SearchBar";
import { ResultsContainer } from "../components/Search/ResultsContainer";

const SearchPage = () => {
   return(
    <div>
        <h1 className="text-xl p-4 text-center front-graphikLight">Search</h1>
        <SearchBar />
        <div className="grid grid-cols-4 h-screen">
            <div className="col-span-4">
                <ResultsContainer />
            </div>
        </div>
    </div>
   ) 
}

export default SearchPage;