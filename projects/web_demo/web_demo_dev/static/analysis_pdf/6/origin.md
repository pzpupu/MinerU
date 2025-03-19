一 考研数学复习大全 高等数学

方法二

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sqrt{1 + \sin {2x}} - \sqrt{1 - \sin {2x}}}{\ln \left( {1 + x}\right) } = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{\sqrt{1 + \sin {2x}} + \sqrt{1 - \sin {2x}}} \cdot  \frac{2\sin {2x}}{x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin {2x}}{x} = 2\text{.}
$$

(2) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\left( 1 + \sin 2x\right) }^{{x}^{2}} - 1}{x - \sin x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{{x}^{2}\ln \left( {1 + \sin {2x}}\right) } - 1}{x - \sin x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{x}^{2}\ln \left( {1 + \sin {2x}}\right) }{x - \sin x}$

$$
= 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{x}^{3}}{x - \sin x} = 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{3{x}^{2}}{1 - \cos x} = {12}.
$$

【例 2】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin \left( {\sin x}\right)  - x}{{x}^{3}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin \left( {\sin x}\right)  - x}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin \left( {\sin x}\right)  - \sin x}{{x}^{3}} + \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin x - x}{{x}^{3}}$ ,

由 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin \left( {\sin x}\right)  - \sin x}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin \left( {\sin x}\right)  - \sin x}{{\sin }^{3}x}\overset{\sin x = t}{ = }\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\sin t - t}{{t}^{3}} = \mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\cos t - 1}{3{t}^{2}} =  - \frac{1}{6}$ ,

$\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin x - x}{{x}^{3}} =  - \frac{1}{6}$ 得

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin \left( {\sin x}\right)  - x}{{x}^{3}} =  - \frac{1}{3}.
$$

【例 3】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \frac{\sin x}{x}}{{x}^{2}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \frac{\sin x}{x}}{{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + \frac{\sin x - x}{x}}\right) }{{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin x - x}{{x}^{3}}$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos x - 1}{3{x}^{2}} =  - \frac{1}{6}.
$$

【例 4】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{\arcsin x} - {\mathrm{e}}^{\sin x}}{{x}^{3}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{\arcsin x} - {\mathrm{e}}^{\sin x}}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}{\mathrm{e}}^{\sin x} \cdot  \frac{{\mathrm{e}}^{\arcsin x - \sin x} - 1}{{x}^{3}}$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{\arcsin x - \sin x} - 1}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\arcsin x - \sin x}{{x}^{3}}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\left( 1 - {x}^{2}\right) }^{-\frac{1}{2}} - \cos x}{3{x}^{2}}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\left\lbrack  {{\left( 1 - {x}^{2}\right) }^{-\frac{1}{2}} - 1}\right\rbrack   + \left( {1 - \cos x}\right) }{3{x}^{2}}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\left( {-\frac{1}{2}}\right) \left( {-{x}^{2}}\right)  + \frac{1}{2}{x}^{2}}{3{x}^{2}} = \frac{1}{3}.
$$

【例 5】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\left( \frac{1 + \cos x}{2}\right) }^{x} - 1}{\left( {1 - \sqrt{\cos x}}\right) \ln \left( {1 + {2x}}\right) }$ .

【解】由 ${\left( \frac{1 + \cos x}{2}\right) }^{x} - 1 = {\mathrm{e}}^{x\ln \left( {1 + \frac{\cos x - 1}{2}}\right) } - 1 \sim  x\ln \left( {1 + \frac{\cos x - 1}{2}}\right)  \sim  x \cdot  \frac{\cos x - 1}{2} \sim   - \frac{{x}^{3}}{4}$ ,

$1 - \sqrt{\cos x} = \frac{1 - \cos x}{1 + \sqrt{\cos x}} \sim  \frac{{x}^{2}}{4},\ln \left( {1 + {2x}}\right)  \sim  {2x}$ ,所以

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\left( \frac{1 + \cos x}{2}\right) }^{x} - 1}{\left( {1 - \sqrt{\cos x}}\right) \ln \left( {1 + {2x}}\right) } = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{-\frac{{x}^{3}}{4}}{\frac{{x}^{2}}{4} \cdot  {2x}} =  - \frac{1}{2}.
$$

【例 6】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sqrt{1 + x\cos x} - \sqrt{1 + \tan x}}{x\left\lbrack  {x - \ln \left( {1 + x}\right) }\right\rbrack  }$ .

【解】由 $\ln \left( {1 + x}\right)  = x - \frac{{x}^{2}}{2} + o\left( {x}^{2}\right)$ 得 $x\left\lbrack  {x - \ln \left( {1 + x}\right) }\right\rbrack   \sim  \frac{{x}^{3}}{2}$ ,则

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sqrt{1 + x\cos x} - \sqrt{1 + \tan x}}{x\left\lbrack  {x - \ln \left( {1 + x}\right) }\right\rbrack  } = 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sqrt{1 + x\cos x} - \sqrt{1 + \tan x}}{{x}^{3}}
$$

$$
= 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{\sqrt{1 + x\cos x} + \sqrt{1 + \tan x}} \cdot  \frac{x\cos x - \tan x}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x\cos x - \tan x}{{x}^{3}}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x\cos x - x}{{x}^{3}} + \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x - \tan x}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos x - 1}{{x}^{2}} + \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1 - {\sec }^{2}x}{3{x}^{2}} =  - \frac{1}{2} - \frac{1}{3} =  - \frac{5}{6}\text{.}
$$

