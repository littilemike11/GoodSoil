import { Link } from "react-router-dom"
export default function GameCard(props) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{props.Title}</h2>
                    <p>{props.Description}</p>
                    <div className="card-actions">
                        <Link to={props.Link}>
                            <button className="btn btn-primary">Play Now</button>

                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}