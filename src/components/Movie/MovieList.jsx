
import { useContext } from "react"
import MovieItem from "./MovieItem"
import { Context } from "../../context"

export default function MovieList() {
    const { state, dispath } = useContext(Context)
    return (
        <>
            <div className="grid grid-cols-3 gap-x-2 gap-y-3">
                {state.data.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    )


}