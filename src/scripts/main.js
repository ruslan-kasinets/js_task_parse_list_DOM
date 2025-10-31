'use strict';

const peopleList = document.querySelector('ul');

function parseSalary(str) {
  const salaryNum = +str.replace(/\D/g, '');

  return salaryNum;
}

function getSortList(list) {
  const sortedList = [...list.children];

  sortedList.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  for (const elem of sortedList) {
    list.append(elem);
  }
}

function getEmployees(list) {
  return [...list.children].map((elem) => ({
    name: elem.innerText,
    position: elem.dataset.position,
    salary: parseSalary(elem.dataset.salary),
    age: +elem.dataset.age,
  }));
}

getSortList(peopleList);
getEmployees(peopleList);
