$$
\left( {{a}_{1},{a}_{2}\cdots ,{a}_{n}}\right)  = {p}_{1}{}^{{f}_{1}}{p}_{2}{}^{{f}_{2}}\cdots {p}_{r}{}^{{f}_{r}}.
$$

定理 20 公倍数是最小公倍数的倍数, 公因数是最大公因数的因数.

定理 ${21}\left\{  {\left\{  {{a}_{1},{a}_{2},\cdots ,{a}_{r}}\right\}  ,\left\{  {{a}_{r + 1},\cdots ,{a}_{n}}\right\}  }\right\}$

$$
= \left\{  {{a}_{1},\cdots ,{a}_{r},{a}_{r + 1},\cdots ,{a}_{n}}\right\}  ,
$$

$$
\left( {\left( {{a}_{1},{a}_{2},\cdots ,{a}_{r}}\right) ,\left( {{a}_{r + 1},\cdots ,{a}_{n}}\right) }\right)  = \left( {{a}_{1},\cdots ,{a}_{r},{a}_{r + 1},\cdots ,{a}_{n}}\right) .
$$

定理 22 设 $c \neq  0$ ,则

$$
\left\{  {c{a}_{1}, c{a}_{2},\cdots , c{a}_{n}}\right\}   = \left| c\right| \left\{  {{a}_{1},{a}_{2},\cdots ,{a}_{n}}\right\}  ,
$$

$$
\left( {c{a}_{1}, c{a}_{2},\cdots , c{a}_{n}}\right)  = \left| c\right| \left( {{a}_{1},{a}_{2},\cdots ,{a}_{n}}\right) .
$$

定理 ${23a}$ 和 $b$ 互素的充要条件是 $a$ 和 $b$ 没有公共的素因数。

定理 24 设 ${a}_{1},{a}_{2},\cdots ,{a}_{n}$ 两两互素,则

$$
\left\{  {{a}_{1},{a}_{2},\cdots {a}_{n},}\right\}   = \left| {{a}_{1}{a}_{2}\cdots {a}_{n}}\right| 。
$$

定理 25 设 ${a}_{1},{a}_{2},\cdots ,{a}_{n}$ 均与 $b$ 互素,则乘积 ${a}_{1}{a}_{2}\cdots {a}_{n}$ 也与 $b$ 互素。

定理 26 设 $\left( {a, c}\right)  = 1$ ,如果 $a \mid  {bc}$ ,则 $a \mid  b$ .

定理 ${27}\left( {a, b}\right)  \cdot  \{ a, b\}  = \left| {ab}\right|$ 。

定理 ${28}\left( {{a}_{1},{a}_{2} - {a}_{1}q,{a}_{3},\cdots ,{a}_{n}}\right)  = \left( {{a}_{1},{a}_{2},{a}_{3},\cdots ,{a}_{n}}\right)$ .

系 设 $r$ 是 $b$ 除 $a$ 的余数,则 $\left( {a, b}\right)  = \left( {b, r}\right)$ .

定义 用定理 28 求最大公因数的方法称为欧几里得 (Euclid) 辗转相除法。

定义 一整数如为另一整数的平方则称为平方数.

## 例 题

1. 证明 $\left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   \leq  \left\lbrack  {x + y}\right\rbrack   \leq  \left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   + 1$

【证】由于 $\left\lbrack  x\right\rbrack   \leq  x < \left\lbrack  x\right\rbrack   + 1,\left\lbrack  y\right\rbrack   \leq  y < \left\lbrack  y\right\rbrack   + 1$ .

两边相加, 有

$$
\left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   \leq  x + y < \left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   + 2.
$$

由于 $\left\lbrack  {x + y}\right\rbrack$ 是不超过 $x + y$ 的最大整数,故

$$
\left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   \leq  \left\lbrack  {x + y}\right\rbrack  。
$$

又因为 $\left\lbrack  {x + y}\right\rbrack   \leq  x + y$ ,故 $\left\lbrack  {x + y}\right\rbrack   < \left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   + 2$ ,从而有

)

$$
\left\lbrack  {x + y}\right\rbrack   \leq  \left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   + 1.
$$

因此, 由上两不等式, 便知

