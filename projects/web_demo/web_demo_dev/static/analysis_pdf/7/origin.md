$$
= \mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\cos t - {\mathrm{e}}^{-\frac{1}{2}{t}^{2}}}{{t}^{4}}
$$

方法 1 用洛必达法则求这个极限

$$
I = \mathop{\lim }\limits_{{t \rightarrow  0}}\frac{-\sin t + t{\mathrm{e}}^{-\frac{1}{2}{t}^{2}}}{4{t}^{3}} = \mathop{\lim }\limits_{{t \rightarrow  0}}\frac{-\cos t + {\mathrm{e}}^{-\frac{1}{2}{t}^{2}} - {t}^{2}{\mathrm{e}}^{-\frac{1}{2}{t}^{2}}}{{12}{t}^{2}}
$$

$$
\overset{\text{分解法 }}{ = }\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{1 - \cos t}{{12}{t}^{2}} + \mathop{\lim }\limits_{{t \rightarrow  0}}\frac{{\mathrm{e}}^{-\frac{1}{2}{t}^{2}} - 1}{{12}{t}^{2}} - \frac{1}{12}
$$

$$
= \frac{1}{24} - \frac{1}{24} - \frac{1}{12} =  - \frac{1}{12}
$$

其中 $1 - \cos t \sim  \frac{1}{2}{t}^{2},{\mathrm{e}}^{-\frac{1}{2}{t}^{2}} - 1 \sim   - \frac{1}{2}{t}^{2}\left( {t \rightarrow  0}\right)$ ,选 (D).

方法 2 用泰勒公式求这个极限

$$
\cos t = 1 - \frac{1}{2!}{t}^{2} + \frac{1}{4!}{t}^{4} + o\left( {t}^{4}\right) \;\left( {t \rightarrow  0}\right)
$$

$$
{\mathrm{e}}^{-\frac{{t}^{2}}{2}} = 1 + \left( {-\frac{{t}^{2}}{2}}\right)  + \frac{1}{2!}{\left( -\frac{{t}^{2}}{2}\right) }^{2} + o\left( {t}^{4}\right) \;\left( {t \rightarrow  0}\right)
$$

相减得

$$
\cos t - {\mathrm{e}}^{-\frac{{t}^{2}}{2}} = \left( {\frac{1}{4!} - \frac{1}{2!} \cdot  \frac{1}{4}}\right) {t}^{4} + o\left( {t}^{4}\right)  =  - \frac{1}{12}{t}^{4} + o\left( {t}^{4}\right)
$$

因此 $I = \mathop{\lim }\limits_{{t \rightarrow  0}}\frac{-\frac{1}{12}{t}^{4} + o\left( {t}^{4}\right) }{{t}^{4}} =  - \frac{1}{12}$ .

【评注】求 $\frac{0}{0}$ 型极限常可用洛必达法则或泰勒公式,若需多次用洛必达法则,导致求导计算不方便,而又容易由间接法求得分子、分母的泰勒公式时,应该用泰勒公式求这类 $\frac{0}{0}$ 型极限.

131 【答案】 D

【分析】 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos {2x} - \sqrt{\cos {2x}}}{{x}^{k}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\left( \cos 2x\right) }^{2} - \cos {2x}}{{x}^{k}\left( {\cos {2x} + \sqrt{\cos {2x}}}\right) }$

$$
= \frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos {2x} - 1}{{x}^{k}}
$$

$$
= \frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{-\frac{1}{2}{\left( 2x\right) }^{2}}{{x}^{k}} = a \neq  0
$$

所以 $k = 2, a =  - 1$ .

132 (答案) C

【分析】 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos \left( {\sin x}\right)  - \cos x}{\left( {1 - \cos x}\right) {\sin }^{2}x} = 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos \left( {\sin x}\right)  - \cos x}{{x}^{4}}$ .

由三角公式可知, $\cos \left( {\sin x}\right)  - \cos x = 2\sin \frac{x + \sin x}{2}\sin \frac{x - \sin x}{2}$ ,所以当 $x \rightarrow  0$ 时,

$$
\cos \left( {\sin x}\right)  - \cos x \sim  \frac{1}{2}\left( {x + \sin x}\right) \left( {x - \sin x}\right)
$$

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos \left( {\sin x}\right)  - \cos x}{\left( {1 - \cos x}\right) {\sin }^{2}x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\left( {x + \sin x}\right) \left( {x - \sin x}\right) }{{x}^{4}} = 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x - \sin x}{{x}^{3}}
$$

$$
= \frac{2}{3}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1 - \cos x}{{x}^{2}} = \frac{1}{3}
$$

133 【答案】 D

【分析】 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\left( 1 + \frac{1}{x}\right) }^{{x}^{2}}}{{\mathrm{e}}^{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\mathrm{e}}^{{x}^{2}\ln \left( {1 + \frac{1}{x}}\right) }}{{\mathrm{e}}^{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}{\mathrm{e}}^{{x}^{2}\ln \left( {1 + \frac{1}{x}}\right)  - x}$ .

而由泰勒展开, ${x}^{2}\ln \left( {1 + \frac{1}{x}}\right)  - x = {x}^{2}\left( {\frac{1}{x} - \frac{1}{2{x}^{2}} + o\left( {x}^{-2}\right) }\right)  - x =  - \frac{1}{2} + o\left( 1\right) , x \rightarrow   + \infty$ ,

所以 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\left( 1 + \frac{1}{x}\right) }^{{x}^{2}}}{{\mathrm{e}}^{x}} = {\mathrm{e}}^{-\frac{1}{2}}$ .

134 【答案】 A

【分析】将已知条件改写成

$$
I = a + \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{bx} + 1 - {\mathrm{e}}^{{x}^{2} - {2x}}}{{x}^{2}} = 2
$$

即

$$
{I}_{1} = 2 - a
$$

其中 ${I}_{1} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{bx} + 1 - {\mathrm{e}}^{{x}^{2} - {2x}}}{{x}^{2}}$ 存在,由此定出参数 $a$ 与 $b$ .

方法 1 用洛必达法则:

$$
{I}_{1}\frac{\frac{0}{0}}{\text{ 洛必达法则 }}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{b - \left( {{2x} - 2}\right) {\mathrm{e}}^{{x}^{2} - {2x}}}{2x}
$$

