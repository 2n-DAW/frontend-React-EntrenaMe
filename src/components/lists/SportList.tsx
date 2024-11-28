import SportCard from "../cards/SportCard";

const SportList = () => {
    
    return (
        <>
            <h2 className="text-2xl font-bold text-deep-orange-600 mb-4">Deportes</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {sports.map((sport) => (
                    <SportCard key={sport.id} sport={sport} />
                ))}
            </div>
        </>
    );
}

export default SportList;