using System;
using System.Collections.Generic;

namespace Project.Models
{
    public partial class Proj
    {
        public Proj()
        {
            Emp = new HashSet<Emp>();
        }

        public int Pid { get; set; }
        public string Pname { get; set; }

        public virtual ICollection<Emp> Emp { get; set; }
    }
}
