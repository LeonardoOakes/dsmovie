import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import { BASE_URL } from "utils/requests";
import axios from "axios";

function Listing() {

    // FORMA ERRADA 
    axios.get(`${BASE_URL}/movies`).then(response => {
        console.log(response.data);
    });



    return (

        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing;