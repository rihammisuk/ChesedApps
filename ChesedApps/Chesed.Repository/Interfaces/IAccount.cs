using Chesed.Dtos.Auth;
using Chesed.Dtos.Pagination;
using ChesedApp.Data.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chesed.Repository.Interfaces
{
    public interface IAccount
    {
        Task RegisterUser(UserForRegistrationDto userForRegistration);
        Task Login(UserForAuthenticationDto userForAuthentication);
        
    }
}
