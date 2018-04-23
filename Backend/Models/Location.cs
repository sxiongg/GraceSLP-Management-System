using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace GraceSLP

{
    public class Location
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public List <Doctor> Doctors { get; set; } 
        public List <Employee> Employees { get; set; } 
        public List <Appointment> Appointments { get; set; }
        public List <Patient> Patients { get; set; } 
        
    }
}