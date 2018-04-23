using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GraceSLP
{
    [Route("api/doctors")]
    public class DoctorController : Controller
    {
        private InfoContext _context;

        public DoctorController(InfoContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public List<Doctor> Get()
        {
            return _context.Doctor.ToList();
        }


        [HttpGet("{id}")]
        public Doctor GetOneDoctor(int id)
        {
            var d = _context.Doctor.FirstOrDefault(doctor => doctor.Id == id);
            return d;
        }

        [HttpPost]
        public Doctor PostNewDoctor([FromBody]Doctor doctor)
        {
            _context.Doctor.Add(doctor);
            _context.SaveChanges();

            return doctor;
        }

        [HttpPut("{id}")]
        public Doctor PutDoctorInfo(int id, [FromBody]Doctor doctor)
        {
            _context.Entry(doctor).State = EntityState.Modified;
            _context.SaveChanges();

            return doctor;
        }

        [HttpDelete("{id}")]
        public void DeleteDoctor(int id)
        {
            var found = _context.Doctor.FirstOrDefault(i => i.Id == id);
            _context.Doctor.Remove(found);
            _context.SaveChanges();
        }

    }
}