【例 7】求 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{{x}^{x} - {\left( \sin x\right) }^{x}}{{x}^{3}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{{x}^{x} - {\left( \sin x\right) }^{x}}{{x}^{3}} =  - \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{x}^{x} \cdot  \frac{{\left( \frac{\sin x}{x}\right) }^{x} - 1}{{x}^{3}} =  - \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{{\left( \frac{\sin x}{x}\right) }^{x} - 1}{{x}^{3}}$

$$
=  - \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{{\mathrm{e}}^{x\ln \frac{\sin x}{x}} - 1}{{x}^{3}} =  - \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\ln \frac{\sin x}{x}}{{x}^{2}}
$$

$$
=  - \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\ln \left( {1 + \frac{\sin x - x}{x}}\right) }{{x}^{2}}
$$

$$
=  - \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\sin x - x}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{x - \sin x}{{x}^{3}}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{1 - \cos x}{3{x}^{2}} = \frac{1}{6}.
$$

【例 8】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sqrt{1 + {x}^{2}} + \sqrt{1 - {x}^{2}} - 2}{{x}^{4}}$ .

【解】方法一

原式 $= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\frac{2x}{2\sqrt{1 + {x}^{2}}} - \frac{2x}{2\sqrt{1 - {x}^{2}}}}{4{x}^{3}} = \frac{1}{4}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{\sqrt{1 - {x}^{4}}} \cdot  \frac{\sqrt{1 - {x}^{2}} - \sqrt{1 + {x}^{2}}}{{x}^{2}}$

$$
= \frac{1}{4}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{\sqrt{1 - {x}^{2}} + \sqrt{1 + {x}^{2}}}\frac{-2{x}^{2}}{{x}^{2}} =  - \frac{1}{4}.
$$

方法二

由 ${\left( 1 + x\right) }^{a} = 1 + {ax} + \frac{a\left( {a - 1}\right) }{2!}{x}^{2} + o\left( {x}^{2}\right)$ 得

$\sqrt{1 + {x}^{2}} = 1 + \frac{1}{2}{x}^{2} - \frac{1}{8}{x}^{4} + o\left( {x}^{4}\right) ,\sqrt{1 - {x}^{2}} = 1 - \frac{1}{2}{x}^{2} - \frac{1}{8}{x}^{4} + o\left( {x}^{4}\right) ,$

则 $\sqrt{1 + {x}^{2}} + \sqrt{1 - {x}^{2}} - 2 \sim   - \frac{1}{4}{x}^{4}$ ,

故 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sqrt{1 + {x}^{2}} + \sqrt{1 - {x}^{2}} - 2}{{x}^{4}} =  - \frac{1}{4}$ .

【例 9】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos x - {\mathrm{e}}^{-\frac{{x}^{2}}{2}}}{{x}^{4}}$ .

【解】由 $\cos x = 1 - \frac{{x}^{2}}{2} + \frac{{x}^{4}}{4!} + o\left( {x}^{4}\right) ,{\mathrm{e}}^{x} = 1 + x + \frac{{x}^{2}}{2!} + o\left( {x}^{2}\right)$ ,

${\mathrm{e}}^{-\frac{{x}^{2}}{2}} = 1 - \frac{{x}^{2}}{2} + \frac{{x}^{4}}{8} + o\left( {x}^{4}\right)$ ,于是 $\cos x - {\mathrm{e}}^{-\frac{{x}^{2}}{2}} =  - \frac{1}{12}{x}^{4} + o\left( {x}^{4}\right)$ ,

故 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\cos x - {\mathrm{e}}^{-\frac{{x}^{2}}{2}}}{{x}^{4}} =  - \frac{1}{12}$ .

【例 10】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}{\mathrm{e}}^{t}\cos t\mathrm{\;d}t - x - \frac{{x}^{2}}{2}}{\left( {x - \tan x}\right) \left( {\sqrt{1 + x} - 1}\right) }$ .

【解】因为 $\sqrt{1 + x} - 1 = {\left( 1 + x\right) }^{\frac{1}{2}} - 1 \sim  \frac{x}{2}$ ,

又因为 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x - \tan x}{{x}^{3}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1 - {\sec }^{2}x}{3{x}^{2}} =  - \frac{1}{3}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\tan }^{2}x}{{x}^{2}} =  - \frac{1}{3}$ ,所以 $x - \tan x \sim   - \frac{{x}^{3}}{3}$ ,

于是 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}{\mathrm{e}}^{t}\cos t\mathrm{\;d}t - x - \frac{{x}^{2}}{2}}{\left( {x - \tan x}\right) \left( {\sqrt{1 + x} - 1}\right) } =  - 6\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}{\mathrm{e}}^{t}\cos t\mathrm{\;d}t - x - \frac{{x}^{2}}{2}}{{x}^{4}}$

$=  - 6\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{x}\cos x - 1 - x}{4{x}^{3}} =  - \frac{3}{2}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{x}\cos x - 1 - x}{{x}^{3}},$

因为 ${\mathrm{e}}^{x} = 1 + x + \frac{{x}^{2}}{2} + \frac{{x}^{3}}{3!} + o\left( {x}^{3}\right) ,\cos x = 1 - \frac{{x}^{2}}{2} + o\left( {x}^{3}\right)$ ,

所以 ${\mathrm{e}}^{x}\cos x = 1 + x - \frac{{x}^{3}}{3} + o\left( {x}^{3}\right)$ ,于是 ${\mathrm{e}}^{x}\cos x - 1 - x \sim   - \frac{{x}^{3}}{3}$ ,

故 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}{\mathrm{e}}^{t}\cos t\mathrm{\;d}t - x - \frac{{x}^{2}}{2}}{\left( {x - \tan x}\right) \left( {\sqrt{1 + x} - 1}\right) } = \frac{1}{2}$ .

