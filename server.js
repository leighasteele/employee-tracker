const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees_db",
});

const prompt = inquirer.createPromptModule();

const seeAllEmployees = () => {
  db.query(
    `SELECT employee.id AS id,
  CONCAT (employee.first_name, ' ', employee.last_name) AS name
  department.name AS department,
  role.salary AS salary,`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      init();
    }
  );
};

const addEmployee = () => {
  inquirer.prompt([
    {
        type: 'input',
        message: "first name",
        name: 'firstName'
    },
    {
        type: 'input',
        message: "last name",
        name: 'lastName'
    },
    {
        type: 'input',
        message: "role id",
        name: 'role'
    },
  ]).then((response) => {
    db.query(`INSERT INTO employee SET ?`,
        {
            first_name: response.firstName,
            last_name: response.lastName,
            roles_id: response.role,
        },
    (err) => {
      if (err) throw err;
      console.log("employee added");
      init();
    },
  )})};

  const seeAllRoles = () => {
    db.query(
      `SELECT role.id AS id,
    role.title AS title
    role.salary AS salary,
    department.name AS department,`,
      (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
      }
    );
  };

  const addRole = () => {
    inquirer.prompt([
      {
          type: 'input',
          message: "enter role",
          name: 'title'
      },
      {
          type: 'input',
          message: "role salary",
          name: 'salary'
      },
      {
          type: 'input',
          message: "role's department id",
          name: 'department'
      },
    ]).then((response) => {
      db.query(`INSERT INTO role SET ?`,
          {
              role: response.title,
              salary: response.salary,
              department: response.department,
          },
      (err) => {
        if (err) throw err;
        console.log("role added");
        init();
      },
    )})
  };

  const seeAllDepartments = () => {
    db.query(
      `SELECT department.id AS id,
    name AS department FROM department,`,
      (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
      }
    );
  };

  const addDepartment = () => {
    inquirer.prompt([
      {
          type: 'input',
          message: "department name",
          name: 'newDep'
      },
    ]).then((response) => {
      db.query(`INSERT INTO department SET ?`,
          {
              name: response.newDep,
          },
      (err) => {
        if (err) throw err;
        console.log("department added");
        init();
      },
    )})
  };