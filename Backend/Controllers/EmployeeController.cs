using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GraceSLP
{
    [Route("api/employees")]
    public class EmployeeController : Controller
    {
        private InfoContext _context;

        public EmployeeController(InfoContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public List<Employee> Get()
        {
            return _context.Employee.ToList();
        }


        [HttpGet("{id}")]
        public Employee GetOneEmployee(int id)
        {
            var e = _context.Employee.FirstOrDefault(employee => employee.Id == id);
            return e;
        }

        [HttpGet("username/{username}")]
        public Employee GetOneEmployeeByUsername(string username)
        {
            var e = _context.Employee.FirstOrDefault(employee => employee.Username == username);
            return e;
        }

        [HttpPost]
        public Employee PostNewEmployee([FromBody]Employee employee)
        {
            _context.Employee.Add(employee);
            _context.SaveChanges();

            return employee;
        }

        [HttpPut("{id}")]
        public Employee PutEmployeeInfo(int id, [FromBody]Employee employee)
        {
            _context.Entry(employee).State = EntityState.Modified;
            _context.SaveChanges();

            return employee;
        }

        [HttpDelete("{id}")]
        public void DeleteEmployee(int id)
        {
            var found = _context.Employee.FirstOrDefault(i => i.Id == id);
            _context.Employee.Remove(found);
            _context.SaveChanges();
        }

    }
}