## 情形二: ${1}^{\infty }$ 型

## 【思路分析】

计算 ${1}^{\infty }$ 型的极限时,按照如下步骤进行:

(1) 凑 ${\left( 1 + \Delta \right) }^{\frac{1}{\Delta }}$ 的形式.

(2)凑重要极限形式时,保持恒等变形.

(3) ${1}^{\infty }$ 的极限也可以采用先取对数再极限的方式计算.

【例 11】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  {\mathrm{e}}^{x} + \ln \left( 1 + 2x\right) \right\rbrack  }^{\frac{2}{x}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  {\mathrm{e}}^{x} + \ln \left( 1 + 2x\right) \right\rbrack  }^{\frac{2}{x}} = \mathop{\lim }\limits_{{x \rightarrow  0}}{\left\{  {\left\lbrack  1 + {\mathrm{e}}^{x} - 1 + \ln \left( 1 + 2x\right) \right\rbrack  }^{\frac{1}{{\mathrm{e}}^{x} - 1 + \ln \left( {1 + {2x}}\right) }}\right\}  }^{\frac{2\left\lbrack  {{\mathrm{e}}^{x} - 1 + \ln \left( {1 + {2x}}\right) }\right\rbrack  }{x}}$

$$
= {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{2\left\lbrack  {{\mathrm{e}}^{x} - 1 + \ln \left( {1 + {2x}}\right) }\right\rbrack  }{x}} = {\mathrm{e}}^{2\left\lbrack  {\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{x} - 1}{x} + \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + {2x}}\right) }{x}}\right\rbrack  } = {\mathrm{e}}^{6}.
$$

【例 12】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  \frac{\ln \left( {1 + \sin x}\right) }{x}\right\rbrack  }^{\frac{1}{x}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  \frac{\ln \left( {1 + \sin x}\right) }{x}\right\rbrack  }^{\frac{1}{x}} = \mathop{\lim }\limits_{{x \rightarrow  0}}{\left\{  {\left\lbrack  1 + \frac{\ln \left( {1 + \sin x}\right)  - x}{x}\right\rbrack  }^{\frac{x}{\ln \left( {1 + \sin x}\right)  - x}}\right\}  }^{\frac{\ln \left( {1 + \sin x}\right)  - x}{{x}^{2}}}$

$$
= {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + \sin x}\right)  - x}{{x}^{2}}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + \sin x}\right)  - \sin x}{{x}^{2}} + \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin x - x}{{x}^{2}}}\text{,}
$$

由 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + \sin x}\right)  - \sin x}{{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + \sin x}\right)  - \sin x}{{\sin }^{2}x}\overset{\sin x = t}{ = }\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\ln \left( {1 + t}\right)  - t}{{t}^{2}} =  - \frac{1}{2}$ ,

$\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\sin x - x}{{x}^{2}} = 0$ 得 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  \frac{\ln \left( {1 + \sin x}\right) }{x}\right\rbrack  }^{\frac{1}{x}} = {\mathrm{e}}^{-\frac{1}{2}}$ 微信公众号:顶尖考研

【例 13】求 $\mathop{\lim }\limits_{{x \rightarrow  \infty }}{\left( \cos \frac{1}{x}\right) }^{2{x}^{2} - x + 1}$ . (ID:djky66)

【解】 $\mathop{\lim }\limits_{{x \rightarrow  \infty }}{\left( \cos \frac{1}{x}\right) }^{2{x}^{2} - x + 1} = \mathop{\lim }\limits_{{x \rightarrow  \infty }}{\left\{  {\left\lbrack  1 + \left( \cos \frac{1}{x} - 1\right) \right\rbrack  }^{\frac{1}{\cos \frac{1}{x} - 1}}\right\}  }^{\left( {2{x}^{2} - x + 1}\right) \left( {\cos \frac{1}{x} - 1}\right) }$

$$
= {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  \infty }}\left( {2{x}^{2} - x + 1}\right) \left( {\cos \frac{1}{x} - 1}\right) } = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{2{x}^{2} - x + 1}{{x}^{2}} \cdot  {x}^{2} \cdot  \left( {\cos \frac{1}{x} - 1}\right) }
$$

$$
= {\mathrm{e}}^{2\mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{\cos \frac{1}{x} - 1}{\frac{1}{{x}^{2}}}}\frac{\frac{1}{x} = \iota }{}{\mathrm{e}}^{2\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\cos t - 1}{{t}^{2}}} = {\mathrm{e}}^{-1}.
$$

【例 14】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left( \frac{1 + \arcsin x}{1 + \arctan x}\right) }^{\frac{1}{{x}^{3}}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left( \frac{1 + \arcsin x}{1 + \arctan x}\right) }^{\frac{1}{{x}^{3}}} = \mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  {\left( 1 + \frac{\arcsin x - \arctan x}{1 + \arctan x}\right) }^{\frac{1 + \arctan x}{\arcsin x - \arctan x}}\right\rbrack  }^{\frac{1}{{x}^{3}} \cdot  \frac{\arcsin x - \arctan x}{1 + \arctan }}$

$$
= {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{{x}^{3}} \cdot  \frac{\arcsin x - \arctan x}{1 + \arctan x}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\arcsin x - \arctan x}{{x}^{3}}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\left( 1 - {x}^{2}\right) }^{-\frac{1}{2}} - {\left( 1 + {x}^{2}\right) }^{-1}}{3{x}^{2}}}
$$