$$
\left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   \leq  \left\lbrack  {x + y}\right\rbrack   \leq  \left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   + 1.
$$

2. 设 $x$ 是实数, $n$ 是正整数,证明

$$
v\left\lbrack  x\right\rbrack   + \left\lbrack  {x + \frac{1}{n}}\right\rbrack   + \left\lbrack  {x + \frac{2}{n}}\right\rbrack   + \cdots  + \left\lbrack  {x + \frac{n - 1}{n}}\right\rbrack   = \left\lbrack  {nx}\right\rbrack  .
$$

【证】由于 $\left\lbrack  {nx}\right\rbrack$ 是整数,用正整数 $n$ 除 $\left\lbrack  {nx}\right\rbrack$ ,其商设为 $q$ , 余数为 $r\left( {0 \leq  r < n}\right)$ ,于是

$$
\left\lbrack  {nx}\right\rbrack   = {nq} + r,\;\left( {0 \leq  r < n}\right)
$$

因此 $q + \frac{r}{n} \leq  x < q + \frac{r + 1}{n}$ .

由此有 $q + \frac{r + i}{n} \leq  x + \frac{i}{n} < q + \frac{r + i + 1}{n}$ ,

故当 $0 \leq  i \leq  n - r - 1$ 时,有

$$
\left\lbrack  {x + \frac{i}{n}}\right\rbrack   = q,
$$

当 $n - r \leq  i \leq  n - 1$ 时,有

1

$$
\left\lbrack  {x + \frac{i}{n}}\right\rbrack   = q + 1
$$

故 $\mathop{\sum }\limits_{{i = 0}}^{{n - 1}}\left\lbrack  {x + \frac{i}{n}}\right\rbrack   = \left( {n - r}\right) q + r\left( {q + 1}\right)  = {nq} + r = \left\lbrack  {nx}\right\rbrack$ .

3. (a) 证明 $\left\lbrack  {5x}\right\rbrack   + \left\lbrack  {5y}\right\rbrack   \geq  \left\lbrack  {{3x} + y}\right\rbrack   + \left\lbrack  {{3y} + x}\right\rbrack$ ,其中 $x \geq  0$ , $y \geq  0$ .

(b) 利用 (a) 证明对于一切正整数 $m, n$

$$
\frac{\left( {5m}\right) !\left( {5n}\right) !}{m!n!\left( {{3m} + n}\right) !\left( {{3n} + m}\right) !}
$$

是整数.

【证】(a) 设 $x = \left\lbrack  x\right\rbrack   + {x}_{0}, y = \left\lbrack  y\right\rbrack   + {y}_{0}$ ,其中 $0 \leq  {x}_{0}$ , ${y}_{0} < 1,\left\lbrack  x\right\rbrack$ 和 $\left\lbrack  y\right\rbrack$ 是非负整数. 由定理 6,所求证之不等式就成为

$$
\left\lbrack  x\right\rbrack   + \left\lbrack  y\right\rbrack   + \left\lbrack  {5{x}_{0}}\right\rbrack   + \left\lbrack  {5{y}_{0}}\right\rbrack   \geq  \left\lbrack  {3{x}_{0} + {y}_{0}}\right\rbrack   + \left\lbrack  {3{y}_{0} + {x}_{0}}\right\rbrack  .
$$

因此, 如果能证明

$$
\left\lbrack  {5{x}_{0}}\right\rbrack   + \left\lbrack  {5{y}_{0}}\right\rbrack   \geq  \left\lbrack  {3{x}_{0} + {y}_{0}}\right\rbrack   + \left\lbrack  {3{y}_{0} + {x}_{0}}\right\rbrack  ,0 \leq  {x}_{0},{y}_{0} < 1.
$$

命题 (a) 证完. 由于 ${x}_{0} = 0$ 或 ${y}_{0} = 0$ 时不等式显然成立,因此只需证明

$$
\left\lbrack  {5x}\right\rbrack   + \left\lbrack  {5y}\right\rbrack   \geq  \left\lbrack  {{3x} + y}\right\rbrack   + \left\lbrack  {{3y} + x}\right\rbrack  ,0 < x, y < 1.
$$

不妨设 $x \geq  y$ 。上不等式可写作

