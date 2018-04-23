using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GraceSLP
{
    [Route("api/locations")]
    public class LocationController : Controller
    {
        private InfoContext _context;

        public LocationController(InfoContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public List<Location> Get()
        {
            return _context.Location.ToList();
        }


        [HttpGet("{id}")]
        public Location GetOneLocation(int id)
        {
            var l = _context.Location.FirstOrDefault(location => location.Id == id);
            return l;
        }

        [HttpPost]
        public Location PostNewLocation ([FromBody]Location location)
        {
            _context.Location.Add(location);
            _context.SaveChanges();

            return location;
        }

        [HttpPut("{id}")]
        public Location PutLocationInfo (int id, [FromBody]Location location)
        {
            _context.Entry(location).State = EntityState.Modified;
            _context.SaveChanges();

            return location;
        }

        [HttpDelete("{id}")]
        public void DeleteLocation (int id)
        {
            var found = _context.Location.FirstOrDefault(i => i.Id == id);
            _context.Location.Remove(found);
            _context.SaveChanges();
        }

    }
}