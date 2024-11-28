import { Sport } from "../../shared/interfaces/Sport.interface";

const SportCard = ( sport : Sport ) => {
    const { img_sport, n_sport } = sport;

    return (
        <div className="relative group">
            <img src={`img/sports/${img_sport}`} alt="Ejemplo 1" className="w-full h-auto rounded-lg shadow-lg" />
            <div
                className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
                <h3 className="text-xl font-bold text-white">{n_sport}</h3>
                <p className="text-gray-300 mt-2">{n_sport}</p>
            </div>
        </div>
    );
}

export default SportCard;