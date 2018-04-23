using Microsoft.EntityFrameworkCore;

namespace GraceSLP

{
    public class InfoContext : DbContext
    {
        public InfoContext(DbContextOptions<InfoContext> options) : base(options)
        {

        }
        public DbSet <Appointment> Appointment { get;set; }
        public DbSet <Doctor> Doctor { get;set; }
        public DbSet <Employee> Employee { get;set; }
        public DbSet <Location> Location { get;set; }
        public DbSet <Patient> Patient { get;set; }
        public DbSet <DoctorNotes> DoctorNotes { get; set; }

    }
    
}