using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Employee.Repositories;
using Employee.Models;

namespace Employee.Repositories
{
    public class EmployeeRepository: IEmployeeRepository
    {
        private tempdbContext db;

        public EmployeeRepository()
        {
            db = new tempdbContext();
        }

        public List<Emp> GetAll()
        {
            return db.Emp.ToList();
        }

        public Emp Get(int id)
        {
            return db.Emp.SingleOrDefault(e => e.Eid == id);
        }

        public void Add(Emp e)
        {
            db.Emp.Add(e);
            db.SaveChanges();
        }

        public void Update(Emp e)
        {
            db.Emp.Update(e);
            db.SaveChanges();
        }

        public void Delete(int id)
        {
            Emp e = db.Emp.Find(id);
            db.Emp.Remove(e);
            db.SaveChanges();
        }

    }
}
