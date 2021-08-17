import{o as n,c as s,a,b as t,e as p,d as e}from"./app.144e7b1a.js";const o='{"title":"Writing your first scenario","description":"","frontmatter":"title:Scenario Testing editLink:true","headers":[{"level":2,"title":"Writing your first scenario","slug":"writing-your-first-scenario"},{"level":2,"title":"Testing Hello, World","slug":"testing-hello-world"}],"relativePath":"scenarios/index.md","lastUpdated":1629228318256}',c={},l=t("h2",{id:"writing-your-first-scenario"},[t("a",{class:"header-anchor",href:"#writing-your-first-scenario","aria-hidden":"true"},"#"),p(" Writing your first scenario")],-1),u=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,"Alba is not directly coupled to MVC Core in any way and executes requests through your application without any knowledge of the middleware, controllers, or the other mechanisms that may be handling the request in your application.")],-1),i=t("p",null,"For the purpose of this sample, let's say you have a very simple web service application with the following controller endpoint:",-1),r=e('<p><a id="snippet-sample_mathcontroller"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">OperationType</span>\n<span class="token punctuation">{</span>\n    Add<span class="token punctuation">,</span>\n    Subtract<span class="token punctuation">,</span>\n    Multiply<span class="token punctuation">,</span>\n    Divide\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperationRequest</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">OperationType</span> Type <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> One <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Two <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperationResult</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Answer <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Method <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;[controller]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Controller</span></span>\n<span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;add/{one}/{two}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">OperationResult</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> one<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> two<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperationResult</span>\n        <span class="token punctuation">{</span>\n            Answer <span class="token operator">=</span> one <span class="token operator">+</span> two\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPut</span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">OperationResult</span> <span class="token function">Put</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">FromBody</span></span><span class="token punctuation">]</span><span class="token class-name">OperationRequest</span> request<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">switch</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">case</span> OperationType<span class="token punctuation">.</span>Add<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperationResult</span><span class="token punctuation">{</span>Answer <span class="token operator">=</span> request<span class="token punctuation">.</span>One <span class="token operator">+</span> request<span class="token punctuation">.</span>Two<span class="token punctuation">,</span> Method <span class="token operator">=</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n            \n            <span class="token keyword">case</span> OperationType<span class="token punctuation">.</span>Multiply<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperationResult</span><span class="token punctuation">{</span>Answer <span class="token operator">=</span> request<span class="token punctuation">.</span>One <span class="token operator">*</span> request<span class="token punctuation">.</span>Two<span class="token punctuation">,</span> Method <span class="token operator">=</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n            \n            <span class="token keyword">case</span> OperationType<span class="token punctuation">.</span>Subtract<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperationResult</span><span class="token punctuation">{</span>Answer <span class="token operator">=</span> request<span class="token punctuation">.</span>One <span class="token operator">-</span> request<span class="token punctuation">.</span>Two<span class="token punctuation">,</span> Method <span class="token operator">=</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n            \n            <span class="token keyword">default</span><span class="token punctuation">:</span>\n                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentOutOfRangeException</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>Type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">OperationResult</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">FromBody</span></span><span class="token punctuation">]</span><span class="token class-name">OperationRequest</span> request<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">switch</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">case</span> OperationType<span class="token punctuation">.</span>Add<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperationResult</span><span class="token punctuation">{</span>Answer <span class="token operator">=</span> request<span class="token punctuation">.</span>One <span class="token operator">+</span> request<span class="token punctuation">.</span>Two<span class="token punctuation">,</span> Method <span class="token operator">=</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n                \n            <span class="token keyword">case</span> OperationType<span class="token punctuation">.</span>Multiply<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperationResult</span><span class="token punctuation">{</span>Answer <span class="token operator">=</span> request<span class="token punctuation">.</span>One <span class="token operator">*</span> request<span class="token punctuation">.</span>Two<span class="token punctuation">,</span> Method <span class="token operator">=</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n            \n            <span class="token keyword">case</span> OperationType<span class="token punctuation">.</span>Subtract<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperationResult</span><span class="token punctuation">{</span>Answer <span class="token operator">=</span> request<span class="token punctuation">.</span>One <span class="token operator">-</span> request<span class="token punctuation">.</span>Two<span class="token punctuation">,</span> Method <span class="token operator">=</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n            \n            <span class="token keyword">default</span><span class="token punctuation">:</span>\n                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentOutOfRangeException</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>Type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/WebApp/Controllers/MathController.cs#L6-L79" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_mathcontroller" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Back in your test project, the easiest, and probably most common, usage of Alba is to send and verify JSON message bodies to <code>Controller</code> actions. To that end, let&#39;s test the GET method in that controller above by passing a url and verifying the results:</p>',4),k=e('<p><a id="snippet-sample_get_json"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">get_happy_path</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> Program<span class="token punctuation">.</span><span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Empty</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> system <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AlbaHost</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// Issue a request, and check the results</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> system<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetAsJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>OperationResult<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/math/add/3/4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        \n    result<span class="token punctuation">.</span>Answer<span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/using_json_helpers.cs#L21-L34" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_get_json" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>So what just happened in that test? First off, the call to <code>new AlbaHost(IHostBuilder)</code> bootstraps your web application.</p><p>The call to <code>host.GetAsJson&lt;OperationResult&gt;(&quot;/math/add/3/4&quot;)</code> is performing these steps internally:</p><ol><li>Formulate an <a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httprequest?view=aspnetcore-5.0" target="_blank" rel="noopener noreferrer">HttpRequest</a> object that will be passed to the application</li><li>Executes the web request against your application</li><li>Assert in this simple use case that the response status code is <code>200 OK</code></li><li>Read the raw JSON coming off the <a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httpresponse?view=aspnetcore-5.0" target="_blank" rel="noopener noreferrer">HttpResponse</a></li><li>Deserialize the raw JSON to the requested <code>OperationResult</code> type using the Json formatter of the running application</li><li>Returns the resulting <code>OperationResult</code></li></ol><p>Alright then, let&#39;s try posting JSON in and examining the JSON out:</p>',7),d=e('<p><a id="snippet-sample_post_json_get_json"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">post_and_expect_response</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> system <span class="token operator">=</span> AlbaHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ForStartup</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>WebApp<span class="token punctuation">.</span>Startup<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperationRequest</span>\n    <span class="token punctuation">{</span>\n        Type <span class="token operator">=</span> OperationType<span class="token punctuation">.</span>Multiply<span class="token punctuation">,</span>\n        One <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>\n        Two <span class="token operator">=</span> <span class="token number">4</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> system<span class="token punctuation">.</span><span class="token function">PostJson</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&quot;/math&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Receive</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>OperationResult<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        \n    result<span class="token punctuation">.</span>Answer<span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    result<span class="token punctuation">.</span>Method<span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/using_json_helpers.cs#L36-L54" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_post_json_get_json" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>It&#39;s a little more complicated, but the same goal is realized here. Allow the test author to work in terms of the application model objects while still exercising the entire HTTP middleware stack.</p><p>Don&#39;t stop here though, Alba also gives you the ability to declaratively assert on elements of the <code>HttpResponse</code> like expected header values, status codes, and assertions against the response body. In addition, Alba provides a lot of helper facilities to work with the raw <code>HttpResponse</code> data.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>As of Alba V5, the scenario support is no longer hard coded to use Newtonsoft.Json for Json serialization and will instead use the configured Json formatters within your application. Long story short, Alba now supports applications using System.Text.Json as well as Newtonsoft.Json.</p></div><h2 id="testing-hello-world"><a class="header-anchor" href="#testing-hello-world" aria-hidden="true">#</a> Testing Hello, World</h2><p>Now let&#39;s say that you built the obligatory hello world application for <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core shown below:</p>',8),h=e('<p><a id="snippet-sample_helloworldapp"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Startup</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IApplicationBuilder</span> builder<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        builder<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>context <span class="token operator">=&gt;</span>\n        <span class="token punctuation">{</span>\n            context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span><span class="token function">WriteAsync</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Quickstart.cs#L215-L227" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_helloworldapp" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>We can now use Alba to declare an integration test for our Hello, World application within an <a href="http://xunit.github.io/" target="_blank" rel="noopener noreferrer">xUnit</a> testing project:</p>',4),w=e('<p><a id="snippet-sample_should_say_hello_world"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">should_say_hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> host <span class="token operator">=</span> <span class="token keyword">await</span> Program\n        <span class="token punctuation">.</span><span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Empty</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        \n        <span class="token comment">// This extension method is just a shorter version</span>\n        <span class="token comment">// of new AlbaHost(builder)</span>\n        <span class="token punctuation">.</span><span class="token function">StartAlbaAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// This runs an HTTP request and makes an assertion</span>\n    <span class="token comment">// about the expected content of the response</span>\n    <span class="token keyword">await</span> host<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        _<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        _<span class="token punctuation">.</span><span class="token function">ContentShouldBe</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        _<span class="token punctuation">.</span><span class="token function">StatusCodeShouldBeOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Quickstart.cs#L30-L50" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_should_say_hello_world" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>The sample up above bootstraps the application defined by our <code>Startup</code> and executes a <em>Scenario</em> against the running system. A <em>scenario</em> in Alba defines how the HTTP request should be constructed (the request body, headers, url) and optionally gives you the ability to express assertions against the expected HTTP response.</p><p>Alba comes with plenty of helpers in its <a href="https://www.martinfowler.com/bliki/FluentInterface.html" target="_blank" rel="noopener noreferrer">fluent interface</a> to work with the <code>HttpRequest</code> and <code>HttpResponse</code>, or you can work directly with the underlying <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core objects:</p>',5),y=e('<p><a id="snippet-sample_should_say_hello_world_with_raw_objects"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">should_say_hello_world_with_raw_objects</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> system <span class="token operator">=</span> AlbaHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ForStartup</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> system<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n        <span class="token punctuation">{</span>\n            _<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            _<span class="token punctuation">.</span><span class="token function">StatusCodeShouldBeOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        response<span class="token punctuation">.</span><span class="token function">ReadAsText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// or you can go straight at the HttpContext</span>\n        <span class="token class-name">Stream</span> responseStream <span class="token operator">=</span> response<span class="token punctuation">.</span>Context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Body<span class="token punctuation">;</span>\n        <span class="token comment">// do assertions directly on the responseStream</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Quickstart.cs#L88-L108" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_should_say_hello_world_with_raw_objects" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',3);c.render=function(t,p,e,o,c,m){return n(),s("div",null,[l,u,i,a(" snippet: sample_MathController "),r,a(" snippet: sample_get_json "),k,a(" snippet: sample_post_json_get_json "),d,a(" snippet: sample_HelloWorldApp "),h,a(" snippet: sample_should_say_hello_world "),w,a(" snippet: sample_should_say_hello_world_with_raw_objects "),y])};export{o as __pageData,c as default};