$$
\left\lbrack  {5x}\right\rbrack   - \left\lbrack  {{3x} + y}\right\rbrack   \geq  \left\lbrack  {{3y} + x}\right\rbrack   - \left\lbrack  {5y}\right\rbrack  ,0 < x, y < 1.
$$

当 ${3y} + x \leq  {5y}$ ,即 $x \leq  {2y}$ 时,上不等式显然成立 (左边不小于 0, 右边不大于 0 ). 因此,只需在 $x > {2y},0 < x, y < 1, x \geq  y$ 下来证明

$$
\left\lbrack  {5x}\right\rbrack   + \left\lbrack  {5y}\right\rbrack   \geq  \left\lbrack  {{3x} + y}\right\rbrack   + \left\lbrack  {{3y} + x}\right\rbrack  .
$$

设 ${5x} = a + b,{5y} = c + d$ ,其中 $0 \leq  b, d < 1, a$ 和 $c$ 是非负整数, 不等式就成为

$$
a + c \geq  \left\lbrack  {\frac{{3a} + c}{5} + \frac{{3b} + d}{5}}\right\rbrack   + \left\lbrack  {\frac{{3c} + d}{5} + \frac{{3d} + b}{5}}\right\rbrack  . \tag{1}
$$

由 $1 > x > {2y}$ ,有 $5 > a + b > {2c} + {2d}$ ,故

$$
4 \geq  a \geq  {2c}\text{.} \tag{2}
$$

满足 (2) 式的 $a, c$ 的一切值为

<table><tr><td>a</td><td>4</td><td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>2</td><td>1</td><td>0</td></tr><tr><td>C</td><td>2</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>

容易验证,除 $a = 2, c = 0$ 和 $a = 1, c = 0$ 两种情况外,其余情况均满足

$$
a + c \geq  \left\lbrack  \frac{{3a} + c + 4}{5}\right\rbrack   + \left\lbrack  \frac{{3c} + a + 4}{5}\right\rbrack  . \tag{3}
$$

又由 ${3b} + d < 4,{3d} + b < 4$ ,故若 (3) 式成立,即有 (1) 式成立. 当 $a = 2, c = 0$ 时,由于 $\frac{{3b} + d}{5} < 1$ ,故 $\left\lbrack  {\frac{6}{5} + \frac{{3b} + d}{5}}\right\rbrack   = 1,\left\lbrack  \frac{2}{5}\right.$ $\left. {+\frac{{3d} + b}{5}}\right\rbrack   = 1$ ,所以这时 (1) 式成立. 同样可以验证当 $a = 1$ , $c = 0$ 时,(1) 式也成立.

(b) 要证明 $\frac{\left( {5m}\right) !\left( {5n}\right) !}{m!n!\left( {{3m} + n}\right) !\left( {{3n} + m}\right) !}$

是整数,根据定理 15,只需对于任意素数 $p$ ,有

$$
p\left\lbrack  {\left( {5m}\right) !\left( {5n}\right) !}\right\rbrack   \geq  p\left\lbrack  {m!n!\left( {{3m} + n}\right) !\left( {{3n} + m}\right) !}\right\rbrack  ,
$$

即证明 $p\left\lbrack  {\left( {5m}\right) !}\right\rbrack   + p\left\lbrack  {\left( {5n}\right) !}\right\rbrack   \geq  p\left( {m!}\right)  + p\left( {n!}\right)  + p\left\lbrack  {\left( {{3m} + n}\right) !}\right\rbrack$

$$
+ p\left\lbrack  {\left( {{3n} + m}\right) !}\right\rbrack  \text{.}
$$

由定理 17 , 有

$$
p\left( {m!}\right)  = \left\lbrack  \frac{m}{p}\right\rbrack   + \left\lbrack  \frac{m}{{p}^{2}}\right\rbrack   + \left\lbrack  \frac{m}{{p}^{3}}\right\rbrack   + \cdots \cdots ,
$$

因此只需证明

$$
\left\lbrack  \frac{5m}{{p}^{i}}\right\rbrack   + \left\lbrack  \frac{5n}{{p}^{i}}\right\rbrack   \geq  \left\lbrack  \frac{m}{{p}^{i}}\right\rbrack   + \left\lbrack  \frac{n}{{p}^{i}}\right\rbrack   + \left\lbrack  \frac{{3m} + n}{{p}^{i}}\right\rbrack  .
$$