分母极限为 0,分子极限为 $b + 2$ ,若 $b + 2 \neq  0$ ,则极限 ${I}_{1}$ 为 $\infty$ ,但极限 ${I}_{1}$ 存在,故必有 $b + 2 = 0$ , 即 $b =  - 2$ ,于是代入 $b =  - 2$ 后该极限为 $\frac{0}{0}$ 型,可用洛必达法则得

$$
{I}_{1}\overset{b =  - 2}{ = }\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{-{\left( 2x - 2\right) }^{2}{\mathrm{e}}^{{x}^{2} - {2x}} - 2{\mathrm{e}}^{{x}^{2} - {2x}}}{2}\overset{\text{ 代入 }x = 0}{ = }\frac{-6}{2} =  - 3
$$

因此 $2 - a =  - 3, b =  - 2$ . 即 $a = 5, b =  - 2$ . 选 (A).

方法 2 用泰勒公式:

由极限与无穷小的关系

$$
{I}_{1} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{bx} + 1 - {\mathrm{e}}^{{x}^{2} - {2x}}}{{x}^{2}} = 2 - a
$$

可写成

$$
{bx} + 1 - {\mathrm{e}}^{{x}^{2} - {2x}} = \left( {2 - a}\right) {x}^{2} + o\left( {x}^{2}\right)
$$

由泰勒公式

$$
{\mathrm{e}}^{t} = 1 + t + \frac{1}{2!}{t}^{2} + o\left( {t}^{2}\right) \left( {t \rightarrow  0}\right)
$$

令 $t = {x}^{2} - {2x}$ ,则

$$
{t}^{2} = {\left( {x}^{2} - 2x\right) }^{2} = {x}^{4} - 4{x}^{3} + 4{x}^{2} = 4{x}^{2} + o\left( {x}^{2}\right) \left( {x \rightarrow  0}\right)
$$

$$
o\left( {t}^{2}\right)  = o\left( {x}^{2}\right) \;\left( {x \rightarrow  0}\right)
$$

$$
{\mathrm{e}}^{{x}^{2} - {2x}} = 1 + \left( {-{2x} + {x}^{2}}\right)  + \frac{1}{2}\left( {4{x}^{2}}\right)  + o\left( {x}^{2}\right)
$$

$$
= 1 - {2x} + 3{x}^{2} + o\left( {x}^{2}\right)
$$

$$
\text{于是}\;{bx} + 1 - {\mathrm{e}}^{{x}^{2} - {2x}} = \left( {b + 2}\right) x - 3{x}^{2} + o\left( {x}^{2}\right)  = \left( {2 - a}\right) {x}^{2} + o\left( {x}^{2}\right)
$$

由此得 $b + 2 = 0, - 3 = 2 - a$ ,即 $a = 5, b =  - 2$ . 选 (A).

135 【答案】 B

【分析】 $\frac{\sin {6x} - \left( {\sin x}\right) f\left( x\right) }{{x}^{3}} = \frac{\sin {6x} - 6\sin x + \left( {\sin x}\right) \left( {6 - f\left( x\right) }\right) }{{x}^{3}}$

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin {6x} - \left( {\sin x}\right) f\left( x\right) }{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin {6x} - 6\sin x}{{x}^{3}} + \mathop{\lim }\limits_{{x \rightarrow  0}}\left\lbrack  {\frac{\sin x}{x} \cdot  \frac{6 - f\left( x\right) }{{x}^{2}}}\right\rbrack   = 0,
$$

由 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin x}{x} = 1 \Rightarrow$

$$
I\overset{\text{ 记 }}{ = }\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{6 - f\left( x\right) }{{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{6\sin x - \sin {6x}}{{x}^{3}}\overset{\text{ 记 }}{ = }{I}_{1}
$$

方法 1 用洛必达法则求 ${I}_{1}$

$$
{I}_{1} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{6\cos x - 6\cos {6x}}{3{x}^{2}} = 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{-\sin x + 6\sin {6x}}{2x} =  - 1 + {36} = {35}
$$

因此 $I = {35}$ . 选 (B).

方法 2 用泰勒公式

$\sin x = x - \frac{1}{6}{x}^{3} + o\left( {x}^{3}\right) ,6\sin x = {6x} - {x}^{3} + o\left( {x}^{3}\right)$

$\sin {6x} = {6x} - \frac{1}{6}{\left( 6x\right) }^{3} + o\left( {x}^{3}\right) , - \sin {6x} =  - {6x} + {36}{x}^{3} + o\left( {x}^{3}\right)$

$\Rightarrow  \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{6\sin x - \sin {6x}}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{35}{x}^{3} + o\left( {x}^{3}\right) }{{x}^{3}} = {35}$ .

因此 $I = {35}$ . 选 (B).

136 【答案】 D

【分析】方法 1 (A) 是错的. 因为 $n$ 是正整数,对数列没有导数概念,不能直接用洛必达法则.

(B) 是错的. 因为 $\mathop{\lim }\limits_{{x \rightarrow  1}}\frac{\pi \cos {\pi x}}{{6x} - 2}$ 已不是未定式,不能用洛必达法则.

(C) 也是错的. 用洛必达法则求 $\frac{0}{0}$ 型极限 $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{g\left( x\right) }$ 时,若 $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{f}^{\prime }\left( x\right) }{{g}^{\prime }\left( x\right) }$ 不存在,也不为 $\infty$ ,则

法则失效, 不能推出原极限不存在, 事实上该极限是存在的. 因此选 (D).

方法 2 (D) 是正确的.

用洛必达法则求 $\frac{0}{0}$ 型极限 $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{g\left( x\right) }$ 时,

若 $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{f}^{\prime }\left( x\right) }{{g}^{\prime }\left( x\right) } = A$ (有限数),则 $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{g\left( x\right) } = A$ .

若 $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{f}^{\prime }\left( x\right) }{{g}^{\prime }\left( x\right) } = \infty$ ,则 $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{g\left( x\right) } = \infty ,\left( \mathrm{D}\right)$ 正是后一种情形.

【评注】(A)(B)(C)的正确解法是:

