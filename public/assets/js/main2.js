console.log ('test test');

const company_info = {
    "company_name":"Some Good Stuff",
    "owner":"pevy",
    "address":"Seneca",
    "Phone":"",
    "employees": [
        {
            "id":1234,
            "firstname":"Bob",
            "lastname":"Dylan",
            "phone":"",
            "kids":"",
        },
        {
            "id":5555,
            "firstname":"Ted",
            "lastname":"Lasso",
            "phone":"",
            "kids":"",
        },
        {
            "id":6666,
            "firstname":"Keeley",
            "lastname":"Jones",
            "phone":"",
            "kids":"",
        }
    ],
    "website":""
};

console.log(company_info);
console.log(company_info.company_name);
console.log(company_info.employees[2].firstname);

// This is a variable
// acess the html and change the content
const site_heading = document.querySelector("h1");
console.log (site_heading.innerHTML);
site_heading.innerHTML = company_info.company_name;

const eotm = document.querySelector("#eotm");
eotm.innerHTML = `The <b>Employee of the Month</b> is ${company_info.employees[2].firstname}`;

