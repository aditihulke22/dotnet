using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Employee.Models;
using Employee.Repositories;

namespace Employee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private IEmployeeRepository repo;

        public EmployeeController(IEmployeeRepository _repo)
        {
            repo = _repo;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetEmployees()
        {
            List<Emp> list = repo.GetAll();
            return Ok(list);
        }

        [HttpGet]
        [Route("GetByID/{id}")]
        public IActionResult Get(int id)
        {
            Emp e = repo.Get(id);
            if (e == null)
                return NotFound("Invalid ID");
            else
                return Ok(e);
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Post(Emp e)
        {
            repo.Add(e);
            return Ok("Record Added.");
        }

        [HttpPut]
        [Route("Update")]
        public IActionResult Put(Emp e)
        {
            repo.Update(e);
            return Ok("Record updated.");
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            repo.Delete(id);
            return Ok("Record deleted");
        }
    }
}