(A) $\mathop{\lim }\limits_{{n \rightarrow  \infty }}\frac{\ln n}{n}$ 要数极限转化为函数极限 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\ln x}{x}\frac{\frac{\infty }{\infty }}{\text{ 洛必达法则 }}\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\left( \ln x\right) }^{\prime }}{{x}^{\prime }} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{1}{x} = 0$ .

(B) $\mathop{\lim }\limits_{{x \rightarrow  1}}\frac{\sin {\pi x}}{3{x}^{2} - {2x} - 1}\frac{\frac{0}{0}}{\text{ 洛必达法则 }}\mathop{\lim }\limits_{{x \rightarrow  1}}\frac{\pi \cos {\pi x}}{{6x} - 2} =  - \frac{\pi }{4}$ .

(C) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{x}^{2}\sin \frac{1}{x}}{\sin x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x}{\sin x} \cdot  \mathop{\lim }\limits_{{x \rightarrow  0}}\left( {x\sin \frac{1}{x}}\right)  = 1 \times  0 = 0$ .

(D) 的另一解法: $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x + \sin x}{x - \sin x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1 + \frac{\sin x}{x}}{1 - \frac{\sin x}{x}} = \infty$ (分子极限为 2,分母极限为 0 ).

## 137 【答案】 D

## 【分析】

$\frac{1}{{n}^{2} + n + n} + \frac{2}{{n}^{2} + n + n} + \cdots  + \frac{n}{{n}^{2} + n + n} \leq  \frac{1}{{n}^{2} + n + 1} + \frac{2}{{n}^{2} + n + 2} + \cdots  + \frac{n}{{n}^{2} + n + n}$

$$
\leq  \frac{1}{{n}^{2} + n + 1} + \frac{2}{{n}^{2} + n + 1} + \cdots  + \frac{n}{{n}^{2} + n + 1},
$$

所以 $\frac{1 + 2 + \cdots  + n}{{n}^{2} + n + n} \leq  \frac{1}{{n}^{2} + n + 1} + \frac{2}{{n}^{2} + n + 2} + \cdots  + \frac{n}{{n}^{2} + n + n} \leq  \frac{1 + 2 + \cdots  + n}{{n}^{2} + n + 1}$ .

而 $\mathop{\lim }\limits_{{n \rightarrow  \infty }}\frac{1 + 2 + \cdots  + n}{{n}^{2} + n + n} = \mathop{\lim }\limits_{{n \rightarrow  \infty }}\frac{\frac{1}{2}n\left( {n + 1}\right) }{{n}^{2} + n + n} = \frac{1}{2},\mathop{\lim }\limits_{{n \rightarrow  \infty }}\frac{1 + 2 + \cdots  + n}{{n}^{2} + n + 1} = \mathop{\lim }\limits_{{n \rightarrow  \infty }}\frac{\frac{1}{2}n\left( {n + 1}\right) }{{n}^{2} + n + 1} = \frac{1}{2}$ ,

所以由夹逼定理, $\mathop{\lim }\limits_{{n \rightarrow  \infty }}\left( {\frac{1}{{n}^{2} + n + 1} + \frac{2}{{n}^{2} + n + 2} + \cdots  + \frac{n}{{n}^{2} + n + n}}\right)  = \frac{1}{2}$ .

## 138 【答案】 C

【分析】逐一分析它们的阶.

(A) (考察等价无穷小)

${\left( 1 + x\right) }^{{x}^{2}} - 1 \sim  \ln \left\lbrack  {{\left( 1 + x\right) }^{{x}^{2}} - 1 + 1}\right\rbrack   = {x}^{2}\ln \left( {1 + x}\right)  \sim  {x}^{3}\left( {x \rightarrow  0}\right) , \Rightarrow  {\left( 1 + x\right) }^{{x}^{2}} - 1$ 是 $x$ 的三阶无穷小.

(B) (考察等价无穷小)

${\mathrm{e}}^{{x}^{4} - {2x}} - 1 \sim  {x}^{4} - {2x} \sim   - {2x}\left( {x \rightarrow  0}\right)  \Rightarrow  {\mathrm{e}}^{{x}^{4} - {2x}} - 1$ 是 $x$ 的一阶无穷小.

(C) (待定阶数法)

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{{x}^{2}}\sin {t}^{2}\mathrm{\;d}t}{{x}^{k}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{2x}\sin {x}^{4}}{k{x}^{k - 1}}\overset{k = 6}{ = }\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x \cdot  \sin {x}^{4}}{{3x} \cdot  {x}^{4}} = \frac{1}{3}
$$

$\Rightarrow  {\int }_{0}^{{x}^{2}}\sin {t}^{2}\mathrm{\;d}t$ 是 $x$ 的六阶无穷小.

(D) (待定阶数法或泰勒公式法)

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\left( 1 + 2x\right) }^{\frac{1}{2}} - {\left( 1 + 3x\right) }^{\frac{1}{3}}}{{x}^{k}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\frac{1}{2}{\left( 1 + 2x\right) }^{-\frac{1}{2}} \times  2 - \frac{1}{3}{\left( 1 + 3x\right) }^{-\frac{2}{3}} \times  3}{k{x}^{k - 1}}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{-\frac{1}{2}{\left( 1 + 2x\right) }^{-\frac{3}{2}} \times  2 + \frac{2}{3}{\left( 1 + 3x\right) }^{-\frac{5}{3}} \times  3}{k\left( {k - 1}\right) {x}^{k - 2}}\overset{k = 2}{ = }\frac{1}{2}
$$

$\Rightarrow  \sqrt{1 + {2x}} - \sqrt[3]{1 + {3x}}$ 是 $x$ 的二阶无穷小.

或用泰勒公式. 已知

$$
{\left( 1 + t\right) }^{\alpha } = 1 + {\alpha t} + \frac{1}{2}\alpha \left( {\alpha  - 1}\right) {t}^{2} + o\left( {t}^{2}\right) \left( {t \rightarrow  0}\right)
$$

$\Rightarrow  {\left( 1 + 2x\right) }^{\frac{1}{2}} - {\left( 1 + 3x\right) }^{\frac{1}{3}}$

