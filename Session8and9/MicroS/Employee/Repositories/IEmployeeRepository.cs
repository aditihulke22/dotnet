using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Employee.Models;

namespace Employee.Repositories
{
    public interface IEmployeeRepository
    {
        public List<Emp> GetAll();

        public Emp Get(int id);

        public void Add(Emp e);

        public void Delete(int id);

        public void Update(Emp e);
    }
}
