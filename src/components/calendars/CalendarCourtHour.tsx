import { ICalendarCourtHourProps } from "../../shared/interfaces/InterfacesComponents/calendars/CalendarCourtHour.interface";

const CalendarCourtHour = ({month, year}: ICalendarCourtHourProps) => {

    // Determinar el día de la semana del primer día del mes
    const week_day_first_day = new Date(year, month, 1).getDay();

    const days_month = new Date(year, month + 1, 0).getDate(); //Cambiamos al siguiente mes y retrocedemos un día para saber cuantos dis teien este mes


    const offset = (week_day_first_day === 0) ? 6 : week_day_first_day - 1; // Ajustar para que Lunes sea el primer día



    const weeks = Math.ceil((days_month + offset) / 7);

    const rows = [];

    let days = 1;

    for (let i = 0; i < weeks; i++) {
        let row = []; //Semana vacia
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < offset) { //En la primera semana introducimos el offset
                row.push('');
            } else if (days > days_month) {
                break;
            } else {
                row.push(days);
                days++;
            }
        }
        rows.push(row);
    }






    const string_rows = rows.map((row, i) => (
        <tr key={i} className="w-full bg-gray-900 even:bg-gray-50 even:bg-gray-800 border-b border-gray-700">
            {
                row.map((day, j) => {
                    if (day === '') return <td key={j} className="border border-gray-600 bg-background1"></td>
                    return (<td
                        key={j}
                        onClick={() => console.log("click", day)}
                        className="border border-gray-600 text-center"
                    >
                        <h3 className="text-left text-xl text-color1 pl-4">{day}</h3>
                        <div className="w-full flex py-2">
                            <div className="w-1/2 m-0">
                                <button id={`${day}_${month}_08:00-09:00`} className="px-2 rounded-full bg-color2 text-background1 hover:bg-color2_hover text-xs">08:00-09:00</button>
                                <button id={`${day}_${month}_09:00-10:00`} className="px-2 rounded-full bg-transparent border border-color2 text-color2 hover:bg-color2_hover text-xs">09:00-10:00</button>
                                <button id={`${day}_${month}_10:00-11:00`} className="px-2 rounded-full bg-transparent border border-color2 text-color2 hover:bg-color2_hover text-xs">10:00-11:00</button>
                                <button id={`${day}_${month}_11:00-12:00`} className="px-2 rounded-full bg-transparent border border-color2 text-color2 hover:bg-color2_hover text-xs">11:00-12:00</button>
                                <button id={`${day}_${month}_12:00-13:00`} className="px-2 rounded-full bg-color2 text-background1 hover:bg-color2_hover text-xs">12:00-13:00</button>
                            </div>

                            <div className=" w-1/2 m-0">
                                <button id={`${day}_${month}_13:00-14:00`} className="px-2 rounded-full bg-color2 text-background1 hover:bg-color2_hover text-xs">13:00-14:00</button>
                                <button id={`${day}_${month}_16:00-17:00`} className="px-2 rounded-full bg-transparent border border-color2 text-color2 hover:bg-color2_hover text-xs">16:00-17:00</button>
                                <button id={`${day}_${month}_17:00-18:00`} className="px-2 rounded-full bg-transparent border border-color2 text-color2 hover:bg-color2_hover text-xs">17:00-18:00</button>
                                <button id={`${day}_${month}_18:00-19:00`} className="px-2 rounded-full bg-transparent border border-color2 text-color2 hover:bg-color2_hover text-xs">18:00-19:00</button>
                                <button id={`${day}_${month}_19:00-20:00`} className="px-2 rounded-full bg-transparent border border-color2 text-color2 hover:bg-color2_hover text-xs">19:00-20:00</button>
                            </div>
                        </div>
                    </td>
                    )
                })
            }
        </tr>
    ));

    return (
        <div className=" shadow-md rounded">
            <table className="w-full text-sm text-center text-text1 ">
                <thead className="text-xs text-text1 bg-background3">
                    <tr>
                        <th scope="col" className="py-4 border border-gray-600">Lunes</th>
                        <th scope="col" className="py-4  border border-gray-600">Martes</th>
                        <th scope="col" className="py-4  border border-gray-600">Miércoles</th>
                        <th scope="col" className="py-4  border border-gray-600">Jueves</th>
                        <th scope="col" className="py-4  border border-gray-600">Viernes</th>
                        <th scope="col" className="py-4  border border-gray-600">Sábado</th>
                        <th scope="col" className="py-4  border border-gray-600">Domingo</th>
                    </tr>
                </thead>
                <tbody>
                    {string_rows}
                </tbody>
            </table>
        </div>
    );
};

export default CalendarCourtHour;