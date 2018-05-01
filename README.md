# GraceSLP-Management-System
Medical management system built with React, .NET, and PostgreSQL. 
Used for scheduling appointments (calendar), tracking patients, and managing employee schedules.

[Screencast](https://drive.google.com/file/d/1hzWASFUaUVKxyX_oxJb33MeYaY-UOMC1/view)

# User Password Encryption

````
[HttpPost]
        public Employee PostNewEmployee([FromBody]Employee employee)
        {
            PasswordHasher<Employee> hasher = new PasswordHasher<Employee>();
            employee.Password = hasher.HashPassword(employee, employee.Password);

            Console.WriteLine(employee);
            _context.Employee.Add(employee);
            _context.SaveChanges();
            

            return employee;
        }
```` 
# User Authentication        
````
[HttpPost("verify/{username}/{password}")]
        public string VerifyPassword ( string password , string username)
        {
            var e = _context.Employee.FirstOrDefault(employee => employee.Username == username);

            PasswordHasher<Employee> hasher = new PasswordHasher<Employee>();

            var result = hasher.VerifyHashedPassword(e, e.Password, password);
            var success = result.ToString();
        }
````
# Example of Primary & Foreign Keys / Relationships
````
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
````
