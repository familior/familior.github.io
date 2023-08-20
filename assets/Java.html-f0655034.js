const e=JSON.parse(`{"key":"v-2c9008a5","path":"/familiar-notes/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/Java/Java.html","title":"Java学习笔记","lang":"zh-CN","frontmatter":{"title":"Java学习笔记","date":"2023-07-05T00:00:00.000Z","description":"lambda表达式 Lambda 表达式的使用前提: 必须有接口（不能是抽象类），接口中有且仅有一个需要被重写的抽象方法。 必须支持上下文推导，要能够推导出来 Lambda 表达式表示的是哪个接口中的内容，也就是说将lambda表达式赋值或传递给接口类型的参数时，需要能唯一确认重写的接口的抽象方法。 public class LambdaTest { final static String hello = \\"Hello, \\"; private static String goodbye = \\"Goodbye, \\"; public static void main(String[] args) { \\t//被实现的抽象接口 \\tinterface GreetingMessage { \\tvoid sayMessage(String message); \\t} \\t//第一个lambda GreetingMessage message1 = (String message) -&gt; System.out.println(hello + message); //第一个的匿名内部类全写 GreetingMessage message1 = new GreetingMessage(){ \\t@Override \\tvoid sayMessage(String message){ \\t\\tSystem.out.println(hello + message); \\t} } //第二个lambda GreetingMessage message2 = (message) -&gt; { //goodbye = \\"the time is late, I'd go now, goodbye\\"; goodbye += \\"the time is late, I'd go now, \\"; System.out.println(goodbye + message); }; message1.sayMessage(\\"张三\\"); message2.sayMessage(\\"李四\\"); } }","head":[["meta",{"property":"og:url","content":"https://familior.github.io/familiar-notes/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/Java/Java.html"}],["meta",{"property":"og:site_name","content":"Familiarたん"}],["meta",{"property":"og:title","content":"Java学习笔记"}],["meta",{"property":"og:description","content":"lambda表达式 Lambda 表达式的使用前提: 必须有接口（不能是抽象类），接口中有且仅有一个需要被重写的抽象方法。 必须支持上下文推导，要能够推导出来 Lambda 表达式表示的是哪个接口中的内容，也就是说将lambda表达式赋值或传递给接口类型的参数时，需要能唯一确认重写的接口的抽象方法。 public class LambdaTest { final static String hello = \\"Hello, \\"; private static String goodbye = \\"Goodbye, \\"; public static void main(String[] args) { \\t//被实现的抽象接口 \\tinterface GreetingMessage { \\tvoid sayMessage(String message); \\t} \\t//第一个lambda GreetingMessage message1 = (String message) -&gt; System.out.println(hello + message); //第一个的匿名内部类全写 GreetingMessage message1 = new GreetingMessage(){ \\t@Override \\tvoid sayMessage(String message){ \\t\\tSystem.out.println(hello + message); \\t} } //第二个lambda GreetingMessage message2 = (message) -&gt; { //goodbye = \\"the time is late, I'd go now, goodbye\\"; goodbye += \\"the time is late, I'd go now, \\"; System.out.println(goodbye + message); }; message1.sayMessage(\\"张三\\"); message2.sayMessage(\\"李四\\"); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Familiar"}],["meta",{"property":"article:published_time","content":"2023-07-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java学习笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Familiar\\",\\"url\\":\\"https://github.com/Familior\\"}]}"]]},"headers":[{"level":2,"title":"lambda表达式","slug":"lambda表达式","link":"#lambda表达式","children":[]},{"level":2,"title":"stream类","slug":"stream类","link":"#stream类","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.78,"words":233},"filePathRelative":"familiar-notes/学习笔记/Java/Java.md","localizedDate":"2023年7月5日","excerpt":"<h2> lambda表达式</h2>\\n<p>Lambda 表达式的使用前提:</p>\\n<ul>\\n<li>必须有接口（不能是抽象类），接口中有且仅有一个需要被重写的抽象方法。</li>\\n<li>必须支持上下文推导，要能够推导出来 Lambda 表达式表示的是哪个接口中的内容，也就是说将lambda表达式赋值或传递给接口类型的参数时，需要能唯一确认重写的接口的抽象方法。</li>\\n</ul>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>public class LambdaTest {\\n    final static String hello = \\"Hello, \\";\\n    private static String goodbye = \\"Goodbye, \\";\\n    \\n    public static void main(String[] args) {\\n    \\n    \\t//被实现的抽象接口\\n    \\tinterface GreetingMessage {\\n        \\tvoid sayMessage(String message);\\n    \\t}\\n    \\n    \\n    \\t//第一个lambda\\n        GreetingMessage message1 = (String message) -&gt;\\n        System.out.println(hello + message);\\n        \\n        //第一个的匿名内部类全写\\n        GreetingMessage message1 = new GreetingMessage(){\\n        \\t@Override\\n        \\tvoid sayMessage(String message){\\n        \\t\\tSystem.out.println(hello + message);\\n        \\t}\\n        }\\n        \\n        \\n        //第二个lambda\\n        GreetingMessage message2 = (message) -&gt;\\n        {\\n            //goodbye = \\"the time is late, I'd go now, goodbye\\";\\n            goodbye += \\"the time is late, I'd go now, \\";\\n            System.out.println(goodbye + message);\\n        };\\n        \\n        message1.sayMessage(\\"张三\\");\\n        message2.sayMessage(\\"李四\\");\\n    }\\n    \\n\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};