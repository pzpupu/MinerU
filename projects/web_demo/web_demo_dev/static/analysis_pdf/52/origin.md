26.4.a The the numerator and denominator share no common factor and the denominator is 0 at $0, i, - i$ , so $f$ is not defined at these points. By the quotient rule, the derivative exists at all other points. So $0, i, - i$ are singular points and the function is analytic everywhere else.

26.6 It's simplest to use the polar form of the Cauchy-Riemann equations. We see that ${u}_{r} = 1/r,{u}_{\theta } = 0,{v}_{r} = 0$ and ${v}_{\theta } = 1$ . So the polar Cauchy-Riemann equations are satisfied and the partials are continuous. Thus the function is defined on the domain (notice that the domain is carefully chosen so that $\theta$ is well defined without ambiguity.

Now, from our geometrical understanding of functions, ${z}^{2}$ takes the open first quadrant to the upper half plane and adding one then shifts everything one unit to the right. So, as the suggestion notes, $\operatorname{Im}\left( {{z}^{2} + 1}\right)  > 0$ for $z$ in the open first quadrant, i.e. $0 < \operatorname{Arg}\left( {{z}^{2} + 1}\right)  < \pi$ . Since this is in the domain of $g$ , the composition rule tells us that $g\left( {{z}^{2} + 1}\right)$ is analytic.

The rest follows from the CR formula for the derivative of $g$ and from the chain rule.

26.7 If $f$ is real valued and analytic on $D$ , then $f = \bar{f}$ , so $\bar{f}$ is also analytic on $D$ . The result now follows from Example 3 in Section 26.

27.2 The formulas $u\left( {x, y}\right)  = {c}_{1}$ and $v\left( {x, y}\right)  = {c}_{2}$ determine curves that locally take the for $y = y\left( x\right)$ . As noted in the suggestion, we have from the multivariable chain rule (differentiating $u\left( {x, y}\right)$ with respect to $x$ ) that ${u}_{x} + {u}_{y}\frac{dy}{dx} = 0$ and ${v}_{x} + {v}_{y}\frac{dy}{dx} = 0$ .

Find all real values of $a, b, c, d$ so that $a{x}^{3} + b{x}^{2}y + {cx}{y}^{2} + d{y}^{3}$ is harmonic. Let $u = a{x}^{3} + b{x}^{2}y + {cx}{y}^{2} + d{y}^{3}$ . Then ${u}_{x} = {3a}{x}^{2} + {2bxy} + c{y}^{2}$ and ${u}_{xx} = {6ax} + {2by}$ . Similarly, ${u}_{y} = b{x}^{2} + {2cxy} + {3d}{y}^{2}$ and ${u}_{yy} = {2cx} + {6dy}$ . So $u$ is harmonic if and only if ${6a} =  - {2c}$ and ${2b} =  - {6d}$ , i.e. $c =  - {3a}$ and $b =  - {3d}$ . So any function of the form $u = a{x}^{3} - {3d}{x}^{2}y - {3ax}{y}^{2} + d{y}^{3}$ is harmonic.

Show by hand that $u = {x}^{3} - 3{x}^{2}y - {3x}{y}^{2} + {y}^{3}$ is harmonic. Find a $v$ so that $f = u + {iv}$ is entire (hint: use the Cuachy-Riemann equations). ${u}_{x} = 3{x}^{2} - {6xy} - 3{y}^{2}$ and ${u}_{xx} = {6x} - {6y}.{u}_{y} =  - 3{x}^{2} - {6xy} + 3{y}^{2}$ and ${u}_{yy} =  - {6x} + {6y}$ . So $u$ is harmonic.

By the Cauchy-Riemann equations, to find our desired $v$ we need ${v}_{x} =  - {u}_{y} = 3{x}^{2} +$ ${6xy} - 3{y}^{2}$ and ${v}_{y} = {u}_{x} = 3{x}^{2} - {6xy} - 3{y}^{2}$ . Integrating ${v}_{x}$ with respect to $x$ , we see that we must have $v = {x}^{3} + 3{x}^{2}y - {3x}{y}^{2} + g\left( y\right)$ for some function $g$ depending only on $y$ . Taking the $y$ derivative of this, we must have ${v}_{y} = 3{x}^{2} - {6xy} + \frac{dg}{dy}\left( y\right)$ . Comparing with the ${v}_{y}$ we must have from the Cauchy-Riemann equations, we see that $\frac{dg}{dy}\left( y\right)  =  - 3{y}^{2}$ . So $g\left( y\right)  =  - {y}^{3} + C$ . So we see that $v = {x}^{3} + 3{x}^{2}y - {3x}{y}^{2} - {y}^{3} + C$ satisfies the Cauchy-Riemann equations with $u$ , and everything in sight is continuous. So any such $v$ works.

## Homework 6

30.1.b ${e}^{\frac{2 + {\pi i}}{4}} = {e}^{1/2}{e}^{{\pi i}/4} = \sqrt{e}\left( {\cos \pi /4 + i\sin \pi /4}\right)  = \sqrt{e}\left( {1/\sqrt{2} + i/\sqrt{2}}\right)  = \sqrt{e/2}\left( {1 + i}\right)$

30.3 ${e}^{\bar{z}} = {e}^{x}\left( {\cos y - i\sin y}\right)$ . So ${u}_{x} = {e}^{x}\cos y,{u}_{y} =  - {e}^{x}\sin y,{v}_{x} =  - {e}^{x}\sin y,{v}_{y} =  - {e}^{x}\cos y$ . If CR holds, then $\cos y =  - \cos y$ , so $\cos y = 1/2$ and $\sin y =  - \sin y$ , so $\sin y = 1/2$ . Since $\sin y$ and $\cos y$ are never both $1/2$ for the same $y,{e}^{\bar{z}}$ cannot be differentiable anywhere.

30.6 $\left| {e}^{{z}^{2}}\right|  = \left| {e}^{{x}^{2} - {y}^{2} + {i2xy}}\right|  = \left| {e}^{{x}^{2} - {y}^{2}}\right| \left| {e}^{i2xy}\right|  = {e}^{{x}^{2} - {y}^{2}} = {e}^{{x}^{2} + {y}^{2}}{e}^{-{y}^{2}} = {e}^{\left| {z}^{2}\right| }{e}^{-{y}^{2}}$ . Since $- {y}^{2} \leq  0$ we hace ${e}^{-{y}^{2}} \leq  1$ . So $\left| {e}^{{z}^{2}}\right|  \leq  {e}^{\left| {z}^{2}\right| }{e}^{-{y}^{2}}$ .

30.8.a ${e}^{z} =  - 2$ implies that ${e}^{x}\left( {\cos y + i\sin y}\right)  =  - 2$ . Since -2 is real, $\sin y = 0$ , so $y$ is a multiple of $\pi$ . Since $- 2 < 0$ , we must have $\cos y < 0$ , which means that is an odd multiple of $\pi$ , i.e. $y = \left( {{2n} + 1}\right) \pi$ . Then ${e}^{z} =  - {e}^{x} =  - 2$ , so ${e}^{x} = 2$ , which implies that $x = \ln 2$ .

30.11 As $x \rightarrow   - \infty ,{e}^{z}$ moves toward 0 along a ray from the origin. As $y \rightarrow  \infty ,{e}^{z}$ moves clockwise around a circle of radius ${e}^{x}$ centered at the origin an infinite number of times.