$$
= {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\left\lbrack  {{\left( 1 - {x}^{2}\right) }^{-\frac{1}{2}} - 1}\right\rbrack   - \left\lbrack  {{\left( 1 + {x}^{2}\right) }^{-1} - 1}\right\rbrack  }{3{x}^{2}}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\left( {-\frac{1}{2}}\right) \left( {-{x}^{2}}\right)  - \left( {-1}\right) \left( {x}^{2}\right) }{3{x}^{2}}} = {\mathrm{e}}^{\frac{1}{2}}.
$$

【例 15】设 $f\left( x\right)$ 连续可导,且 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  1 + x + \frac{f\left( x\right) }{x}\right\rbrack  }^{\frac{1}{x}} = {\mathrm{e}}^{3}$ ,求 $f\left( 0\right) ,{f}^{\prime }\left( 0\right) ,{f}^{\prime \prime }\left( 0\right)$ 及 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  1 + \frac{f\left( x\right) }{x}\right\rbrack  }^{\frac{1}{x}}.$ 【解】由 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  1 + x + \frac{f\left( x\right) }{x}\right\rbrack  }^{\frac{1}{x}} = {\mathrm{e}}^{3}$ 得 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{x} = 0$ ,则 $f\left( 0\right)  = 0,{f}^{\prime }\left( 0\right)  = 0$ ;

由 ${\mathrm{e}}^{3} = \mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  1 + x + \frac{f\left( x\right) }{x}\right\rbrack  }^{\frac{1}{x}} = \mathop{\lim }\limits_{{x \rightarrow  0}}{\left\{  {\left\lbrack  1 + x + \frac{f\left( x\right) }{x}\right\rbrack  }^{\frac{1}{x + \frac{f\left( x\right) }{x}}}\right\}  }^{\frac{1}{x} \cdot  \left\lbrack  {x + \frac{f\left( x\right) }{x}}\right\rbrack  } = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{x} \cdot  \left\lbrack  {x + \frac{f\left( x\right) }{x}}\right\rbrack  }$ 得

$\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{x}\left\lbrack  {x + \frac{f\left( x\right) }{x}}\right\rbrack   = 3$ ,即 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{{x}^{2}} = 2$ ;

再由 $2 = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{f}^{\prime }\left( x\right) }{2x} = \frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{f}^{\prime }\left( x\right)  - {f}^{\prime }\left( 0\right) }{x} = \frac{1}{2}{f}^{\prime \prime }\left( 0\right)$ 得 ${f}^{\prime \prime }\left( 0\right)  = 4$ ,

故 $\mathop{\lim }\limits_{{x \rightarrow  0}}{\left\lbrack  1 + \frac{f\left( x\right) }{x}\right\rbrack  }^{\frac{1}{x}} = \mathop{\lim }\limits_{{x \rightarrow  0}}{\left\{  {\left\lbrack  1 + \frac{f\left( x\right) }{x}\right\rbrack  }^{\frac{x}{f\left( x\right) }}\right\}  }^{\frac{f\left( x\right) }{{x}^{2}}} = {\mathrm{e}}^{2}$ .

情形三: $\frac{\infty }{\infty }$ 型

【例 16】求 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\ln }^{2}x}{\sqrt{x}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\ln }^{2}x}{\sqrt{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\frac{2\ln x}{x}}{\frac{1}{2\sqrt{x}}} = 4\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\ln x}{\sqrt{x}} = 4\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\frac{1}{x}}{\frac{1}{2\sqrt{x}}} = 0$ .

【例 17】求 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{x}^{3}}{{\mathrm{e}}^{x}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{x}^{3}}{{\mathrm{e}}^{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{3{x}^{2}}{{\mathrm{e}}^{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{6x}{{\mathrm{e}}^{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{6}{{\mathrm{e}}^{x}} = 0$ .

【注解】

当 $x \rightarrow   + \infty$ 时, ${\ln }^{k}x\left( {k > 0}\right) ,{x}^{m}\left( {m > 0}\right) ,{a}^{x}\left( {a > 1}\right)$ 都趋于无穷大,且其阶数是由低到高的,即三个无穷大中前面除以后面极限总是零.

【例 18】求 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{3{x}^{2} + x - {2x}\sin x}{2{x}^{2} + x\cos x + 1}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{3{x}^{2} + x - {2x}\sin x}{2{x}^{2} + x\cos x + 1} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{3 + \frac{1}{x} - \frac{2}{x}\sin x}{2 + \frac{1}{x}\cos x + \frac{1}{{x}^{2}}} = \frac{3}{2}$ .

【例 19】设 $\mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{{x}^{2} + x + 3}{{\left( x - 1\right) }^{a} - {\left( x + 1\right) }^{a}} = b\left( { \neq  0,\infty }\right)$ ,求常数 $a, b$ .

【解】由 ${\left( x - 1\right) }^{a} = {x}^{a} - a{x}^{a - 1} + \cdots ,{\left( x + 1\right) }^{a} = {x}^{a} + a{x}^{a - 1} + \cdots$ 得 ${\left( x - 1\right) }^{a} - {\left( x + 1\right) }^{a} =  - {2a}{x}^{a - 1} + \cdots ,$

再由 $\mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{{x}^{2} + x + 3}{{\left( x - 1\right) }^{a} - {\left( x + 1\right) }^{a}} = b$ 得 $\left\{  \begin{array}{l} a - 1 = 2, \\  \frac{1}{-{2a}} = b, \end{array}\right.$ 解得 $a = 3, b =  - \frac{1}{6}$ .

【例 20】求 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\left( 1 + \frac{1}{x}\right) }^{{x}^{2}}}{{\mathrm{e}}^{x}}$ .

【解】方法一 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\left( 1 + \frac{1}{x}\right) }^{{x}^{2}}}{{\mathrm{e}}^{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\mathrm{e}}^{{x}^{2}\ln \left( {1 + \frac{1}{x}}\right) }}{{\mathrm{e}}^{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}{\mathrm{e}}^{{x}^{2}\ln \left( {1 + \frac{1}{x}}\right)  - x}$

$$
= {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\left\lbrack  {{x}^{2}\ln \left( {1 + \frac{1}{x}}\right)  - x}\right\rbrack  } = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\ln \left( {1 + \frac{1}{x}}\right)  - \frac{1}{x}}{\frac{1}{{x}^{2}}}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\ln \left( {1 + t}\right)  - t}{{t}^{2}}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\frac{1}{1 + t} - 1}{2t}} = {\mathrm{e}}^{-\frac{1}{2}}.
$$

