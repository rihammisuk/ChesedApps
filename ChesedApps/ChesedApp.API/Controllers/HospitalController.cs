using Chesed.Dtos.Hospital;
using Chesed.Dtos.Pagination;
using Chesed.Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChesedApp.API.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class HospitalController : ControllerBase
    {
        private readonly IHosital _context;

        public HospitalController(IHosital context)
        {
            _context = context;
        }


        [HttpGet("GetAllHospital")]
        public async Task<ActionResult<IEnumerable<HospitalGetDtos>>> GetAllHospital()
        {
            var result = await _context.GetList();
            return new JsonResult(result);

        }


        [HttpGet("GetHospitalByHospitalCode/{hospitalCode}")]
        public async Task<ActionResult<IEnumerable<HospitalGetDtos>>> GetHospital(string hospitalCode)
        {
            var hospital = await _context.Filter(hospitalCode);
            return new JsonResult(hospital);
        }
    }
}
