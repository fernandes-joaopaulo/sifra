import "./Table.css";

export default function Table(props) {
    return (
        <div className="table-box">
            <table>
                <thead>
                    <tr> 
                        <th>Nome</th> <th>Matrícula</th> <th>Faltas</th> <th></th> 
                    </tr>
                </thead>
                <tbody>
                    {props.tableData.map((row) => (
                    <tr key={row.matricula}>
                        <td>{row.nome}</td> <td>{row.matricula}</td> <td>{row.faltas}</td> <td><input type="checkbox"/></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}