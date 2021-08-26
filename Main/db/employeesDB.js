const connection = require("./connection");

class EmployeesDatabase {
    constructor(connection) {
        this.connection = connection;
    }

    selectAllDepartments() {
        return this.connection.promise().query("SELECT * FROM department");
    }

    selectAllRoles() {
        return this.connection.promise().query("SELECT * FROM role");

    }

    selectAllEmployees() {
        return this.connection.promise().query("SELECT * FROM employee");
    }

    selectOneDepartment(id) {
        return this.connection.promise().query("SELECT * FROM department WHERE id = ?", id)
    }

    selectOneRole(id) {
        return this.connection.promise().query("SELECT * FROM role WHERE id = ?", id)
    }

    selectOneEmployee(id) {
        return this.connection.promise().query("SELECT * FROM employee WHERE id = ?", id)
    }

    addDepartment(name) {
        return this.connection.promise().query("INSERT INTO department(name) VALUES (?)", name)
    }

    addRole(title, salary, department_id) {
        return this.connection.promise().query("INSERT INTO role (title, salary, department_id) VALUES (? ? ?)", 
        [title, salary, department_id])
    }

    addEmployee(first_name, last_name, role_id) {
        return this.connection.promise().query("INSERT INTO employee(first_name, last_name, role_id) VALUES(?, ?)", 
        [first_name, last_name, role_id])
    }
}

module.exports = new EmployeesDatabase(connection); 