方法二

$$
\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\ln \frac{{\left( 1 + \frac{1}{x}\right) }^{{x}^{2}}}{{\mathrm{e}}^{x}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\left\lbrack  {{x}^{2}\ln \left( {1 + \frac{1}{x}}\right)  - x}\right\rbrack   = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\ln \left( {1 + \frac{1}{x}}\right)  - \frac{1}{x}}{\frac{1}{{x}^{2}}}
$$

$$
\overset{\frac{1}{x} = t}{ = }\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\ln \left( {1 + t}\right)  - t}{{t}^{2}} = \mathop{\lim }\limits_{{t \rightarrow  0}}\frac{\frac{1}{1 + t} - 1}{2t} =  - \frac{1}{2},
$$

则 $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{{\left( 1 + \frac{1}{x}\right) }^{{x}^{2}}}{{\mathrm{e}}^{x}} = {\mathrm{e}}^{-\frac{1}{2}}$ .

情形四:0 · 0 型

【例 21】求 $\mathop{\lim }\limits_{{x \rightarrow   - \infty }}x \cdot  \left( {\arctan x + \frac{\pi }{2}}\right)$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow   - \infty }}x \cdot  \left( {\arctan x + \frac{\pi }{2}}\right)  = \mathop{\lim }\limits_{{x \rightarrow   - \infty }}\frac{\arctan x + \frac{\pi }{2}}{\frac{1}{x}} = \mathop{\lim }\limits_{{x \rightarrow   - \infty }}\frac{\frac{1}{1 + {x}^{2}}}{-\frac{1}{{x}^{2}}} =  - 1$ .

【例 22】求 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\tan {2x} \cdot  \ln x$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\tan {2x} \cdot  \ln x = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\tan {2x}}{x} \cdot  x\ln x = 2\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}x\ln x = 2\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\ln x}{\frac{1}{x}}$

$$
= 2\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\frac{1}{x}}{-\frac{1}{{x}^{2}}} =  - 2\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}x = 0.
$$

【注解】

$0 \cdot  \infty$ 的极限一般转化为 $\frac{0}{0}$ 型或 $\frac{\infty }{\infty }$ 型.

情形五: $\infty  - \infty$ 型

【例 23】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\left( {\frac{1}{{\sin }^{2}x} - \frac{1}{{x}^{2}}}\right)$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  0}}\left( {\frac{1}{{\sin }^{2}x} - \frac{1}{{x}^{2}}}\right)  = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{x}^{2} - {\sin }^{2}x}{{x}^{2}{\sin }^{2}x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{x}^{2} - {\sin }^{2}x}{{x}^{4}}$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x + \sin x}{x} \cdot  \frac{x - \sin x}{{x}^{3}} = 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x - \sin x}{{x}^{3}} = 2\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1 - \cos x}{3{x}^{2}} = \frac{1}{3}\text{.}
$$

【例 24】求 $\mathop{\lim }\limits_{{x \rightarrow   - \infty }}\left( {\sqrt{{x}^{2} + {4x} + 8} + x}\right)$ .

【解】方法一 $\mathop{\lim }\limits_{{x \rightarrow   - \infty }}\left( {\sqrt{{x}^{2} + {4x} + 8} + x}\right)  = \mathop{\lim }\limits_{{x \rightarrow   - \infty }}\frac{{4x} + 8}{\sqrt{{x}^{2} + {4x} + 8} - x}$

$$
= \mathop{\lim }\limits_{{x \rightarrow   - \infty }}\frac{4 + \frac{8}{x}}{-\sqrt{1 + \frac{4}{x} + \frac{8}{{x}^{2}}} - 1} =  - 2.
$$

方法二 $\mathop{\lim }\limits_{{x \rightarrow   - \infty }}\left( {\sqrt{{x}^{2} + {4x} + 8} + x}\right)  = \mathop{\lim }\limits_{{x \rightarrow   - \infty }}x\left( {1 - \sqrt{1 + \frac{4}{x} + \frac{8}{{x}^{2}}}}\right)$

$$
\overset{\frac{1}{x} = t}{ = } - \mathop{\lim }\limits_{{t \rightarrow  {0}^{ - }}}\frac{{\left( 1 + 4t + 8{t}^{2}\right) }^{\frac{1}{2}} - 1}{t},
$$

由 ${\left( 1 + 4t + 8{t}^{2}\right) }^{\frac{1}{2}} - 1 \sim  {2t} + 4{t}^{2}$ 得 $\mathop{\lim }\limits_{{x \rightarrow   - \infty }}\left( {\sqrt{{x}^{2} + {4x} + 8} + x}\right)  =  - 2$ .

