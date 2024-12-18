export default function MovieItem({ movie }) {
    return (
        <>
            <div className="card bg-base-100 shadow-md w-full border border-blue-500 rounded-md p-2 text-center">
                <figure className="flex justify-center">
                    <img
                        src={movie.thumbnailUrl}
                        alt="Shoes" className="max-w-[200px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p>ID {movie.id}</p>
                   
                </div>
            </div>
        </>
    )
}