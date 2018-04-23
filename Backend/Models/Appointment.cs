using System;
using System.ComponentModel.DataAnnotations.Schema;


namespace GraceSLP

{
    public class Appointment
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public string Notes { get; set; }

        public int PatientId { get; set; }
        
        [ForeignKey( "PatientId" ) ]

        public Patient Patient { get; set; }

        public int DoctorId { get;set; }
        
        [ForeignKey( "DoctorId" ) ]

        public Doctor Doctor { get; set; }

        public int LocationId { get;set; }
        
        [ForeignKey( "LocationId" ) ]

        public Location location { get; set; }

    }
}