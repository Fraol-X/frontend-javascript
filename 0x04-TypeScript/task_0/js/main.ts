interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
    firstName: 'Tamirat',
    lastName: 'Masresha',
    age: 31,
    location: 'Addis Ababa'
}

const Student2: Student = {
    firstName: 'Abel',
    lastName: 'Birhanu',
    age: 31,
    location: 'Addis Ababa'
}

const StudentList: Student[] = [Student1, Student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

StudentList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);


