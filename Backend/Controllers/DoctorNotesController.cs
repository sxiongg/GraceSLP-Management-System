using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GraceSLP
{
    [Route("api/notes")]
    public class DoctorNotesController : Controller
    {
        private InfoContext _context;

        public DoctorNotesController(InfoContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public List<DoctorNotes> Get()
        {
            return _context.DoctorNotes.ToList();
        }


        [HttpGet("{id}")]
        public DoctorNotes GetOneNote(int id)
        {
            var n = _context.DoctorNotes.FirstOrDefault(note => note.Id == id);
            return n;
        }

        [HttpPost]
        public DoctorNotes PostNewNote ([FromBody]DoctorNotes note)
        {
            _context.DoctorNotes.Add(note);
            _context.SaveChanges();

            return note;
        }

        [HttpPut("{id}")]
        public DoctorNotes PutNoteInfo (int id, [FromBody]DoctorNotes note)
        {
            _context.Entry(note).State = EntityState.Modified;
            _context.SaveChanges();

            return note;
        }

        [HttpDelete("{id}")]
        public void DeleteNote (int id)
        {
            var found = _context.DoctorNotes.FirstOrDefault(i => i.Id == id);
            _context.DoctorNotes.Remove(found);
            _context.SaveChanges();
        }

    }
}