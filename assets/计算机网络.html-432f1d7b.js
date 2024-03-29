import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as s,a as i}from"./app-358ad391.js";const a={},r=i('<h2 id="https工作流程" tabindex="-1"><a class="header-anchor" href="#https工作流程" aria-hidden="true">#</a> Https工作流程</h2><ol><li>浏览器向服务器发送对称加密套件、非对称加密套件、浏览器随机数</li><li>服务器向浏览器发送对称加密套件、非对称加密套件、服务器随机数、CA证书</li><li>浏览器收到CA证书后，对CA证书进行校验，使用浏览器内置的CA公钥对CA证书的数字签名进行解密，将解密结果和CA证书中的明文内容进行比较，如果相同则可以认为这个CA证书是可信的。然后取出CA证书中的服务器公钥，用公钥加密pre-master随机数，然后发送给服务器。</li><li>这个时候浏览器和服务器都有了三个随机数，分别是浏览器随机数、服务器随机数、pre-master随机数，用这三个随机数生成对称密钥，这个对称密钥将在后续进行数据加密和解密使用。</li></ol><p>这里的数字签名采用的是非对称加密的方式，其实也可以使用不可逆加密或对称加密方式，但是使用这两种加密进行数字签名有其局限性。因为密钥是保存在服务端的，所以客户端无法对来自服务端的内容进行校验，但服务端可以对来自客户端的内容进行校验。就比如JWT令牌，服务端使用密钥签发令牌，客户端只能读取JWT中的明文部分，而客户端发起请求的时候需要带上JWT，服务端收到后会对明文内容进行加密，将加密的内容和数字签名比较，如果相同则说明这个JWT是服务端签发的。而且这里使用非对称加密是没用太大意义的，因为中间人可以伪造公钥和私钥，只有第三方CA机构可以解决这个中间人问题。</p><h2 id="cookie、session、token" tabindex="-1"><a class="header-anchor" href="#cookie、session、token" aria-hidden="true">#</a> Cookie、Session、Token</h2><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><p>保存在客户端。登录成功后，服务端会生成一个cookie发送给客户端，这个cookie里面记录的内容可能是用户名、手机号之类的，且经过了加密处理。客户端发起请求时候会携带上cookie，服务端收到cookie后就知道这个请求的发起人是哪个用户了。</p><blockquote><p>注意，cookie除了可以是一张身份认证方式外，也可以是一张储存方式，cookie、sessionID、token都可以被保存在cookie中。</p><p>cookie除了可以用于身份认证，也可以进行个性化广告的推送，这是发挥了cookie的储存能力，浏览器会将用户的行为记录到cookie中，cookie被发送到服务端后，服务端就会进行个性化的广告推送。</p></blockquote><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h3><p>在服务端和客户端都有保存数据，客户端记录了sessionID，服务端记录了sessionID、用户名、过期时间等信息。登录成功后，服务端将sessionID、用户名、过期时间等数据记录到数据库中，将sessionID返回给客户端，这个sessionID是被进行了加密处理的，这样可以方式sessionID被伪造。客户端之后对同一个服务器进行请求时会包含该sessionID，服务器收到之后更加sessionID从数据库中取出用户信息，继续业务操作。</p><blockquote><p>Session ID 的安全性问题，不能让它被恶意攻击者轻易获取，那么就不能产生一个容易被猜到的 Session ID 值。此外，还需要经常重新生成 Session ID。在对安全性要求极高的场景下，例如转账等操作，除了使用 Session 管理用户状态之外，还需要对用户进行重新验证，比如重新输入密码，或者使用短信验证码等方式。</p></blockquote><blockquote><p>如果客户端的浏览器禁用了Cookie，会使用一种叫做URL重写的技术来进行会话跟踪，即每次HTTP交互，URL后面都会被附加上一个诸如sid=xxxxx这样的参数，服务端据此来识别用户，这样就可以帮用户完成诸如用户名等信息自动填入的操作了。</p></blockquote><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h3><p>保存在客户端，相比cookie，最大的区别是引入了数字签名。相比session，最大的区别是将用户名、过期时间等信息保存到了token中。</p><blockquote><p>JWT如果被泄漏了，其他人就可以在JWT有效期内利用JWT伪造请求，但这个是建立在JWT被泄漏的前提下。对于使用了HTTPS协议的网站，因为中间传输过程加密，且有CA机构进行公钥认证，所以无法从中间进行截获，所以网络传输过程是安全的。但是，在终端如果有恶意程序获取JWT，那就不安全了，网络只负责安全地将信息传输到用户手中，但到了用户手上就不安全了。</p></blockquote><h2 id="防sql注入手段" tabindex="-1"><a class="header-anchor" href="#防sql注入手段" aria-hidden="true">#</a> 防SQL注入手段</h2><p>前端</p><ol><li>有效性检验，如手机号要11个数字</li><li>限制字符串输入的长度</li></ol><p>后端</p><ol><li>有效性检验</li><li>限制字符串输入的长度</li><li>不用拼接SQL字符串</li></ol><blockquote><p>mybatis中的#和$的区别：</p><p>1、#将传入的数据都当成一个字符串，会对自动传入的数据加一个双引号。<br> 如：where username=#{username}，如果传入的值是111,那么解析成sql时的值为where username=&quot;111&quot;, 如果传入的值是id，则解析成的sql为where username=&quot;id&quot;.　<br> 2、$将传入的数据直接显示生成在sql中。<br> 如：where username=${username}，如果传入的值是111,那么解析成sql时的值为where username=111；</p></blockquote><ol start="4"><li>使用预编译的PrepareStatement</li></ol><h2 id="osi七层模型" tabindex="-1"><a class="header-anchor" href="#osi七层模型" aria-hidden="true">#</a> OSI七层模型</h2>',22),n=[r];function t(l,c){return o(),s("div",null,n)}const k=e(a,[["render",t],["__file","计算机网络.html.vue"]]);export{k as default};
