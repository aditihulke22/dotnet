using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Session3.Models;

namespace Session3.Controllers
{
    public class ProductController : Controller
    {
        public static List<Product> l = new List<Product>()
        {
            new Product() { Pid = "1", Pname = "pen", Price = "10", Stock = "100"}
        };

        public IActionResult Index()
        {
            return View(l);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Product p)
        {
            if (ModelState.IsValid)
            {
                l.Add(p);
                return RedirectToAction("Index");
            }
            else
            {
                return View("Error");
            }
        }
    }
}
