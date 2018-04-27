using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;


namespace GraceSLP

{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Position { get; set; }
        public bool IsAdmin { get;set; }
        public string DaysAvailable { get; set; }        
        public TimeSpan StartTime { get;set; }
        public TimeSpan EndTime { get;set; }
        public int LocationId { get; set; }
        
        [ForeignKey( "LocationId" ) ]
        public Location location { get; set; }

    }

}