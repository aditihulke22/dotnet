using System;
using System.Collections.Generic;

namespace Employee.Models
{
    public partial class Emp
    {
        public int Eid { get; set; }
        public string Ename { get; set; }
        public int Pid { get; set; }

        public virtual Proj P { get; set; }
    }
}