$$
= 1 + \frac{1}{2} \times  {2x} + \frac{1}{2} \times  \frac{1}{2}\left( {\frac{1}{2} - 1}\right) {\left( 2x\right) }^{2} - \left\lbrack  {1 + \frac{1}{3} \times  {3x} + \frac{1}{2} \times  \frac{1}{3}\left( {\frac{1}{3} - 1}\right) {\left( 3x\right) }^{2}}\right\rbrack   + o\left( {x}^{2}\right)
$$

$$
= \left( {-\frac{1}{2} + 1}\right) {x}^{2} + o\left( {x}^{2}\right)  = \frac{1}{2}{x}^{2} + o\left( {x}^{2}\right)
$$

$\Rightarrow  \sqrt{1 + {2x}} - \sqrt[3]{1 + {3x}}$ 是 $x$ 的二阶无穷小. 因此选 (C).

139 【答案】 C

【分析】此类问题要逐一分析, 按无穷小阶的定义:

$\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{{\left( x - a\right) }^{n}} = A \neq  0$ (存在), $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{g\left( x\right) }{{\left( x - a\right) }^{m}} = B \neq  0$ (存在)

$\Rightarrow  \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) g\left( x\right) }{{\left( x - a\right) }^{n + m}} = \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{{\left( x - a\right) }^{n}} \cdot  \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{g\left( x\right) }{{\left( x - a\right) }^{m}} = A \cdot  B \neq  0$ (存在)

$\Rightarrow  f\left( x\right) g\left( x\right)$ 是(x - a)的 $n + m$ 阶无穷小;

又,若 $n > m$ ,

$\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{g\left( x\right) }/{\left( x - a\right) }^{n - m} = \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{{\left( x - a\right) }^{n}}/\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{g\left( x\right) }{{\left( x - a\right) }^{m}} = \frac{A}{B} \neq  0$ (存在)

$\Rightarrow  \frac{f\left( x\right) }{g\left( x\right) }$ 是(x - a)的 $n - m$ 阶无穷小,

因此 ①② 正确. 再考察

$$
\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right)  + g\left( x\right) }{{\left( x - a\right) }^{n}} = \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{{\left( x - a\right) }^{n}} + \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{g\left( x\right) }{{\left( x - a\right) }^{m}}{\left( x - a\right) }^{m - n}
$$

$$
= \left\{  \begin{array}{l} A + B \cdot  0 = A \neq  0\left( \text{ 存在 }\right) \left( {n < m}\right) \\  A + B\;\left( {n = m}\right)  \end{array}\right.
$$

由此得,当 $n < m$ 时 $f\left( x\right)  + g\left( x\right)$ 是 $x - a$ 的 $n$ 阶无穷小.

当 $n = m$ 时 $f\left( x\right)  + g\left( x\right)$ 是 $x - a$ 的 $n$ 阶 $\left( {A + B \neq  0}\right)$ 或高于 $n$ 阶 $\left( {A + B = 0}\right)$ 的无穷小.

例如, $x \rightarrow  0$ 时, $\sin x$ 与 $- x$ 均是 $x$ 的一阶无穷小,但

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin x - x}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos x - 1}{3{x}^{2}} =  - \frac{1}{6}
$$

即 $\sin x + \left( {-x}\right)$ 是 $x$ 的三阶无穷小,因此 ③ 不正确.

最后考察

$\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{\int }_{a}^{x}f\left( t\right) \mathrm{d}t}{{\left( x - a\right) }^{n + 1}} = \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{\left( {n + 1}\right) {\left( x - a\right) }^{n}} = \frac{A}{n + 1} \neq  0 \Rightarrow  {\int }_{a}^{x}f\left( t\right) \mathrm{d}t$ 是 $x - a$ 的 $n + 1$ 阶无穷小. 因此 ④ 正确. 选 (C).

【评注】本题是讨论无穷小阶的运算规律. 再补充一条:

设 $f\left( x\right)$ 在 $x = a$ 处 $n$ 阶可导, $x \rightarrow  a$ 时 $f\left( x\right)$ 是 $x - a$ 的 $n$ 阶无穷小 $\left( {n \geq  2}\right)$ ,则 ${f}^{\prime }\left( x\right)$ 是 $x - a$ 的 $n - 1$ 阶无穷小.

【证法一】 $f\left( x\right)$ 在 $x = a$ 有泰勒公式且为

$$
f\left( x\right)  = \frac{{f}^{\left( n\right) }\left( a\right) }{n!}{\left( x - a\right) }^{n} + o\left( {\left( x - a\right) }^{n}\right) \;\left( {x \rightarrow  a}\right)
$$

其中 ${f}^{\left( n\right) }\left( a\right)  \neq  0, f\left( a\right)  = {f}^{\prime }\left( a\right)  = \cdots  = {f}^{\left( n - 1\right) }\left( a\right)  = 0$ .

记 $g\left( x\right)  = {f}^{\prime }\left( x\right)$ 在 $x = a$ 处 $n - 1$ 阶可导,有泰勒公式

$$
g\left( x\right)  = g\left( a\right)  + {g}^{\prime }\left( a\right) \left( {x - a}\right)  + \cdots  + \frac{1}{\left( {n - 1}\right) !}{g}^{\left( n - 1\right) }\left( a\right) {\left( x - a\right) }^{n - 1} + o\left( {\left( x - a\right) }^{n - 1}\right)
$$

即

$$
{f}^{\prime }\left( x\right)  = \frac{1}{\left( {n - 1}\right) !}{f}^{\left( n\right) }\left( a\right) {\left( x - a\right) }^{n - 1} + o\left( {\left( x - a\right) }^{n - 1}\right) \left( {x \rightarrow  a}\right)
$$

因此, $x \rightarrow  a$ 时 ${f}^{\prime }\left( x\right)$ 是 $x - a$ 的 $n - 1$ 阶无穷小.

【证法二】连续用 $n - 1$ 次洛必达法则.

$f\left( x\right)$ 在 $x = a$ 处 $n$ 阶可导 $\left( {n \geq  2}\right)  \Rightarrow  f\left( x\right)$ 在 $x = a$ 邻域 $n - 1$ 阶可导且 ${f}^{\left( n - 1\right) }\left( x\right)$ 在 $x = a$ 连续.

