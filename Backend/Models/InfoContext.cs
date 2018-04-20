using Microsoft.EntityFrameworkCore;

namespace GraceSLP

{
    public class InfoContext : DbContext
    {
        public InfoContext(DbContextOptions<InfoContext> options) : base(options)
        {

        }
        public DbSet <Appointment> Appointments { get;set; }
        public DbSet <Doctor> Doctors { get;set; }
        public DbSet <Employee> Employees { get;set; }
        public DbSet <Location> Locations { get;set; }
        public DbSet <Patient> Patients { get;set; }

    }
    
}

