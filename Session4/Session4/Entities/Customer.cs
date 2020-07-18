using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Session4.Entities
{
    public class Customer
    {
        [Key]
        [StringLength(5)]
        public string Cid { get; set; }
        
        public string Cname { get; set; }

        public string Email { get; set; }

        public string MobileNo { get; set; }

        public string city { get; set; }
    }
}