$\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right) }{{\left( x - a\right) }^{n}} = \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{f}^{\prime }\left( x\right) }{n{\left( x - a\right) }^{n - 1}}$ (分子极限为 ${f}^{\prime }\left( a\right)  = 0$ ,否则该极限为 $\infty$ ,这不可能)

$= \cdots  = \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{f}^{\left( n - 1\right) }\left( x\right) }{n!\left( {x - a}\right) }$ (分子极限为 ${f}^{\left( n - 1\right) }\left( a\right)  = 0$ ,否则该极限为 $\infty$ ,不可能)

$$
= \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{f}^{\left( n - 1\right) }\left( x\right)  - {f}^{\left( n - 1\right) }\left( a\right) }{n!\left( {x - a}\right) } = \frac{1}{n!}{f}^{\left( n\right) }\left( a\right)  \neq  0
$$

$$
\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{f}^{\prime }\left( x\right) }{{\left( x - a\right) }^{n - 1}} = \frac{1}{\left( {n - 1}\right) !}{f}^{\left( n\right) }\left( a\right)  \neq  0
$$

因此 ${f}^{\prime }\left( x\right)$ 是 $x - a$ 的 $n - 1$ 阶无穷小.

140 【答案】 B

【分析】当 $x \rightarrow  0$ 时,设 $f\left( x\right)$ 为 $x$ 的 $p$ 阶无穷小,则

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{{x}^{p}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}t{\mathrm{e}}^{\sin t}\mathrm{\;d}t}{{x}^{p}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x{\mathrm{e}}^{\sin x}}{p{x}^{p - 1}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{p{x}^{p - 2}}
$$

当 $p = 2$ 时, $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{{x}^{p}} = \frac{1}{2}$ 为非零常数,所以当 $x \rightarrow  0$ 时, $f\left( x\right)$ 为 $x$ 的 2 阶无穷小.

141 (答案】 D

【分析】易知 (A),(B) 中 $f\left( u\right)$ 在 $\left( {-\infty , + \infty }\right)$ 连续, $g\left( x\right)$ 在 $\left( {-\infty , + \infty }\right)$ 连续 $\Rightarrow$ 复合函数 $f\left( {g\left( x\right) }\right)$ 在 $\left( {-\infty , + \infty }\right)$ 连续. 因此只须在(C),(D) 中选择.

方法 1 考察(C)

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}f\left( {g\left( x\right) }\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}f\left( {x + \frac{{\pi }^{2}}{4}}\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\left( {1 - \cos \sqrt{x + \frac{{\pi }^{2}}{4}}}\right)
$$

$$
= 1 - \cos \frac{\pi }{2} = 1\text{.}
$$

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}f\left( {g\left( x\right) }\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}f\left( x\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}\frac{\ln \left( {1 - {x}^{2}}\right) }{x}\sin \frac{1}{x}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}\frac{-{x}^{2}}{x}\sin \frac{1}{x} = 0.
$$

$\Rightarrow  x = 0$ 是 $f\left( {g\left( x\right) }\right)$ 的第一类间断点. 选 (D).

方法 2 考察(D)

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}f\left( {g\left( x\right) }\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}f\left( {\sin \frac{1}{x}}\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\left( {{\mathrm{e}}^{{\sin }^{2}\frac{1}{x}} + 1}\right)
$$

该极限不存在 $\Rightarrow  x = 0$ 是 $f\left( {g\left( x\right) }\right)$ 的第二类间断点. 选 (D).

或考察

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}f\left( {g\left( x\right) }\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}f\left( \frac{1}{x}\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}\left( {{\mathrm{e}}^{\frac{1}{{x}^{2}}} + 1}\right)  =  + \infty
$$

$\Rightarrow  x = 0$ 是 $f\left( {g\left( x\right) }\right)$ 的第二类间断点. 选 (D).

142 【答案】 C

【分析】

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ \pm  }}}\frac{x - 1}{x} =  \mp  \infty  \Rightarrow  \mathop{\lim }\limits_{{x \rightarrow  {0}^{ \pm  }}}\arctan \frac{x - 1}{x} =  \mp  \frac{\pi }{2}
$$

$\Rightarrow  \mathop{\lim }\limits_{{x \rightarrow  {0}^{ \pm  }}}f\left( x\right)  =  \mp  \frac{2}{\pi } \Rightarrow  x = 0$ 是 $f\left( x\right)$ 的第一类间断点.

又 $\mathop{\lim }\limits_{{x \rightarrow  1}}\frac{x - 1}{x} = 0 \Rightarrow  \mathop{\lim }\limits_{{x \rightarrow  1}}\arctan \frac{x - 1}{x} = 0 \Rightarrow  \mathop{\lim }\limits_{{x \rightarrow  1}}f\left( x\right)  = \infty$

$\Rightarrow  x = 1$ 是 $f\left( x\right)$ 的第二类间断点.

因此选 (C).

143 【答案】 B

【分析】方法 1 若 $f\left( x\right)  + \sin x$ 在 $x = {x}_{0}$ 连续 $\Rightarrow$

$$
f\left( x\right)  = \left( {f\left( x\right)  + \sin x}\right)  - \sin x
$$

在 $x = {x}_{0}$ 连续,与已知矛盾. 因此 $f\left( x\right)  + \sin x$ 在 ${x}_{0}$ 必间断. 选 (B).

【评注】设 $f\left( x\right)$ 在 $x = {x}_{0}$ 间断, $g\left( x\right)$ 在 $x = {x}_{0}$ 连续,则 $f\left( x\right)  \pm  g\left( x\right)$ 在 $x = {x}_{0}$ 间断.

方法 2 举反例说明 (A) (C) (D) 不对.

