import{_ as e,c as t,o as a,a as r}from"./app.cddc3ad1.js";const o="/alba/assets/ClassDiagram.drawio.4e6d0bc2.png",b=JSON.parse('{"title":"History & Architecture","description":"","frontmatter":{},"headers":[],"relativePath":"guide/history.md"}'),n={name:"guide/history.md"},s=r('<h1 id="history-architecture" tabindex="-1">History &amp; Architecture <a class="header-anchor" href="#history-architecture" aria-hidden="true">#</a></h1><p>What is now Alba was originally created in the early 2010&#39;s as a mechanism to test the content negotiation features in <a href="https://fubumvc.github.io" target="_blank" rel="noreferrer">FubuMVC</a>, an alternative web application framework that predates ASP.NET Core. We needed to run the entire web handling stack including all the middleware and HTTP endpoints just as the application would be configured. The <a href="https://jeremydmiller.com/2015/11/05/testing-http-handlers-with-no-web-server-in-sight/" target="_blank" rel="noreferrer">early <em>scenario</em> support in FubuMVC</a> was a way to run HTTP requests end to end completely in memory and make declarative checks on expected HTTP behavior.</p><p>As FubuMVC wound down as a project, the scenario testing code was first extracted out into its own library called <em>Alba</em>, then ported to depend on an <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/owin?view=aspnetcore-5.0" target="_blank" rel="noreferrer">OWIN-based</a> execution pipeline. And then again with the advent of ASP.NET Core and the deprecation of OWIN, Alba was again re-wired to use the newer HTTP abstractions from the ASP.NET Core <a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httpcontext?view=aspnetcore-5.0" target="_blank" rel="noreferrer">HttpContext</a> type. At this point, Alba is a value added wrapper around the <a href="https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-5.0" target="_blank" rel="noreferrer">ASP.NET Core TestServer</a>.</p><p>The <em>scenario</em> testing in Alba was inspired by the <a href="https://www.playframework.com/documentation/2.8.x/ScalaFunctionalTestingWithSpecs2" target="_blank" rel="noreferrer">testing support in the Scala PlayFramework</a>.</p><p>When using Alba, you actually bootstrap your web application in memory using either the &quot;older&quot; <a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.hostbuilder?view=dotnet-plat-ext-6.0" target="_blank" rel="noreferrer">HostBuilder model</a> or the newer <a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.testing.webapplicationfactory-1?view=aspnetcore-6.0" target="_blank" rel="noreferrer">WebApplicationFactory</a> model , then pass the root <code>IHost</code> of the running application to Alba&#39;s <code>AlbaHost</code>, which will be the entry point to using Alba in all of your integration tests.</p><p><code>AlbaHost</code> is shown in the class diagram below:</p><p><img src="'+o+'" alt="AlbaHost Class Diagram"></p><p><code>AlbaHost</code> implements the ASP.NET Core <a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.ihost?view=dotnet-plat-ext-6.0" target="_blank" rel="noreferrer">IHost</a> interface for convenience and familiarity. Internally it is tracking the actual <code>IHost</code> for your application running in memory as well as an instance of the ASP.NET Core <a href="https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-6.0" target="_blank" rel="noreferrer">TestServer</a> that will actually be used to execute HTTP requests against the application in memory.</p>',8),i=[s];function c(l,p,h,d,m,u){return a(),t("div",null,i)}const g=e(n,[["render",c]]);export{b as __pageData,g as default};