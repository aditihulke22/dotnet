using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Session3.Models
{
    public class Product
    {
        [Required(ErrorMessage = "Product ID required.")]
        public string Pid { get; set; }

        [Required(ErrorMessage = "Product Name required.")]
        public string Pname { get; set; }

        [Required(ErrorMessage = "Product price required.")]
        public string Price { get; set; }

        [Required(ErrorMessage = "Product stock required.")]
        public string Stock { get; set; }
    }
}