38.7 for ${\left| \sin z\right| }^{2}$ Using (13), ${\left| \sin z\right| }^{2} = {\sin }^{2}x{\cosh }^{2}y + {\cos }^{2}x{\sinh }^{2}y = {\sin }^{2}x{\cosh }^{2}y - {\sin }^{2}x{\sinh }^{2}y +$ ${\sin }^{2}x{\sinh }^{2}y + {\cos }^{2}x{\sinh }^{2}y = {\sin }^{2}x\left( {{\cosh }^{2}y - {\sinh }^{2}y}\right)  + {\sinh }^{2}y\left( {{\sin }^{2}x + {\cos }^{2}x}\right)  =$ ${\sin }^{2}x + {\sinh }^{2}y$ .

Show that ${\sin }^{2}z + {\cos }^{2}z = 1{\sin }^{2}z + {\cos }^{2}z = {\left( \frac{{e}^{iz} - {e}^{-{iz}}}{2i}\right) }^{2} + {\left( \frac{{e}^{iz} + {e}^{-{iz}}}{2}\right) }^{2} = \frac{{e}^{2iz} + {e}^{-{2iz}} - 2}{-4} +$ $\frac{{e}^{2iz} + {e}^{-{i2z}} + 2}{4} = 4/4 = 1$

Show that $\overline{{e}^{z}} = {e}^{\bar{z}} : \overline{{e}^{z}} = \overline{{e}^{x}\cos y + i{e}^{x}\sin y} = {e}^{x}\cos y - i{e}^{x}\sin y = {e}^{x}\cos \left( {-y}\right)  + i{e}^{x}\sin \left( {-y}\right)  =$

$$
{e}^{x}{e}^{-{iy}} = {e}^{x - {iy}} = {e}^{\bar{z}}.
$$

Show that $\overline{\sin z} = \sin \bar{z}$ and $\overline{\cos z} = \cos \bar{z}$ . Using the last problem and basic properties of conjugates, $\overline{\sin z} = \frac{{e}^{-i\bar{z}} - {e}^{i\bar{z}}}{-{2i}} = \frac{{e}^{i\bar{z}} - {e}^{-i\bar{z}}}{2i} = \sin \bar{z}$ . cos is similar.

33.1.a $\left| {-{ei}}\right|  = e$ and $\arg \left( {-{ie}}\right)  =  - \pi /2 + {2\pi n}$ , so $\log \left( {-{ei}}\right)  = \ln e + {i\theta } = 1 + i\left( {-\pi /2}\right)$

33.2.c $\left| {-1 + \sqrt{3}i}\right|  = 2$ and $\arg \left( {-1 + \sqrt{3}i}\right)  = {2\pi }/3 + {2\pi n}$ , so $\log \left( {-1 + \sqrt{3}i}\right)  = \ln 2 + i({2\pi }/3 +$ ${2\pi n})$

33.4 With the chosen branch, $\log \left( {i}^{2}\right)  = \log \left( {-1}\right)  = {\pi i}$ , while $2\log i = 2\left( {{i5\pi }/2}\right)  = {i5\pi }$

33.9 In general, we have ${e}^{z} = {e}^{x + {iy}} = {e}^{x}{e}^{iy}$ , so $\left| {e}^{z}\right|  = {e}^{x}$ and $\arg \left( {e}^{z}\right)  = y + {2\pi n}$ . If we use the branch $\alpha  < \theta  < \alpha  + {2\pi }$ for $\log$ , then we have that $\log \left( {e}^{z}\right)  = \ln {e}^{x} + {i\Theta }$ , where $\Theta$ is the value of $\arg \left( {e}^{z}\right)  = y + {2\pi n}$ with $\alpha  < \Theta  < \alpha  + {2\pi }$ . But with the assumption, this is precisely $y$ . So $\log {e}^{z} = x + {iy} = z$ .

33.10.a By definition/branch cuts, $\log \left( z\right)$ is analytic so long as $z$ does not lie on the part of the real axis with $x \leq  0$ . Thus, since the composition of anlaytic functions is analytic where it is defined (and $\log z$ and $z - i$ are analytic) $\log \left( {z - i}\right)$ is thus analytic so long as $z - i$ is not on the non-positive $x$ -axis, which is equivalent to $z$ not being on the line $y = 1$ with $x \leq  0$ .

33.11 One way to do this is by direct computation of derivatives. Alternatively, $\ln \left( {{x}^{2} + {y}^{2}}\right)$ is the real part of $2\log z$ for any branch cut. For any branch cut, $2\log z$ is analytic in its domain, and so its real part is harmonic in that domain, which covers all of the plane except one ray. If we choose a different branch cut, then we see that $\ln \left( {{x}^{2} + {y}^{2}}\right)$ is also harmonic on the ray, except for at 0 . Since being harmonic is a local property and we have verified it at all non-zero points of the plane, the function is harmonic on $\mathbb{C} - \{ 0\}$ .

Homework 7

34.3 Let ${z}_{1} =  - \sqrt{2}/2 + i\sqrt{2}/2$ , and let ${z}_{2} =  - i$ . Then ${z}_{1}/{z}_{2} =  - \sqrt{2}/2 - i\sqrt{2}/2$ , so $\log \left( {{z}_{1}/{1}_{z}}\right)  =  - {i3\pi }/4$ . But $\log \left( {z}_{1}\right)  - \log \left( {z}_{2}\right)  = {i3\pi }/4 - \left( {-{i\pi }/2}\right)  = {i5\pi }/4$ .

36.1.a ${\left( 1 + i\right) }^{i} = {e}^{i\log \left( {1 + i}\right) } = {e}^{i\left( {\ln \sqrt{2} + i\left( {\pi /4 + {2\pi n}}\right) }\right) } = {e}^{-\pi /4 + {2\pi n}}{e}^{i\ln \sqrt{2}} = {e}^{-\pi /4 + {2\pi n}}{e}^{i\left( {\ln 2}\right) /2}$

36.2.a Principal value of ${\left( -i\right) }^{i} = {e}^{i\log \left( {-i}\right) } = {e}^{i\left( {-{\pi i}/2}\right) } = {e}^{\pi /2}$

36.2.c Principal value of ${\left( 1 - i\right) }^{4i} = {e}^{{4i}\log \left( {1 - i}\right) } = {e}^{{4i}\left( {\ln \sqrt{2} - {\pi i}/4}\right) } = {e}^{\pi  + {i2}\ln \left( 2\right) } = {e}^{\pi }(\cos \left( {2\ln 2}\right)  +$ $i\sin \left( {2\ln 2}\right) )$

36.6 If $a$ is real then $\left| {z}^{a}\right|  = \left| {e}^{a\log z}\right|  = \left| {e}^{a\left( {\ln \left| z\right| }\right)  + {ai}\arg \left( z\right) }\right|  = \left| {{e}^{a\ln \left| z\right| }{e}^{{ai}\arg z}}\right|  = \left| {e}^{a\ln \left| z\right| }\right|  =$ $\left| {e}^{\ln {\left| z\right| }^{a}}\right|  = \left| \right| z\left| {}^{a}\right|$ . But if we take the principal value of ${\left| z\right| }^{a}$ then since $\left| z\right|$ is a positive real number we have ${\left| z\right| }^{a} = {e}^{a\log \left| z\right| } = {e}^{a\ln \left| z\right| }$ as real numbers, and this is the usual real number ${\left| z\right| }^{a}$ , which is also positive. So $\left| \right| z\left| {}^{a}\right|  = {\left| z\right| }^{a}$ .

36.8.a Using principal values, we have ${z}^{{c}_{1}}{z}^{{c}_{2}} = {e}^{{c}_{1}\log z}{e}^{{c}_{2}\log z}$ . As noted in Section 35, when we use principal values ${e}^{z}$ is exactly the function we’re used to working with, so, in particular, ${e}^{{c}_{1}\log z}{e}^{{c}_{2}\log z} = {e}^{{c}_{1}\log z + {c}_{2}\log z} = {e}^{\left( {{c}_{1} + {c}_{2}}\right) \log z}$ , which is the principal branch of ${z}^{{c}_{1} + {c}_{2}}$ .

