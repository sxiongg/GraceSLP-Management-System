using Microsoft.EntityFrameworkCore;

namespace GraceSLP

{
    public class InfoContext : DbContext
    {
        public InfoContext(DbContextOptions<InfoContext> options) : base(options)
        {

        }
<<<<<<< HEAD
        public DbSet <Appointment> Appointments { get;set; }

        public DbSet <Doctor> Doctors { get;set; }

        public DbSet <Employee> Employees { get;set; }

        public DbSet <Location> Locations { get;set; }

        public DbSet <Patient> Patients { get;set; }
=======
        public DbSet <Appointment> Appointments { get; set; }
        public DbSet <Doctor> Doctors { get; set; }
        public DbSet <Employee> Employees { get; set; }
        public DbSet <Location> Locations { get; set; }
        public DbSet <Patient> Patients { get; set; }
        public DbSet <DoctorNotes> DoctorNotes { get; set; }
>>>>>>> 3058e273af985c0a293e659f3056fbeee5ea94ef

        public DbSet <DoctorNotes> DoctorNotes { get;set; }




    }
    
}