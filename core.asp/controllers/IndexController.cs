using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Posts.Controllers
{
    [Route("api/[controller]")]
    public class IndexController: Controller 
    {
        [HttpGet]
        public string[] Get()
        {
            return new string[] { "you", "wot" };
        }
    }
}