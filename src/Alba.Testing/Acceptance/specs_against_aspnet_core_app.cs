﻿using WebApp;
using Xunit;

namespace Alba.Testing.Acceptance
{
    public class specs_against_aspnet_core_app
    {
        [Fact]
        public void bootstrap_and_execute_a_request_through_an_aspnet_core_app()
        {
            using (var system = SystemUnderTest.ForStartup<Startup>())
            {
                
            }
        }
    }
}