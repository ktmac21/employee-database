const express = require('express');
const sequelize = require('./db/connection');
const employeesDatabase = require('./db/employeesDB');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/department", (req, res) => {
    employeesDatabase.selectAllDepartments().then(([rows]) => {
        console.log(rows);
        res.json(rows);
    });
});

app.get("/api/role", (req, res) => {
    employeesDatabase.selectAllRoles().then(([rows]) => {
        console.log(rows);
        res.json(rows);
    });
});
app.get("/api/employees", (req, res) => {
    employeesDatabase.selectAllEmployees().then(([rows]) => {
        console.log(rows);
        res.json(rows);
    });

});

app.get("/api/department/:id", (req, res) => {
    const id = req.params.id;
    employeesDatabase.selectOneDepartment(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO DEPARTMENT FOUND!")
        }
        res.json(rows);
    });
});

app.get("/api/role/:id", (req, res) => {
    const id = req.params.id;
    employeesDatabase.selectOneRole(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO ROLE FOUND!")
        }
        res.json(rows);
    });
});

app.get("/api/employees/:id", (req, res) => {
    const id = req.params.id;
    employeesDatabase.selectOneEmployee(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO EMPLOYEE FOUND!")
        }
        res.json(rows);
    });
});

app.post("/api/add-department", (req, res) => {
    const { name } = req.body

    employeesDatabase.addDepartment(name).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${name} has been added to the database`)
        }
    });
})

app.post("/api/add-role", (req, res) => {
    const { title, salary, department_id } = req.body

    employeesDatabase.addRole(title, salary, department_id).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${title} has been added to the database`)
        }
    });
})

app.post("/api/add-employee", (req, res) => {
    const { first_name, last_name, role_id  } = req.body

    employeesDatabase.addEmployee(first_name, last_name, role_id).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${first_name} has been added to the database`)
        }
    });
})




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