$$
+ \left\lbrack  \frac{{3n} + m}{{p}^{i}}\right\rbrack  \text{.}
$$

事实上,对于任意整数 $r \geq  2$ ,可以证明

$$
\left\lbrack  \frac{5m}{r}\right\rbrack   + \left\lbrack  \frac{5n}{r}\right\rbrack   \geq  \left\lbrack  \frac{m}{r}\right\rbrack   + \left\lbrack  \frac{n}{r}\right\rbrack   + \left\lbrack  \frac{{3m} + n}{r}\right\rbrack
$$

$$
+ \left\lbrack  \frac{{3n} + m}{r}\right\rbrack  \text{.} \tag{4}
$$

为此, 设

$m = r{q}_{1} + x, n = r{q}_{2} + y,{q}_{1},{q}_{2}$ 是整数, $0 \leq  x, y < 1$ ,

(4)式就成为

$$
\left\lbrack  \frac{5x}{r}\right\rbrack   + \left\lbrack  \frac{5y}{r}\right\rbrack   \geq  \left\lbrack  \frac{{3x} + y}{r}\right\rbrack   + \left\lbrack  \frac{{3y} + x}{r}\right\rbrack  .
$$

此即(a).

4. 设 $n$ 是正整数,证明

$$
\left\lbrack  \frac{\left\lbrack  x\right\rbrack  }{n}\right\rbrack   = \left\lbrack  \frac{x}{n}\right\rbrack
$$

【证】由于 $\left\lbrack  x\right\rbrack   \leq  x < \left\lbrack  x\right\rbrack   + 1$ ,故

$$
\left\lbrack  \frac{\left\lbrack  x\right\rbrack  }{n}\right\rbrack   \leq  \frac{\left\lbrack  x\right\rbrack  }{n} \leq  \frac{x}{n} < \frac{\left\lbrack  x\right\rbrack  }{n} + \frac{1}{n}.
$$

由定理 5 有

$$
\frac{\left\lbrack  x\right\rbrack  }{n} \leq  \left\lbrack  \frac{\left\lbrack  x\right\rbrack  }{n}\right\rbrack   + 1 - \frac{1}{n}
$$

故 $\;\left\lbrack  \frac{\left\lbrack  x\right\rbrack  }{n}\right\rbrack   \leq  \frac{x}{n} < \left\lbrack  \frac{\left\lbrack  x\right\rbrack  }{n}\right\rbrack   + 1$ ,

所以有 $\left\lbrack  \frac{\left\lbrack  x\right\rbrack  }{n}\right\rbrack   = \left\lbrack  \frac{x}{n}\right\rbrack$ .

## 5. 证明: 对于同样的整数 $x$ 和 $y$ ,表达式

$$
{2x} + {3y},{9x} + {5y}
$$

同时能被 17 整除.

【证】设 $u = {2x} + {3y}, v = {9x} + {5y}$ .(1)

只要证明,对于能使 ${17} \mid  u$ 的整数 $x, y$ ,也能使 ${17} \mid  v$ ,反之亦然.

由 (1) 式有

$$
{3v} - {5u} = {17x},
$$

即

$$
{3v} = {5u} + {17x}, \tag{2}
$$

$$
{5u} = {3v} - {17x}\text{. } \tag{3.}
$$

由 (2) 式知,如果整数 $x, y$ 能使 ${17} \mid  u$ ,那么也能使 ${17} \mid  {3v}$ . 由于 17 是素数,17十3,故根据定理 14,有 ${17} \mid  v$ . 同样,由 (3) 式知, 如果整数 $x, y$ 能使 ${17} \mid  v$ ,那么也能使 ${17} \mid  {5u}$ ,由于17十5,故 ${17} \mid  u$ .

【注】本题的一般情况, 在问题 3 中研究.

6. 当 $n$ 是奇数时,证明 16 可整除

$$
{n}^{4} + 4{n}^{2} + {11}
$$

【证】对于 $n$ ,用数学归纳法证明.

当 $n = 1$ 时, ${n}^{4} + 4{n}^{2} + {11} = {16}$ ,显然是 16 的倍数. 设 $n = {2m}$ +1 时, ${n}^{4} + 4{n}^{2} + {11}$ 是 16 的倍数,则当 $n = {2m} + 3$ 时,有

