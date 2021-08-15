

using AutoMapper;
using Chesed.Dtos.Hospital;
using Chesed.Dtos.Pagination;
using Chesed.Repository.Interfaces;
using ChesedApp.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chesed.Repository.Repo
{
    public class HospitalRepo : IHosital
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public HospitalRepo( ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<HospitalGetDtos>> Filter([FromBody] string HospitalCode)
        {
            var hospitalsQueryable = _context.Hospitals.AsQueryable();
            
            if (!string.IsNullOrEmpty(HospitalCode))
            {
                hospitalsQueryable = hospitalsQueryable.Where(
                   x => x.HospitalCode.Contains(HospitalCode));
            }
            var hospitals = await hospitalsQueryable.OrderBy(x => x.HospitalCode).ToListAsync();
            //var hospitals = await hospitalsQueryable.OrderBy(x => x.HospitalCode)
            //    .Skip((data.PaginationDTO.Page - 1) * data.PaginationDTO.RecordsPerPage)
            //    .Take(data.PaginationDTO.RecordsPerPage)
            //    .ToListAsync();
            return _mapper.Map<List<HospitalGetDtos>>(hospitals);
        }


        public async Task<IEnumerable<HospitalGetDtos>> GetList()
       {
            var hospitals = await _context.Hospitals.OrderByDescending(x => x.HospitalCode).ToListAsync();
            var getAllHospital = _mapper.Map<List<HospitalGetDtos>>(hospitals);
            return getAllHospital;
        }

       
    }
}
