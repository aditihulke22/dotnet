using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project.Models;


namespace Project.Repositories
{
    public class ProjectRepository: IProjectRepository
    {
        private tempdbContext db;

        public ProjectRepository()
        {
            db = new tempdbContext();
        }

        public List<Proj> GetAll()
        {
            return db.Proj.ToList();
        }

        public void Add(Proj p)
        {
            db.Proj.Add(p);
            db.SaveChanges();
        }

        public void Delete(int id)
        {
            Proj p = db.Proj.Find(id);
            db.Proj.Remove(p);
            db.SaveChanges();
        }
    }
}