设 $f\left( x\right)  = \left\{  \begin{array}{ll} 0, & x \neq  0 \\  1, & x = 0 \end{array}\right.$ ,则 $f\left( x\right)$ 在 $x = 0$ 间断, $f\left( x\right)  \cdot  \sin x = 0\left( {\forall x}\right)$ 在 $x = 0$ 连续.

设 $f\left( x\right)  = \left\{  {\begin{matrix} 1, & x \geq  0 \\   - 1, & x < 0 \end{matrix} \Rightarrow  f\left( x\right) }\right.$ 在 $x = 0$ 间断,但 ${f}^{2}\left( x\right)  = 1\left( {\forall x}\right)$ ,

$\left| {f\left( x\right) }\right|  = 1\left( {\forall x}\right)$ 在 $x = 0$ 均连续,因此不选 $\left( \mathrm{A}\right) \left( \mathrm{C}\right) \left( \mathrm{D}\right)$ .

144 【答案】 A

【分析】由 “若 $\mathop{\lim }\limits_{{x \rightarrow  {x}_{0}}}f\left( x\right)  = a$ ,则 $\mathop{\lim }\limits_{{x \rightarrow  {x}_{0}}}\left| {f\left( x\right) }\right|  = \left| a\right|$ ” 可得 “如果 $\mathop{\lim }\limits_{{x \rightarrow  {x}_{0}}}f\left( x\right)  = f\left( {x}_{0}\right)$ ,则

$\mathop{\lim }\limits_{{x \rightarrow  {x}_{0}}}\left| {f\left( x\right) }\right|  = \left| {f\left( {x}_{0}\right) }\right|$ ”. 因此, $f\left( x\right)$ 在 ${x}_{0}$ 连续,则 $\left| {f\left( x\right) }\right|$ 在 ${x}_{0}$ 连续,但 $\left| {f\left( x\right) }\right|$ 在 ${x}_{0}$ 处连续, $f\left( x\right)$ 在 ${x}_{0}$ 处不一定连续.

如 $f\left( x\right)  = \left\{  \begin{matrix}  - 1, & x \geq  0 \\  1, & x < 0 \end{matrix}\right.$ ,在 $x = 0$ 不连续,但 $\left| {f\left( x\right) }\right|  = 1$ 在 $x = 0$ 处连续.

于是应选 (A).

145 【答案】 C

【分析】若存在 ${x}_{n} \in  \lbrack a, + \infty )$ 使得 $\mathop{\lim }\limits_{{n \rightarrow  \infty }}{x}_{n} =  + \infty ,\mathop{\lim }\limits_{{n \rightarrow  \infty }}f\left( {x}_{n}\right)  = \infty$ ,则 $f\left( x\right)$ 在 $\lbrack a, + \infty )$ 无界. 因为若 $f\left( x\right)$ 在 $\lbrack a, + \infty )$ 有界,即 $\left| {f\left( x\right) }\right|  \leq  M\left( {x \in  \lbrack a, + \infty }\right) ) \Rightarrow  \left| {f\left( {x}_{n}\right) }\right|  \leq  M$ 与 $\mathop{\lim }\limits_{{n \rightarrow  \infty }}f\left( {x}_{n}\right)  = \infty$ 矛盾.

若 $f\left( x\right)$ 在 $\lbrack a, + \infty )$ 无界 $\Rightarrow$ 对 $\forall$ 自然数 $n, f\left( x\right)$ 在 $\lbrack n, + \infty )$ 无界

$\Rightarrow$ 存在 ${x}_{n} \in  \lbrack n, + \infty ),\left| {f\left( {x}_{n}\right) }\right|  > n \Rightarrow  \mathop{\lim }\limits_{{n \rightarrow  \infty }}{x}_{n} =  + \infty ,\mathop{\lim }\limits_{{n \rightarrow  \infty }}f\left( {x}_{n}\right)  = \infty$ .

因此选 (C). 146 【答案】 C 【分析】先分别考察左、右可导性. 显然, $f\left( 0\right)  = 0$ . ${f}_{ + }^{\prime }\left( 0\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{f\left( x\right)  - f\left( 0\right) }{x} = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{1 - \cos {x}^{2}}{{x}^{4}} = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\frac{1}{2}{x}^{4}}{{x}^{4}} = \frac{1}{2}\left( { \Rightarrow  f\left( x\right) \text{ 在 }x = 0\text{ 右连续 }}\right)$ ${f}^{\prime }\left( 0\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}\frac{f\left( x\right)  - f\left( 0\right) }{x} = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}g\left( x\right) \frac{{\arcsin }^{2}x}{x}$ 有界变量与无穷小之积 $0 \Leftrightarrow  f\left( x\right)$ 在 $x = 0$ 左连续 ${f}_{ + }^{\prime }\left( 0\right)  \neq  {f}_{ - }^{\prime }\left( 0\right)$ . 因此 $f\left( x\right)$ 在 $x = 0$ 连续,但不可导. 选(C).

【评注】函数 $f\left( x\right)$ 在 $x = {x}_{0}$ 左可导且右可导,则 $f\left( x\right)$ 在 $x = {x}_{0}$ 连续,从而它在 ${x}_{0}$ 处的极限存在.

147 【答案】 A

【分析】 $\left| x\right|  \neq  1$ 时显然可导. 由于 $f\left( x\right)$ 是偶函数,故只须考察 $x = 1$ .

首先要求 $f\left( x\right)$ 在 $x = 1$ 连续,即 $\mathop{\lim }\limits_{{x \rightarrow  {1}^{ - }}}f\left( x\right)  = \mathop{\lim }\limits_{{x \rightarrow  {1}^{ + }}}f\left( x\right)  = f\left( 1\right)$

即

$$
\mathop{\lim }\limits_{{x \rightarrow  {1}^{ - }}}{\mathrm{e}}^{\frac{1}{{x}^{2} - 1}} = 1 - b + c,0 = 1 - b + c
$$

又 ${f}_{ + }^{\prime }\left( 1\right)  = {\left. {\left( {x}^{4} - b{x}^{2} + c\right) }^{\prime }\right| }_{x = 1} = 4 - {2b}$

${f}_{ - }^{\prime }\left( 1\right)  = \mathop{\lim }\limits_{{x \rightarrow  {1}^{ - }}}\frac{{\mathrm{e}}^{\frac{1}{{x}^{2} - 1}} - 0}{x - 1}\frac{\frac{0}{0}}{\text{ (洛必达法则) }}\mathop{\lim }\limits_{{x \rightarrow  {1}^{ - }}}\frac{-{2x}}{{\left( {x}^{2} - 1\right) }^{2}}{\mathrm{e}}^{\frac{1}{{x}^{2} - 1}}$

