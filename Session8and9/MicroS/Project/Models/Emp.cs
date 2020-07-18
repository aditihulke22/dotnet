using System;
using System.Collections.Generic;

namespace Project.Models
{
    public partial class Emp
    {
        public int Eid { get; set; }
        public string Ename { get; set; }
        public int Pid { get; set; }

        public virtual Proj P { get; set; }
    }
}
