﻿using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;

namespace Alba
{
    public interface ISystemUnderTest : IDisposable
    {
        // Have it return an IApplicationBuilder. Makes many, many things easier

        // Other things?
        /*
            1.) Url resolution?
            2.) Set up defaults in the StubHttpContext?





*/

        IUrlLookup Urls { get; set; }

        HttpContext CreateContext();


        // Might be smarter to keep a hold of the RequestDelegate
        IFeatureCollection Features { get; }
        IServiceProvider Services { get; }
        RequestDelegate Invoker { get; }


        Task BeforeEach(HttpContext context);
        Task AfterEach(HttpContext context);

        T FromJson<T>(string json);
        string ToJson(object target);
    }
}