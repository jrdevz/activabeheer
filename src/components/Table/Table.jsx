import './Table.css'

export function InventoryTable() {
    return (
        <div className='dynamic-table'>
            <div className='action-menu'>
                <input className='search' type="text" placeholder='Search' />
                <button>Toevoegen</button>
                <button>Verwijderen</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Serienummer</th>
                        <th>Merk</th>
                        <th>Model</th>
                        <th>Aankoopdatum</th>
                        <th>Garantiedatum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>LT-084525401753</td>
                        <td>Microsoft</td>
                        <td>Surface Pro 7</td>
                        <td>16-07-2023</td>
                        <td>16-07-2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}