$$
{n}^{4} + 4{n}^{2} + {11} = {\left\lbrack  \left( 2m + 1\right)  + 2\right\rbrack  }^{4} + 4{\left\lbrack  \left( 2m + 1\right)  + 2\right\rbrack  }^{2} + {11}
$$

$$
= \left\{  {{\left( 2m + 1\right) }^{4} + 4{\left( 2m + 1\right) }^{2} + {11}}\right\rbrack
$$

$$
+ {16}{\left( 2m + 1\right) }^{2}\left( {m + 2}\right)  + {48}\left( {{2m} + 1}\right)  + {16}.
$$

上式右边第二、三、四各项均是 16 的倍数, 由假设第一项也是 16 的倍数. 故当 $n$ 是一切奇数时,有

$$
{16} : {n}^{4} + 4{n}^{2} + {11}
$$

【另证】由于

$$
{n}^{4} + 4{n}^{2} + {11} = {n}^{4} + 4{n}^{2} - 5 + {16}
$$

$$
= \left( {{n}^{2} + 5}\right) \left( {{n}^{2} - 1}\right)  + {16}\text{. }
$$

故当 $n = {2m} + 1$ 时,有

$$
{n}^{4} + 4{n}^{2} + {11} = \left\lbrack  {{\left( 2m + 1\right) }^{2} + 5}\right\rbrack  \left\lbrack  {{\left( 2m + 1\right) }^{2} - 1}\right\rbrack   + {16}
$$

$$
= {8m}\left( {m + 1}\right) \left( {2{m}^{2} + {2m} + 3}\right)  + {16}\text{.}
$$

由于 $2 \mid  m\left( {m + 1}\right)$ ,故当 $n$ 是一切奇数时,有

$$
{16} \mid  {n}^{4} + 4{n}^{2} + {11}
$$

7. 证明: 对于一切整数, ${n}^{2} + {2n} + {12}$ 均不是 121 的倍数.

【证】用反证法,设 ${n}^{2} + {2n} + {12}$ 是 121 的倍数,即存在整数

$k$ ,使

$$
{n}^{2} + {2n} + {12} = {121k}
$$

于是, 有

$$
{\left( n + 1\right) }^{2} = {11}\left( {{11k} - 1}\right) .
$$

上式右边可被 11 整除,故 ${11} \mid  {\left( n + 1\right) }^{2}$ . 由于 11 是素数,根据定理16,有 ${11} \mid  \left( {n + 1}\right)$ . 于是 ${11}^{2} \mid  {11}\left( {{11k} - 1}\right)$ ,即 ${11} \mid  {11k} - 1$ ,从而有 ${11} \mid   - 1$ 。这显然是不可能的.

8. 证明: 任给五个整数, 必能从其中选出三个, 使得它们之和能被 3 整除.

【证】任意整数必可写作下列形式

$$
{3k},{3k} + 1,{3k} + 2
$$

之一,其中 $k$ 为整数. 因此,如果给定的五个整数中有三个分别属于上述三种形式, 那么这三个整数之和必可被 3 整除; 如果给定的五个整数只属于上述三种形式之一种或两种, 那么必有三个整数属于同一种形式, 这三个整数之和便可被 3 整除.

因此, 从给定的五个整数中, 必可选出三个, 它们之和被 3整除。

1. (代给 $n$ 个整数,证明必能从其中选出 $k$ 个,使得它们之和能被擦除。

【证】设 ${a}_{1},{a}_{2},\cdots ,{a}_{n}$ 是给定的 $n$ 个整数。作和

$$
{s}_{1} = {a}_{1},
$$

$$
{s}_{2} = {a}_{1} + {a}_{2}
$$

$$
{s}_{3} = {a}_{1} + {a}_{2} + {a}_{3}
$$

$$
\vdots
$$

$$
{s}_{n} = {a}_{1} + {a}_{2} + {a}_{3} + \cdots  + {a}_{n}
$$

将这 $n$ 个和 ${s}_{i}$ 分作 $n$ 类,所有被 $n$ 除时余数相同的算作同一类. 一个整数被 $n$ 除,其余数只能是下列形式之一:

$$
0,1,2,\cdots , n - 1,
$$

因此,如果 ${s}_{i}\left( {i = 1,2,\cdots , n}\right)$ 属于不同的类,那么其中一定有一个 ${s}_{k}$ 可被 $n$ 整除。如果这 $n$ 个和数 ${s}_{i}$ 中,有两个 ${s}_{p}$ 和 ${s}_{q}$ 属于同一类,不妨设 $p < q = p + k$ ,则

$$
{a}_{p + 1} + {a}_{p + 2} + \cdots  + {a}_{p + k}
$$

必可被 $n$ 整除,这是因为

$$
{s}_{q} - {s}_{p} = {a}_{p + 1} + {a}_{p + 2} + \cdots  + {a}_{p + k},
$$

且 $n \mid  {s}_{q} - {s}_{p}$ 的缘故.

10. 证明: 如果 $a, b$ 是整数, ${a}^{2} + {ab} + {b}^{2}$ 能被 9 整除,则 $a$ , $b$ 能被 3 整除。

【证】将 ${a}^{2} + {ab} + {b}^{2}$ 写作

$$
{a}^{2} + {ab} + {b}^{2} = {\left( a - b\right) }^{2} + {3ab}
$$

根据假设 $9 \mid  {a}^{2} + {ab} + {b}^{2}$ ,故 $3 \mid  {a}^{2} + {ab} + {b}^{2}$ . 由于 $3 \mid  {3ab}$ ,故由上式知, $3 \mid  {\left( a - b\right) }^{2}$ . 由于 3 是素数,故必 $3 \mid  a - b$ . 从而 $9 \mid  {\left( a - b\right) }^{2}$ . 因此,由上式就有 $9 \mid  {3ab}$ ,从而有 $3 \mid  {ab}$ . 根据定理 14,必有 $3 \mid  a$ 或者 $3 \mid  b$ . 因此,当 $3 \mid  a$ 或 $3 \mid  b$ 中有一个成立时,由 $3 \mid  a - b$ ,就有另一个成立. 故必 $3 \mid  a$ 和 $3 \mid  b$ 同时成立.

【注】整数 $a$ 和 $b$ 的每一个被 3 除时,其余数只能是0,1,2中的一个, 取余数的所有可能组合(共九种), 也能得到本题的证明.

11. 证明: 当 $n$ 是偶数时,数 ${3}^{n} + 1$ 能被 2 整除; 当 $n$ 是奇

$$
\text{3 d1}
$$

数时, ${3}^{n} + 1$ 能被 ${2}^{2}$ 整除. 但不管 $n$ 是偶数还是奇数, ${3}^{n} + 1$ 不能被 2 的任何更高次幂整除。

【证】首先证明: 任何奇数的平方被 8 除时余 1 . 事实上, 设 $a = {2k} + 1$ ,则 ${a}^{2} = {\left( 2k + 1\right) }^{2} = {4k}\left( {k + 1}\right)  + 1$ ,由于 $2 \mid  k\left( {k + 1}\right)$ , 故知结论成立.

当 $n$ 是偶数时,设 $n = {2m}$ ,利用上述结论就有

$$
{3}^{n} = {3}^{2m} = {\left( {3}^{m}\right) }^{2} = {8a} + 1,
$$

其中 $a$ 是整数。因此

$$
{3}^{n} + 1 = 2\left( {{4a} + 1}\right) \text{.}
$$

当 $n$ 是奇数时,设 $n = {2m} + 1$ ,就有

$$
{3}^{n} + 1 = {3}^{{2n} + 1} + 1 = 3\left( {{8a} + 1}\right)  + 1 = 4\left( {{6a} + 1}\right) .
$$

因为 ${4a} + 1$ 和 ${6a} + 1$ 都是奇数,故本题得证.

【注】1. 利用本书第三章同余的概念, 本题的证明还可简单些.

2. 利用本题结论,可证: 如果 $p$ 是大于 1 的整数,那么 ${3}^{p} + 1$ 不可能被 ${2}^{p}$ 整除。

12. 试证明任意一个整数与它的数字和的差必能 被 9 整除, 并且它与它的数字作任意调换后所成整数的差也能被 9 整除.

【证】设整数 $m$ 的个位、十位、百位...的数字分别为 ${a}_{1}$ , ${a}_{2},\cdots ,{a}_{n}$ ,则 $m$ 可表作:

$$
m = {a}_{1} + {10}{a}_{2} + {100}{a}_{3} + \cdots  + {10}^{n - 1}{a}_{n}
$$

$$
= \left( {{a}_{1} + {a}_{2} + {a}_{3} + \cdots  + {a}_{n}}\right)  + \left( {9{a}_{2} + {99}{a}_{3} + \cdots  + \overset{⏜}{{99}\cdots 9{a}_{n}}}\right)
$$

$$
= \left( {{a}_{1} + {a}_{2} + {a}_{3} + \cdots  + {a}_{n}}\right)  + 9\left( {{a}_{2} + {11}{a}_{3} + \cdots  + \overset{n - 1\text{ 个 }}{\overbrace{{11}\cdots 1}}{a}_{n}}\right) 。
$$

所以 $m - \left( {{a}_{1} + {a}_{2} + {a}_{3} + \cdots  + {a}_{n}}\right)$

$$
= 9\left( {{a}_{2} + {11}{a}_{3} + \cdots  + \overset{n - 1\text{ 个 }}{\overbrace{{11}\cdots 1}}{a}_{n}}\right) .
$$

因为 ${a}_{2},{a}_{3},\cdots ,{a}_{n}$ 都是整数,所以任一整数与其数字之和 的差必能被 9 整除。

再设将 ${a}_{1},{a}_{2},\cdots ,{a}_{n}$ 按任一种顺序排成 ${a}_{1}^{\prime },{a}_{2}^{\prime },\cdots ,{a}_{n}^{\prime }$ , 并令

$$
\sigma  = {a}_{1} + {a}_{2} + \cdots  + {a}_{n},{\sigma }^{\prime } = {a}_{1}^{\prime } + {a}_{2}^{\prime } + \cdots  + {a}_{n}^{\prime },
$$

$$
m = {a}_{1} + {10}{a}_{2} + \cdots  + {10}^{n - 1}{a}_{n},
$$

$$
{m}^{\prime } = {a}_{1}^{\prime } + {10}{a}_{2}^{\prime } + \cdots  + {10}^{n - 1}{a}_{n}^{\prime }.
$$

根据前面证明的结果,知存在整数 $A, B$ ,使

$$
m - \sigma  = {9A},{m}^{\prime } - {\sigma }^{\prime } = {9B}.
$$

因为 $\sigma  = {\sigma }^{\prime }$ ,所以有

$$
m - {m}^{\prime } = \sigma  + {9A} - {\sigma }^{\prime } - {9B} = 9\left( {A - B}\right) .
$$

由于 $A - B$ 是整数,这就证明了 $m - {m}^{\prime }$ 能被 9 整除.

【注】若对某个整数 $k\left( {1 \leq  k \leq  n}\right)$ ,有 ${a}_{k}^{\prime } \neq  0$ ,但当 $k < i \leq  n$ 时, ${a}_{i}^{\prime } = 0$ ,则此时 ${m}^{\prime }$ 为整数:

$$
{m}^{\prime } = {a}_{1}^{\prime } + {10}{a}_{2}^{\prime } + \cdots  + {10}^{k - 1}{a}_{k}^{\prime }\text{,即}{m}^{\prime } = {a}_{k}^{\prime }\cdots {a}_{2}^{\prime }{a}_{1}^{\prime }\text{.}
$$

如前证,此时结论正确。又当 $m$ 为负整数及零时,结论显然 正确.

13. 从 176 到 545 的所有整数中, 13 的倍数有几个?

【解】由定理 6, 从 1 到 176 的整数中, 13 的倍数的个数是

$$
\left\lbrack  \frac{176}{13}\right\rbrack   = \left\lbrack  {{13} + \frac{7}{13}}\right\rbrack   = {13}
$$

从 1 到 545 的整数中, 13 的倍数的个数是

$$
\left\lbrack  \frac{545}{13}\right\rbrack   = \left\lbrack  {{41} + \frac{12}{13}}\right\rbrack   = {41}.
$$

由于176 不是 13 的倍数, 故从 176 到 545 的所有整数中, 13 的倍数