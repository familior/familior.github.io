const l=JSON.parse('{"key":"v-70913067","path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E5%A4%A7%E6%95%B0%E6%8D%AE/Spark/Spark%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"Spark学习笔记","lang":"zh-CN","frontmatter":{"title":"Spark学习笔记","date":"2023-09-10T00:00:00.000Z","description":"Spark概述 Spark是一种基于内存的快速、通用、可扩展的大数据分析计算引擎。 Spark VS Hadoop 从时间上来看: Hadoop 2006年1月，Doug Cutting加入Yahoo，领导Hadoop的开发 2008年1月，Hadoop成为Apache顶级项目 2011年，1.0正式发布 2012年3月，稳定版发布 2013年10月，发布2.X(Yarn)版本 Spark 2009年，Spark诞生于伯克利大学的AMPLab实验室 2010年，伯克利大学正式开源了Spark项目 2013年6月，Spark成为了Apache基金会下的项目 2014年2月，Spark以飞快的速度成为了Apache的顶级项目 2015年至今，Spark变得愈发火爆，大量的国内公司开始重点部署或者使用Spark","head":[["meta",{"property":"og:url","content":"https://familior.github.io/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E5%A4%A7%E6%95%B0%E6%8D%AE/Spark/Spark%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"Familiarたん"}],["meta",{"property":"og:title","content":"Spark学习笔记"}],["meta",{"property":"og:description","content":"Spark概述 Spark是一种基于内存的快速、通用、可扩展的大数据分析计算引擎。 Spark VS Hadoop 从时间上来看: Hadoop 2006年1月，Doug Cutting加入Yahoo，领导Hadoop的开发 2008年1月，Hadoop成为Apache顶级项目 2011年，1.0正式发布 2012年3月，稳定版发布 2013年10月，发布2.X(Yarn)版本 Spark 2009年，Spark诞生于伯克利大学的AMPLab实验室 2010年，伯克利大学正式开源了Spark项目 2013年6月，Spark成为了Apache基金会下的项目 2014年2月，Spark以飞快的速度成为了Apache的顶级项目 2015年至今，Spark变得愈发火爆，大量的国内公司开始重点部署或者使用Spark"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Familiar"}],["meta",{"property":"article:published_time","content":"2023-09-10T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spark学习笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-10T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Familiar\\",\\"url\\":\\"https://github.com/Familior\\"}]}"]]},"headers":[{"level":2,"title":"Spark概述","slug":"spark概述","link":"#spark概述","children":[]},{"level":2,"title":"Spark VS Hadoop","slug":"spark-vs-hadoop","link":"#spark-vs-hadoop","children":[]},{"level":2,"title":"Spark入门Sample","slug":"spark入门sample","link":"#spark入门sample","children":[]},{"level":2,"title":"Spark运行方式","slug":"spark运行方式","link":"#spark运行方式","children":[]},{"level":2,"title":"Spark核心模块","slug":"spark核心模块","link":"#spark核心模块","children":[]},{"level":2,"title":"Spark运行架构","slug":"spark运行架构","link":"#spark运行架构","children":[{"level":3,"title":"Driver","slug":"driver","link":"#driver","children":[]},{"level":3,"title":"Executor","slug":"executor","link":"#executor","children":[]},{"level":3,"title":"Master & Worker","slug":"master-worker","link":"#master-worker","children":[]},{"level":3,"title":"ApplicationMaster","slug":"applicationmaster","link":"#applicationmaster","children":[]},{"level":3,"title":"DAG","slug":"dag","link":"#dag","children":[]}]},{"level":2,"title":"Spark Job提交流程","slug":"spark-job提交流程","link":"#spark-job提交流程","children":[]},{"level":2,"title":"Spark核心编程","slug":"spark核心编程","link":"#spark核心编程","children":[]},{"level":2,"title":"RDD概念","slug":"rdd概念","link":"#rdd概念","children":[{"level":3,"title":"核心属性","slug":"核心属性","link":"#核心属性","children":[]},{"level":3,"title":"执行原理","slug":"执行原理","link":"#执行原理","children":[]},{"level":3,"title":"RDD的创建","slug":"rdd的创建","link":"#rdd的创建","children":[]},{"level":3,"title":"RDD的并行度和分区","slug":"rdd的并行度和分区","link":"#rdd的并行度和分区","children":[]}]},{"level":2,"title":"RDD transform operation","slug":"rdd-transform-operation","link":"#rdd-transform-operation","children":[]},{"level":2,"title":"RDD action operation","slug":"rdd-action-operation","link":"#rdd-action-operation","children":[]},{"level":2,"title":"RDD 序列化","slug":"rdd-序列化","link":"#rdd-序列化","children":[{"level":3,"title":"闭包（Closure）","slug":"闭包-closure","link":"#闭包-closure","children":[]},{"level":3,"title":"序列化（Serializable）","slug":"序列化-serializable","link":"#序列化-serializable","children":[]}]},{"level":2,"title":"RDD依赖关系","slug":"rdd依赖关系","link":"#rdd依赖关系","children":[{"level":3,"title":"RDD Lineage","slug":"rdd-lineage","link":"#rdd-lineage","children":[]},{"level":3,"title":"RDD窄依赖","slug":"rdd窄依赖","link":"#rdd窄依赖","children":[]},{"level":3,"title":"RDD宽依赖","slug":"rdd宽依赖","link":"#rdd宽依赖","children":[]},{"level":3,"title":"RDD任务划分","slug":"rdd任务划分","link":"#rdd任务划分","children":[]}]},{"level":2,"title":"RDD持久化","slug":"rdd持久化","link":"#rdd持久化","children":[{"level":3,"title":"Cache","slug":"cache","link":"#cache","children":[]},{"level":3,"title":"CheckPoint","slug":"checkpoint","link":"#checkpoint","children":[]},{"level":3,"title":"Cache VS CheckPoint","slug":"cache-vs-checkpoint","link":"#cache-vs-checkpoint","children":[]}]},{"level":2,"title":"RDD分区器","slug":"rdd分区器","link":"#rdd分区器","children":[]},{"level":2,"title":"累加器","slug":"累加器","link":"#累加器","children":[]},{"level":2,"title":"广播变量","slug":"广播变量","link":"#广播变量","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":20.31,"words":6092},"filePathRelative":"学习笔记/大数据/Spark/Spark学习笔记.md","localizedDate":"2023年9月10日","excerpt":"<h2> Spark概述</h2>\\n<p>Spark是一种基于内存的快速、通用、可扩展的大数据分析计算引擎。</p>\\n<h2> Spark VS Hadoop</h2>\\n<p>从时间上来看:</p>\\n<ul>\\n<li>\\n<p>Hadoop</p>\\n<ul>\\n<li>\\n<p>2006年1月，Doug Cutting加入Yahoo，领导Hadoop的开发</p>\\n</li>\\n<li>\\n<p>2008年1月，Hadoop成为Apache顶级项目</p>\\n</li>\\n<li>\\n<p>2011年，1.0正式发布</p>\\n</li>\\n<li>\\n<p>2012年3月，稳定版发布</p>\\n</li>\\n<li>\\n<p>2013年10月，发布2.X(Yarn)版本</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>Spark</p>\\n<ul>\\n<li>\\n<p>2009年，Spark诞生于伯克利大学的AMPLab实验室</p>\\n</li>\\n<li>\\n<p>2010年，伯克利大学正式开源了Spark项目</p>\\n</li>\\n<li>\\n<p>2013年6月，Spark成为了Apache基金会下的项目</p>\\n</li>\\n<li>\\n<p>2014年2月，Spark以飞快的速度成为了Apache的顶级项目</p>\\n</li>\\n<li>\\n<p>2015年至今，Spark变得愈发火爆，大量的国内公司开始重点部署或者使用Spark</p>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};
