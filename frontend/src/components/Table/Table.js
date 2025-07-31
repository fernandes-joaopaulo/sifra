import "./Table.css";

export default function Table(props) {
    return (
        <div className="table-box">
            <table>
                <thead>
                    <tr> 
                        <th>Nome</th><th>Matrícula</th><th>Faltas</th>{props.tipo === "frequencia" ? <th>Presente</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {props.tableData.map((row) => (
                    <tr key={row.matricula}>
                        <td>{row.nome}</td><td>{row.matricula}</td><td>0</td>
                        <td>
                        {props.tipo === "frequencia" ? <input type="checkbox"/> : null}
                        </td>    
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}