using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace GraceSLP

{
    public class DoctorNotes
    {
        public int Id { get; set; }
        public string Note { get; set; }
        public DateTime DateEntered { get; set; }

        public int PatientId { get; set; }
       
        [ForeignKey( "PatientId" ) ]

        public Patient Patient { get; set; }
    }
}