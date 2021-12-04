const getEmployerRole = (employeeName, employees) => {
    for (let i = 0; i < employees.length; i += 1){
        if (employeeName === employees.name){
            return employees.role;
        }
    }
};

module.exports = getEmployerRole;
