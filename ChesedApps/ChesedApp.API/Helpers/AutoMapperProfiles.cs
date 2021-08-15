using AutoMapper;
using Chesed.Dtos.Auth;
using Chesed.Dtos.Hospital;
using ChesedApp.Data.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChesedApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Hospital, HospitalGetDtos>().ReverseMap();
            CreateMap<UserForRegistrationDto, User>()
       .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
        }
    }
}
