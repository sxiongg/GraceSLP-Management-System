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


        public static void Encrypt (string password, out string hash, out string salt)
        {
            var saltBytes = new byte[64];
            var provider = new RNGCryptoServiceProvider();
            provider.GetNonZeroBytes(saltBytes);
            salt = Convert.ToBase64String(saltBytes);

            var rfc2898DeriveBytes = new Rfc2898DeriveBytes ( password, saltBytes, 10000);
            hash = Convert.ToBase64String(rfc2898DeriveBytes.GetBytes(256));
        }




    }

}