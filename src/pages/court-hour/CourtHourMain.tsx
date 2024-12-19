

const CourtHourMain = () => {

    const month = 10;
    const year = 2024;

    // Determinar el día de la semana del primer día del mes
    const week_day_first_day = new Date(year, month, 1).getDay();
    console.log("primer dia", week_day_first_day);

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
    console.log(rows);

    const string_rows = rows.map((row, i) => (
        <tr key={i}>
            
            {row.map((day, j) => (
                <td key={j}  onClick={() => console.log("click", day)}>
                        {day}
                    
                </td>
            ))}
            
        </tr>
    ));

    return (
        <table >
            <thead>
                <tr>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sábado</th>
                    <th>Domingo</th>

                </tr>
            </thead>
            <tbody>

            {string_rows}
            
            </tbody>
        </table>
    );
};

export default CourtHourMain;