using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace GraceSLP

{
    public class DoctorNotes
    {
        public int Id { get; set; }
<<<<<<< HEAD

        public string Note { get; set; }

=======
        public string Note { get; set; }
>>>>>>> 3058e273af985c0a293e659f3056fbeee5ea94ef
        public DateTime DateEntered { get; set; }

        public int PatientId { get; set; }
       
        [ForeignKey( "PatientId" ) ]

        public Patient Patient { get; set; }
<<<<<<< HEAD



=======
>>>>>>> 3058e273af985c0a293e659f3056fbeee5ea94ef
    }
}