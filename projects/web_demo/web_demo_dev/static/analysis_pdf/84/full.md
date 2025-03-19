## 2. 函数方程的代换解法

虽然函数方程早在 200 多年前就已经被人们提出并加以研究了. 但至今还没有关于函数方程的统一理论和解函数方程的一般方法, 也没有关于函数方程的解的存在性和唯一性的判别准则。不仅如此, 甚至还有一些函数方程至今未能解出. 而且函数方程现有的一些解法, 往往要借助于高等数学的工具(例如把函数方程化为微分方程, 或者化为有限差分方程等等). 这当然远远超出这本小册子的范围. 但是, 对于某些特殊的、简单的函数方程, 应用初等方法也是能够解出的. 其中有一种方法叫代换法. 我们就来介绍这种方法.

[例 5] 解函数方程
 
$$
{af}\left( x\right)  + f\left( \frac{1}{x}\right)  = {ax}.\;\left( {{a}^{2} \neq  1}\right)  \tag{17}
$$

解 因原式中 $x \neq  0$ ,把自变量 $x$ 换为 $\frac{1}{x}$ ,于是 $\frac{1}{x}$ 就换为 $\omega$ . 函数方程 (17) 化为

$$
{af}\left( \frac{1}{x}\right)  + f\left( x\right)  = \frac{a}{x}. \tag{18}
$$

(17)乘以 $a$ ,得

$$
{af}\left( \frac{1}{x}\right)  + {a}^{2}f\left( x\right)  = {a}^{2}x. \tag{19}
$$

(18)-(19),得

$$
\left( {1 - {a}^{2}}\right) f\left( x\right)  = \frac{a}{x} - {a}^{2}x.
$$

$$
\therefore f\left( x\right)  = \frac{a\left( {1 - a{x}^{2}}\right) }{x\left( {1 - {a}^{2}}\right) }\text{. }
$$

从上例可以看出, 代换法的基本思想是这样的: 将函数中的自变量 $x$ 适当地代换以别的自变量 (在代换时应注意力求使函数的定义域不发生变化), 得到一个新的函数方程. 把新得到的这个函数方程与原有的函数方程联立, 组成一个关于未知函数的代数方程组. 再应用通常的消元法, 解这个方程组,就求得了原函数方程的解. 至于原来函数中的自变量 $x$ 用什么东西代换才算是适当的, 这就要看所给的函数方程的具体特点了一一这属于解题技巧问题.

[例 6] 求函数 $f\left( x\right)$ ,如果

$$
{af}\left( {x}^{n}\right)  + f\left( {-{x}^{n}}\right)  = {bx}, \tag{20}
$$

其中 ${a}^{2} \neq  1, n$ 是奇数.

解 把 $x$ 换以 $- x$ ,由于 $n$ 是奇数,就有

$$
{af}\left( {-{x}^{n}}\right)  + f\left( {x}^{n}\right)  =  - {bx}. \tag{21}
$$

从 $\left( {20}\right) ,\left( {21}\right)$ 中消去 $f\left( {-{x}^{n}}\right)$ ,求得

$$
f\left( {x}^{n}\right)  = \frac{bx}{a - 1}.
$$

因为 $n$ 是奇数,可以把 ${x}^{n}$ 换成 $x$ ,所以最后有

$$
f\left( x\right)  = \frac{b\sqrt[n]{x}}{a - 1}.
$$

[例 7] 解函数方程

$$
{af}\left( {x - 1}\right)  + {bf}\left( {1 - x}\right)  = {cx}. \tag{22}
$$

解 把(x - 1)代之以 $x$ ,那末(1 - x)就代之以 $- x$ ,而 $x$ 就应代之以 $\left( {1 + x}\right)$ ;

又如果把(x - 1)代之以 $- x$ ,那末(1 - x)就代之以 $x$ ,而 $x$ 就应代之以(1 - x).

分别代入原函数方程, 就得

