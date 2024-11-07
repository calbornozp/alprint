const employees = [
    "Jose Escobar", "Jared Delgado", "Wilson Barrios", "Valentina Soto", "Yolanda Figueroa",
    "Marcelo Jiménez", "Enmiluz Alvarado", "Deyani Linares", "Freddy Flores", "Joes Escobar",
    "Gustavo Ledezma", "Laura Díaz", "Sandra Perez", "Luisa Díaz", "Douglas Torres",
    "Jonatan Caicedo", "Jaime Maliqueo", "Ricardo Lecaros"
];

const areas = ["UTECO", "Laminadora", "Novagraf", "Empaque", "Paker1", "Rotomac", "Flow Pack", "Ploma", "Envasado1", "Envasado 2"];
const shifts = ["Día", "Noche", "Administrativo"];
const outsideShiftOptions = ["Sí", "No"];

function createSelect(options, selectedValue) {
    const select = document.createElement("select");
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        if (option === selectedValue) {
            optionElement.selected = true;
        }
        select.appendChild(optionElement);
    });
    return select;
}

function generateSchedule() {
    const container = document.getElementById("employee-schedule");
    container.innerHTML = "";  // Clear previous content if any
    employees.sort().forEach(employee => {
        const area = getRandomElement(areas);
        const shift = getRandomElement(shifts);
        const outsideShift = getRandomElement(outsideShiftOptions);

        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee");

        const nameEl = document.createElement("h3");
        nameEl.textContent = employee;

        const areaSelect = createSelect(areas, area);
        areaSelect.classList.add("area");

        const shiftSelect = createSelect(shifts, shift);
        shiftSelect.classList.add("shift");

        const outsideShiftSelect = createSelect(outsideShiftOptions, outsideShift);
        outsideShiftSelect.classList.add("outside-shift");

        employeeDiv.appendChild(nameEl);
        employeeDiv.appendChild(areaSelect);
        employeeDiv.appendChild(shiftSelect);
        employeeDiv.appendChild(outsideShiftSelect);

        container.appendChild(employeeDiv);
    });
    populateSummaryTable();
}

function populateSummaryTable() {
    const tableBody = document.getElementById("summaryTableBody");
    tableBody.innerHTML = "";  // Clear previous rows
    employees.sort().forEach(employee => {
        const area = getRandomElement(areas);
        const shift = getRandomElement(shifts);
        const outsideShift = getRandomElement(outsideShiftOptions);

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = employee;
        row.appendChild(nameCell);

        const areaCell = document.createElement("td");
        areaCell.textContent = area;
        row.appendChild(areaCell);

        const shiftCell = document.createElement("td");
        shiftCell.textContent = shift;
        row.appendChild(shiftCell);

        const outsideShiftCell = document.createElement("td");
        outsideShiftCell.textContent = outsideShift;
        row.appendChild(outsideShiftCell);

        tableBody.appendChild(row);
    });
}

function saveChanges() {
    const employeesDiv = document.querySelectorAll("#employee-schedule .employee");
    employeesDiv.forEach(employeeDiv => {
        const name = employeeDiv.querySelector("h3").textContent;
        const selectedArea = employeeDiv.querySelector(".area").value;
        const selectedShift = employeeDiv.querySelector(".shift").value;
        const selectedOutsideShift = employeeDiv.querySelector(".outside-shift").value;
        console.log(`Empleado: ${name}, Área: ${selectedArea}, Turno: ${selectedShift}, Fuera de Horario: ${selectedOutsideShift}`);
    });
    populateSummaryTable();
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

generateSchedule();
