## 目录 MULU

第三章 不定积分 1

§ 1. 最简单的不定积分 1

§ 2. 有理函数的积分法 36

§ 3. 无理函数的积分法 57

§ 4. 三角函数的积分法 77

§ 5. 各种超越函数的积分法 96

§ 6. 求函数积分的各种例子 107

第四章 定积分 121

§ 1. 定积分是积分和的极限 121

§ 2. 利用不定积分计算定积分的方法 132

§3. 中值定理 157

§4. 广义积分 162

§ 5. 面积的计算法 186

§ 6. 弧长的计算法 194

§ 7. 体积的计算法 200

§ 8. 旋转曲面表面积的计算法 208

§ 9. 矩的计算法. 质心的坐标 212

§ 10. 力学和物理学中的问题 216

§ 11. 定积分的近似计算法 220

## 第三章 不定积分

$§1$ . 最简单的不定积分

${1}^{ \circ  }$ 不定积分的概念 若函数 $f\left( x\right)$ 在区间(a, b)内有定义且连续, $F\left( x\right)$ 是它的原函数,即当 $a < x < b$ 时

${F}^{\prime }\left( x\right)  = f\left( x\right)$ ,则

$$
\int f\left( x\right) \mathrm{d}x = F\left( x\right)  + C,\;a < x < b,
$$

式中 $C$ 为任意常数.

${2}^{ \circ  }$ 不定积分的基本性质:

(1) $\mathrm{d}\left\lbrack  {\int f\left( x\right) \mathrm{d}x}\right\rbrack   = f\left( x\right) \mathrm{d}x$ ; (2) $\int \mathrm{d}\Phi \left( x\right)  = \Phi \left( x\right)  + C$ ;

(3) $\int {Af}\left( x\right) \mathrm{d}x = A\int f\left( x\right) \mathrm{d}x\;\left( {A\text{为常数,}A \neq  0}\right)$ ; (4) $\int \left\lbrack  {f\left( x\right)  + g\left( x\right) }\right\rbrack  \mathrm{d}x = \int f\left( x\right) \mathrm{d}x + \int g\left( x\right) \mathrm{d}x$ .

${3}^{ \circ  }$ 最简积分表:

I. $\int {x}^{n}\mathrm{\;d}x = \frac{{x}^{n + 1}}{n + 1} + C\;\left( {n \neq   - 1}\right)$ ; II. $\int \frac{\mathrm{d}x}{x} = \ln \left| x\right|  + C\;\left( {x \neq  0}\right)$ ;

