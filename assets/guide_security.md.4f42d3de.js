import{o as n,c as s,a,d as t}from"./app.144e7b1a.js";const e='{"title":"Stub out all authentication","description":"","frontmatter":"title:Security Extensions editLink:true","headers":[{"level":2,"title":"Stub out all authentication","slug":"stub-out-all-authentication"},{"level":2,"title":"Stub out JWT authentication","slug":"stub-out-jwt-authentication"},{"level":2,"title":"Integration with JWT Authentication","slug":"integration-with-jwt-authentication"},{"level":2,"title":"Windows Authentication","slug":"windows-authentication"}],"relativePath":"guide/security.md","lastUpdated":1629228318240}',o={},p=t('<div class="tip custom-block"><p class="custom-block-title">warning</p><p>Alba 3.0+ removed the previous, built in support for windows authentication.</p></div><h2 id="stub-out-all-authentication"><a class="header-anchor" href="#stub-out-all-authentication" aria-hidden="true">#</a> Stub out all authentication</h2><p>To just stub out all possible authentication inside your <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core system in testing, you can use the new <code>AuthenticationStub</code> to automatically authenticate every request and build out a <code>ClaimsPrincipal</code> to your specification.</p><p>Here&#39;s a sample of bootstrapping an <code>AlbaHost</code> with the <code>AuthenticationStub</code>:</p>',4),c=t('<p><a id="snippet-sample_bootstrapping_with_stub_extension"></a></p><div class="language-cs"><pre><code><span class="token comment">// This is calling your real web service&#39;s configuration</span>\n<span class="token class-name"><span class="token keyword">var</span></span> hostBuilder <span class="token operator">=</span> WebAppSecuredWithJwt<span class="token punctuation">.</span>Program\n    <span class="token punctuation">.</span><span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This is a new Alba v5 extension that can &quot;stub&quot; out</span>\n<span class="token comment">// JWT token authentication</span>\n<span class="token class-name"><span class="token keyword">var</span></span> securityStub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AuthenticationStub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">With</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">With</span><span class="token punctuation">(</span>JwtRegisteredClaimNames<span class="token punctuation">.</span>Email<span class="token punctuation">,</span> <span class="token string">&quot;guy@company.com&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">WithName</span><span class="token punctuation">(</span><span class="token string">&quot;jeremy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// AlbaHost was &quot;SystemUnderTest&quot; in previous versions of</span>\n<span class="token comment">// Alba</span>\ntheHost <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AlbaHost</span><span class="token punctuation">(</span>hostBuilder<span class="token punctuation">,</span> securityStub<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Security/web_api_authentication_with_stub.cs#L21-L38" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_bootstrapping_with_stub_extension" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>When you need to test scenarios with different claims than the &quot;baseline&quot; claims defined on the <code>AuthenticationStub</code> object you created in the <code>AlbaHost</code> setup, you can use the <code>WithClaim()</code> method as shown below to add additional claims to the principal for only one scenario as shown below:</p>',4),i=t('<p><a id="snippet-sample_specify_specific_claims"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">can_modify_claims_per_scenario</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Numbers</span>\n    <span class="token punctuation">{</span>\n        Values <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> theHost<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// This is a custom claim that would only be used for the </span>\n        <span class="token comment">// JWT token in this individual test</span>\n        x<span class="token punctuation">.</span><span class="token function">WithClaim</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Claim</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        x<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">Json</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/math&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        x<span class="token punctuation">.</span><span class="token function">StatusCodeShouldBeOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name"><span class="token keyword">var</span></span> principal <span class="token operator">=</span> response<span class="token punctuation">.</span>Context<span class="token punctuation">.</span>User<span class="token punctuation">;</span>\n    principal<span class="token punctuation">.</span><span class="token function">ShouldNotBeNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    principal<span class="token punctuation">.</span>Claims<span class="token punctuation">.</span><span class="token function">Single</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>Type <span class="token operator">==</span> <span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span>Value<span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token string">&quot;green&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Security/web_api_authentication_with_stub.cs#L91-L117" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_specify_specific_claims" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="stub-out-jwt-authentication"><a class="header-anchor" href="#stub-out-jwt-authentication" aria-hidden="true">#</a> Stub out JWT authentication</h2><p>If you have an application that uses JWT, bearer tokens as your primary means of authentication, you can use the new <code>JwtSecurityStub</code> to automatically add a valid JWT token string to the HTTP <code>Authorization</code> header before any scenarios are executed. Similar to the <code>AuthenticationStub</code>, the <code>JwtSecurityStub</code> allows you to specify a baseline set of claims that should be in the JWT token:</p>',5),u=t('<p><a id="snippet-sample_setup_jwt_stub"></a></p><div class="language-cs"><pre><code><span class="token comment">// This is calling your real web service&#39;s configuration</span>\n<span class="token class-name"><span class="token keyword">var</span></span> hostBuilder <span class="token operator">=</span> WebAppSecuredWithJwt<span class="token punctuation">.</span>Program<span class="token punctuation">.</span><span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This is a new Alba v5 extension that can &quot;stub&quot; out</span>\n<span class="token comment">// JWT token authentication</span>\n<span class="token class-name"><span class="token keyword">var</span></span> jwtSecurityStub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JwtSecurityStub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">With</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">With</span><span class="token punctuation">(</span>JwtRegisteredClaimNames<span class="token punctuation">.</span>Email<span class="token punctuation">,</span> <span class="token string">&quot;guy@company.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// AlbaHost was &quot;SystemUnderTest&quot; in previous versions of</span>\n<span class="token comment">// Alba</span>\ntheHost <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AlbaHost</span><span class="token punctuation">(</span>hostBuilder<span class="token punctuation">,</span> jwtSecurityStub<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Security/web_api_authentication_with_jwt.cs#L21-L36" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_setup_jwt_stub" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>The <code>JwtSecurityStub</code> reaches into your application&#39;s configuration to find the security signing key for JWT tokens, and uses that key to sign the keys that it generates. The <code>JwtSecurityStub</code> will also disable any callouts to validate the JWT tokens with a real Open Id Connect server <strong>so you can test your service without an external token identity server running.</strong></p><p>The <code>JwtSecurityStub</code> will also honor the <code>WithClaim()</code> method to add additional claims on a scenario by scenario basis as shown in the previous section.</p><h2 id="integration-with-jwt-authentication"><a class="header-anchor" href="#integration-with-jwt-authentication" aria-hidden="true">#</a> Integration with JWT Authentication</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>All of these extensions depend on the <code>JwtBearerOptions</code> configuration from your application. The extensions will use the <code>Authority</code> property of <code>JwtBearerOptions</code> for the Url of the OIDC token server.</p></div><p>If you want to test your <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core web services that are authenticated by an <a href="https://openid.net/connect/" target="_blank" rel="noopener noreferrer">Open Id Connect</a> workflow <strong>and</strong> you also want to be testing through the authentication from the real OIDC identity server, Alba v5 comes with new extensions to automatically fetch and apply JWT tokens to scenario tests.</p><p>To use the OIDC <a href="https://auth0.com/docs/flows/client-credentials-flow" target="_blank" rel="noopener noreferrer">Client Credentials workflow</a>, you can use the <code>OpenConnectClientCredentials</code> extension:</p>',9),l=t('<p><a id="snippet-sample_openconnectclientcredentials"></a></p><div class="language-cs"><pre><code>oidc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenConnectClientCredentials</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// These three properties are mandatory, and</span>\n    <span class="token comment">// would refer to matching configuration in your</span>\n    <span class="token comment">// OIDC server</span>\n    ClientId <span class="token operator">=</span> Config<span class="token punctuation">.</span>ClientId<span class="token punctuation">,</span>\n    ClientSecret <span class="token operator">=</span> Config<span class="token punctuation">.</span>ClientSecret<span class="token punctuation">,</span>\n    Scope <span class="token operator">=</span> Config<span class="token punctuation">.</span>ApiScope\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ntheHost <span class="token operator">=</span> WebAppSecuredWithJwt<span class="token punctuation">.</span>Program<span class="token punctuation">.</span><span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">StartAlba</span><span class="token punctuation">(</span>oidc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Security/OpenConnectClientCredentialsTests.cs#L23-L38" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_openconnectclientcredentials" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>To use the OIDC <a href="https://docs.identityserver.io/en/release/quickstarts/2_resource_owner_passwords.html" target="_blank" rel="noopener noreferrer">Resource Owner Password Grant</a> workflow, you can use the <code>OpenConnectUserPassword</code> extension:</p>',4),r=t('<p><a id="snippet-sample_applying_openconnectuserpassword"></a></p><div class="language-cs"><pre><code>oidc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenConnectUserPassword</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// All of these properties are mandatory</span>\n    ClientId <span class="token operator">=</span> Config<span class="token punctuation">.</span>ClientId<span class="token punctuation">,</span>\n    ClientSecret <span class="token operator">=</span> Config<span class="token punctuation">.</span>ClientSecret<span class="token punctuation">,</span>\n    UserName <span class="token operator">=</span> <span class="token string">&quot;alice&quot;</span><span class="token punctuation">,</span>\n    Password <span class="token operator">=</span> <span class="token string">&quot;alice&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ntheHost <span class="token operator">=</span> WebAppSecuredWithJwt<span class="token punctuation">.</span>Program<span class="token punctuation">.</span><span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">StartAlba</span><span class="token punctuation">(</span>oidc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Security/OpenConnectUserPasswordTests.cs#L23-L37" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_applying_openconnectuserpassword" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>With the <code>OpenConnectUserPassword</code> extension, you can also use a different user name and password for a single scenario with the <code>Scenario.UserAndPasswordIs(user, password)</code> extension method as shown below:</p>',4),k=t('<p><a id="snippet-sample_override_user_password"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">post_to_a_secured_endpoint_with_jwt_with_overridden_user_and_password</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Building the input body</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Numbers</span>\n    <span class="token punctuation">{</span>\n        Values <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> theHost<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// Alba deals with Json serialization for us</span>\n        x<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">Json</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/math&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        \n        <span class="token comment">// Override the user credentials for just this scenario</span>\n        x<span class="token punctuation">.</span><span class="token function">UserAndPasswordIs</span><span class="token punctuation">(</span><span class="token string">&quot;bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bob&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        \n        <span class="token comment">// Enforce that the HTTP Status Code is 200 Ok</span>\n        x<span class="token punctuation">.</span><span class="token function">StatusCodeShouldBeOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name"><span class="token keyword">var</span></span> output <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ReadAsJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Result<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    output<span class="token punctuation">.</span>Sum<span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    output<span class="token punctuation">.</span>Product<span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name"><span class="token keyword">var</span></span> user <span class="token operator">=</span> response<span class="token punctuation">.</span>Context<span class="token punctuation">.</span>User<span class="token punctuation">;</span>\n    user<span class="token punctuation">.</span><span class="token function">FindFirst</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value<span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token string">&quot;Bob Smith&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Security/OpenConnectUserPasswordTests.cs#L146-L177" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_override_user_password" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="windows-authentication"><a class="header-anchor" href="#windows-authentication" aria-hidden="true">#</a> Windows Authentication</h2><p>To add support for windows authentication in your Alba specifications, we recommend checking out the <a href="https://github.com/IntelliTect/AspNetCore.TestHost.WindowsAuth" target="_blank" rel="noopener noreferrer">AspNetCore.TestHost.WindowsAuth</a> project.</p>',5);o.render=function(t,e,o,d,h,m){return n(),s("div",null,[p,a(" snippet: sample_bootstrapping_with_stub_extension "),c,a(" snippet: sample_specify_specific_claims "),i,a(" snippet: sample_setup_jwt_stub "),u,a(" snippet: sample_OpenConnectClientCredentials "),l,a(" snippet: sample_applying_OpenConnectUserPassword "),r,a(" snippet: sample_override_user_password "),k])};export{e as __pageData,o as default};
