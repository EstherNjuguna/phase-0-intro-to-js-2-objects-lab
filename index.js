// Write your solution in this file!
const employee = {
  name:"Sam",
   streetAddress:"12 Broadway"
};

function updateEmployeeWithKeyAndValue(employee 
    , key, value)
{return{
  ...employee,
  [key]:value,
}
}
    
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  employee[key]=value;
  return employee
}

function destructivelyDeleteFromEmployeeByKey(newEmployee, key){
    delete employee[key]
    return newEmployee
}

function  deleteFromEmployeeByKey(employee, key){
  return{
    ...delete employee.key,
  }
}
     