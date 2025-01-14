import { useEffect, useState } from "react";
import { ICalendarCourtHourProps } from "../../shared/interfaces/InterfacesComponents/calendars/CalendarCourtHour.interface";
import { ICourtHour } from "../../shared/interfaces/entities/CourtHourt.interface";

const CalendarCourtHour = ({ month, year, data, changes }: ICalendarCourtHourProps) => {
    const week_day_first_day = new Date(year, month, 1).getDay();
    const days_month = new Date(year, month + 1, 0).getDate();
    const offset = (week_day_first_day === 0) ? 6 : week_day_first_day - 1;
    const weeks = Math.ceil((days_month + offset) / 7);
    const rows = [];
    let days = 1;

    for (let i = 0; i < weeks; i++) {
        let row = [];
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < offset) {
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

    const [ids, setIds] = useState<string[]>([]);

    useEffect(() => {
        const resp = data.map((court_hour) => {
            return `${court_hour.day_number}_${court_hour.id_month}_${court_hour.id_hour}`;
        });
        setIds(resp);
    }, [data]);

    const isButtonSelected = (id: string) => {
        return ids.includes(id);
    };

    const onClick = (id: string) => {
        if (ids.includes(id)) {
            const new_ids = ids.filter((item) => item !== id);
            setIds(new_ids);
            return;
        }

        setIds((prevIds) => {
            return [...prevIds, id];
        });
    };

    const onDayClick = (day: number) => {
        const dayIds = [
            `${day}_${month}_8`,
            `${day}_${month}_9`,
            `${day}_${month}_10`,
            `${day}_${month}_11`,
            `${day}_${month}_12`,
            `${day}_${month}_13`,
            `${day}_${month}_16`,
            `${day}_${month}_17`,
            `${day}_${month}_18`,
            `${day}_${month}_19`,
        ];

        const allSelected = dayIds.every((id) => ids.includes(id));

        if (allSelected) {
            setIds((prevIds) => prevIds.filter((id) => !dayIds.includes(id)));
        } else {
            setIds((prevIds) => [...new Set([...prevIds, ...dayIds])]);
        }
    };

    useEffect(() => {
        const court_hour_changes = ids.map((item) => {
            const [day_number, id_month, id_hour] = item.split('_');
            return {
                day_number: parseInt(day_number),
                id_month: parseInt(id_month),
                id_hour: parseInt(id_hour),
                year: year,
            };
        });
        changes(court_hour_changes as ICourtHour[]);
    }, [ids]);

    const string_rows = rows.map((row, i) => (
        <tr key={i} className="w-full bg-gray-900 even:bg-gray-50 even:bg-gray-800 border-b border-gray-700">
            {
                row.map((day, j) => {
                    if (day === '') return <td key={j} className="border border-gray-600 bg-background1"></td>;
                    return (
                        <td
                            key={j}
                            className="border border-gray-600 text-center"
                        >
                            <h3
                                className="text-left text-xl text-color1 pl-4 cursor-pointer hover:underline"
                                onClick={() => onDayClick(day as number)}
                            >
                                {day}
                            </h3>
                            <div className="w-full flex py-2">
                                <div className="w-1/2 m-0">
                                    <button id={`${day}_${month}_8`}
                                        onClick={() => onClick(`${day}_${month}_8`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_8`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>08:00-09:00</button>
                                    <button id={`${day}_${month}_9`}
                                        onClick={() => onClick(`${day}_${month}_9`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_9`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>09:00-10:00</button>
                                    <button id={`${day}_${month}_10`}
                                        onClick={() => onClick(`${day}_${month}_10`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_10`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>10:00-11:00</button>
                                    <button id={`${day}_${month}_11`}
                                        onClick={() => onClick(`${day}_${month}_11`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_11`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>11:00-12:00</button>
                                    <button id={`${day}_${month}_12`}
                                        onClick={() => onClick(`${day}_${month}_12`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_12`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>12:00-13:00</button>
                                </div>

                                <div className=" w-1/2 m-0">
                                    <button id={`${day}_${month}_13`}
                                        onClick={() => onClick(`${day}_${month}_13`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_13`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>13:00-14:00</button>
                                    <button id={`${day}_${month}_16`}
                                        onClick={() => onClick(`${day}_${month}_16`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_16`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>16:00-17:00</button>
                                    <button id={`${day}_${month}_17`}
                                        onClick={() => onClick(`${day}_${month}_17`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_17`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>17:00-18:00</button>
                                    <button id={`${day}_${month}_18`}
                                        onClick={() => onClick(`${day}_${month}_18`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_18`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>18:00-19:00</button>
                                    <button id={`${day}_${month}_19`}
                                        onClick={() => onClick(`${day}_${month}_19`)}
                                        className={`px-2 rounded-full text-xs ${isButtonSelected(`${day}_${month}_19`)
                                            ? "bg-color2 text-background1 hover:bg-color2_hover"
                                            : "bg-transparent border border-color2 text-color2 hover:bg-color2_hover"
                                            }`}>19:00-20:00</button>
                                </div>
                            </div>
                        </td>
                    );
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
