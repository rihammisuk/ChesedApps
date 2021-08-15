using Chesed.Dtos.Hospital;
using Chesed.Dtos.Pagination;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chesed.Repository.Interfaces
{
    public interface IHosital
    {
        Task<IEnumerable<HospitalGetDtos>> GetList();
        Task<IEnumerable<HospitalGetDtos>> Filter(string data);
    }
}
