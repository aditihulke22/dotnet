using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project.Models;

namespace Project.Repositories
{
    public interface IProjectRepository
    {
        public List<Proj> GetAll();

        public void Add(Proj e);

        public void Delete(int id);
    }
}
