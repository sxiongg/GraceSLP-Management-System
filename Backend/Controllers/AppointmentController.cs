using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GraceSLP
{
    [Route("api/budget")]
    public class BudgetController : Controller
    {
        private InfoContext _context;

        public BudgetController(InfoContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public List<Appointment> Get()
        {
            return _context.Appointments.ToList();
        }


        [HttpGet("{id}")]
        public Appointment GetOneBudget(int id)
        {
            var b = _context.Appointments.FirstOrDefault(appointment => appointment.Id == id);
            return b;
        }

        [HttpPost]
        public Appointment PostNewBudget ([FromBody]Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            _context.SaveChanges();

            return appointment;
        }

        [HttpPut("{id}")]
        public Appointment PutBudgetInfo (int id, [FromBody]Appointment appointment)
        {
            _context.Entry(appointment).State = EntityState.Modified;
            _context.SaveChanges();

            return appointment;
        }

        [HttpDelete("{id}")]
        public void DeleteBudget (int id)
        {
            var found = _context.Appointments.FirstOrDefault(i => i.Id == id);
            _context.Appointments.Remove(found);
            _context.SaveChanges();
        }

    }
}