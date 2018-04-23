using System;
using System.ComponentModel.DataAnnotations.Schema;


namespace GraceSLP

{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Position { get; set; }
        public bool IsAdmin { get;set; }
        public int LocationId { get; set; }
        
        [ForeignKey( "LocationId" ) ]
        public Location location { get; set; }
        
    }
}