【例 25】设 $f\left( x\right)$ 二阶可导且 ${f}^{\prime }\left( a\right)  \neq  0$ ,求 $\mathop{\lim }\limits_{{x \rightarrow  a}}\left\lbrack  {\frac{1}{{f}^{\prime }\left( a\right) \left( {x - a}\right) } - \frac{1}{f\left( x\right)  - f\left( a\right) }}\right\rbrack$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  a}}\left\lbrack  {\frac{1}{{f}^{\prime }\left( a\right) \left( {x - a}\right) } - \frac{1}{f\left( x\right)  - f\left( a\right) }}\right\rbrack$

$$
= \frac{1}{{f}^{\prime }\left( a\right) }\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right)  - f\left( a\right)  - {f}^{\prime }\left( a\right) \left( {x - a}\right) }{\left( {x - a}\right) \left\lbrack  {f\left( x\right)  - f\left( a\right) }\right\rbrack  }
$$

$$
= \frac{1}{{f}^{\prime }\left( a\right) }\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{1}{\frac{f\left( x\right)  - f\left( a\right) }{x - a}} \cdot  \frac{f\left( x\right)  - f\left( a\right)  - {f}^{\prime }\left( a\right) \left( {x - a}\right) }{{\left( x - a\right) }^{2}}
$$

$$
= \frac{1}{{f}^{\prime 2}\left( a\right) }\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{f\left( x\right)  - f\left( a\right)  - {f}^{\prime }\left( a\right) \left( {x - a}\right) }{{\left( x - a\right) }^{2}}
$$

$$
= \frac{1}{2{f}^{\prime 2}\left( a\right) }\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{f}^{\prime }\left( x\right)  - {f}^{\prime }\left( a\right) }{x - a} = \frac{{f}^{\prime \prime }\left( a\right) }{2{f}^{\prime 2}\left( a\right) }.
$$

情形六: ${\infty }^{0}$ 型

【例 26】求 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{\left( \frac{1}{\sqrt{x}}\right) }^{\tan x}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{\left( \frac{1}{\sqrt{x}}\right) }^{\tan x} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\tan x\ln \frac{1}{\sqrt{x}}} = {\mathrm{e}}^{-\frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\tan x}{x} \cdot  x\ln x} = {\mathrm{e}}^{-\frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}x\ln x} = {\mathrm{e}}^{0} = 1$ .

情形七:0°型

【例 27】求 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{x}^{x}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{x}^{x} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}x\ln x} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\ln x}{\frac{1}{x}}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\frac{1}{x}}{-\frac{1}{{x}^{2}}}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\left( {-x}\right) } = {\mathrm{e}}^{0} = 1$ .

【例 28】求 $\mathop{\lim }\limits_{{x \rightarrow   - \infty }}{\left( \frac{\pi }{2} + \arctan x\right) }^{\frac{1}{x}}$ .

【解】 $\mathop{\lim }\limits_{{x \rightarrow   - \infty }}{\left( \frac{\pi }{2} + \arctan x\right) }^{\frac{1}{x}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow   - \infty }}\frac{\ln \left( \frac{\pi }{2}\right)  + \arctan x}{x}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow   - \infty }}\frac{\frac{1}{1 + {x}^{2}}}{\frac{1}{2} + \arctan x}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow   - \infty }}\frac{{\left( 1 + {x}^{2}\right) }^{2}}{\frac{1}{1 + {x}^{2}}}} = {\mathrm{e}}^{0} = 1$ .

## 题型四 变积分限函数求极限问题

【例 1】设 $f\left( x\right)$ 在 $x = 0$ 处一阶可导, $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{x} = 2$ ,求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}{tf}\left( {{x}^{2} - {t}^{2}}\right) \mathrm{d}t}{{x}^{4}}$ .

【解】由 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{x} = 2$ 得 $f\left( 0\right)  = 0,{f}^{\prime }\left( 0\right)  = 2$ .

由 ${\int }_{0}^{x}{tf}\left( {{x}^{2} - {t}^{2}}\right) \mathrm{d}t =  - \frac{1}{2}{\int }_{0}^{x}f\left( {{x}^{2} - {t}^{2}}\right) \mathrm{d}\left( {{x}^{2} - {t}^{2}}\right)  = \frac{1}{2}{\int }_{0}^{{x}^{2}}f\left( u\right) \mathrm{d}u$ ,得

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}{tf}\left( {{x}^{2} - {t}^{2}}\right) \mathrm{d}t}{{x}^{4}} = \frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{{x}^{2}}f\left( u\right) \mathrm{d}u}{{x}^{4}} = \frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{2xf}\left( {x}^{2}\right) }{4{x}^{3}} = \frac{1}{4}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( {x}^{2}\right) }{{x}^{2}}
$$

$$
= \frac{1}{4}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( {x}^{2}\right)  - f\left( 0\right) }{{x}^{2}} = \frac{1}{4}{f}^{\prime }\left( 0\right)  = \frac{1}{2}.
$$

【例 2】设 $f\left( x\right)$ 连续, $f\left( 0\right)  = 0,{f}^{\prime }\left( 0\right)$ 存在,求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{x}{\int }_{0}^{1}f\left( {xt}\right) \mathrm{d}t$ .

【解】由 ${\int }_{0}^{1}f\left( {xt}\right) \mathrm{d}t = \frac{1}{x}{\int }_{0}^{1}f\left( {xt}\right) \mathrm{d}\left( {xt}\right)  = \frac{1}{x}{\int }_{0}^{x}f\left( u\right) \mathrm{d}u$ ,得

$\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{x}{\int }_{0}^{1}f\left( {xt}\right) \mathrm{d}t = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u}{{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{2x} = \frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right)  - f\left( 0\right) }{x} = \frac{1}{2}{f}^{\prime }\left( 0\right) .$

