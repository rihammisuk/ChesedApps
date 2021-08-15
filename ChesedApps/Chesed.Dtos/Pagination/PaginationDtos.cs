using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chesed.Dtos.Pagination
{
    public class PaginationDTO
    {

        public int perpage { get; set; }
        public int cacheBlockSize { get; set; }
    }
}