III. $\int \frac{\mathrm{d}x}{1 + {x}^{2}} = \left\{  \begin{array}{l} \arctan x + C, \\   - \operatorname{arccot}x + C; \end{array}\right.$ IV. $\int \frac{\mathrm{d}x}{1 - {x}^{2}} = \frac{1}{2}\ln \left| \frac{1 + x}{1 - x}\right|  + C$ ;

V. $\int \frac{\mathrm{d}x}{\sqrt{1 - {x}^{2}}} = \left\{  \begin{array}{l} \arcsin x + C, \\   - \arccos x + C; \end{array}\right.$ VI. $\int \frac{\mathrm{d}x}{\sqrt{{x}^{2} \pm  1}} = \ln \left| {x + \sqrt{{x}^{2} \pm  1}}\right|  + C$ ;

VI. $\int {a}^{x}\mathrm{\;d}x = \frac{{a}^{x}}{\ln a} + C\left( {a > 0, a \neq  1}\right) ;\int {\mathrm{e}}^{x}\mathrm{\;d}x = {\mathrm{e}}^{x} + C$ ; VII. $\int \sin x\mathrm{\;d}x =  - \cos x + C$ ;

IX. $\int \cos x\mathrm{\;d}x = \sin x + C$ ; X. $\int \frac{\mathrm{d}x}{{\sin }^{2}x} =  - \cot x + C$ ;

$X\mathrm{I}\int \frac{\mathrm{d}x}{{\cos }^{2}x} = \tan x + C;.$ XII. $\int \operatorname{sh}x\mathrm{\;d}x = \operatorname{ch}x + C$ ;

XIII. $\int \operatorname{ch}x\mathrm{\;d}x = \operatorname{sh}x + C$ ; XIV. $\int \frac{\mathrm{d}x}{{\operatorname{sh}}^{2}x} =  - \coth x + C$ ;

XV. $\int \frac{\mathrm{d}x}{{\operatorname{ch}}^{2}x} = \operatorname{th}x + C$ .

## ${4}^{ \circ  }$ 积分的基本方法

(1)引入新变量法 若

$$
\int f\left( x\right) \mathrm{d}x = F\left( x\right)  + C,
$$

则 $\int f\left( u\right) \mathrm{d}u = F\left( u\right)  + C$ ,式中 $u = \varphi \left( x\right)$ 是连续可微函数.

(2)分项积分法 若

$$
f\left( x\right)  = {f}_{1}\left( x\right)  + {f}_{2}\left( x\right) ,
$$

则

$$
\int f\left( x\right) \mathrm{d}x = \int {f}_{1}\left( x\right) \mathrm{d}x + \int {f}_{2}\left( x\right) \mathrm{d}x.
$$

(3)代入法 若 $f\left( x\right)$ 连续,令 $\;x = \varphi \left( t\right)$ ,式中 $\varphi \left( t\right)$ 及其导数 ${\varphi }^{\prime }\left( t\right)$ 皆连续,

则得

$$
\int f\left( x\right) \mathrm{d}x = \int f\left\lbrack  {\varphi \left( t\right) }\right\rbrack  {\varphi }^{\prime }\left( t\right) \mathrm{d}t.
$$

(4)分部积分法 若 $u$ 和 $v$ 为 $x$ 的可微函数,则 $\int u\mathrm{\;d}v = {uv} - \int v\mathrm{\;d}u$ .

## 利用最简积分表,求下列积分 ${}^{ * }$ :

【1628】 $\int {\left( 3 - {x}^{2}\right) }^{3}\mathrm{\;d}x$ .

解 $\int {\left( 3 - {x}^{2}\right) }^{3}\mathrm{\;d}x = \int \left( {{27} - {27}{x}^{2} + 9{x}^{4} - {x}^{6}}\right) \mathrm{d}x = {27x} - 9{x}^{3} + \frac{9}{5}{x}^{5} - \frac{1}{7}{x}^{7} + C$ .

【1629】 $\int {x}^{2}{\left( 5 - x\right) }^{4}\mathrm{\;d}x$ .

解 $\int {x}^{2}{\left( 5 - x\right) }^{4}\mathrm{\;d}x = \int \left( {{625}{x}^{2} - {500}{x}^{3} + {150}{x}^{4} - {20}{x}^{5} + {x}^{6}}\right) \mathrm{d}x = \frac{625}{3}{x}^{3} - {125}{x}^{4} + {30}{x}^{5} - \frac{10}{3}{x}^{6} + \frac{1}{7}{x}^{7} + C$ .

【1630】 $\int \left( {1 - x}\right) \left( {1 - {2x}}\right) \left( {1 - {3x}}\right) \mathrm{d}x$ .

解 $\int \left( {1 - x}\right) \left( {1 - {2x}}\right) \left( {1 - {3x}}\right) \mathrm{d}x = \int \left( {1 - {6x} + {11}{x}^{2} - 6{x}^{3}}\right) \mathrm{d}x = x - 3{x}^{2} + \frac{11}{3}{x}^{3} - \frac{3}{2}{x}^{4} + C$ .

【1631】 $\int {\left( \frac{1 - x}{x}\right) }^{2}\mathrm{\;d}x$ .

解 $\int {\left( \frac{1 - x}{x}\right) }^{2}\mathrm{\;d}x = \int \left( {\frac{1}{{x}^{2}} - \frac{2}{x} + 1}\right) \mathrm{d}x =  - \frac{1}{x} - 2\ln \left| x\right|  + x + C$ .

【1632】 $\int \left( {\frac{a}{x} + \frac{{a}^{2}}{{x}^{2}} + \frac{{a}^{3}}{{x}^{3}}}\right) \mathrm{d}x$ .

解 $\int \left( {\frac{a}{x} + \frac{{a}^{2}}{{x}^{2}} + \frac{{a}^{3}}{{x}^{3}}}\right) \mathrm{d}x = a\ln \left| x\right|  - \frac{{a}^{2}}{x} - \frac{{a}^{3}}{2{x}^{2}} + C$ .

【1633】 $\int \frac{x + 1}{\sqrt{x}}\mathrm{\;d}x$ .

解 $\int \frac{x + 1}{\sqrt{x}}\mathrm{\;d}x = \int \left( {{x}^{\frac{1}{2}} + {x}^{-\frac{1}{2}}}\right) \mathrm{d}x = \frac{2}{3}x\sqrt{x} + 2\sqrt{x} + C$ .

【1634】 $\int \frac{\sqrt{x} - 2\sqrt[3]{{x}^{2}} + 1}{\sqrt[4]{x}}\mathrm{\;d}x$ .

解 $\int \frac{\sqrt{x} - 2\sqrt[3]{{x}^{2}} + 1}{\sqrt[4]{x}}\mathrm{\;d}x = \int \left( {{x}^{\frac{1}{4}} - 2{x}^{\frac{5}{12}} + {x}^{-\frac{1}{4}}}\right) \mathrm{d}x = \frac{4}{5}x\sqrt[4]{x} - \frac{24}{17}x\sqrt[{12}]{{x}^{5}} + \frac{4}{3}\sqrt[4]{{x}^{3}} + C$ .

【1635】 $\int \frac{{\left( 1 - x\right) }^{3}}{x\sqrt[3]{x}}\mathrm{\;d}x$ .

解 $\int \frac{{\left( 1 - x\right) }^{3}}{x\sqrt[3]{x}}\mathrm{\;d}x = \int \left( {{x}^{-\frac{4}{3}} - 3{x}^{-\frac{1}{3}} + 3{x}^{\frac{2}{3}} - {x}^{\frac{5}{3}}}\right) \mathrm{d}x =  - \frac{3}{\sqrt[3]{x}}\left( {1 + \frac{3}{2}x - \frac{3}{5}{x}^{2} + \frac{1}{8}{x}^{3}}\right)  + C$ .

【1636】 $\int \left( {1 - \frac{1}{{x}^{2}}}\right) \sqrt{x\sqrt{x}}\mathrm{\;d}x$ .

提示 注意 $\left( {1 - \frac{1}{{x}^{2}}}\right) \sqrt{x\sqrt{x}} = {x}^{\frac{3}{4}} - {x}^{-\frac{5}{4}}$ .

1634 题,1635 题,1637 题及 1638 题均可仿本题,将被积函数化成若干个幂函数的代数和,然后再利用分项积分法.

解 $\int \left( {1 - \frac{1}{{x}^{2}}}\right) \sqrt{x\sqrt{x}}\mathrm{\;d}x = \int \left( {{x}^{\frac{3}{4}} - {x}^{-\frac{5}{4}}}\right) \mathrm{d}x = \frac{4}{7}{x}^{\frac{7}{4}} + 4{x}^{-\frac{1}{4}} + C = \frac{4\left( {{x}^{2} + 7}\right) }{7\sqrt[4]{x}} + C$ .

【1637】 $\int \frac{{\left( \sqrt{2x} - \sqrt[3]{3x}\right) }^{2}}{x}\mathrm{\;d}x$ . 解 $\int \frac{{\left( \sqrt{2x} - \sqrt[3]{3x}\right) }^{2}}{x}\mathrm{\;d}x = \int \left( {2 - 2\sqrt[6]{72}{x}^{-\frac{1}{6}} + \sqrt[3]{9}{x}^{-\frac{1}{3}}}\right) \mathrm{d}x = {2x} - \frac{12}{5}\sqrt[6]{{72}{x}^{5}} + \frac{3}{2}\sqrt[3]{9{x}^{2}} + C$ .

---

* 本章在叙述习题及其解答过程中,凡出现的函数,无论是被积函数还是原函数,均默认是在有意义的定义域上进行的. 例如,最简积分表 I 中当 $n \leq   - 2$ 时,要求 $x \neq  0$ ; IV 中要求 $\left| x\right|  \neq  1$ ; $V$ 中要求 $\left| x\right|  < 1$ ; 以及 VI 中,当取负号时要求 $\left| x\right|  > 1$ ; 等等,就未加声明. 在题解中也有相当多的类似情况. 因此,如无特别声明,在一般情况下,这些定义域是很容易被读者确定的, 此处就不再予以一一指明.

---

【1638】 $\int \frac{\sqrt{{x}^{4} + {x}^{-4} + 2}}{{x}^{3}}\mathrm{\;d}x$ .

解 $\int \frac{\sqrt{{x}^{4} + {x}^{-4} + 2}}{{x}^{3}}\mathrm{\;d}x = \int \frac{{x}^{2} + \frac{1}{{x}^{2}}}{{x}^{3}}\mathrm{\;d}x = \int \left( {\frac{1}{x} + \frac{1}{{x}^{5}}}\right) \mathrm{d}x = \ln \left| x\right|  - \frac{1}{4{x}^{4}} + C$ .

【1639】 $\int \frac{{x}^{2}}{1 + {x}^{2}}\mathrm{\;d}x$ .

解 $\int \frac{{x}^{2}}{1 + {x}^{2}}\mathrm{\;d}x = \int \left( {1 - \frac{1}{{x}^{2} + 1}}\right) \mathrm{d}x = x - \arctan x + C$ .

【1640】 $\int \frac{{x}^{2}}{1 - {x}^{2}}\mathrm{\;d}x$ .

解 $\int \frac{{x}^{2}}{1 - {x}^{2}}\mathrm{\;d}x = \int \left( {-1 + \frac{1}{1 - {x}^{2}}}\right) \mathrm{d}x =  - x + \frac{1}{2}\ln \left| \frac{1 + x}{1 - x}\right|  + C$ .

【1641】 $\int \frac{{x}^{2} + 3}{{x}^{2} - 1}\mathrm{\;d}x$ .

解 $\int \frac{{x}^{2} + 3}{{x}^{2} - 1}\mathrm{\;d}x = \int \left( {1 + \frac{4}{{x}^{2} - 1}}\right) \mathrm{d}x = x + 2\ln \left| \frac{x - 1}{x + 1}\right|  + C$ .

【1642】 $\int \frac{\sqrt{1 + {x}^{2}} + \sqrt{1 - {x}^{2}}}{\sqrt{1 - {x}^{4}}}\mathrm{\;d}x$ .

解 $\int \frac{\sqrt{1 + {x}^{2}} + \sqrt{1 - {x}^{2}}}{\sqrt{1 - {x}^{4}}}\mathrm{\;d}x = \int \left( {\frac{1}{\sqrt{1 - {x}^{2}}} + \frac{1}{\sqrt{1 + {x}^{2}}}}\right) \mathrm{d}x = \arcsin x + \ln \left( {x + \sqrt{1 + {x}^{2}}}\right)  + C$ .

【1643】 $\int \frac{\sqrt{{x}^{2} + 1} - \sqrt{{x}^{2} - 1}}{\sqrt{{x}^{4} - 1}}\mathrm{\;d}x$ .

解 $\int \frac{\sqrt{{x}^{2} + 1} - \sqrt{{x}^{2} - 1}}{\sqrt{{x}^{4} - 1}}\mathrm{\;d}x = \int \left( {\frac{1}{\sqrt{{x}^{2} - 1}} - \frac{1}{\sqrt{{x}^{2} + 1}}}\right) \mathrm{d}x = \ln \left| \frac{x + \sqrt{{x}^{2} - 1}}{x + \sqrt{{x}^{2} + 1}}\right|  + C$ .

【1644】 $\int {\left( {2}^{x} + {3}^{x}\right) }^{2}\mathrm{\;d}x$ .

解 $\int {\left( {2}^{x} + {3}^{x}\right) }^{2}\mathrm{\;d}x = \int \left( {{4}^{x} + 2 \cdot  {6}^{x} + {9}^{x}}\right) \mathrm{d}x = \frac{{4}^{x}}{\ln 4} + 2 \cdot  \frac{{6}^{x}}{\ln 6} + \frac{{9}^{x}}{\ln 9} + C$ .

【1645】 $\int \frac{{2}^{x + 1} - {5}^{x - 1}}{{10}^{x}}\mathrm{\;d}x$ .

解 $\int \frac{{2}^{x + 1} - {5}^{x - 1}}{{10}^{x}}\mathrm{\;d}x = \int \left\lbrack  {2{\left( \frac{1}{5}\right) }^{x} - \frac{1}{5}{\left( \frac{1}{2}\right) }^{x}}\right\rbrack  \mathrm{d}x =  - \frac{2}{\ln 5}{\left( \frac{1}{5}\right) }^{x} + \frac{1}{5\ln 2}{\left( \frac{1}{2}\right) }^{x} + C$ .

【1646】 $\int \frac{{\mathrm{e}}^{3x} + 1}{{\mathrm{e}}^{x} + 1}\mathrm{\;d}x$ .

解 $\int \frac{{\mathrm{e}}^{3x} + 1}{{\mathrm{e}}^{x} + 1}\mathrm{\;d}x = \int \left( {{\mathrm{e}}^{2x} - {\mathrm{e}}^{x} + 1}\right) \mathrm{d}x = \frac{1}{2}{\mathrm{e}}^{2x} - {\mathrm{e}}^{x} + x + C$ .

【1647】 $\int \left( {1 + \sin x + \cos x}\right) \mathrm{d}x$ .

解 $\int \left( {1 + \sin x + \cos x}\right) \mathrm{d}x = x - \cos x + \sin x + C$ .

【1648】 $\int \sqrt{1 - \sin {2x}}\mathrm{\;d}x$ .

提示 注意 $\sqrt{1 - \sin {2x}} = \sqrt{{\left( \cos x - \sin x\right) }^{2}} = \left\lbrack  {\operatorname{sgn}\left( {\cos x - \sin x}\right) }\right\rbrack  \left( {\cos x - \sin x}\right)$ .

解 $\int \sqrt{1 - \sin {2x}}\mathrm{\;d}x = \int \sqrt{{\left( \cos x - \sin x\right) }^{2}}\mathrm{\;d}x = \int \left\lbrack  {\operatorname{sgn}\left( {\cos x - \sin x}\right) }\right\rbrack  \left( {\cos x - \sin x}\right) \mathrm{d}x$

$= \left( {\sin x + \cos x}\right) \operatorname{sgn}\left( {\cos x - \sin x}\right)  + C$ . 【1649】 $\int {\cot }^{2}x\mathrm{\;d}x$ .

提示 注意 ${\cot }^{2}x = {\csc }^{2}x - 1$ .

解 $\int {\cot }^{2}x\mathrm{\;d}x = \int \left( {{\csc }^{2}x - 1}\right) \mathrm{d}x =  - \cot x - x + C$ .

【1650】 $\int {\tan }^{2}x\mathrm{\;d}x$ .

解 $\int {\tan }^{2}x\mathrm{\;d}x = \int \left( {{\sec }^{2}x - 1}\right) \mathrm{d}x = \tan x - x + C$ .

【1651】 $\int \left( {a\operatorname{sh}x + b\operatorname{ch}x}\right) \mathrm{d}x$ .

解 $\int \left( {a\operatorname{sh}x + b\operatorname{ch}x}\right) \mathrm{d}x = a\operatorname{ch}x + b\operatorname{sh}x + C$ .

【1652】 $\int {\operatorname{th}}^{2}x\mathrm{\;d}x$ .

提示 注意 ${\operatorname{th}}^{2}x = 1 - \frac{1}{{\operatorname{ch}}^{2}x}$ .

解 $\int {\operatorname{th}}^{2}x\mathrm{\;d}x = \int \left( {1 - \frac{1}{{\operatorname{ch}}^{2}x}}\right) \mathrm{d}x = x - \operatorname{th}x + C$ .

【1653】 $\int {\coth }^{2}x\mathrm{\;d}x$ .

提示 注意 ${\coth }^{2}x = 1 + \frac{1}{{\operatorname{sh}}^{2}x}$ .

解 $\int {\coth }^{2}x\mathrm{\;d}x = \int \left( {1 + \frac{1}{{\operatorname{sh}}^{2}x}}\right) \mathrm{d}x = x - \coth x + C$ .

【1654】证明: 若 $\int f\left( x\right) \mathrm{d}x = F\left( x\right)  + C$ ,则 $\int f\left( {{ax} + b}\right) \mathrm{d}x = \frac{1}{a}F\left( {{ax} + b}\right)  + C\;\left( {a \neq  0}\right)$ .

提示 由不定积分的定义, 命题即获证.

证 由 $\int f\left( x\right) \mathrm{d}x = F\left( x\right)  + C$ 得知 ${F}^{\prime }\left( x\right)  = f\left( x\right)$ . 因而有 ${F}^{\prime }\left( {{ax} + b}\right)  = f\left( {{ax} + b}\right)$ ,且

$$
\frac{\mathrm{d}}{\mathrm{d}x}\left\lbrack  {\frac{1}{a}F\left( {{ax} + b}\right) }\right\rbrack   = {F}^{\prime }\left( {{ax} + b}\right) ,
$$

于是,

$$
\frac{\mathrm{d}}{\mathrm{d}x}\left\lbrack  {\frac{1}{a}F\left( {{ax} + b}\right) }\right\rbrack   = f\left( {{ax} + b}\right) ,
$$

所以,

$$
\int f\left( {{ax} + b}\right) \mathrm{d}x = \frac{1}{a}F\left( {{ax} + b}\right)  + C.
$$

求下列积分:

【1655】 $\int \frac{\mathrm{d}x}{x + a}$ .

解 $\int \frac{\mathrm{d}x}{x + a} = \ln \left| {x + a}\right|  + C$ .

【1656】 $\int {\left( 2x - 3\right) }^{10}\mathrm{\;d}x$ .

解 $\int {\left( 2x - 3\right) }^{10}\mathrm{\;d}x = \frac{1}{2} \cdot  \frac{1}{11}{\left( 2x - 3\right) }^{11} + C = \frac{1}{22}{\left( 2x - 3\right) }^{11} + C$ .

【1657】 $\int \sqrt[3]{1 - {3x}}\mathrm{\;d}x$ .

解 $\int \sqrt[3]{1 - {3x}}\mathrm{\;d}x =  - \frac{1}{3} \cdot  \frac{3}{4}{\left( 1 - 3x\right) }^{\frac{4}{3}} + C =  - \frac{1}{4}{\left( 1 - 3x\right) }^{\frac{4}{3}} + C$ .

【1658】 $\int \frac{\mathrm{d}x}{\sqrt{2 - {5x}}}$ .

解 $\int \frac{\mathrm{d}x}{\sqrt{2 - {5x}}} =  - \frac{1}{5} \cdot  2{\left( 2 - 5x\right) }^{\frac{1}{2}} + C =  - \frac{2}{5}\sqrt{2 - {5x}} + C$ .

【1659】 $\int \frac{\mathrm{d}x}{{\left( 5x - 2\right) }^{\frac{5}{2}}}$ .

解 $\int \frac{\mathrm{d}x}{{\left( 5x - 2\right) }^{\frac{5}{2}}} = \frac{1}{5} \cdot  \left( {-\frac{2}{3}}\right) {\left( 5x - 2\right) }^{-\frac{3}{2}} + C =  - \frac{2}{{15}{\left( 5x - 2\right) }^{\frac{3}{2}}} + C$ .

【1660】* $\int \frac{\sqrt[5]{1 - {2x} + {x}^{2}}}{1 - x}\mathrm{\;d}x$ .

解 $\int \frac{\sqrt[5]{1 - {2x} + {x}^{2}}}{1 - x}\mathrm{\;d}x = \int {\left( 1 - x\right) }^{-\frac{3}{5}}\mathrm{\;d}x =  - \frac{5}{2}\sqrt[5]{{\left( 1 - x\right) }^{2}} + C$ .

【1661】 $\int \frac{\mathrm{d}x}{2 + 3{x}^{2}}$ .

解 $\int \frac{\mathrm{d}x}{2 + 3{x}^{2}} = \int \frac{\mathrm{d}x}{{\left( \sqrt{2}\right) }^{2} + {\left( \sqrt{3}x\right) }^{2}} = \frac{1}{\sqrt{6}}\arctan \left( {x\sqrt{\frac{3}{2}}}\right)  + C$ .

【1662】 $\int \frac{\mathrm{d}x}{2 - 3{x}^{2}}$ .

解 $\int \frac{\mathrm{d}x}{2 - 3{x}^{2}} = \frac{1}{2}\int \frac{\mathrm{d}x}{1 - {\left( \sqrt{\frac{3}{2}}x\right) }^{2}} = \frac{1}{2} \cdot  \sqrt{\frac{2}{3}} \cdot  \frac{1}{2}\ln \left| \frac{1 + \sqrt{\frac{3}{2}}x}{1 - \sqrt{\frac{3}{2}}x}\right|  + C = \frac{1}{2\sqrt{6}}\ln \left| \frac{\sqrt{2} + x\sqrt{3}}{\sqrt{2} - x\sqrt{3}}\right|  + C$ .

【1663】 $\int \frac{\mathrm{d}x}{\sqrt{2 - 3{x}^{2}}}$ .

解 $\int \frac{\mathrm{d}x}{\sqrt{2 - 3{x}^{2}}} = \frac{1}{\sqrt{3}}\arcsin \left( {x\sqrt{\frac{3}{2}}}\right)  + C$ .

【1664】 $\int \frac{\mathrm{d}x}{\sqrt{3{x}^{2} - 2}}$ .

解 $\int \frac{\mathrm{d}x}{\sqrt{3{x}^{2} - 2}} = \frac{1}{\sqrt{2}}\int \frac{\mathrm{d}x}{\sqrt{{\left( \sqrt{\frac{3}{2}}x\right) }^{2} - 1}} = \frac{1}{\sqrt{2}} \cdot  \sqrt{\frac{2}{3}}\ln \left| {x\sqrt{\frac{3}{2}} + \sqrt{\frac{3}{2}{x}^{2} - 1}}\right|  + {C}_{1}$

$= \frac{1}{\sqrt{3}}\ln \left| {x\sqrt{3} + \sqrt{3{x}^{2} - 2}}\right|  + C.$

【1665】 $\int \left( {{\mathrm{e}}^{-x} + {\mathrm{e}}^{-{2x}}}\right) \mathrm{d}x$ .

解 $\int \left( {{\mathrm{e}}^{-x} + {\mathrm{e}}^{-{2x}}}\right) \mathrm{d}x =  - \left( {{\mathrm{e}}^{-x} + \frac{1}{2}{\mathrm{e}}^{-{2x}}}\right)  + C$ .

【1666】 $\int \left( {\sin {5x} - \sin {5\alpha }}\right) \mathrm{d}x$ .

解 $\int \left( {\sin {5x} - \sin {5\alpha }}\right) \mathrm{d}x =  - \frac{1}{5}\cos {5x} - x\sin {5\alpha } + C$ .

【1667】 $\int \frac{\mathrm{d}x}{{\sin }^{2}\left( {{2x} + \frac{\pi }{4}}\right) }$ .

解 $\int \frac{\mathrm{d}x}{{\sin }^{2}\left( {{2x} + \frac{\pi }{4}}\right) } =  - \frac{1}{2}\cot \left( {{2x} + \frac{\pi }{4}}\right)  + C$ 【1668】 $\int \frac{\mathrm{d}x}{1 + \cos x}$ .

---

* 题号右上角带 “+”号表示题解答案与原习题集中译本所附答案不一致,以后不再说明. 中译本基本是按俄文第二版翻译的. 俄文第二版中有一些错误已在俄文第三版中改正.

---

解 $\int \frac{\mathrm{d}x}{1 + \cos x} = \frac{1}{2}\int \frac{\mathrm{d}x}{{\cos }^{2}\frac{x}{2}} = \tan \frac{x}{2} + C$ .

【1669】 $\int \frac{\mathrm{d}x}{1 - \cos x}$ .

解 $\int \frac{\mathrm{d}x}{1 - \cos x} = \frac{1}{2}\int \frac{\mathrm{d}x}{{\sin }^{2}\frac{x}{2}} =  - \cot \frac{x}{2} + C$ .

【1670】 $\int \frac{\mathrm{d}x}{1 + \sin x}$ .

提示 注意 $\frac{1}{1 + \sin x} = \frac{1}{1 + \cos \left( {\frac{\pi }{2} - x}\right) }$ ,并利用 1668 题的结果.

解 $\int \frac{\mathrm{d}x}{1 + \sin x} = \int \frac{\mathrm{d}x}{1 + \cos \left( {\frac{\pi }{2} - x}\right) } =  - \tan \left( {\frac{\pi }{4} - \frac{x}{2}}\right)  + C$ .

【1671】 $\int \left\lbrack  {\operatorname{sh}\left( {{2x} + 1}\right)  + \operatorname{ch}\left( {{2x} - 1}\right) }\right\rbrack  \mathrm{d}x$ .

解 $\int \left\lbrack  {\operatorname{sh}\left( {{2x} + 1}\right)  + \operatorname{ch}\left( {{2x} - 1}\right) }\right\rbrack  \mathrm{d}x = \frac{1}{2}\left\lbrack  {\operatorname{ch}\left( {{2x} + 1}\right)  + \operatorname{sh}\left( {{2x} - 1}\right) }\right\rbrack   + C$ .

【1672】 $\int \frac{\mathrm{d}x}{{\operatorname{ch}}^{2}\frac{x}{2}}$ .

解 $\int \frac{\mathrm{d}x}{{\operatorname{ch}}^{2}\frac{x}{2}} = 2\operatorname{th}\frac{x}{2} + C$ .

【1673】 $\int \frac{\mathrm{d}x}{{\operatorname{sh}}^{2}\frac{x}{2}}$ .

解 $\int \frac{\mathrm{d}x}{{\operatorname{sh}}^{2}\frac{x}{2}} =  - 2\coth \frac{x}{2} + C$ .

用适当地变换被积函数的方法求下列积分:

【1674】 $\int \frac{x\mathrm{\;d}x}{\sqrt{1 - {x}^{2}}}$ .

解 $\int \frac{x\mathrm{\;d}x}{\sqrt{1 - {x}^{2}}} =  - \int \frac{\mathrm{d}\left( {1 - {x}^{2}}\right) }{2\sqrt{1 - {x}^{2}}} =  - \sqrt{1 - {x}^{2}} + C$ .

【1675】 $\int {x}^{2}\sqrt[3]{1 + {x}^{3}}\mathrm{\;d}x$ .

提示 注意 ${x}^{2}\sqrt[3]{1 + {x}^{3}}\mathrm{\;d}x = \frac{1}{3}{\left( 1 + {x}^{3}\right) }^{\frac{1}{3}}\mathrm{\;d}\left( {1 + {x}^{3}}\right)$ .

解 $\int {x}^{2}\sqrt[3]{1 + {x}^{3}}\mathrm{\;d}x = \frac{1}{3}\int {\left( 1 + {x}^{3}\right) }^{\frac{1}{3}}\mathrm{\;d}\left( {1 + {x}^{3}}\right)  = \frac{1}{4}{\left( 1 + {x}^{3}\right) }^{\frac{4}{3}} + C$ .

【1676】 $\int \frac{x\mathrm{\;d}x}{3 - 2{x}^{2}}$ .

解 $\int \frac{x\mathrm{\;d}x}{3 - 2{x}^{2}} =  - \frac{1}{4}\int \frac{\mathrm{d}\left( {3 - 2{x}^{2}}\right) }{3 - 2{x}^{2}} =  - \frac{1}{4}\ln \left| {3 - 2{x}^{2}}\right|  + C$ .

【1677】 $\int \frac{x\mathrm{\;d}x}{{\left( 1 + {x}^{2}\right) }^{2}}$ . 解 $\int \frac{x\mathrm{\;d}x}{{\left( 1 + {x}^{2}\right) }^{2}} = \frac{1}{2}\int \frac{\mathrm{d}\left( {1 + {x}^{2}}\right) }{{\left( 1 + {x}^{2}\right) }^{2}} =  - \frac{1}{2\left( {1 + {x}^{2}}\right) } + C$ .

【1678】 $\int \frac{x\mathrm{\;d}x}{4 + {x}^{4}}$ .

提示 注意 $\frac{x\mathrm{\;d}x}{4 + {x}^{4}} = \frac{1}{2} \cdot  \frac{\mathrm{d}\left( {x}^{2}\right) }{{2}^{2} + {\left( {x}^{2}\right) }^{2}}$ .

解 $\int \frac{x\mathrm{\;d}x}{4 + {x}^{4}} = \frac{1}{2}\int \frac{\mathrm{d}\left( {x}^{2}\right) }{{2}^{2} + {\left( {x}^{2}\right) }^{2}} = \frac{1}{4}\arctan \frac{{x}^{2}}{2} + C$ .

【1679】 $\int \frac{{x}^{3}\mathrm{\;d}x}{{x}^{8} - 2}$ .

解 $\int \frac{{x}^{3}\mathrm{\;d}x}{{x}^{8} - 2} = \frac{1}{4}\int \frac{\mathrm{d}\left( {x}^{4}\right) }{{\left( {x}^{4}\right) }^{2} - {\left( \sqrt{2}\right) }^{2}} = \frac{1}{8\sqrt{2}}\ln \left| \frac{{x}^{4} - \sqrt{2}}{{x}^{4} + \sqrt{2}}\right|  + C$ .

【1680】 $\int \frac{\mathrm{d}x}{\sqrt{x}\left( {1 + x}\right) }$ .

提示 注意 $\frac{\mathrm{d}x}{\sqrt{x}\left( {1 + x}\right) } = 2 \cdot  \frac{\mathrm{d}\left( \sqrt{x}\right) }{1 + {\left( \sqrt{x}\right) }^{2}}$ .

解 $\int \frac{\mathrm{d}x}{\sqrt{x}\left( {1 + x}\right) } = 2\int \frac{\mathrm{d}\left( \sqrt{x}\right) }{1 + {\left( \sqrt{x}\right) }^{2}} = 2\arctan \sqrt{x} + C$ .

【1681】 $\int \sin \frac{1}{x} \cdot  \frac{\mathrm{d}x}{{x}^{2}}$ .

解 $\int \sin \frac{1}{x} \cdot  \frac{\mathrm{d}x}{{x}^{2}} =  - \int \sin \frac{1}{x}\mathrm{\;d}\left( \frac{1}{x}\right)  = \cos \frac{1}{x} + C$ .

【1682】 $\int \frac{\mathrm{d}x}{x\sqrt{{x}^{2} + 1}}$ .

提示 注意 $\frac{\mathrm{d}x}{x\sqrt{{x}^{2} + 1}} = \frac{\mathrm{d}x}{x\left| x\right| \sqrt{1 + \frac{1}{{x}^{2}}}} =  - \frac{\mathrm{d}\left( \frac{1}{\left| x\right| }\right) }{\sqrt{1 + {\left( \frac{1}{\left| x\right| }\right) }^{2}}}$ .

解 $\int \frac{\mathrm{d}x}{x\sqrt{{x}^{2} + 1}} = \int \frac{\mathrm{d}x}{x\left| x\right| \sqrt{1 + \frac{1}{{x}^{2}}}} =  - \int \frac{\mathrm{d}\left( \frac{1}{\left| x\right| }\right) }{\sqrt{1 + {\left( \frac{1}{\left| x\right| }\right) }^{2}}} =  - \ln \left( {\frac{1}{\left| x\right| } + \sqrt{1 + \frac{1}{{x}^{2}}}}\right)  + C$

$=  - \ln \left| \frac{1 + \sqrt{{x}^{2} + 1}}{x}\right|  + C.$

【1683】 $\int \frac{\mathrm{d}x}{x\sqrt{{x}^{2} - 1}}$ .

提示 仿 1682 题的解法.

解 $\int \frac{\mathrm{d}x}{x\sqrt{{x}^{2} - 1}} = \int \frac{\mathrm{d}x}{x\left| x\right| \sqrt{1 - \frac{1}{{x}^{2}}}} =  - \int \frac{\mathrm{d}\left( \frac{1}{\left| x\right| }\right) }{\sqrt{1 - {\left( \frac{1}{\left| x\right| }\right) }^{2}}} =  - \arcsin \frac{1}{\left| x\right| } + C$ .

【1684】 $\int \frac{\mathrm{d}x}{{\left( {x}^{2} + 1\right) }^{\frac{3}{2}}}$ .

提示 注意 $\frac{\mathrm{d}x}{{\left( {x}^{2} + 1\right) }^{\frac{3}{2}}} = \frac{\operatorname{sgn}x\mathrm{\;d}x}{{x}^{3}{\left( 1 + \frac{1}{{x}^{2}}\right) }^{\frac{3}{2}}} =  - \frac{1}{2}{\left( 1 + \frac{1}{{x}^{2}}\right) }^{-\frac{3}{2}}\operatorname{sgn}x\mathrm{\;d}\left( {1 + \frac{1}{{x}^{2}}}\right)$ .

解 $\int \frac{\mathrm{d}x}{{\left( {x}^{2} + 1\right) }^{\frac{3}{2}}} = \int \frac{\operatorname{sgn}x\mathrm{\;d}x}{{x}^{3}{\left( 1 + \frac{1}{{x}^{2}}\right) }^{\frac{3}{2}}} =  - \frac{1}{2}\int {\left( 1 + \frac{1}{{x}^{2}}\right) }^{-\frac{3}{2}}\operatorname{sgn}x\mathrm{\;d}\left( {1 + \frac{1}{{x}^{2}}}\right)$ $= {\left( 1 + \frac{1}{{x}^{2}}\right) }^{-\frac{1}{2}}\operatorname{sgn}x + C = \frac{x}{\sqrt{{x}^{2} + 1}} + C.$

【1685】 $\int \frac{x\mathrm{\;d}x}{{\left( {x}^{2} - 1\right) }^{\frac{3}{2}}}$ .

解 $\int \frac{x\mathrm{\;d}x}{{\left( {x}^{2} - 1\right) }^{\frac{3}{2}}} = \frac{1}{2}\int {\left( {x}^{2} - 1\right) }^{-\frac{3}{2}}\mathrm{\;d}\left( {{x}^{2} - 1}\right)  =  - \frac{1}{\sqrt{{x}^{2} - 1}} + C$ .

【1686】 $\int \frac{{x}^{2}\mathrm{\;d}x}{{\left( 8{x}^{3} + {27}\right) }^{\frac{2}{3}}}$ .

解 $\int \frac{{x}^{2}\mathrm{\;d}x}{{\left( 8{x}^{3} + {27}\right) }^{\frac{2}{3}}} = \frac{1}{24}\int {\left( 8{x}^{3} + {27}\right) }^{-\frac{2}{3}}\mathrm{\;d}\left( {8{x}^{3} + {27}}\right)  = \frac{1}{8}\sqrt[3]{8{x}^{3} + {27}} + C$ .

【1687】 $\int \frac{\mathrm{d}x}{\sqrt{x\left( {1 + x}\right) }}$ .

提示 分别就 $x > 0$ 及 $x <  - 1$ 时求解,然后将这两个结果合并,其结果为

$$
\int \frac{\mathrm{d}x}{\sqrt{x\left( {1 + x}\right) }} = 2\operatorname{sgn}x\ln \left( {\sqrt{\left| x\right| } + \sqrt{\left| 1 + x\right| }}\right)  + C.
$$

解 由 $x\left( {1 + x}\right)  > 0$ 知: $x > 0$ 或 $x <  - 1$ . 当 $x > 0$ 时,

$$
\int \frac{\mathrm{d}x}{\sqrt{x\left( {1 + x}\right) }} = 2\int \frac{\mathrm{d}\left( \sqrt{x}\right) }{\sqrt{1 + {\left( \sqrt{x}\right) }^{2}}} = 2\ln \left( {\sqrt{x} + \sqrt{1 + x}}\right)  + C;
$$

当 $x <  - 1$ 时, $\int \frac{\mathrm{d}x}{\sqrt{x\left( {1 + x}\right) }} =  - \int \frac{\mathrm{d}\left( {-\left( {1 + x}\right) }\right) }{\sqrt{\left( {-x}\right) \left( {-\left( {1 + x}\right) }\right) }} =  - 2\int \frac{\mathrm{d}\left( \sqrt{-\left( {1 + x}\right) }\right) }{\sqrt{1 + {\left( \sqrt{-\left( {1 + x}\right) }\right) }^{2}}}$

$$
=  - 2\ln \left( {\sqrt{-x} + \sqrt{-\left( {1 + x}\right) }}\right)  + C\text{.}
$$

总之,得

$$
\int \frac{\mathrm{d}x}{\sqrt{x\left( {1 + x}\right) }} = 2\operatorname{sgn}x\ln \left( {\sqrt{\left| x\right| } + \sqrt{\left| 1 + x\right| }}\right)  + C.
$$

【1688】 $\int \frac{\mathrm{d}x}{\sqrt{x\left( {1 - x}\right) }}$ .

解 由 $x\left( {1 - x}\right)  > 0$ 知: $0 < x < 1$ . 于是,得

$$
\int \frac{\mathrm{d}x}{\sqrt{x\left( {1 - x}\right) }} = 2\int \frac{\mathrm{d}\left( \sqrt{x}\right) }{\sqrt{1 - {\left( \sqrt{x}\right) }^{2}}} = 2\arcsin \sqrt{x} + C.
$$

【1689】 $\int x{\mathrm{e}}^{-{x}^{2}}\mathrm{\;d}x$ .

解 $\int x{\mathrm{e}}^{-{x}^{2}}\mathrm{\;d}x =  - \frac{1}{2}\int {\mathrm{e}}^{-{x}^{2}}\mathrm{\;d}\left( {-{x}^{2}}\right)  =  - \frac{1}{2}{\mathrm{e}}^{-{x}^{2}} + C$ .

【1690】 $\int \frac{{\mathrm{e}}^{x}\mathrm{\;d}x}{2 + {\mathrm{e}}^{x}}$ .

解 $\int \frac{{\mathrm{e}}^{x}\mathrm{\;d}x}{2 + {\mathrm{e}}^{x}} = \int \frac{\mathrm{d}\left( {2 + {\mathrm{e}}^{x}}\right) }{2 + {\mathrm{e}}^{x}} = \ln \left( {2 + {\mathrm{e}}^{x}}\right)  + C$ .

【1691】 $\int \frac{\mathrm{d}x}{{\mathrm{e}}^{x} + {\mathrm{e}}^{-x}}$ .

提示 注意 $\frac{\mathrm{d}x}{{\mathrm{e}}^{x} + {\mathrm{e}}^{-x}} = \frac{\mathrm{d}\left( {\mathrm{e}}^{x}\right) }{1 + {\left( {\mathrm{e}}^{x}\right) }^{2}}$ .

解 $\int \frac{\mathrm{d}x}{{\mathrm{e}}^{x} + {\mathrm{e}}^{-x}} = \int \frac{\mathrm{d}\left( {\mathrm{e}}^{x}\right) }{1 + {\left( {\mathrm{e}}^{x}\right) }^{2}} = \arctan \left( {\mathrm{e}}^{x}\right)  + C$ .

【1692】 $\int \frac{\mathrm{d}x}{\sqrt{1 + {\mathrm{e}}^{2x}}}$ .

提示 注意 $\frac{\mathrm{d}x}{\sqrt{1 + {\mathrm{e}}^{2x}}} =  - \frac{\mathrm{d}\left( {\mathrm{e}}^{-x}\right) }{\sqrt{1 + {\left( {\mathrm{e}}^{-x}\right) }^{2}}}$ .

解 $\int \frac{\mathrm{d}x}{\sqrt{1 + {\mathrm{e}}^{2x}}} =  - \int \frac{\mathrm{d}\left( {\mathrm{e}}^{-x}\right) }{\sqrt{1 + {\left( {\mathrm{e}}^{-x}\right) }^{2}}} =  - \ln \left( {{\mathrm{e}}^{-x} + \sqrt{1 + {\mathrm{e}}^{-{2x}}}}\right)  + C$ .

【1693】 $\int \frac{{\ln }^{2}x}{x}\mathrm{\;d}x$ .

解 $\int \frac{{\ln }^{2}x}{x}\mathrm{\;d}x = \int {\ln }^{2}x\mathrm{\;d}\left( {\ln x}\right)  = \frac{1}{3}{\ln }^{3}x + C$ .

【1694】 $\int \frac{\mathrm{d}x}{x\ln x\ln \left( {\ln x}\right) }$ .

解 $\int \frac{\mathrm{d}x}{x\ln x\ln \left( {\ln x}\right) } = \int \frac{\mathrm{d}\left( {\ln x}\right) }{\ln x\ln \left( {\ln x}\right) } = \int \frac{\mathrm{d}\left\lbrack  {\ln \left( {\ln x}\right) }\right\rbrack  }{\ln \left( {\ln x}\right) } = \ln \left| {\ln \left( {\ln x}\right) }\right|  + C$ .

【1695】 $\int {\sin }^{5}x\cos x\mathrm{\;d}x$ .

解 $\int {\sin }^{5}x\cos x\mathrm{\;d}x = \int {\sin }^{5}x\mathrm{\;d}\left( {\sin x}\right)  = \frac{1}{6}{\sin }^{6}x + C$ .

【1696】 $\int \frac{\sin x}{\sqrt{{\cos }^{3}x}}\mathrm{\;d}x$ .

解 $\int \frac{\sin x}{\sqrt{{\cos }^{3}x}}\mathrm{\;d}x =  - \int {\left( \cos x\right) }^{-\frac{3}{2}}\mathrm{\;d}\left( {\cos x}\right)  = \frac{2}{\sqrt{\cos x}} + C$ .

【1697】 $\int \tan x\mathrm{\;d}x$ .

解 $\int \tan x\mathrm{\;d}x = \int \frac{\sin x}{\cos x}\mathrm{\;d}x =  - \int \frac{\mathrm{d}\left( {\cos x}\right) }{\cos x} =  - \ln \left| {\cos x}\right|  + C$ .

【1698】 $\int \cot x\mathrm{\;d}x$ .

解 $\int \cot x\mathrm{\;d}x = \int \frac{\cos x}{\sin x}\mathrm{\;d}x = \int \frac{\mathrm{d}\left( {\sin x}\right) }{\sin x} = \ln \left| {\sin x}\right|  + C$ .

【1699】 $\int \frac{\sin x + \cos x}{\sqrt[3]{\sin x - \cos x}}\mathrm{\;d}x$ .

解 $\int \frac{\sin x + \cos x}{\sqrt[3]{\sin x - \cos x}}\mathrm{\;d}x = \int {\left( \sin x - \cos x\right) }^{-\frac{1}{3}}\mathrm{\;d}\left( {\sin x - \cos x}\right)  = \frac{3}{2}\sqrt[3]{{\left( \sin x - \cos x\right) }^{2}} + C$

$= \frac{3}{2}\sqrt[3]{1 - \sin {2x}} + C$ .

${\left\lbrack  {1700}\right\rbrack  }^{ + }\int \frac{\sin x\cos x}{\sqrt{{a}^{2}{\sin }^{2}x + {b}^{2}{\cos }^{2}x}}\mathrm{\;d}x$ .

提示 分别就 $\left| a\right|  = \left| b\right|  \neq  0$ 及 $\left| a\right|  \neq  \left| b\right|$ 两种情况求解.

解 当 $\left| a\right|  = \left| b\right|  \neq  0$ 时,

$$
\int \frac{\sin x\cos x}{\sqrt{{a}^{2}{\sin }^{2}x + {b}^{2}{\cos }^{2}x}}\mathrm{\;d}x = \frac{1}{\left| a\right| }\int \sin x\cos x\mathrm{\;d}x = \frac{1}{2\left| a\right| }{\sin }^{2}x + C;
$$

当 $\left| a\right|  \neq  \left| b\right|$ 时,

$$
\int \frac{\sin x\cos x}{\sqrt{{a}^{2}{\sin }^{2}x + {b}^{2}{\cos }^{2}x}}\mathrm{\;d}x = \frac{1}{2}\int \frac{\mathrm{d}\left( {{\sin }^{2}x}\right) }{\sqrt{\left( {{a}^{2} - {b}^{2}}\right) {\sin }^{2}x + {b}^{2}}} = \frac{1}{{a}^{2} - {b}^{2}}\sqrt{\left( {{a}^{2} - {b}^{2}}\right) {\sin }^{2}x + {b}^{2}} + C
$$

$= \frac{\sqrt{{a}^{2}{\sin }^{2}x + {b}^{2}{\cos }^{2}x}}{{a}^{2} - {b}^{2}} + C.$

【1701】 $\int \frac{\mathrm{d}x}{{\sin }^{2}x\sqrt[4]{\cot x}}$ .

解 $\int \frac{\mathrm{d}x}{{\sin }^{2}x\sqrt[4]{\cot x}} =  - \int {\left( \cot x\right) }^{-\frac{1}{4}}\mathrm{\;d}\left( {\cot x}\right)  =  - \frac{4}{3}\sqrt[4]{{\cot }^{3}x} + C$ .

【1702】 $\int \frac{\mathrm{d}x}{{\sin }^{2}x + 2{\cos }^{2}x}$ .