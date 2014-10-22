title: Hello World
toc: true
date: 2014-10-22 14:16:32
author: wayou
feature: asset/posts/2014-10-22-hello-world/hexo_logo.png
categories: 文档
tags: 
- hexo
- markdown
---

{% textcolor success %}
  Welcome, dude!
{% endtextcolor %}

# 初见/Intro

这是使用[Hexo](http://hexo.io/)搭建的静态站点，基于[Node.js](http://nodejs.org/)，内容采用[Markdown](http://daringfireball.net/projects/markdown/syntax) 语法撰写。

这里，我们进行知识分享扩散，文档整理存放，项目展示介绍。随着时间的推移，会沉淀更多的内容。

时间就像一坛尘封的酒酿，若干年后，就会发现它的醇香。

这里也是。

<!-- more -->

# 本地运行/Run

下面的步骤可以让你快速安装环境，运行本站点。

{% alert info %}
在正式开始前，你需要以下原料：
* [Node.js](http://nodejs.org/) 
* [Git](http://git-scm.com/)
{% endalert %}

## 克隆项目
克隆本项目到本地。
```bash
mkdir jsbear
cd jsbear
git clone https://github.com/wayou/tbfe-home.git
```

## 安装Hexo
本地安装Hexo静态站点生成器。
```bash
npm install hexo -g
```

## 安装依赖包
```bash
npm i
# 或者
npm install
```

## 安装主题
```bash
git clone https://github.com/wayou/hexo-theme-material.git themes/material
```

## 启动服务器
准备好了吗？使用下面的命令，来打开站点吧！
```bash
hexo s
# 或者
hexo server
```

服务器启动后，在浏览器地址栏输入`localhost` 进行访问。

{% alert info %}
服务器启动后可以按「Ctrl+C」将其停止
{% endalert %}

# 书写/Writing

## 创建新贴

使用如下命令创建新贴。

``` bash
hexo new "My New Post" #最好用英文
```
它会在项目的`source/_posts/` 路径下创建一个时间加文章标题的`.md` 文件。我在这个文件中书写文章内容。


## 文章选项

上面方法创建的文件中，头部包含了该篇文章的一些配置信息，所以你看到的应该是下面这个样子：

```markdown 以本文的头部信息作示例
title: Hello World  #文章的标题，这里可以换成中文
toc: true   #是否显示文章目录，即右侧自动高亮的目录树
date: 2014-10-22 14:16:32   #文章创建的时间，匆改
author: wayou   #需要显示的作者，可选
feature: asset/posts/2014-10-22-hello-world/hexo_logo.png    #显示在首页的文章头图，如果不需要可以去掉此项
categories: 文档  #文章分类，可选
tags:   #文章标签，可选
- hexo
- markdown
---

这里开始正文

<!-- more -->  #在正文中写了此注释，则注释前的内容将作为文章摘要显示在首页

这里继续正文

```

## 句法

使用Markdown句法，我们可以很方便地写出简单优雅的排版。
如果你未曾了解过，让我们一起来简单熟悉一些常用MD句法。如果你已经了解，则路过。

### 标题
在MD中，以`#`号开头来标识这一行是标题，个数对应HTML中`<h1>`到`<h6>`，这个很好理解。

{% alert info %}
为了不影响左边文章目录，下面的示例省去了一二三级标题
{% endalert %}

```markdown
#### 四级标题
##### 五级标题
###### 六级标题
```

结果：
#### 四级标题
##### 五级标题
###### 六级标题


###链接与图片

链接与图片是书写丰富文章所必备的元素，下面我们来看看。
####链接

MD中链接句法为方括号包裹链接文字，圆括号包裹链接地址。大家看下面的示例感受下。

```markdown
[Hi, 约么？](http://shurufa.baidu.com/)
```

结果：
[Hi, 约么？](http://shurufa.baidu.com/)

####图片

图文并茂的页面让人更能够赏心悦目。所以你应该不会吝啬多放几张图片。

MD中图片的写法与链接极其相似，只是链接前端多了个叹号，仅此而以。

同样，我们看一个示例感受下。

美图将至，屏住呼吸。

```markdown
![bigger that bigger](asset/posts/2014-10-22-hello-world/hexo_logo.png)
```

结果：
![bigger that bigger](/tbfe-home/asset/posts/2014-10-22-hello-world/btb.jpg)


### 强调与斜体

关于这两者，我们分别都有两种选择，请看下面的示例。

####斜体

```markdown
*single asterisks*

_single underscores_
```

结果：

*single asterisks*

_single underscores_


####强调

```markdown
**double asterisks**

__double underscores__

```

结果

**double asterisks**

__double underscores__


### 列表

通过列表表达观点，列举论据，显得思路清晰，表达流畅，更能说服读者。
在MD中，列表可以通过如下形式实现。

#### 无序列表

下面是无序列表的示例

```markdown
* 列表项1
* 列表项2
* 列表项3

#另一种写法
- 列表项1
- 列表项2
- 列表项3
```

* 列表项1
* 列表项2
* 列表项3

- 列表项1
- 列表项2
- 列表项3

#### 有序列表

下面是有序列表的示例

```markdown
1. 列表项1
2. 列表项2
3. 列表项3
```
1. 列表项1
2. 列表项2
3. 列表项3

#### 嵌套列表

下面是列表嵌套的示例

```markdown
1. 列表项1
    * 项目1的子项
    * 项目1的子项
    * 项目1的子项
2. 列表项2
    * 项目2的子项
    * 项目2的子项
    * 项目2的子项
3. 列表项3
```

1. 列表项1
    * 项目1的子项
    * 项目1的子项
    * 项目1的子项
2. 列表项2
    * 项目2的子项
    * 项目2的子项
    * 项目2的子项
3. 列表项3

### 代码

在MD中，书写代码块也是非常便捷的，句法如下：

{% code %}
``` [language] [title] [url] [link text]
code goes here
```
{% endcode %}

或者：
{% raw %}
<figure class="highlight"><pre>{% code [title] [lang:language] [url] [link text] %}
code goes here
{% endcode %}
</pre></figure>
{% endraw %}

一个JS代码的示例：
{% code %}
```javascript _.compact https://lodash.com/docs  lodash.js
_.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
```
{% endcode %}

结果：

```javascript _.compact https://lodash.com/docs lodash.js
_.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
```

### 引用

引经据典是另一种增强说服力，彰显才识的方法。
MD中书写引用可以用如下简便的方式

{% code %}
> 原谅我这一生不鸡放纵爱自由
> 也会怕有一天会跌倒
{% endcode %}

结果

> 原谅我这一生不鸡放纵爱自由
> 也会怕有一天会跌倒

也可以用以下方式书写更加健壮的引用，带出处，带连接。

{% raw %}
<figure class="highlight"><pre>{% blockquote @风一直在吹 https://twitter.com/devdocs/status/356095192085962752 %}
我这一生都在输，因为我不断战胜自己
{% endblockquote %}
</pre></figure>
{% endraw %}

结果

{% blockquote @风一直在吹 https://twitter.com/devdocs/status/356095192085962752 %}
我这一生都在输，因为我不断战胜自己
{% endblockquote %}

### Bootstrap 标签

除了常规的MD句法，本主题内还可以书写一些Bootstrap句法，以此来让页面更加漂亮。
本主题基于[freemind](https://github.com/wzpan/hexo-theme-freemind), 使用了其中的[hexo-tag-bootstrap](https://github.com/wzpan/hexo-tag-bootstrap)。

具体信息可以访问[这里](http://hahack.tk/hexo-theme-freemind/2014/03/16/tag-plugins-cn/)查看，下面是文字颜色的简单示例。

{% raw %}
<figure class="highlight"><pre>{% textcolor muted %}话说天下大势，分久必合，合久必分{% endtextcolor %}
{% textcolor primary %}话说天下大势，分久必合，合久必分{% endtextcolor %}
{% textcolor success %}话说天下大势，分久必合，合久必分{% endtextcolor %}
{% textcolor info %}话说天下大势，分久必合，合久必分{% endtextcolor %}
{% textcolor warning %}话说天下大势，分久必合，合久必分{% endtextcolor %}
{% textcolor danger %}话说天下大势，分久必合，合久必分{% endtextcolor %}
</pre></figure>
{% endraw %}

结果：
{% textcolor muted %}话说天下大势，分久必合，合久必分{% endtextcolor %}{% textcolor primary %}话说天下大势，分久必合，合久必分{% endtextcolor %}{% textcolor success %}话说天下大势，分久必合，合久必分{% endtextcolor %}{% textcolor info %}话说天下大势，分久必合，合久必分{% endtextcolor %}{% textcolor warning %}话说天下大势，分久必合，合久必分{% endtextcolor %}{% textcolor danger %}话说天下大势，分久必合，合久必分{% endtextcolor %}

## 预览

书写过程中，你可能想要进行预览与效果查看，还记得之前我们已经将服务器在本地启动，直接刷新页面即可看到新增的文章入写入的改动。

但由于一些不为人知的原因，偶尔可能会出现更改未现效果，或者同名文章冗余的Bug。不要担心，`Ctrl+C` 停掉服务器，输入下面的命令清理一下缓存，再重新启动服务器。

```bash
hexo clean #删除之前生成的文件
hexo s #再次启动服务器进行预览
```


# 内容管理/ Content Mgmt

在书写文章过程中，我们需要的一些资源，比如附件，图片等，约定放在`source/asset/` 下面。

在此路径下新建一个与该文章名字一样的文件夹，里面存放该文章需要用到的全部资源。

而`asset`下面还有一个`common`文件夹，里面存放一些共用的资源，比如你写了一篇关于HTML5的文章，并且希望在首页显示一个HTML5 logo的缩略图，那么这个图片就应该存放在`common`里，因为另外的人以后可能也会分享相关文章，这时他就不必另取图片，而直接用`common`里的即可。


# 提交/ Commit

完成了你的内容新增，我们来到提交步骤。

## 文件生成

首先需要将原始`.md` 文件及所有模板文件生成我们需要的静态HTML资源。
并且你可能希望这些生成的`js`,`css`以及`HTML`是经过压缩混淆的。
所以我们首先运行下面的命令：

```bash
hexo o
#抑或
hexo optimize
```

## 部署

这样我们得到了静态资源，可以直接部署到服务器端了。

```bash
hexo d
#抑或
hexo deploy
```

FYI. 这两步操作可以通过下面的命令合为一条

```bash
hexo o -d
```

## 提交更改

上面的部署只是将静态文件进行了部署，但你或许希望你的更改能够永久生效，所以将本项目的更改提交到Git也是不能少的步骤。

```bash
git add --all
git push origin master
```
到这里，便完成了整个站点的更新。

接下来，

即刻出发，享受书写来带的乐趣吧！

# 附录/ Appendix
* [参见更多Hexo的信息](http://hexo.io/)
* [更加详尽的Markdown句法说明](http://daringfireball.net/projects/markdown/syntax)