42.2.a ${\int }_{0}^{1}{\left( 1 + it\right) }^{2}{dt} = {\int }_{0}^{1}1 + {2it} - {t}^{2}{dt} = t + i{t}^{2} - {t}^{3}/{\left. 3\right| }_{0}^{1} = 1 + i - 1/3 - \left( 0\right)  = \frac{2}{3} + i$

42.2.c ${\int }_{0}^{\pi /6}{e}^{i2t}{dt} = {\left. \frac{{e}^{i2t}}{2i}\right| }_{0}^{\pi /6} = \frac{{e}^{{i\pi }/3 - 1}}{2i} = \frac{1}{2i}\left( {\frac{-1}{2} + i\frac{\sqrt{3}}{2} = \frac{\sqrt{3} + i}{4}}\right.$

42.4 ${\int }_{0}^{\pi }{e}^{\left( {1 + i}\right) x}{dx} = {\left. \frac{{e}^{\left( {1 + i}\right) x}}{1 + i}\right| }_{0}^{\pi } = \frac{{e}^{\left( {1 + i}\right) \pi } - 1}{1 + i} = \frac{-{e}^{\pi } - 1}{1 + i} = \frac{1}{2}\left( {-{e}^{\pi } - 1}\right) \left( {1 - i}\right)$ . So ${\int }_{0}^{\pi }{e}^{x}\cos {xdx} =$

$\frac{1}{2}\left( {-{e}^{\pi } - 1}\right)$ and ${\int }_{0}^{\pi }{e}^{x}\sin {xdx} = \frac{1}{2}\left( {{e}^{\pi } + 1}\right)$ .

43.1.a Let $\tau  =  - t$ . Then ${d\tau } =  - {dt}$ and ${\int }_{-b}^{-a}w\left( {-t}\right) {dt} =  - {\int }_{-b}^{-a}w\left( \tau \right) {d\tau } = {\int }_{a}^{b}w\left( \tau \right) {d\tau }$

46.1.a ${z}^{\prime } = {2i}{e}^{i\theta }$ so ${\int }_{C}\frac{z + 2}{z}{dz} = {\int }_{0}^{\pi }\frac{2{e}^{i\theta } + 2}{2{e}^{i\theta }}{2i}{e}^{i\theta }{d\theta } = {\int }_{0}^{\pi }{2i}{e}^{i\theta } + {2i\phi } = {\left. 2{e}^{i\theta } + 2i\theta \right| }_{0}^{\pi } =  - 2 +$ ${2\pi i} - 2 =  - 4 + {2\pi i}$

46.2.b Take $z\left( t\right)  = t,0 \leq  t \leq  2$ . Then ${\int }_{C}z - {1dz} = {\int }_{0}^{2}t - {1dt} = {t}^{2}/2 - {\left. t\right| }_{0}^{2} = 2 - 2 - 0 = 0$

46.4 Our parametrization is $z = t + i{t}^{3}$ but we need to consider two pieces, $- 1 \leq  t \leq  0$ and $0 \leq  t \leq  1$ . We also have ${z}^{\prime } = 1 + 3{t}^{2}i$ . The first part gives us ${\int }_{-1}^{0}1\left( {1 + 3{t}^{2}i}\right) {dt} =$ ${\left. t + {t}^{3}i\right| }_{-1}^{0} =  - \left( {-1 - i}\right)  = 1 + i$ . The second part is ${\int }_{0}^{1}4{t}^{3}\left( {1 + 3{t}^{2}i}\right) {dt} = {\int }_{0}^{1}4{t}^{3} + {12}{t}^{5}{idt} =$ ${t}^{4} + {\left. 2{t}^{6}i\right| }_{0}^{1} = 1 + {2i}$ . So altogether we have $1 + i + 1 + {2i} = 2 + {3i}$

46.5 Given any $z\left( t\right) , a \leq  t \leq  b$ , we have ${\int }_{C}{1dz} = {\int }_{a}^{b}\frac{dz}{dt}{dt} = {\left. z\right| }_{a}^{b} = z\left( b\right)  - z\left( a\right)  = {z}_{2} - {z}_{1}$

46.6 Note that the contour only has an endpoint on the branch cut. So we use ${z}^{\prime } = i{e}^{i\theta }$ and the integral is ${\int }_{0}^{\pi }{e}^{i\log z}i{e}^{i\theta }{d\theta } = {\int }_{0}^{\pi }{e}^{i\left( {i\theta }\right) }i{e}^{i\theta }{d\theta } = {\int }_{0}^{\pi }{e}^{-\theta }i{e}^{i\theta }{d\theta } = {\int }_{0}^{\pi }{e}^{{i\theta } - \theta }{id\theta } =$ ${\int }_{0}^{\pi }{e}^{\left( {i - 1}\right) \theta }{id\theta } = {\left. \frac{i{e}^{\left( {i - 1}\right) \theta }}{i - 1}\right| }_{0}^{\pi } = \frac{i{e}^{{\pi i} - \pi } - i}{i - 1} = \frac{-i{e}^{-\pi } - i}{i - 1} = \frac{\left( {-1 - i}\right) \left( {-i{e}^{-\pi } - i}\right) }{2} = \frac{\left( {-1 + i}\right) \left( {{e}^{-\pi } + 1}\right) }{2}$

Homework 8

43.5 Let $w\left( t\right)  = f\left( {z\left( t\right) }\right)  = u\left( {x\left( t\right) , y\left( t\right) }\right)  + {iv}\left( {x\left( t\right) , y\left( t\right) }\right)$ . Then by the chain rule, $\frac{dw}{dt} = \frac{\partial u}{\partial x}\frac{dx}{dt} +$ $\frac{\partial u}{\partial y}\frac{dy}{dt} + i\frac{\partial v}{\partial x}\frac{dx}{dt} + i\frac{\partial v}{\partial y}\frac{dy}{dt}$ . Writing ${u}_{x},{u}_{y},{v}_{x},{v}_{y},{x}^{\prime },{y}^{\prime }$ for the appropriate derivatives and using Cauchy-Riemann, this is ${u}_{x}{x}^{\prime } + {u}_{y}{y}^{\prime } + i\left( {{v}_{x}{x}^{\prime } + {v}_{y}{y}^{\prime }}\right)  = {u}_{x}{x}^{\prime } - {v}_{x}{y}^{\prime } + i\left( {{v}_{x}{x}^{\prime } + {u}_{x}{y}^{\prime }}\right)  =$ $\left( {{u}_{x} + i{v}_{x}}\right) \left( {{x}^{\prime } + i{y}^{\prime }}\right)  = \frac{df}{dz}\frac{dz}{dt}$ as desired.

47.1.a On part of the circle of radius $2,\left| {z + 4}\right|  \leq  \left| z\right|  + 4 = 2 + 4 = 6$ and $\left| {{z}^{3} - 1}\right|  \geq  \left| \right| z\left| {{}^{3} - 1}\right|  = 7$ . The length of the quarter circle is ${2\pi } \cdot  2/4 = \pi$ . So by the Theorem in this section, the integral is $\leq  {6\pi }/7$ .

47.2 As noted in the suggestion, the minimum $\left| z\right|$ on the curve occurs at the midpoint $1/2 + i/2$ and so is $\sqrt{1/2}$ . Thus $\left| {1/{z}^{4}}\right|  \geq  1/{\left( \sqrt{1/2}\right) }^{4} = 4$ . The length of the line segment is $\sqrt{2}$ by the Pythagorean theorem. So the integral is $\leq  4\sqrt{2}$ .

47.4 On the circle of radius $R$ we have that $\left| {2{z}^{2} - 1}\right|  \leq  2{\left| z\right| }^{2} + 1 = 2{R}^{2} + 1$ while $\left| {{z}^{4} + 5{z}^{2} + 4}\right|  =$ $\left| {{z}^{2} + 4}\right| \left| {{z}^{2} + 1}\right|  \geq  \left| \right| z\left| {{}^{2} - 4}\right| \left| \right| z\left| {{}^{2} - 1}\right|  = \left( {{R}^{2} - 4}\right) \left( {{R}^{2} - 1}\right)$ . So $\left| \frac{2{z}^{2} - 1}{{z}^{4} + 5{z}^{2} + 4}\right|  \leq  \frac{2{R}^{2} + 1}{\left( {{R}^{2} - 4}\right) \left( {{R}^{2} - 1}\right) }$ and the integral is $\leq  \frac{2{R}^{2} + 1}{\left( {{R}^{2} - 4}\right) \left( {{R}^{2} - 1}\right) }{\pi R}$ . As $R \rightarrow  \infty$ this expression goes to 0 .

47.7 $\left| {x + i\sqrt{1 - {x}^{2}}\cos \theta }\right|  = {\sqrt{x}}^{2} + \left( {1 - {x}^{2}}\right) {\cos }^{2}\theta$ . Since $1 - {x}^{2} \geq  0$ by the assumption $\left| x\right|  \leq  1$ , we have $\left( {1 - {x}^{2}}\right) {\cos }^{2}\theta  \leq  1 - {x}^{2}$ . So $\left| {x + i\sqrt{1 - {x}^{2}}\cos \theta }\right|  \leq  {x}^{2} + 1 - {x}^{2} = 1$ . So $\left| {\left( x + i\sqrt{1 - {x}^{2}}\cos \theta \right) }^{n}\right|  = {\left| x + i\sqrt{1 - {x}^{2}}\cos \theta \right| }^{n} \leq  {1}^{n} = 1$ . So the modulus of the integral is $\leq  \pi$ and therefore $\left| {{P}_{n}\left( x\right) }\right|  \leq  1$ .

49.1 For $n$ a nonnegative integer, ${z}^{n}$ is entire with antiderivative $F\left( z\right)  = \frac{{z}^{n + 1}}{n + 1}$ in the whole plane. So a contour integral from ${z}_{1}$ to ${z}_{2}$ of ${z}^{n}$ is $F\left( {z}_{2}\right)  - F\left( {z}_{1}\right)  = \frac{{z}_{2}^{n + 1} - {z}_{1}^{n + 1}}{n + 1}$ .

49.2.b $2\sin \left( {z/2}\right)$ is an antiderivative of $\cos \left( {z/2}\right)$ . So the integral is $2\left( {\sin \left( {\pi /2 + i}\right)  - \sin \left( 0\right) }\right)  =$ $2\sin \left( {\pi /2 + i}\right)  = \frac{{e}^{i\left( {\pi /2 + i}\right) } - {e}^{-i\left( {\pi /2 + i}\right) }}{i} = \frac{{e}^{-1 + {i\pi }/2} - {e}^{1 - {i\pi }/2}}{i} = \frac{{e}^{-1}i - e\left( {-i}\right) }{i} = {e}^{-1} + e$

49.3 Since the case $n = 0$ is omited, ${\left( z - {z}_{0}\right) }^{n - 1}$ has antiderivative $\frac{{\left( z - {z}_{0}\right) }^{n}}{n}$ on the domain $\mathbb{C} - \left\{  {z}_{0}\right\}$ (if $n > 0$ this is an antiderivative on all of $\mathbb{C}$ ). As long as a contour does not pass through ${z}_{0}$ , the integrand is defined and continuous on the contour. So why the Theorem in Section 48, the integral is 0 when the contour is also closed.

49.4 As observed in the text, the branch of ${z}^{1/2}$ using $\pi /2 < \theta  < {5\pi }/2$ is defined at all points of any contour that lies below the real axis except for its endpoints at -3 and 3 , and for all points on such a contour the values of this branch aree with those of the branch $0 < \theta  < {2\pi }$ , except at the point 3 . But as one point does not affect the value of the integral, we can use the $\pi /2 < \theta  < {5\pi }/2$ branch to compute. Furthermore, this branch of ${z}^{1/2}$ has antiderivative ${z}^{3/2}/\left( {3/2}\right)$ (with the same branch choice) on a domain containing the contour. So by the Theorem in Section 48, the contour integral is $\frac{2}{3}\left( {{3}^{3/2} - {\left( -3\right) }^{3/2}}\right.$ . For this branch, ${3}^{3/2} = {\left( 3{e}^{2\pi i}\right) }^{3/2} = {3}^{3/2}{e}^{3\pi i} =  - {3}^{3/2}$ while ${\left( -3\right) }^{3/2} =$ ${\left( 3{e}^{\pi i}\right) }^{3/2} = {3}^{3/2}{e}^{{i3\pi }/2} =  - i{3}^{3/2}$ . So the integral is $\frac{2/3}{(} - {3}^{3/2} + i{3}^{3/2}) = 2\left( {-\sqrt{3} + i\sqrt{3}}\right)$ .

49.5 As in the suggestion, if we consider the branch of ${z}^{i}$ with $- \pi /2\arg z < {3\pi }/2$ to write ${z}^{i} = {e}^{i\log z}$ then this agrees with ${e}^{i\log z}$ on the entirety of any contour that lies about the real axis (except for its endpoints). So the integral is the same treating ${z}^{i}$ either way. But now using our branch, ${z}^{i}$ has antiderivative ${z}^{i + 1}/\left( {i + 1}\right)$ (using the same branch to define ${z}^{i + 1}$ ) and so by the Theorem in Section 48, the integral is $\left( {{1}^{i + 1} - {\left( -1\right) }^{i + 1}}\right) /\left( {i + 1}\right)$ . Using our branch, we compute ${1}^{i + 1} = {e}^{\left( {i + 1}\right) \log 1} = {e}^{\left( {i + 1}\right) \left( {0 + {0i}}\right) } = {e}^{0} = 1$ , while ${\left( -1\right) }^{i + 1} =$ ${e}^{\left( {i + 1}\right) \log \left( {-1}\right) } = {e}^{\left( {i + 1}\right) \left( {\ln 1 + {i\pi }}\right) } = {e}^{-\pi  + {i\pi }} =  - {e}^{-\pi }$ . So the integral is $\frac{1 + {e}^{-\pi }}{i + 1} = \frac{1 + {e}^{-\pi }}{2}\left( {1 - i}\right)$

Homework 9

53.1.a This function is analytic except at $z =  - 3$ . So it is analytic on and inside the circle, so the integral is 0 .

53.1.c This function only fails to be analytic at $\frac{-2 \pm  \sqrt{4} - 8}{2} =  - 1 \pm  i$ . These points are outside the disk, so by Cauchy-Goursat the integral is 0 .

53.1.f $f$ fails to be analytic at the points $\{ x + {iy} \mid  x \leq   - 2, y = 0\}$ . These don’t intersection the unit disk, so by Cauchy-Goursat the integral is 0 .

53.2.a This function is analytic except where $z =  \pm  \sqrt{1}{3i}$ . So, for example, $f$ is analytic on the domain $\left| z\right|  > {0.6}$ . Thus the Theorem (more precisely the Corollary) from Section 53 applies.

53.3 ${z}_{0} = 2 + i$ is in the interior of the rectangle described, and for all $n$ the function ${\left( z - 2 - i\right) }^{n - 1}$ is analytic on $\mathbb{C} - \left\{  {z}_{0}\right\}$ . So by the Corollary of Section 53, the integral on ${C}_{0}$ equals the integral on $C$ . The result follows from the ${C}_{0}$ integral computations given.

53.6 We can't use Cauchy-Goursat here because the square root isn't well defined at 0 , so the hypotheses of the theorem aren't satisfied. However, we compute the pieces. On the semicircle we use $z = {e}^{i\theta }$ so ${z}^{\prime } = i{e}^{i\theta }$ and we have ${\int }_{0}^{\pi }{e}^{{i\theta }/2}i{e}^{i\theta }{d\theta } = i{\int }_{0}^{\pi }{e}^{{i3\theta }/2}{d\theta } =$ ${e}^{{i3\theta }/2}2/3 = \left( {2/3}\right) \left( {{e}^{{i3\pi }/2} - 1}\right)  = \left( {2/3}\right) \left( {-i - 1}\right)  =  - 2/3 - {i2}/3$ . For the part on the positive $\mathrm{x}$ axis we have ${\int }_{0}^{1}\sqrt{t}{dt} = {\left. \left( 2/3\right) {t}^{3/2}\right| }_{0}^{1} = 2/3$ . For the negative real part we have ${\int }_{-1}^{0}\sqrt{-t}{e}^{{i\pi }/2}{dt} = {i2}/3$ . Adding these three pieces, we get 0 .

53.7 This comes from Green’s Theorem. With $f = x - {iy}$ , Green’s Theorem (see (4) in Section 50) says that ${\int }_{C}u - {ivdz} = {\iint }_{R}{v}_{x} - {u}_{y} + i\left( {{u}_{x} + {v}_{y}}\right) {dA} = {\iint }_{R}0 - 0 + i\left( {1 + 1}\right) {dA} =$ $\iint {R2idA} = {2i} \cdot  \operatorname{Area}\left( R\right) .$

Homework 10

57.1.a ${2\pi i}{e}^{-{\pi i}/2} = {2\pi i}\left( {-i}\right)  = {2\pi }$

57.1.b ${2\pi i}\frac{\cos \left( 0\right) }{{0}^{2} + 8} = {\pi i}/4$

57.1.c $\frac{z}{{2z} + 1} = \frac{z/2}{z + 1/2}$ so the answer is ${2\pi i}\left( {-1/4}\right)  =  - {\pi i}/2$

57.1.e ${2\pi i}\frac{d}{dz}\tan \left( {z/2}\right)  = {2\pi i}{\sec }^{2}\left( {z/2}\right) /2$ . So the answer is ${\pi i}{\sec }^{2}\left( {{x}_{0}/2}\right)$

57.2.a ${z}^{2} + 4 = \left( {z + {2i}}\right) \left( {z - {2i}}\right) {.2i}$ is in the circle but $- {2i}$ isn’t. So the integral is ${2\pi i}$ times $\frac{1}{z + {2i}}$ evaluated at ${2i}$ . So the answer is ${2\pi i}/{4i} = \pi /2$

57.3 $g\left( 2\right)  = {\int }_{C}\frac{2{s}^{2} - s - 2}{s - 2}{ds}$ , so $g\left( 2\right)  = {2\pi i}\left( {2{\left( 2\right) }^{2} - 2 - 2}\right)  = {2\pi i4} = {8\pi i}$ . If $\left| z\right|  > 3$ then the integrand is analytic on and inside the contour so $g\left( z\right)  = 0$ .

57.5 If ${z}_{0}$ is outside the contour, both sides are 0 . If ${z}_{0}$ is inside the contour and $C$ is positively oriented then from the Cauchy formulas both sides are ${f}^{\prime }\left( {z}_{0}\right)$ , using that $f$ analytic implies that ${f}^{\prime }$ is analytic. If $C$ is negatively oriented, then the integrals reverse signs but are still equal.

57.7 From the integral formula, the integral is ${2\pi i}{e}^{a0} = {2\pi i}$ . In terms of $\theta$ , we let $z = {e}^{i\theta }$ so that ${z}^{\prime } = i{e}^{i\theta }$ . Then the integral is ${\int }_{-\pi }^{\pi }{e}^{a\left( {\cos \theta  + i\sin \theta }\right) }i{e}^{i\theta }/{e}^{i\theta }{d\theta } =$ $i{\int }_{-\pi }^{\pi }{e}^{a\cos \theta }{e}^{{ia}\sin \theta }{d\theta } = i{\int }_{-\pi }^{\pi }{e}^{a\cos \theta }\left( {\cos \left( {a\sin \theta }\right)  + i\sin \left( {a\sin \theta }\right) }\right) {d\theta }$ . Since ${e}^{a\cos \theta }\sin \left( {a\sin \theta }\right)$ is an odd function, its integral from $- \pi$ to $\pi$ is 0 . So we get $i{\int }_{-\pi }^{\pi }{e}^{a\cos \theta }\cos \left( {a\sin \theta }\right) {d\theta } =$ ${2\pi i}$ . Also ${e}^{a\cos \theta }\cos \left( {a\sin \theta }\right)$ is even so its integral from $- \pi$ to 0 is equal to the integral from 0 to $\pi$ . So ${\int }_{0}^{\pi }{e}^{a\cos \theta }\cos \left( {a\sin \theta }\right) {d\theta } = \pi$

57.10 Let ${z}_{0}$ be a point in the plane, and let ${C}_{R}$ be the circle of radius $R$ around ${z}_{0}$ . The points on ${C}_{R}$ have the form ${z}_{0} + R{e}^{i\theta }$ . Then on ${C}_{R}$ we have $\left| {f\left( z\right) }\right|  \leq$ $A\left| {{z}_{0} + R{e}^{i\theta }}\right|  \leq  A\left( {\left| {z}_{0}\right|  + R}\right)$ . So ${f}^{\prime \prime }\left( {z}_{0}\right)  \leq  {2A}\left( {\left| {z}_{0}\right|  + R}\right) /{R}^{2}$ . As $R$ goes to $\infty$ , we see that ${f}^{\prime \prime }\left( {z}_{0}\right)  = 0$ . So ${f}^{\prime }\left( z\right)$ is constant, i.e. ${f}^{\prime }\left( z\right)  = {a}_{1}$ . Since $f$ is an antiderivative of ${f}^{\prime }$ , this implies $f\left( z\right)  = {a}_{1}z + C$ . But $f\left( 0\right)$ must be 0 for $\left| {f\left( z\right) }\right|  \leq  A\left| z\right|$ to hold, $f\left( z\right)  = {a}_{1}z$

59.1 If $f$ is entire, so is ${e}^{f} = {e}^{u + {iv}} = {e}^{u}{e}^{iv}$ . So if $u$ is bounded, then so is $\left| {e}^{f}\right|  = {e}^{u}$ . So then ${e}^{f}$ is constant. So $\left| {e}^{f}\right|  = {e}^{u}$ is constant. So $u = {ln}{e}^{u}$ is constant.

59.3 Let $R$ be the region $\left| z\right|  \leq  1$ . Then if $f\left( z\right)  = z,\left| {f\left( z\right) }\right|  = \left| z\right|  = 0$ at $z = 0$ , but $\left| {f\left( z\right) }\right|  = \left| z\right|  > 0$ for $z \neq  0$ . So $\left| f\right|$ has a minimum in the interior of $R$ .

59.8.a Just multiply and cancel

59.8.b By part a, we can write ${z}^{k} - {z}_{0}^{k} = \left( {z - {z}_{0}}\right) {P}_{k - 1}\left( z\right)$ , where ${P}_{k - 1}$ is a polynomial of degree $k - 1$ .

$$
P\left( z\right)  - P\left( {z}_{0}\right)  = {a}_{0} + {a}_{1}z + {a}_{2}{z}^{2} + \cdots  + {a}_{n}{z}^{n} - {a}_{0} - {a}_{1}{z}_{0} - {a}_{2}{z}_{0}^{2} - \cdots  - {a}_{n}{z}_{0}^{n}
$$

$$
= {a}_{1}\left( {z - {z}_{0}}\right)  + {a}_{2}{\left( z - {z}_{0}\right) }^{2} + \cdots  + {a}_{n}\left( {{z}^{n} - {z}_{0}^{n}}\right)
$$

$$
= {a}_{1}\left( {z - {z}_{0}}\right)  + {a}_{2}\left( {z - {z}_{0}}\right) {P}_{1}\left( z\right)  + \cdots  + {a}_{n}\left( {z - {z}_{0}}\right) {P}_{n - 1}\left( z\right)
$$

$$
= \left( {z - {z}_{0}}\right) \left( {{a}_{1} + {a}_{2}{P}_{1}\left( z\right)  + \cdots  + {a}_{n}{P}_{n - 1}\left( z\right) }\right.
$$

$$
= \left( {z - {z}_{0}}\right) Q\left( z\right)
$$

When $P\left( {z}_{0}\right)  = 0$ we see that $P\left( z\right)  = \left( {z - {z}_{0}}\right) Q\left( z\right)$ , as required.

Suppose $f\left( z\right)$ is entire and $\left| {f\left( z\right) }\right|  \geq  1$ for all $z$ . Show that $f$ is constant. Since $\left| {f\left( z\right) }\right|  \geq  1$ , we have $\left| \frac{1}{f\left( z\right) }\right|  \leq  1$ , so $\left| \frac{1}{f\left( z\right) }\right|$ is bounded. It is entire since $f\left( z\right)$ is never 0 . So $1/f\left( z\right)$ is constant by Liouville’s Theorem. So $f\left( z\right)$ is also constant.

Let $R$ be a closed bounded region of the plane. Suppose $f$ and $g$ are continuous on $R$ and analytic in the interior of $R$ . Show that if $f = g$ on the boundary of $R$ then $f = g$ on all of $R$ . Consider $f - g$ , which is 0 on the boundary. By the corollary to the maximum modulus principle, the maximum of $\left| {f - g}\right|$ is on the boundary of $R$ , so $\left| {f - g}\right|$ must be 0 on all of $R$ . So $f = g$ . Technically that corollary requires $f - g$ not be constant, but if $f - g$ is constant, then since it’s 0 on the boundary it’s 0 everywhere in $R$ so again $f = g$ .

What is the maximum of $\left| {e}^{i{z}^{2}}\right|$ on the disk $\left| z\right|  \leq  1$ . From the Maximum Modulus Principle, we know that the maximum must be on the boundary. So we consider $\left| {e}^{i{z}^{2}}\right|  = \left| {e}^{i\left( {{x}^{2} - {y}^{2} + {2ixy}}\right) }\right|  = {e}^{-{2xy}}$ on the circle. This will have its maximum where $- {2xy}$ has its maximum on the circle. Using Calc III methods (either parametrize the curve or use Lagrange multipliers), the maximum will be where $y =  - x$ on the circle, i.e. $\left( {1/\sqrt{2}}\right) \left( {1 - i}\right)$ and $\left( {1/\sqrt{2}}\right) \left( {-1 + i}\right)$ . Then ${e}^{-{2xy}} = e$ .

61.1 We want $\left| {\left( {\frac{1}{{n}^{2}} + i}\right)  - i}\right|  = \left| \frac{1}{{n}^{2}}\right|  < \epsilon$ . This will be true so long as $n > 1/\sqrt{\epsilon }$

Show directly from the definitions that if $\mathop{\sum }\limits_{{n = 1}}^{\infty }{a}_{n} = A$ and $\mathop{\sum }\limits_{{n = 1}}^{\infty }{b}_{n} = B$ then $\mathop{\sum }\limits_{{n = 1}}^{\infty }\left( {{a}_{n} + {b}_{n}}\right)  = A + B$ . Let ${S}_{m} = \mathop{\sum }\limits_{{n = 1}}^{m}{a}_{n}$ and ${T}_{m} = \mathop{\sum }\limits_{{n = 1}}^{m}{b}_{n}$ . Then by definition for all $\epsilon  > 0$ there are ${M}_{1}$ and ${M}_{2}$ so such that $\left| {{S}_{m} - A}\right|  < \epsilon$ for $m > {M}_{1}$ and $\left| {{T}_{m} - B}\right|  < \epsilon$ for $m > {M}_{2}$ . By taking the larger of ${M}_{1},{M}_{2}$ , we see there is a single $M$ so that $\left| {{S}_{m} - A}\right|  < \epsilon$ and $\left| {{T}_{m} - B}\right|  < \epsilon$ simultaneously for $m > M$ . Now let ${U}_{m} = {S}_{m} + {T}_{m} = \mathop{\sum }\limits_{{n = 1}}^{m}\left( {{a}_{n} + {b}_{n}}\right)$ (we can do this because these sums are finite). Then for $M > m,\left| {{U}_{m} - \left( {A + B}\right) }\right|  = \left| {{S}_{m} + {T}_{m} - \left( {A + B}\right) }\right|  = \left| {{S}_{m} - A + {T}_{m} - B}\right|  \leq$ $\left| {{S}_{m} - A}\right|  + \left| {{T}_{m} - B}\right|$ . If we choose $M$ so that $\left| {{S}_{m} - A}\right| ,\left| {{T}_{m} - B}\right|  < \epsilon /2$ for $m > M$ , then we have $\left| {{U}_{m} - \left( {A + B}\right) }\right|  < \epsilon$ for $m > M$ . This shows that ${U}_{m}$ converges to $A + B$ as desired.

Homework 11

65.2.b ${e}^{z} = e{e}^{z - 1} = e\mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{\left( z - 1\right) }^{n}}{n!}$ . This applies for all $z \in  \mathbb{C}$ .

${65.4}\cos z =  - \sin \left( {z - \pi /2}\right)  =  - \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{\left( z - \pi /2\right) }^{{2n} + 1}}{\left( {{2n} + 1}\right) !}$ . This holds everywhere in $\mathbb{C}$ .

65.8.a $\cos z = \frac{{e}^{iz} + {e}^{-{iz}}}{2} = \frac{1}{2}\left( {\sum \frac{{\left( iz\right) }^{n}}{n!}+\sum \frac{{\left( -iz\right) }^{n}}{n!}}\right)  = \frac{1}{2}\left( {\sum \frac{{\left( iz\right) }^{n}}{n!}+\sum \frac{{\left( -\right) }^{n}{\left( iz\right) }^{n}}{n!}}\right)$ . Using that the terms are negatives of each other for $n$ odd and equal to each other for $n$ even this becomes $\frac{1}{2}\left( {\sum \frac{2{\left( iz\right) }^{2n}}{\left( {2n}\right) !}}\right)  = \sum \frac{{\left( iz\right) }^{2n}}{\left( {2n}\right) !} = \sum \frac{{\left( i\right) }^{2n}{z}^{2n}}{\left( {2n}\right) !} = \sum \frac{{\left( -1\right) }^{n}{z}^{2n}}{\left( {2n}\right) !}$ .

${65.9f}\left( z\right)  = \mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( -1\right) }^{n}\frac{{\left( {z}^{2}\right) }^{{2n} + 1}}{\left( {{2n} + 1}\right) !} = \mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( -1\right) }^{n}\frac{{z}^{{4n} + 2}}{\left( {{2n} + 1}\right) !}$ . Since this only has powers of the form ${z}^{{4n} + 2}$ , all of the terms ${z}^{4n},{z}^{{4n} + 1},{z}^{{4n} + 3}$ must have trivial coefficients, so ${f}^{\left( 4n\right) }\left( 0\right)  = 0$ and similarly for the others. Notice that ${4n} + 1$ and ${4n} + 3$ together give all the positive odd integers, so we can restate that condition as vanishing for all ${2n} + 1$ .

