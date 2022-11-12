
let Data = [
        {
            name: 'James King',
            title: 'President and CEO',
            image: ''
        },
        {
            name: 'Julie Taylor',
            title: 'VP of Marketing',
            image: ''
        },
        {
            name: 'Eugene Lee',
            title: 'CFO',
            image: ''
        },
        {
            name: 'John Williams',
            title: 'VP of Engineering',
            image: ''
        },
        {
            name: 'Ray Moore',
            title: 'VP of Sales',
            image: ''
        },
        {
            name: 'Paul Jones',
            title: 'QA Manager',
            image: ''
        }
    ]


    function EmployeeListItem() {
        return (
            <ul className = "wrapper">
                {Data.map(employee => {
                    return (
                        <li key={employee.id}>
                            {employee.name} 
                            <br/>
                            {employee.title}
                        </li>
                    )})}
            </ul>
        )
    }
    


export default EmployeeListItem;