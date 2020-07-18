using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.Models;
using Project.Repositories;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ProjectController : ControllerBase
    {
        private IProjectRepository repo;

        public ProjectController(IProjectRepository _repo)
        {
            repo = _repo;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetProjects()
        {
            List<Proj> list = repo.GetAll();
            return Ok(list);
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Post(Proj p)
        {
            repo.Add(p);
            return Ok("Record Added.");
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
