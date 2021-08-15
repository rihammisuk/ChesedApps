using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chesed.Repository.Interfaces
{
    public interface IGenericInterface<T>
    where T : class
    {
        //Task<T> GetItem(int id);

        Task<IEnumerable<T>> GetList();
        Task<IEnumerable<T>> Filter(string hospitalCode);

        //Task<T> Edit(T data);

        //Task<T> Add(T data);

        //Task<T> Remove(int id);
    }
}