$$
=  - 2\mathop{\lim }\limits_{{x \rightarrow  {1}^{ - }}}\frac{{\mathrm{e}}^{\frac{1}{{x}^{2} - 1}}}{{\left( {x}^{2} - 1\right) }^{2}}\overset{t = \frac{1}{{x}^{2} - 1}}{ = } - 2\mathop{\lim }\limits_{{t \rightarrow   - \infty }}{t}^{2}{\mathrm{e}}^{t} = 0
$$

现要求 ${f}_{ + }^{\prime }\left( 1\right)  = {f}_{ - }^{\prime }\left( 1\right)$ ,即 $4 - {2b} = 0$ .

因此, $b = 2, c = 1$ . 选 (A).

【评注】有一类如下类型的分段函数:

设 $f\left( x\right)  = \left\{  \begin{array}{ll} g\left( x\right) , & {x}_{0} - \delta  < x \leq  {x}_{0} \\  h\left( x\right) , & {x}_{0} < x < {x}_{0} + \delta  \end{array}\right.$ , $\delta$ 为大于零的常数, $h\left( x\right)$ 在 ${x}_{0}$ 无定义,又 ${g}_{ - }^{\prime }\left( {x}_{0}\right)$ ,

$\mathop{\lim }\limits_{{x \rightarrow  {x}_{0}^{ + }}}h\left( x\right)  = a,\mathop{\lim }\limits_{{x \rightarrow  {x}_{0}^{ + }}}\frac{h\left( x\right)  - a}{x - {x}_{0}} = b$ 均存在.

现考察 $f\left( x\right)$ 在 $x = {x}_{0}$ 的可导性.

首先考察 $f\left( x\right)$ 在 $x = {x}_{0}$ 的连续性.

$f\left( x\right)$ 在 $x = {x}_{0}$ 连续 $\Leftrightarrow  \mathop{\lim }\limits_{{x \rightarrow  {x}_{0}^{ + }}}f\left( x\right)  = \mathop{\lim }\limits_{{x \rightarrow  {x}_{0}^{ - }}}f\left( x\right)  = f\left( {x}_{0}\right)$

$\Leftrightarrow  \mathop{\lim }\limits_{{x \rightarrow  {x}_{0}^{ + }}}h\left( x\right)  = \mathop{\lim }\limits_{{x \rightarrow  {x}_{0}^{ - }}}g\left( x\right)  = g\left( {x}_{0}\right) \left( {{g}_{ - }^{\prime }\left( {x}_{0}\right) }\right.$ 存在,则 $g\left( x\right)$ 在 $x = {x}_{0}$ 左连续).

$\Leftrightarrow  a = g\left( {x}_{0}\right)$ . 补充定义 $h\left( {x}_{0}\right)  = a$ ,则

$$
{h}_{ + }^{\prime }\left( {x}_{0}\right)  = \mathop{\lim }\limits_{{x \rightarrow  {x}_{0}^{ + }}}\frac{h\left( x\right)  - h\left( {x}_{0}\right) }{x - {x}_{0}} = \mathop{\lim }\limits_{{x \rightarrow  {x}_{0}^{ + }}}\frac{h\left( x\right)  - a}{x - {x}_{0}} = b
$$

当 $g\left( {x}_{0}\right)  = a$ 时,

$$
f\left( x\right)  = \left\{  \begin{array}{l} g\left( x\right) ,{x}_{0} - \delta  < x \leq  {x}_{0} \\  h\left( x\right) ,{x}_{0} \leq  x < {x}_{0} + \delta  \end{array}\right.
$$

${f}^{\prime }\left( {x}_{0}\right)$ 存在 $\Leftrightarrow  {f}_{ - }^{\prime }\left( {x}_{0}\right)  = {f}_{ + }^{\prime }\left( {x}_{0}\right)  \Leftrightarrow  {g}_{ - }^{\prime }\left( {x}_{0}\right)  = {h}_{ + }^{\prime }\left( {x}_{0}\right)  = b$ .

因此在题设条件下, $f\left( x\right)$ 在 $x = {x}_{0}$ 可导 $\Leftrightarrow  g\left( {x}_{0}\right)  = a,{g}_{ - }^{\prime }\left( {x}_{0}\right)  = b$ .

148 【答案】 A

【分析】 ${f}^{\prime }\left( 0\right)  = \mathop{\lim }\limits_{{{\Delta x} \rightarrow  0}}\frac{f\left( {\Delta x}\right)  - f\left( 0\right) }{\Delta x} = \mathop{\lim }\limits_{{{\Delta x} \rightarrow  0}}\frac{g\left( {\Delta x}\right)  - {\mathrm{e}}^{-{\Delta x}}}{{\left( \Delta x\right) }^{2}}$ . 由洛必达法则,

$$
{f}^{\prime }\left( 0\right)  = \mathop{\lim }\limits_{{{\Delta x} \rightarrow  0}}\frac{{g}^{\prime }\left( {\Delta x}\right)  + {\mathrm{e}}^{-{\Delta x}}}{2\Delta x} = \mathop{\lim }\limits_{{{\Delta x} \rightarrow  0}}\frac{{g}^{\prime \prime }\left( {\Delta x}\right)  - {\mathrm{e}}^{-{\Delta x}}}{2} = \frac{{g}^{\prime \prime }\left( 0\right)  - 1}{2}
$$

$$
{f}^{\prime }\left( x\right)  = \left\{  \begin{matrix} \frac{x{g}^{\prime }\left( x\right)  - g\left( x\right)  + \left( {x + 1}\right) {\mathrm{e}}^{-x}}{{x}^{2}}, & x \neq  0 \\  \frac{{g}^{\prime \prime }\left( 0\right)  - 1}{2}, & x = 0 \end{matrix}\right.
$$

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x{g}^{\prime }\left( x\right)  - g\left( x\right)  + \left( {x + 1}\right) {\mathrm{e}}^{-x}}{{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{g}^{\prime }\left( x\right)  + x{g}^{\prime \prime }\left( x\right)  - {g}^{\prime }\left( x\right)  + {\mathrm{e}}^{-x} - \left( {x + 1}\right) {\mathrm{e}}^{-x}}{2x}
$$

$$
= \frac{{g}^{\prime \prime }\left( 0\right)  - 1}{2} = {f}^{\prime }\left( 0\right)
$$

所以 ${f}^{\prime }\left( x\right)$ 在 $\left( {-\infty , + \infty }\right)$ 上连续.

149 【答案】 B

【分析】当 $f\left( 0\right)  = 0$ 时,

${f}^{\prime }\left( 0\right)$ 存在 $\Leftrightarrow  \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right)  - f\left( 0\right) }{x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{x}$ 存在

$\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( {x}^{2}\right) }{{x}^{2}}$ 存在 $\underset{t = {x}^{2}}{ \Leftrightarrow  }\mathop{\lim }\limits_{{t \rightarrow  {0}^{ + }}}\frac{f\left( t\right) }{t} = \mathop{\lim }\limits_{{t \rightarrow  {0}^{ + }}}\frac{f\left( t\right)  - f\left( 0\right) }{t}$ 存在 $\Leftrightarrow  {f}_{ + }^{\prime }\left( 0\right)$ 存在

若 ${f}^{\prime }\left( 0\right)$ 存在 $\Rightarrow  {f}_{ + }^{\prime }\left( 0\right)$ 存在 $\Rightarrow  \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( {x}^{2}\right) }{{x}^{2}}$ 存在. 反之,若 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( {x}^{2}\right) }{{x}^{2}}$ 存在 $\Rightarrow  {f}_{ + }^{\prime }\left( 0\right)$ 存在 $\Rightarrow  {f}^{\prime }\left( 0\right)$ 存在. 因此选(B).

