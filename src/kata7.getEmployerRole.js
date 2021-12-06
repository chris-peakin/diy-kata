const getEmployerRole = (employeeName, employees) => {
    for (let i = 0; i < employees.length; i += 1){
        if (employeeName === employees[i].name){
            return employees[i].role;
        }
    }
};

module.exports = getEmployerRole;
