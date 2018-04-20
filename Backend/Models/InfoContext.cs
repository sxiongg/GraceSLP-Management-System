using Microsoft.EntityFrameworkCore;

namespace GraceSLP

{
    public class InfoContext : DbContext
    {
        public InfoContext(DbContextOptions<InfoContext> options) : base(options)
        {

        }
<<<<<<< HEAD
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
=======
        public DbSet <Appointment> Appointment { get; set; }
        public DbSet <Doctor> Doctor { get; set; }
        public DbSet <Employee> Employee { get; set; }
        public DbSet <Location> Location { get; set; }
        public DbSet <Patient> Patient { get; set; }
>>>>>>> 28fb454fff3dcce41e4f21ad252a00e680d43e4d
        public DbSet <DoctorNotes> DoctorNotes { get; set; }
>>>>>>> 3058e273af985c0a293e659f3056fbeee5ea94ef

        public DbSet <DoctorNotes> DoctorNotes { get;set; }




    }
    
}