$$
\left\{  {\begin{array}{l} {af}\left( x\right)  + {bf}\left( {-x}\right)  = c\left( {1 + x}\right) , \\  {bf}\left( x\right)  + {af}\left( {-x}\right)  = c\left( {1 - x}\right) . \end{array}\therefore }\right.
$$

解这个方程组, 得知:

(1)当 ${a}^{2} \neq  {b}^{2}$ 时,

$$
f\left( x\right)  = \frac{c}{a - b}x + \frac{c}{a + b}
$$

(2)当 ${a}^{2} = {b}^{2}$ ,而 $c \neq  0$ 时, $f\left( x\right)$ 不存在；

(3). 当 $a = b$ ,且 $c = 0$ 时, $f\left( x\right)$ 是任何奇函数;

(4)当 $a =  - b$ ,且 $c = 0$ 时, $f\left( x\right)$ 是任何偶函数,

[例 8] 解函数方程

$$
f\left( {x + y}\right)  + f\left( {x - y}\right)  = {2f}\left( x\right) \cos y. \tag{23}
$$

解 依次作下列代换:

$$
x = 0,\;y = t;
$$

...

$$
x = \frac{\pi }{2} + t,\;y = \frac{\pi }{2}
$$

$$
x = \frac{\pi }{2},\;y = \frac{\pi }{2} + t,
$$

就得到方程组

$$
\left\{  \begin{array}{l} f\left( t\right)  + f\left( {-t}\right)  = {2f}\left( 0\right) \cos t, \\  f\left( {x + t}\right)  + f\left( t\right)  = 0, \\  f\left( {x + t}\right)  + f\left( {-t}\right)  =  - {2f}\left( \frac{x}{2}\right) \sin t, \end{array}\right.  \tag{24}
$$

(25)

(26)

$\left( {24}\right)  + \left( {25}\right)  - \left( {26}\right)$ ; 得

$$
{2f}\left( t\right)  = {2f}\left( 0\right) \cos t + {2f}\left( \frac{\pi }{2}\right) \sin t.
$$

就是

$$
f\left( t\right)  = f\left( 0\right) \cos t + f\left( \frac{\pi }{2}\right) \sin t.
$$

记

$$
a = f\left( 0\right) , b = f\left( \frac{\pi }{2}\right) ,
$$

即得

$$
f\left( x\right)  = a\cos x + b\sin x.
$$

有时候要把自变量代换成具体的数值才行. 而当 $f\left( x\right)$ 是定义在自然数上的函数时, 往往要进行多次代换, 才能求出这个函数. 记住等差数列和等比数列前 $n$ 项和的公式,往往是很有用的.

我们知道,当首项为 $a$ ,公差为 $d$ 时,等差数列前 $n$ 项的和

$$
{S}_{n} = a + \left( {a + d}\right)  + \left( {a + {2d}}\right)  + \cdots  + \left\lbrack  {a + \left( {n - 1}\right) d}\right\rbrack
$$

$$
= \frac{n\left\lbrack  {{2a} + \left( {n - 1}\right) d}\right\rbrack  }{2}\text{. } \tag{27}
$$

特别是当 $a = 1, d = 1$ 时,

$$
{S}_{n} = 1 + 2 + 3 + \cdots  + n = \frac{n\left( {n + 1}\right) }{2}. \tag{28}
$$

对于首项为 $a$ ,公差为 $q\left( { \neq  1}\right)$ 的等比数列,前 $n$ 项的和

$$
{S}_{n} = a + {aq} + a{q}^{2} + \cdots  + a{q}^{n - 1} = \frac{a\left( {{q}^{n} - 1}\right) }{q - 1}. \tag{29}
$$

特别是当 $a = q\left( { \neq  1}\right)$ 时,

$$
{S}_{n} = a + {a}^{2} + {a}^{3} + \cdots  + {a}^{n} = \frac{a\left( {{a}^{n} - 1}\right) }{a - 1}. \tag{30}
$$

[例 9] 设函数 $f\left( n\right)$ 的定义域是自然数. 求 $f\left( n\right)$ ,使它满足条件

$$
f\left( {m + n}\right)  = f\left( m\right)  + f\left( n\right)  + {mn}, \tag{31}
$$

$$
f\left( 1\right)  = 1\text{.} \tag{82}
$$

解 设 $m = 1$ ,便有

$$
f\left( {n + 1}\right)  = f\left( n\right)  + n + 1
$$

把 $n$ 顺次用 $1,2,3,\cdots ,\left( {k + 1}\right)$ 代换,就得

$$
\left\{  \begin{array}{l} f\left( 2\right)  = f\left( 1\right)  + 2, \\  f\left( 3\right)  = f\left( 2\right)  + 3, \\  f\left( 4\right)  = f\left( 3\right)  + 4, \\  \cdots \cdots \cdots \cdots \cdots \cdots \\  f\left( {k + 1}\right)  = f\left( k\right)  + \left( {k + 1}\right) . \end{array}\right.
$$

把方程组的所有方程相加, 得

$$
f\left( {k + 1}\right)  = f\left( 1\right)  + 2 + 3 + 4 + \cdots  + \left( {k + 1}\right)
$$

$$
= 1 + 2 + 3 + \cdots  + \left( {k + 1}\right)
$$

$$
- \frac{\left( {k + 1}\right) \left( {k + 2}\right) }{2}
$$

$$
\therefore f\left( n\right)  = \frac{n\left( {n + 1}\right) }{2}\text{. }
$$

[例 10] 函数 $f\left( n\right)$ 定义在自然数上,且满足

$$
f\left( n\right)  = f\left( {n - 1}\right)  + {a}^{n}, \tag{33}
$$

$$
f\left( 1\right)  = 1\text{.} \tag{34}
$$

求 $f\left( n\right)$ .

解 把 $n$ 分别代换以 $2,3,4,\cdots , n$ ,便得

$$
\left\{  \begin{array}{l} f\left( 2\right)  = f\left( 1\right)  + {a}^{2}, \\  f\left( 3\right)  = f\left( 2\right)  + {a}^{3}, \\  f\left( 4\right)  = f\left( 3\right)  + {a}^{4}, \\  \cdots \cdots \cdots \cdots \cdots \cdots \\  f\left( n\right)  = f\left( {n - 1}\right)  + {a}^{n}, \end{array}\right.
$$

加在一起就化为

$$
f\left( n\right)  = f\left( 1\right)  + {a}^{2} + {a}^{3} + \cdots  + {a}^{n}.
$$

所以

$$
f\left( n\right)  = \left\{  \begin{array}{ll} n, & \text{ 当 }a = 1\text{ 时,} \\  1 + \frac{{a}^{2}\left( {{a}^{n - 1} - 1}\right) }{a - 1}, & \text{ 当 }a \neq  1\text{ 时. } \end{array}\right.
$$

[例 11] (1) $n$ 个同学任意排成一队,共有多少种排法?

(2)从 $n$ 个同学中任意选出 $k\left( { \leq  n}\right)$ 个同学排队,共有多少种排法?

解 (1) 设 $n$ 个同学排队,共有 $f\left( n\right)$ 种排法. 如果再增加 1 个同学,让这位同学插入队伍. 对于原来 $n$ 个同学的每一种排法, 这位同学可以排在第 1 名(队首), 第 2 名, 第 3 名, $\cdots$ ,第 $n + 1$ 名 (队尾),即有 $n + 1$ 种“插”法. 因此

$$
f\left( {n + 1}\right)  = \left( {n + 1}\right) f\left( n\right) . \tag{35}
$$

而

$$
f\left( 1\right)  = 1\text{.}
$$

依次令 $n = 1,2,3,\cdots$ ,得

$$
f\left( 2\right)  = {2f}\left( 1\right) ,
$$

$$
f\left( 3\right)  = {3f}\left( 2\right) ,
$$

$$
f\left( 4\right)  = {4f}\left( 3\right) ,
$$

...............

$$
f\left( {n + 1}\right)  = \left( {n + 1}\right) f\left( n\right) .
$$

把这些等式左右两边分别相乘, 便有

$$
f\left( 2\right) f\left( 3\right) f\left( 4\right) \cdots f\left( {n + 1}\right)
$$

$$
= 2 \cdot  3 \cdot  4 \cdot  \cdots  \cdot  \left( {n + 1}\right) f\left( 1\right) f\left( 2\right) f\left( 3\right) \cdots f\left( n\right) .
$$

依题意可知 $f\left( 2\right) \text{、}f\left( 3\right) \text{、}\cdots \text{、}f\left( n\right)$ 都不为 0,故两边同除以 $f\left( 2\right) f\left( 3\right) f\left( 4\right) \cdots f\left( n\right)$ 后,得到

$$
f\left( {n + 1}\right)  = 2 \cdot  3 \cdot  4 \cdot  \cdots  \cdot  \left( {n + 1}\right) f\left( 1\right)
$$

$$
= 1 \cdot  2 \cdot  3 \cdot  \cdots  \cdot  \left( {n + 1}\right) \text{.}
$$

$$
\therefore f\left( n\right)  = n!\text{. }
$$

这里,记号 $n! = 1 \cdot  2 \cdot  3 \cdot  \cdots  \cdot  n$ ,读做 $n$ 的阶乘.

就是说, $n$ 个同学排成一队,共有 $n$ ! 种排法.

(2)设从 $n$ 个同学选出 $k$ 个同学排队,共有 ${f}_{k}\left( n\right)$ 种排法. 现在新增加一位同学,共有了 $\left( {n + 1}\right)$ 个同学,仍选出 $k$ 个同学排队. $k$ 个同学排成的队伍可以分为两类: 一类是这个新同学没有选进的队伍. 这种排法按照假设应共有 ${f}_{k}\left( n\right)$ 种. 另一类是新同学被选入的队伍. 设想这种队伍的排法是这样实现的: 由新同学替换原来队伍中的旧同学. 我们来看, 如果新同学替换的是原队伍中的第 1 名, 共有多少种排法: 乍看起来,因为原队伍共有 ${f}_{k}\left( n\right)$ 种排法,因而以新同学为队首的排法也有 ${f}_{k}\left( n\right)$ 种. 其实不然. 因为在原队伍中,如果队首以后的(k - 1)个同学及其排列顺序确定时,这时尚余 $n - \left( {k - 1}\right)  = n - k + 1$ 个同学可充当队首. 因而有 $n - k + 1$ 种排法. 但当队首被新同学替换后, 就变成 1 种排法了. 可见以新同学为队首的排法为 $\frac{1}{n - k + 1}{f}_{k}\left( n\right)$ 种. 同样的,以新同学为第 2 名,第 3 名, $\cdots$ ,第 $k$ 名的队伍,排法也各有 $\frac{1}{n - k + 1}{f}_{k}\left( n\right)$ 种. 总之,有新同学出现的队伍,排法一共有 $\frac{k}{n - k + 1}{f}_{k}\left( n\right)$ 种. 于是,得函数方程

$$
{f}_{k}\left( {n + 1}\right)  = {f}_{k}\left( n\right)  + \frac{k}{n - k + 1}{f}_{k}\left( n\right) .
$$

或者

$$
{f}_{k}\left( {n + 1}\right)  = \frac{n + 1}{n - k + 1}{f}_{k}\left( n\right) . \tag{36}
$$

分别令 $n = k, k + 1,\cdots$ ,得

$$
{f}_{k}\left( {k + 1}\right)  = \frac{k + 1}{1}{f}_{k}\left( k\right)
$$

$$
{f}_{k}\left( {k + 2}\right)  = \frac{k + 2}{2}{f}_{k}\left( {k + 1}\right) ,
$$

$$
{f}_{k}\left( {k + 3}\right)  = \frac{k + 3}{3}{f}_{k}\left( {k + 2}\right) ,
$$

........................

$$
{f}_{k}\left( {n + 1}\right)  = \frac{n + 1}{n - k + 1}{f}_{k}\left( n\right) .
$$

相乘, 约去等式两边相同的因式 (它们显然是不为 0 的), 得

$$
{f}_{k}\left( {n + 1}\right)  = \frac{k + 1}{1} \cdot  \frac{k + 2}{2} \cdot  \frac{k + 3}{3} \cdot  \cdots  \cdot  \frac{n + 1}{n - k + 1}{f}_{k}\left( k\right) .
$$

但由第 (1) 题知,

$$
{f}_{k}\left( k\right)  = k!\text{. }
$$

所以

$$
{f}_{k}\left( {n + 1}\right)  = \frac{\left( {n + 1}\right) n\cdots \left( {k + 2}\right) \left( {k + 1}\right)  \cdot  k!}{\left( {n - k + 1}\right) !}.
$$

或者

$$
{f}_{k}\left( n\right)  = \frac{n!}{\left( {n - k}\right) !} = n\left( {n - 1}\right) \left( {n - 2}\right) \cdots \left( {n - k + 1}\right) ,
$$

这就是从 $n$ 个同学中任意选出 $k\left( { \leq  n}\right)$ 不同学排队的共有的排法.

在这里,我们实际上得到了排列公式: 从 $n$ 个不同的元素里,每次取出 $k\left( {1 \leq  k \leq  n}\right)$ 个元素,选排列 (即 $k < n$ 时) 数为

$$
{A}_{n}^{k} = {f}_{k}\left( n\right)  = \frac{n!}{\left( {n - k}\right) !} = n\left( {n - 1}\right) \cdots \left( {n - k + 1}\right) ; \tag{37}
$$

全排列 (即 $k = n$ 时) 数为

1.

$$
{P}_{n} = {A}_{n}^{n} = n! \tag{38}
$$

(注意,我们规定 $0! = 1$ )

[例 12] 求从 $n$ 个不同的元素里,每次取出 $k\left( {1 \leq  k \leq  n}\right)$ 个元素的组合数 ${F}_{k}\left( n\right)$ 公式,以及 ${F}_{k}\left( n\right)$ 所应满足的函数方程.

解. 有了排列数公式, 可以方便地推导出组合数公式, 设从 $n$ 个不同的元素里,每次取出 $k\left( {1 \leq  k \leq  n}\right)$ 个元素的排列数为 ${f}_{k}\left( n\right)$ . 因为 $k$ 个元素的全排列数为 $k!$ ,而这 $k!$ 个排列在组合中只算作 1 组. 因此, 排列数与组合数间有如下关系:

$$
{f}_{k}\left( n\right)  = k!{F}_{k}\left( n\right) . \tag{39}
$$

代入 (37), 得

$$
{F}_{k}\left( n\right)  = \frac{1}{k!}{f}_{k}\left( n\right)  = \frac{1}{k!} \cdot  \frac{n!}{\left( {n - k}\right) !} = \frac{n!}{k!\left( {n - k}\right) !}. \tag{40}
$$

这就是我们所要求的公式.

把 (39) 代入函数方程 (36), 得

$$
k!{F}_{k}\left( {n + 1}\right)  = \frac{n + 1}{n - k + 1} \cdot  k!{F}_{k}\left( n\right) ,
$$

即

$$
{F}_{k}\left( {n + 1}\right)  = \frac{n + 1}{n - k + 1}{F}_{k}\left( n\right) . \tag{41}
$$

这就是组合数 ${F}_{k}\left( n\right)$ 所应满足的函数方程.

从 $n$ 个不同的元素里,每次取出 $k$ 个元素的组合数,通常记做 ${C}_{n}^{k}$ . 这样,公式 (40) 可写成

$$
{C}_{n}^{k} = \frac{n!}{k!\left( {n - k}\right) !}, \tag{42}
$$

而公式 (41) 则可写成

$$
{C}_{n + 1}^{k} = \frac{n + 1}{n - k + 1}{C}_{n}^{k}. \tag{43}
$$

[例 13] (1) 直线上有 $n$ 个点 (任何两点不相重合). 这 $n$ 个点把直线分成了多少部分 (区间)?

(2)平面上有 $n$ 条直线(任何两条直线彼此相交,但任何三条直线不交于同一点). 这 $n$ 条直线把平面分成了多少部分?

(3)空间中有 $n$ 个平面(任何三个平面彼此相交,即任何四个平面却无公共点). 这 $n$ 个平面把空间分成了多少部分?

解 (1) 设直线上 $n$ 个点 ${A}_{1},{A}_{2},\cdots ,{A}_{n}$ 把直线分成了 ${f}_{1}\left( n\right)$ 个部分 (图 6). 现在再加上一个点 ${A}_{n + 1}$ . 这个点把原来的某一区间分成两个区间. 所以 ${f}_{1}\left( {n + 1}\right)$ 比 ${f}_{1}\left( n\right)$ 多 1 . 就是

$$
{f}_{1}\left( {n + 1}\right)  = {f}_{1}\left( n\right)  + 1, \tag{44}
$$

![0195a87d-8c14-7cb2-a357-9180da18fe88_9_591_690_487_122_0.jpg](images/0195a87d-8c14-7cb2-a357-9180da18fe88_9_591_690_487_122_0.jpg)

图 6

而

$$
{f}_{1}\left( 1\right)  = 2\text{.} \tag{45}
$$

解函数方程 (44) ; 得

$$
{f}_{1}\left( n\right)  = n + 1\text{.}
$$

就是说,直线上 $n$ 个点把直线分成 $\left( {n + 1}\right)$ 个部分.

(2) 设平面上 $n$ 条直线 ${l}_{1}$ , ${l}_{2},\cdots ,{l}_{n}$ 把平面分为 ${f}_{2}\left( n\right)$ 个部分 (图 7). 增加一条直线 ${l}_{n + 1}$ . 这条直线与原来的 $n$ 条直线相交于 $n$ 点. 由第 (1) 题的结论,这 $n$ 个点把直线分成 $\left( {n + 1}\right)$ 个部分. 这 $\left( {n + 1}\right)$ 个部分的每一段都穿过原来的某一个区域,且把这个区域分成两部分. 所以 ${f}_{2}\left( {n + 1}\right)$ 比 ${f}_{2}\left( n\right)$ 多 $n +$ 1. 就是

$$
{f}_{2}\left( {n + 1}\right)  = {f}_{2}\left( n\right)  + n + 1, \tag{46}
$$

![0195a87d-8c14-7cb2-a357-9180da18fe88_9_979_1251_428_371_0.jpg](images/0195a87d-8c14-7cb2-a357-9180da18fe88_9_979_1251_428_371_0.jpg)

图 7

而

$$
{f}_{2}\left( 1\right)  = 2\text{.} \tag{47}
$$

进行一系列代换, 得

$$
{f}_{2}\left( 2\right)  = {f}_{2}\left( 1\right)  + 2,
$$

$$
{f}_{2}\left( 3\right)  = {f}_{2}\left( 2\right)  + 3,
$$

$$
{f}_{2}\left( 4\right)  = {f}_{2}\left( 3\right)  + 4,
$$

..............

$$
{f}_{2}\left( {n + 1}\right)  = {f}_{2}\left( n\right)  + \left( {n + 1}\right) .
$$

相加后, 得

$$
{f}_{2}\left( {n + 1}\right)  = {f}_{2}\left( 1\right)  + 2 + 3 + 4 + \cdots  + \left( {n + 1}\right) .
$$

或者

$$
{f}_{2}\left( {n + 1}\right)  = \frac{{n}^{2} + {3n} + 4}{2},
$$

## 也就是

3

$$
{f}_{2}\left( n\right)  = \frac{{n}^{2} + n + 2}{2}.
$$

这就是说, $n$ 条直线把平面分成 $\frac{{n}^{2} + n + 2}{2}$ 个部分.

(3) 设 $n$ 个平面把空间分成 ${f}_{3}\left( n\right)$ 个部分. 类似于上面的分析, 可得函数方程

$$
{f}_{3}\left( {n + 1}\right)  = {f}_{3}\left( n\right)  + \frac{{n}^{2} + n + 2}{2}. \tag{48}
$$

而

$$
{f}_{3}\left( 1\right)  = 2\text{.} \tag{49}
$$

依次进行代换, 得

$$
{f}_{3}\left( 2\right)  = {f}_{3}\left( 1\right)  + \frac{{1}^{2}}{2} + \frac{1}{2} + 1
$$

$$
{f}_{3}\left( 3\right)  = {f}_{3}\left( 2\right)  + \frac{{2}^{2}}{2} + \frac{2}{2} + 1,
$$

、

$$
{f}_{3}\left( 4\right)  = {f}_{3}\left( 3\right)  + \frac{{3}^{2}}{2} + \frac{3}{2} + 1,
$$

........................... . . .20 .