Find a Maclaurin series for $\frac{{z}^{3}}{{z}^{2} + {16}}$ . On what set does this converge? $\frac{{z}^{3}}{{z}^{2} + {16}} =$ $\frac{{z}^{3}}{16}\frac{1}{1 - \frac{{z}^{2}}{1 - z}} = \frac{{z}^{3}}{16}\mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( \frac{{z}^{2}}{-{16}}\right) }^{n} = \mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( -1\right) }^{n}\frac{{z}^{{2n} + 3}}{{\left( {16}\right) }^{n + 1}}$ . This converges when $\left| {{z}^{2}/{16}}\right|  < 1$ , i.e. when $\left| z\right|  < 4$

Find a Taylor series for $\frac{z}{1 - z}$ centered at $z = 3$ . What is the region of convergence?

$$
\frac{z}{1 - z} = \frac{z - 3 + 3}{-2 - \left( {z - 3}\right) }
$$

$$
= \frac{z - 3}{-2 - \left( {z - 3}\right) } + \frac{3}{-2 - \left( {z - 3}\right) }
$$

$$
= \frac{z - 3}{-2}\frac{1}{1 - \frac{z - 3}{-2}} + \frac{3}{-2}\frac{1}{1 - \frac{z - 3}{-2}}
$$

$$
= \frac{z - 3}{-2}\mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( \frac{z - 3}{-2}\right) }^{n} + \frac{3}{-2}\mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( \frac{z - 3}{-2}\right) }^{n}
$$

