using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GraceSLP
{
    [Route("api/patients")]
    public class PatientController : Controller
    {
        private InfoContext _context;

        public PatientController(InfoContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public List<Patient> Get()
        {
            return _context.Patient.ToList();
        }


        [HttpGet("{id}")]
        public Patient GetOnePatient(int id)
        {
            var p = _context.Patient.FirstOrDefault(patient => patient.Id == id);
            return p;
        }

        [HttpPost]
        public Patient PostNewPatient ([FromBody]Patient patient)
        {
            _context.Patient.Add(patient);
            _context.SaveChanges();

            return patient;
        }

        [HttpPut("{id}")]
        public Patient PutPatientInfo (int id, [FromBody]Patient patient)
        {
            _context.Entry(patient).State = EntityState.Modified;
            _context.SaveChanges();

            return patient;
        }

        [HttpDelete("{id}")]
        public void DeletePatient (int id)
        {
            var found = _context.Patient.FirstOrDefault(i => i.Id == id);
            _context.Patient.Remove(found);
            _context.SaveChanges();
        }

    }
}