【评注】例 $f\left( x\right)  = \left| x\right| ,\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( {x}^{2}\right) }{{x}^{2}} = 1$ ,但 $f\left( x\right)$ 在 $x = 0$ 不可导. 150 【答案】 C 【分析】 ${f}^{\prime }\left( x\right)$ 也以 3 为周期 $\Rightarrow  {f}^{\prime }\left( 1\right)  = {f}^{\prime }\left( 4\right)$ ,我们可由 ${f}^{\prime }\left( 1\right)$ 求得极限值 $I$ .

$$
I = \mathop{\lim }\limits_{{h \rightarrow  0}}\frac{\left\lbrack  {f\left( {1 + h}\right)  - f\left( 1\right) }\right\rbrack   - \left\lbrack  {f\left( {1 - 3\tan h}\right)  - f\left( 1\right) }\right\rbrack  }{h}
$$

$$
= \mathop{\lim }\limits_{{h \rightarrow  0}}\frac{f\left( {1 + h}\right)  - f\left( 1\right) }{h} + \mathop{\lim }\limits_{{h \rightarrow  0}}\frac{f\left( {1 - 3\tan h}\right)  - f\left( 1\right) }{-3\tan h} \cdot  \frac{3\tan h}{h}
$$

$$
= \left( {1 + 3}\right) {f}^{\prime }\left( 1\right)  = 4
$$

应该选(C). 【评注】设 ${f}^{\prime }\left( a\right)$ 存在, $\mathop{\lim }\limits_{{x \rightarrow  {x}_{0}}}\varphi \left( x\right)  = 0$

$$
\Rightarrow  \mathop{\lim }\limits_{{x \rightarrow  {x}_{0}}}\frac{f\left( {a + \varphi \left( x\right) }\right)  - f\left( a\right) }{\varphi \left( x\right) }\overset{t = \varphi \left( x\right) }{ = }\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{f\left( {a + t}\right)  - f\left( a\right) }{t} = {f}^{\prime }\left( a\right) .
$$

本题就是利用 ${f}^{\prime }\left( 1\right)$ 来求

$$
\mathop{\lim }\limits_{{h \rightarrow  0}}\frac{f\left( {1 + \varphi \left( h\right) }\right)  - f\left( 1\right) }{\varphi \left( h\right) } = {f}^{\prime }\left( 1\right)
$$

其中 $\mathop{\lim }\limits_{{h \rightarrow  0}}\varphi \left( h\right)  = 0$ ,这里是 $\varphi \left( h\right)  = h$ 或 $\varphi \left( h\right)  =  - 3\tan h$ . 151 【答案】 C 【分析】因为 $f\left( x\right)  = \left| {x - a}\right| g\left( x\right)$ 在 $x = a$ 点处可导,所以

$$
\mathop{\lim }\limits_{{h \rightarrow  0}}\frac{f\left( {a + h}\right)  - f\left( a\right) }{h} = \mathop{\lim }\limits_{{h \rightarrow  0}}\frac{\left| h\right| }{h}g\left( {a + h}\right)
$$

存在. 而函数 $g\left( x\right)$ 在 $x = a$ 点处连续, $\mathop{\lim }\limits_{{h \rightarrow  0}}g\left( {a + h}\right)  = g\left( a\right) ,\mathop{\lim }\limits_{{h \rightarrow  {0}^{ \pm  }}}\frac{\left| h\right| }{h} =  \pm  1$ ,所以 $g\left( a\right)  = 0$ . 152 【答案】 C 【分析】 $f\left( x\right)  = {x}^{2}{\mathrm{e}}^{3x} = {x}^{2}\left( {1 + \frac{3}{1!}x + \frac{{3}^{2}}{2!}{x}^{2} + \cdots  + \frac{{3}^{n - 2}}{\left( {n - 1}\right) !}{x}^{n - 2} + o\left( {x}^{n - 2}\right) }\right)$

$$
= {x}^{2} + \frac{3}{1!}{x}^{3} + \frac{{3}^{2}}{2!}{x}^{4} + \cdots  + \frac{{3}^{n - 2}}{\left( {n - 2}\right) !}{x}^{n} + o\left( {x}^{n}\right) ,
$$

所以 $\frac{{f}^{\left( n\right) }\left( 0\right) }{n!} = \frac{{3}^{n - 2}}{\left( {n - 2}\right) !},{f}^{\left( n\right) }\left( 0\right)  = \frac{{3}^{n - 2}n!}{\left( {n - 2}\right) !} = {3}^{n - 2}n\left( {n - 1}\right)$ . 153 【答案】 B 【分析】方法 1 当 $f\left( a\right)  \neq  0$ 时 (不论 ${f}^{\prime }\left( a\right)$ 是正值还是负值),由连续性,在 $x = a$ 附近