$$
= \mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( \frac{z - 3}{-2}\right) }^{n + 1} + \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{3{\left( z - 3\right) }^{n}}{{\left( -2\right) }^{n + 1}}
$$

$$
= \mathop{\sum }\limits_{{n = 1}}^{\infty }{\left( \frac{z - 3}{-2}\right) }^{n} + \frac{3}{-2} + \mathop{\sum }\limits_{{n = 1}}^{\infty }\frac{3}{-2}\frac{{\left( z - 3\right) }^{n}}{{\left( -2\right) }^{n}}
$$

$$
= \frac{-3}{2} + \mathop{\sum }\limits_{{n = 1}}^{\infty }\left( {1 + \frac{-3}{2}}\right) \frac{{\left( z - 3\right) }^{n}}{{\left( -2\right) }^{n}}
$$

$$
= \frac{-3}{2} + \mathop{\sum }\limits_{{n = 1}}^{\infty }\frac{-1}{2}\frac{{\left( z - 3\right) }^{n}}{{\left( -2\right) }^{n}}
$$

$$
= \frac{-3}{2} + \mathop{\sum }\limits_{{n = 1}}^{\infty }\frac{{\left( z - 3\right) }^{n}}{{\left( -2\right) }^{n + 1}}
$$

This converges for $\left| {z - 3}\right|  < 2$

