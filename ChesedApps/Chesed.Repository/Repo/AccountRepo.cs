using AutoMapper;
using Chesed.Dtos.Auth;
using Chesed.Repository.Interfaces;
using ChesedApp.Data.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chesed.Repository.Repo
{
    public class AccountRepo : IAccount
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        public AccountRepo(UserManager<User> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        public Task Login(UserForAuthenticationDto userForAuthentication)
        {
            throw new NotImplementedException();
        }

        public Task RegisterUser(UserForRegistrationDto userForRegistration)
        {
            throw new NotImplementedException();
        }
    }
}