【例 3】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{{x}^{2}}{\int }_{0}^{x}\frac{1}{t}\ln \left( {1 + {xt}}\right) \mathrm{d}t$ .

【解】由 ${\int }_{0}^{x}\frac{1}{t}\ln \left( {1 + {xt}}\right) \mathrm{d}t = {\int }_{0}^{x}\frac{1}{xt}\ln \left( {1 + {xt}}\right) \mathrm{d}\left( {xt}\right)  = {\int }_{0}^{{x}^{2}}\frac{\ln \left( {1 + u}\right) }{u}\mathrm{\;d}u$ ,得

$\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{{x}^{2}}{\int }_{0}^{x}\frac{1}{t}\ln \left( {1 + {xt}}\right) \mathrm{d}t = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{{x}^{2}}\frac{\ln \left( {1 + u}\right) }{u}\mathrm{\;d}u}{{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{2x}\frac{\ln \left( {1 + {x}^{2}}\right) }{{x}^{2}}}{2x} = 1.$

【例 4】设函数 $f\left( x\right)$ 连续且 $f\left( 0\right)  \neq  0$ ,求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x{\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t}{{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t}$ .

【解】 ${\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t\overset{x - t = u}{ = }{\int }_{x}^{0}f\left( u\right) \left( {-\mathrm{d}u}\right)  = {\int }_{0}^{x}f\left( u\right) \mathrm{d}u$ ,

${\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t\overset{x - t = u}{ = }{\int }_{x}^{0}\left( {x - u}\right) f\left( u\right) \left( {-\mathrm{d}u}\right)  = x{\int }_{0}^{x}f\left( u\right) \mathrm{d}u - {\int }_{0}^{x}{uf}\left( u\right) \mathrm{d}u$ ,则

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x{\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t}{{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x{\int }_{0}^{x}f\left( u\right) \mathrm{d}u}{x{\int }_{0}^{x}f\left( u\right) \mathrm{d}u - {\int }_{0}^{x}{uf}\left( u\right) \mathrm{d}u}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u + {xf}\left( x\right) }{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u/x + f\left( x\right) }{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u/x},
$$

由 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u}{x} = \mathop{\lim }\limits_{{x \rightarrow  0}}f\left( x\right)  = f\left( 0\right)$ 得 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x{\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t}{{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t} = \frac{f\left( 0\right)  + f\left( 0\right) }{f\left( 0\right) } = 2$ .

【例 5】设 $f\left( x\right)$ 为连续函数,且 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{x} = 1$ ,求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) {\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t}{{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t}$ .

【解】 ${\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t\overset{x - t = u}{ = }{\int }_{x}^{0}f\left( u\right) \left( {-\mathrm{d}u}\right)  = {\int }_{0}^{x}f\left( u\right) \mathrm{d}u$ ,

$$
{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t\overset{x - t = u}{ = }{\int }_{x}^{0}\left( {x - u}\right) f\left( u\right) \left( {-\mathrm{d}u}\right)  = x{\int }_{0}^{x}f\left( u\right) \mathrm{d}u - {\int }_{0}^{x}{uf}\left( u\right) \mathrm{d}u,
$$

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) {\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t}{{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{x} \cdot  \frac{x{\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t}{{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x{\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t}{{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x{\int }_{0}^{x}f\left( u\right) \mathrm{d}u}{x{\int }_{0}^{x}f\left( u\right) \mathrm{d}u - {\int }_{0}^{x}{uf}\left( u\right) \mathrm{d}u} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u + {xf}\left( x\right) }{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\frac{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u}{{x}^{2}} + \frac{f\left( x\right) }{x}}{\frac{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u}{{x}^{2}}},
$$

因为 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\int }_{0}^{x}f\left( u\right) \mathrm{d}u}{{x}^{2}} = \frac{1}{2}\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) }{x} = \frac{1}{2}$ ,所以 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{f\left( x\right) {\int }_{0}^{x}f\left( {x - t}\right) \mathrm{d}t}{{\int }_{0}^{x}{tf}\left( {x - t}\right) \mathrm{d}t} = \frac{\frac{1}{2} + 1}{\frac{1}{2}} = 3$ .

【例 6】设 $f\left( x\right)$ 连续,且 $f\left( 0\right)  = 0,{f}^{\prime }\left( 0\right)  = 1, D = \left\{  {\left( {x, y}\right)  \mid  {x}^{2} + {y}^{2} \leq  {t}^{2}}\right\}  \left( {t > 0}\right)$ ,求极限

$$
\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{{\iint }_{D}f\left( \sqrt{{x}^{2} + {y}^{2}}\right) \mathrm{d}x\mathrm{\;d}y}{\tan t - \sin t}.
$$

【解】 ${\iint }_{D}f\left( \sqrt{{x}^{2} + {y}^{2}}\right) \mathrm{d}x\mathrm{\;d}y = {\int }_{0}^{2\pi }\mathrm{d}\theta {\int }_{0}^{t}{rf}\left( r\right) \mathrm{d}r = {2\pi }{\int }_{0}^{t}{rf}\left( r\right) \mathrm{d}r$ ,

则原式 $= \mathop{\lim }\limits_{{t \rightarrow  0}}\frac{{2\pi }{\int }_{0}^{t}{rf}\left( r\right) \mathrm{d}r}{\tan t\left( {1 - \cos t}\right) } = {4\pi }\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{{\int }_{0}^{t}{rf}\left( r\right) \mathrm{d}r}{{t}^{3}}$

$$
= \frac{4\pi }{3}\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{{tf}\left( t\right) }{{t}^{2}} = \frac{4\pi }{3}\mathop{\lim }\limits_{{t \rightarrow  0}}\frac{f\left( t\right)  - f\left( 0\right) }{t} = \frac{4\pi }{3}{f}^{\prime }\left( 0\right)  = \frac{4\pi }{3}.
$$

## 题型五 左、右极限问题

【例 1】 $f\left( x\right)  = \frac{1 - {2}^{\frac{1}{x - 1}}}{2 + {2}^{\frac{2}{x - 1}}}$ ,讨论 $\mathop{\lim }\limits_{{x \rightarrow  1}}f\left( x\right)$ .

【解】当 $x \rightarrow  {1}^{ - }$ 时, ${2}^{\frac{1}{x - 1}} \rightarrow  0,{2}^{\frac{2}{x - 1}} \rightarrow  0$ ,则 $f\left( {1 - 0}\right)  = \frac{1}{2}$ ;

当 $x \rightarrow  {1}^{ + }$ 时, ${2}^{\frac{1}{x - 1}} \rightarrow   + \infty ,{2}^{\frac{2}{x - 1}} \rightarrow   + \infty$ ,则 $f\left( {1 + 0}\right)  = 0$ ,

因为 $f\left( {1 - 0}\right)  \neq  f\left( {1 + 0}\right)$ ,所以 $\mathop{\lim }\limits_{{x \rightarrow  1}}f\left( x\right)$ 不存在.

【例 2】求 $\mathop{\lim }\limits_{{x \rightarrow  0}}\left( {\frac{2 + {\mathrm{e}}^{\frac{1}{x}}}{1 + {\mathrm{e}}^{\frac{4}{x}}} + \frac{\sin x}{\left| x\right| }}\right)$ .

【解】由 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}\left( {\frac{2 + {\mathrm{e}}^{\frac{1}{x}}}{1 + {\mathrm{e}}^{\frac{4}{x}}} + \frac{\sin x}{\left| x\right| }}\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}\frac{2 + {\mathrm{e}}^{\frac{1}{x}}}{1 + {\mathrm{e}}^{\frac{4}{x}}} - \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}\frac{\sin x}{x} = 2 - 1 = 1$ ,得 $f\left( {0 - 0}\right)  = 1$ ;

由 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\left( {\frac{2 + {\mathrm{e}}^{\frac{1}{x}}}{1 + {\mathrm{e}}^{\frac{4}{x}}} + \frac{\sin x}{\left| x\right| }}\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{2 + {\mathrm{e}}^{\frac{1}{x}}}{1 + {\mathrm{e}}^{\frac{4}{x}}} + \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\sin x}{x} = 0 + 1 = 1$ ,得 $f\left( {0 + 0}\right)  = 1$ ,

因为 $f\left( {0 - 0}\right)  = f\left( {0 + 0}\right)  = 1$ ,所以 $\mathop{\lim }\limits_{{x \rightarrow  0}}\left( {\frac{2 + {\mathrm{e}}^{\frac{1}{x}}}{1 + {\mathrm{e}}^{\frac{4}{x}}} + \frac{\sin x}{\left| x\right| }}\right)  = 1$ .

## 题型六 极限存在问题

【例 1】设 ${a}_{1} > 0,{a}_{n + 1} = \ln \left( {\mathrm{e} + {a}_{n}}\right)  - 1$ ,证明: $\mathop{\lim }\limits_{{n \rightarrow  \infty }}{a}_{n}$ 存在.

【证明】已知 ${a}_{1} > 0$ ,

设 ${a}_{k} > 0$ ,则 ${a}_{k + 1} = \ln \left( {\mathrm{e} + {a}_{k}}\right)  - 1 > \ln \mathrm{e} - 1 = 0$ ,

由数学归纳法,对任意的正整数 $n$ ,有 ${a}_{n} > 0$ ;

由 ${a}_{n + 1} = \ln \left( {\mathrm{e} + {a}_{n}}\right)  - 1 = \ln \left\lbrack  {\mathrm{e}\left( {1 + \frac{{a}_{n}}{\mathrm{e}}}\right) }\right\rbrack   - 1 = \ln \left( {1 + \frac{{a}_{n}}{\mathrm{e}}}\right)  < \frac{{a}_{n}}{\mathrm{e}} < {a}_{n}$ 得

数列 $\left\{  {a}_{n}\right\}$ 单调递减,故 $\mathop{\lim }\limits_{{n \rightarrow  \infty }}{a}_{n}$ 存在.

【例 2】设 ${a}_{n} = \left( {1 + \frac{1}{{2}^{2}}}\right) \left( {1 + \frac{1}{{3}^{2}}}\right) \cdots \left( {1 + \frac{1}{{n}^{2}}}\right)$ ,证明:数列 $\left\{  {a}_{n}\right\}$ 收敛.

【证明】显然数列 $\left\{  {a}_{n}\right\}$ 单调递增.

由 $\ln {a}_{n} = \ln \left( {1 + \frac{1}{{2}^{2}}}\right)  + \ln \left( {1 + \frac{1}{{3}^{2}}}\right)  + \cdots  + \ln \left( {1 + \frac{1}{{n}^{2}}}\right)$

$$
\leq  \frac{1}{{2}^{2}} + \frac{1}{{3}^{2}} + \cdots  + \frac{1}{{n}^{2}} \leq  \frac{1}{1 \times  2} + \frac{1}{2 \times  3} + \cdots  + \frac{1}{\left( {n - 1}\right) n} = 1 - \frac{1}{n} \leq  1
$$