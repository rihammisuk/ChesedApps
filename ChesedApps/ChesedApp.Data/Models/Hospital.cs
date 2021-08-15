using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChesedApp.Data.Models
{
    public class Hospital
    {
        public int Id { get; set; }
        public string HospitalCode { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Zip { get; set; }
        public string Area { get; set; }
        public string MainPhone { get; set; }
        public string ErPhone { get; set; }
        public string ContactPerson { get; set; }
    }
}