65.10 $\sin z = z - \frac{{z}^{3}}{3!} + \frac{{z}^{5}}{5!} - \frac{{z}^{7}}{7!} + \cdots$ so $\sin {z}^{2} = {z}^{2} - \frac{{z}^{6}}{3!} + \frac{{z}^{10}}{5!} - \frac{{z}^{14}}{7!} + \cdots$ and $\frac{\sin {z}^{2}}{{z}^{4}} =$

${z}^{-1} - \frac{{z}^{2}}{3!} + \frac{{z}^{6}}{5!} - \frac{{z}^{10}}{7!} + \cdots$

65.11

$$
\frac{1}{{4z} - {z}^{2}} = \frac{1}{4z}\frac{1}{1 - \frac{z}{4}}
$$

$$
= \frac{1}{4z}\mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( \frac{z}{4}\right) }^{n}
$$

$$
= \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{z}^{n - 1}}{{4}^{n + 1}}
$$

$$
= \frac{1}{4z} + \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{z}^{n}}{{4}^{n + 2}}
$$

Find Laurent expansions about ${z}_{0} = 0$ for $\frac{1}{{z}^{3} - {4z}}$ on the regions $0 < \left| z\right|  < 2$ and $\left| z\right|  > 2$ . When $0 < \left| z\right|  < 2$ we have $\frac{1}{{z}^{3} - {4z}} = \frac{-1}{4z}\frac{1}{1 - {\left( \frac{z}{2}\right) }^{2}} = \frac{-1}{4z}\mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( \frac{{z}^{2}}{4}\right) }^{n} = \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{-{z}^{{2n} - 1}}{{4}^{n + 1}}$ . When $\left| z\right|  > 2,\frac{1}{{z}^{3} - {4z}} = \frac{1}{{z}^{3}}\frac{1}{1 - \frac{4}{{z}^{2}}} = \frac{1}{{z}^{3}}\mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( \frac{4}{{z}^{2}}\right) }^{n} = \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{4}^{n}}{{z}^{{2n} + 3}}$

68.5 (just for ${D}_{2}$ ) $f\left( z\right)  = \frac{-1}{\left( {z - 1}\right) \left( {z - 2}\right) } = \frac{1}{z - 1} - \frac{1}{z - 2} = \frac{1}{z}\frac{1}{1 - \frac{1}{z}} - \frac{-1}{2}\frac{1}{1 - \frac{z}{2}} = \frac{1}{z}\mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{1}{{z}^{n}} + \frac{1}{2}\mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{z}^{n}}{{2}^{n}} =$ $\mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{1}{{z}^{n + 1}} + \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{z}^{n}}{{2}^{n + 1}} = \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{z}^{n}}{{2}^{n + 1}} + \mathop{\sum }\limits_{{n = 1}}^{\infty }\frac{1}{{z}^{n}}$

Let $C$ be the contour $\left| z\right|  = 2$ oriented positively. Compute ${\int }_{C}z\cos \left( {1/z}\right) {dz}$ . We have the Laurent series $z\cos \left( {1/z}\right)  = z\mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{\left( -1\right) }^{n}}{\left( {2n}\right) !}{\left( \frac{1}{z}\right) }^{2n} = z\cos \left( {1/z}\right)  = \mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{\left( -1\right) }^{n}}{\left( {2n}\right) !}\frac{1}{{z}^{{2n} - 1}}$ . So ${b}_{1} =  - 1/2$ . Thus the integral is ${2\pi i}\left( {-1/2}\right)  =  - {\pi i}$ .

Homework 12

72.1 Differentiating both sides of the first equation, we get $\frac{1}{{\left( 1 - z\right) }^{2}} = \mathop{\sum }\limits_{{n = 1}}^{\infty }n{z}^{n - 1} = \mathop{\sum }\limits_{{n = 0}}^{\infty }(n +$ 1) ${z}^{n}$ . Differentiating again, $\frac{2}{{\left( 1 - z\right) }^{3}} = \mathop{\sum }\limits_{{n = 1}}^{\infty }n\left( {n + 1}\right) {z}^{n - 1} = \mathop{\sum }\limits_{{n = 0}}^{\infty }\left( {n + 1}\right) \left( {n + 2}\right) {z}^{n}$ . This is all valid only within the circle of convergence $\left| z\right|  < 1$

72.4 Using the Taylor series for $\cos z$ , which is entire, $1 - \cos z = 1 - \left( {\mathop{\sum }\limits_{{n = 0}}^{\infty }\frac{{z}^{2n}}{\left( {2n}\right) !}}\right)  =$ $\mathop{\sum }\limits_{{n = 1}}^{\infty }\frac{{z}^{2n}}{\left( {2n}\right) !}$ . So $\left( {1 - \cos z}\right) /{z}^{2} = \mathop{\sum }\limits_{{n = 1}}^{\infty }\frac{{z}^{{2n} - 2}}{\left( {2n}\right) !}$ . At $z = 0$ , this is $1/2$ , so this series represents $f\left( z\right)$ on all of $\mathbb{C}$ . Since the series for $\cos z$ converges for all $z$ , our new series also converges for all $z$ (for each fixed $z$ , multiplying by $\frac{1}{{z}^{2}}$ is multiplication by a constant and so doesn't affect the convergence). Since the series converges everywhere, it represents an entire function by the corollary in section 71 .

72.6 Let $C$ be a contour from 1 to $z$ where $z$ satisfies $\left| {z - 1}\right|  < 1$ . Then we can integrate both sides along this contour. On the left we get ${\int }_{C}\frac{1}{w}{dw} = {\left. \log w\right| }_{1}^{z} = \log z - \log 1 =$ $\log z$ . on the right we have ${\int }_{C}\mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( -1\right) }^{n}{\left( w - 1\right) }^{n}{dw} = \mathop{\sum }\limits_{{n = 0}}^{\infty }{\int }_{C}{\left( -1\right) }^{n}{\left( w - 1\right) }^{n}{dw} =$ $\mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( -1\right) }^{n}\frac{{\left( w - 1\right) }^{n + 1}}{n + 1}{|}_{1}^{z} = \mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( -1\right) }^{n}\frac{{\left( z - 1\right) }^{n + 1}}{n + 1} = \mathop{\sum }\limits_{{n = 1}}^{\infty }{\left( -1\right) }^{n + 1}\frac{{\left( z - 1\right) }^{n}}{n}.$

72.7 Away from $z = 1$ on the described domain, $f\left( z\right)$ is analytic by the analyticity of Log and the quotient rule. Inside the circle $\left| {z - 1}\right|  < 1$ (and only here), $f\left( z\right)  =$ $\mathop{\sum }\limits_{{n = 1}}^{\infty }{\left( -1\right) }^{n + 1}\frac{{\left( z - 1\right) }^{n - 1}}{n} = \mathop{\sum }\limits_{{n = 0}}^{\infty }{\left( -1\right) }^{n}\frac{{\left( z - 1\right) }^{n}}{n + 1}$ . Note that this agrees with $f\left( 1\right)  = 1$ , and the series absolutely converges inside the circle by comparison to the geometric series $\sum {\left| z - 1\right| }^{n}$ . So $f\left( z\right)$ is analytic at 1 also.

Show that if $f$ is analytic in a domain except for finitely many singular points then they are all isolated singularities. Let ${z}_{1},\ldots ,{z}_{n}$ be the singular points. Without loss of generality, consider ${z}_{1}$ . For each $i > 1$ , let ${R}_{i} = \left| {{z}_{1} - {z}_{i}}\right|$ . Since there are finitely many singular points, there is a minimum $R = \min \left\{  {{R}_{2},\ldots ,{R}_{n}}\right\}$ . Now choose $\epsilon$ so that $0 < \epsilon  < R$ and so that ${z}_{1}$ has an $\epsilon$ neighborhood in the domain (this is possible because domains are open). Then $f$ is analytic on the deleted $\epsilon$ neighborhood around ${z}_{1}$ , so ${z}_{1}$ is an isolated singular point. The argument is the same for the other singular points.

77.1.a $\frac{1}{z + {z}^{2}} = \frac{1}{z}\frac{1}{1 + z} = \frac{1}{z}\left( {1 - z + \cdots }\right)  = \frac{1}{z} - 1 + \cdots$ for $\left| z\right|  < 1$ . So the residue at 0 is 1 .

77.1.b $z\cos \left( {1/z}\right)  = z\left( {1 - \frac{1}{2{z}^{2}} + \cdots }\right)  = z - \frac{1}{2z} + \cdots$ on the whole plane. So the residue is -1/2.

77.1.c $\frac{z - \sin z}{z} = \frac{1}{z}\left( {z - \left( {z - {z}^{3}/6 + \cdots }\right) }\right)  = \frac{1}{z}\left( {{z}^{3}/6 + \cdots }\right)  = {z}^{2}/6 + \cdots$ . So the residue is 0 .

77.2.a $\frac{{e}^{-z}}{{z}^{2}} = \frac{1}{{z}^{2}}\left( {1 - z + {z}^{2}/2 + \cdots }\right)  = \frac{1/{z}^{2}}{ - }\frac{1}{z} + \cdots$ . So the integral is ${2\pi i}\left( {-1}\right)  =  - {2\pi i}$ .

77.2.d There are singularities at 0 and 2 . By partial fractions, $\frac{z + 1}{{z}^{2} - {2z}} = \frac{-1}{2z} + \frac{3}{2\left( {z - 2}\right) }$ . At $z = 0$ , the second function is analytic, so the residue is $- 1/2$ . At $z = 2$ , the first function is analytic so the residue is $3/2$ . So the integral is ${2\pi i}\left( {-1/2 + 3/2}\right)  = {2\pi i}$

Let $C$ be the positively oriented circle $\left| z\right|  = 5$ . Compute ${\int }_{C}\frac{\sin z}{{\left( z - \pi \right) }^{2}}$ . To find the residue at $\pi$ , we need to expand $\sin z$ in powers of $z - \pi$ . We use $\sin \left( z\right)  = \sin \left( {z - \pi  + \pi }\right)  =$ $\sin \left( {z - \pi }\right) \cos \pi  + \cos \left( {z - \pi }\right) \sin \pi  =  - \sin \left( {z - \pi }\right)  =  - \left( {z - \pi }\right)  + {\left( z - \pi \right) }^{3}/6 - \cdots$ . So $\frac{\sin z}{{\left( z - \pi \right) }^{2}} =  - 1/\left( {z - \pi }\right)  + \cdots$ . So the residue is -1 and the integral is $- {2\pi i}$ .

77.3 Looking at $\frac{f\left( {1/z}\right) }{{z}^{2}}$ we have $\frac{1}{{z}^{2}}\frac{4/z - 5}{\left( {1/z}\right) \left( {1/z - 1}\right) } = \frac{1}{{z}^{2}}\frac{z\left( {4 - {5z}}\right) }{1 - z} = \frac{4 - {5z}}{z\left( {1 - z}\right) }$ . The residue at 0 is $\frac{4 - 5\left( 0\right) }{\left( 1 - 0\right) } = 4$ , so the integral is ${8\pi i}$ .

77.4.a $\frac{1}{{z}^{2}}f\left( {1/z}\right)  = \frac{1}{{z}^{2}}\frac{1/{z}^{5}}{1 - 1/{z}^{3}} = \frac{1}{{z}^{7}}\frac{1}{1 - 1/{z}^{3}} = \frac{1}{{z}^{4}}\frac{-1}{1 - {z}^{3}} = \frac{-1}{{z}^{4}}\mathop{\sum }\limits_{{n = 0}}^{\infty }{z}^{3n}$ . So the residue is -1 and the integral is $- {2\pi i}$ .

77.4.b $\frac{1}{{z}^{2}}f\left( {1/z}\right)  = \frac{1}{{z}^{2}}\frac{1}{1 + 1/{z}^{2}} = \frac{1}{{z}^{2} + 1}$ . This is analytic at 0 so the residue at 0 is 0 . So the integral is 0 .

77.7 Consider $P\left( {1/z}\right) /Q\left( {1/z}\right)$ . The biggest power of $1/z$ in the expression is $1/{z}^{m}$ . Multiplying top and bottom by ${z}^{m}$ , we get a polynomial with non-zero constant term on the bottom and a polynomial with 0 constant term and linear term on the top. Dividing by ${z}^{2}$ , the numerator is still a polynomial and the denominator is a polynomial with non-zero constant term. So $\frac{1}{{z}^{2}}\frac{P\left( {1/z}\right) }{Q\left( {1/z}\right) }$ is analytic at 0, so its residue at 0 is 0 and the integral is 0 .