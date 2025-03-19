## 3. Laplace Transform

## 3A. Elementary Properties and Formulas



<div style="background-color:#F4433633;" meta-id="4-0-115">

3A-1. Show from the definition of Laplace transform that $\mathcal{L}\left( t\right)  = \frac{1}{{s}^{2}}, s > 0$ .

</div meta-id="4-0-115">





<div style="background-color:#F4433633;" meta-id="14-28-0-0">

3A-2. Derive the formulas for $\mathcal{L}\left( {{e}^{at}\cos {bt}}\right)$ and $\mathcal{L}\left( {{e}^{at}\sin {bt}}\right)$ by assuming the formula

$$
\mathcal{L}\left( {e}^{\alpha t}\right)  = \frac{1}{s - \alpha }
$$

is also valid when $\alpha$ is a complex number; you will also need

$$
\mathcal{L}\left( {u + {iv}}\right)  = \mathcal{L}\left( u\right)  + i\mathcal{L}\left( v\right) ,
$$

for a complex-valued function $u\left( t\right)  + {iv}\left( t\right)$ .



</div meta-id="14-28-0-0">



<div style="background-color:#F4433633;" meta-id="36-40-0-0">

3A-3. Find ${\mathcal{L}}^{-1}\left( {F\left( s\right) }\right)$ for each of the following, by using the Laplace transform formulas. (For (c) and (e) use a partial fractions decomposition.)

a) $\frac{1}{\frac{1}{2}s + 3}$ b) $\frac{3}{{s}^{2} + 4}$ c) $\frac{1}{{s}^{2} - 4}$ d) $\frac{1 + {2s}}{{s}^{3}}$ e) $\frac{1}{{s}^{4} - 9{s}^{2}}$



</div meta-id="36-40-0-0">



<div style="background-color:#F4433633;" meta-id="48-50-0-0">

3A-4. Deduce the formula for $\mathcal{L}\left( {\sin {at}}\right)$ from the definition of Laplace transform and the formula for $\mathcal{L}\left( {\cos {at}}\right)$ , by using integration by parts.



</div meta-id="48-50-0-0">



<div style="background-color:#F4433633;" meta-id="58-62-0-0">

3A-5. a) Find $\mathcal{L}\left( {{\cos }^{2}{at}}\right)$ and $\mathcal{L}\left( {{\sin }^{2}{at}}\right)$ by using a trigonometric identity to change the form of each of these functions.

b) Check your answers to part (a) by calculating $\mathcal{L}\left( {{\cos }^{2}{at}}\right)  + \mathcal{L}\left( {{\sin }^{2}{at}}\right)$ . By inspection, what should the answer be?



</div meta-id="58-62-0-0">



<div style="background-color:#F4433633;" meta-id="70-80-0-0">

3A-6. a) Show that $\mathcal{L}\left( \frac{1}{\sqrt{t}}\right)  = \sqrt{\frac{\pi }{s}},\;s > 0$ , by using the well-known integral

$$
{\int }_{0}^{\infty }{e}^{-{x}^{2}}{dx} = \frac{\sqrt{\pi }}{2}.
$$

(Hint: Write down the definition of the Laplace transform, and make a change of variable in the integral to make it look like the one just given. Throughout this change of variable, $s$ behaves like a constant.)

b) Deduce from the above formula that $\mathcal{L}\left( \sqrt{t}\right)  = \frac{\sqrt{\pi }}{2{s}^{3/2}},\;s > 0$ .



</div meta-id="70-80-0-0">



<div style="background-color:#F4433633;" meta-id="88-92-0-0">

3A-7. Prove that $\mathcal{L}\left( {e}^{{t}^{2}}\right)$ does not exist for any interval of the form $s > a$ .

(Show the definite integral does not converge for any value of $s$ .)



</div meta-id="88-92-0-0">



<div style="background-color:#F4433633;" meta-id="100-102-0-0">

3A-8. For what values of $k$ will $\mathcal{L}\left( {1/{t}^{k}}\right)$ exist? (Write down the definition of this Laplace transform, and determine for what $k$ it converges.)



</div meta-id="100-102-0-0">



<div style="background-color:#F4433633;" meta-id="110-112-0-0">

3A-9. By using the table of formulas, find: a) $\mathcal{L}\left( {{e}^{-t}\sin {3t}}\right)$ b) $\mathcal{L}\left( {{e}^{2t}\left( {{t}^{2} - {3t} + 2}\right) }\right)$



</div meta-id="110-112-0-0">



<div style="background-color:#F4433633;" meta-id="120-124-0-0">

3A-10. Find ${\mathcal{L}}^{-1}\left( {F\left( s\right) }\right)$ , if $F\left( s\right)  =$

a) $\frac{3}{{\left( s - 2\right) }^{4}}$ b) $\frac{1}{s\left( {s - 2}\right) }$ c) $\frac{s + 1}{{s}^{2} - {4s} + 5}$



</div meta-id="120-124-0-0">

1

## 3B. Derivative Formulas; Solving ODE's



<div style="background-color:#F4433633;" meta-id="136-142-0-0">

3B-1. Solve the following IVP's by using the Laplace transform:

a) ${y}^{\prime } - y = {e}^{3t},\;y\left( 0\right)  = 1$ b) ${y}^{\prime \prime } - 3{y}^{\prime } + {2y} = 0,\;y\left( 0\right)  = 1,{y}^{\prime }\left( 0\right)  = 1$

c) ${y}^{\prime \prime } + {4y} = \sin t,\;y\left( 0\right)  = 1,{y}^{\prime }\left( 0\right)  = 0$ d) ${y}^{\prime \prime } - 2{y}^{\prime } + {2y} = 2{e}^{t},\;y\left( 0\right)  = 0,{y}^{\prime }\left( 0\right)  = 1$ e) ${y}^{\prime \prime } - 2{y}^{\prime } + y = {e}^{t},\;y\left( 0\right)  = 1,{y}^{\prime }\left( 0\right)  = 0$ .



</div meta-id="136-142-0-0">



<div style="background-color:#F4433633;" meta-id="150-152-0-0">

3B-2. Without referring to your book or to notes, derive the formula for $\mathcal{L}\left( {{f}^{\prime }\left( t\right) }\right)$ in terms of $\mathcal{L}\left( {f\left( t\right) }\right)$ . What are the assumptions on $f\left( t\right)$ and ${f}^{\prime }\left( t\right)$ ?



</div meta-id="150-152-0-0">



<div style="background-color:#F4433633;" meta-id="160-164-0-0">

3B-3. Find the Laplace transforms of the following, using formulas and tables: a) $t\cos {bt}$ b) ${t}^{n}{e}^{kt}$ (two ways) c) ${e}^{at}t\sin t$ 3B-4. Find ${\mathcal{L}}^{-1}\left( {F\left( s\right) }\right)$ if $F\left( s\right)  =$ a) $\frac{s}{{\left( {s}^{2} + 1\right) }^{2}}$ b) $\frac{1}{\left( {s}^{2}\right. }$ 3B-5. Without consulting your book or notes, derive the formulas a) $\mathcal{L}\left( {{e}^{at}f\left( t\right) }\right)  = F\left( {s - a}\right)$ b) $\mathcal{L}\left( {{tf}\left( t\right) }\right)  =  - {F}^{\prime }\left( s\right)$ 3B-6. If $y\left( t\right)$ is a solution to the IVP ${y}^{\prime \prime } + {ty} = 0,\;y\left( 0\right)  = 1,{y}^{\prime }\left( 0\right)  = 0$ , what ODE is satisfied by the function $Y\left( s\right)  = \mathcal{L}\left( {y\left( t\right) }\right)$ ?

(The solution $y\left( t\right)$ is called an Airy function; the ODE it satisfies is the Airy equation.)



</div meta-id="160-164-0-0">

## 3C. Discontinuous Functions



<div style="background-color:#F4433633;" meta-id="174-182-0-0">

3C-1. Find the Laplace transforms of each of the following functions; do it as far as possible by expressing the functions in terms of known functions and using the tables, rather than by calculating from scratch. In each case, sketch the graph of $f\left( t\right)$ . (Use the unit step function $u\left( t\right)$ wherever possible.)

a) $f\left( t\right)  = \left\{  \begin{array}{ll} 1, & 0 \leq  t \leq  1 \\   - 1, & 1 < t \leq  2 \\  0, & \text{ otherwise } \end{array}\right.$ b) $f\left( t\right)  = \left\{  \begin{array}{ll} t, & 0 \leq  t \leq  1 \\  2 - t, & 1 \leq  t \leq  2 \\  0, & \text{ otherwise } \end{array}\right.$

c) $f\left( t\right)  = \left| {\sin t}\right| ,\;t \geq  0$ .

b) $\frac{{e}^{-s} - {e}^{-{3s}}}{s}$ (sketch answer)



</div meta-id="174-182-0-0">







<div style="background-color:#F4433633;" meta-id="194-204-0-0">

3C-3. Find $\mathcal{L}\left( {f\left( t\right) }\right)$ for the square wave $f\left( t\right)  = \left\{  \begin{array}{ll} 1, & {2n} \leq  t \leq  {2n} + 1, n = 0,1,2,\ldots \\  0, & \text{ otherwise } \end{array}\right.$





a) directly from the definition of Laplace transform;

b) by expressing $f\left( t\right)$ as the sum of an infinite series of functions, taking the Laplace transform of the series term-by-term, and then adding up the infinite series of Laplace transforms.



</div meta-id="194-204-0-0">



<div style="background-color:#F4433633;" meta-id="212-220-0-0">

3C-4. Solve by the Laplace transform the following IVP, where $h\left( t\right)  = \left\{  \begin{array}{ll} 1, & \pi  \leq  t \leq  {2\pi }, \\  0, & \text{ otherwise } \end{array}\right.$

$$
{y}^{\prime \prime } + 2{y}^{\prime } + {2y} = h\left( t\right) ,\;y\left( 0\right)  = 0,{y}^{\prime }\left( 0\right)  = 1;
$$

write the solution in the format used for $h\left( t\right)$ .



</div meta-id="212-220-0-0">



<div style="background-color:#F4433633;" meta-id="228-230-0-0">

3C-5. Solve the IVP: ${y}^{\prime \prime } - 3{y}^{\prime } + {2y} = r\left( t\right) ,\;y\left( 0\right)  = 1,{y}^{\prime }\left( 0\right)  = 0$ , where $r\left( t\right)  = u\left( t\right) t$ , the ramp function.



</div meta-id="228-230-0-0">

## 3D. Convolution and Delta Function



<div style="background-color:#F4433633;" meta-id="240-244-0-0">

3D-1. Solve the IVP: ${y}^{\prime \prime } + 2{y}^{\prime } + y = \delta \left( t\right)  + u\left( {t - 1}\right) ,\;y\left( 0\right)  = 0,{y}^{\prime }\left( {0}^{ - }\right)  = 1$ .

Write the answer in the "cases" format $y\left( t\right)  = \left\{  \begin{array}{ll} \cdots , & 0 \leq  t \leq  1 \\  \cdots , & t > 1 \end{array}\right.$



</div meta-id="240-244-0-0">







<div style="background-color:#F4433633;" meta-id="256-258-0-0">

3D-2. Solve the IVP: ${y}^{\prime \prime } + y = r\left( t\right) ,\;y\left( 0\right)  = 0,{y}^{\prime }\left( 0\right)  = 1$ , where $r\left( t\right)  = \left\{  \begin{array}{ll} 1, & 0 \leq  x \leq  \pi \\  0, & \text{ otherwise. } \end{array}\right.$



</div meta-id="256-258-0-0">

Write the answer in the "cases" format (see 3D-1 above).











<div style="background-color:#F4433633;" meta-id="268-282-0-0">

3D-3. If $f\left( {t + c}\right)  = f\left( t\right)$ for all $t$ , where $c$ is a fixed positive constant, the function $f\left( t\right)$ is said to be periodic, with period $c$ . (For example, $\sin x$ is periodic, with period ${2\pi }$ .)





a) Show that if $f\left( t\right)$ is periodic with period $c$ , then its Laplace transform is

$$
F\left( s\right)  = \frac{1}{1 - {e}^{-{cs}}}{\int }_{0}^{c}{e}^{-{st}}f\left( t\right) {dt}.
$$

b) Do Exercise 3C-3, using the above formula.



</div meta-id="268-282-0-0">



<div style="background-color:#F4433633;" meta-id="290-294-0-0">

3D-4. Find ${\mathcal{L}}^{-1}$ by using the convolution: a) $\frac{s}{\left( {s + 1}\right) \left( {{s}^{2} + 4}\right) }$ b) $\frac{1}{{\left( {s}^{2} + 1\right) }^{2}}$

Your answer should not contain the convolution $*$ .



</div meta-id="290-294-0-0">







<div style="background-color:#F4433633;" meta-id="306-308-0-0">

3D-5. Assume $f\left( t\right)  = 0$ , for $t \leq  0$ . Show informally that $\delta \left( t\right)  * f\left( t\right)  = f\left( t\right)$ , by using the definition of convolution; then do it by using the definition of $\delta \left( t\right)$ .



</div meta-id="306-308-0-0">

(See (5), section 4.6 of your book; $\delta \left( t\right)$ is written ${\delta }_{0}\left( t\right)$ there.)







<div style="background-color:#F4433633;" meta-id="330-332-0-0">

3D-6. Prove that $f\left( t\right)  * g\left( t\right)  = g\left( t\right)  * f\left( t\right)$ directly from the definition of convolution, by making a change of variable in the convolution integral.



</div meta-id="330-332-0-0">



<div style="background-color:#F4433633;" meta-id="340-348-0-0">

3D-7. Show that the IVP: ${y}^{\prime \prime } + {k}^{2}y = r\left( t\right) ,\;y\left( 0\right)  = 0,{y}^{\prime }\left( 0\right)  = 0$ has the solution

$$
y\left( t\right)  = \frac{1}{k}{\int }_{0}^{t}r\left( u\right) \sin k\left( {t - u}\right) {du},
$$

by using the Laplace transform and the convolution.



</div meta-id="340-348-0-0">



<div style="background-color:#F4433633;" meta-id="356-370-0-117">

3D-8. By using the Laplace transform and the convolution, show that in general the IVP (here $a$ and $b$ are constants):

$$
{y}^{\prime \prime } + a{y}^{\prime } + {by} = r\left( t\right) ,\;y\left( 0\right)  = 0,{y}^{\prime }\left( 0\right)  = 0,
$$

has the solution

$$
y\left( t\right)  = {\int }_{0}^{t}w\left( {t - u}\right) r\left( u\right) {du},
$$

where $w\left( t\right)$ is the solution to the IVP: $\;{y}^{\prime \prime } + a{y}^{\prime } + {by} = 0,\;y\left( 0\right)  = 0,{y}^{\prime }\left( 0\right)  = 1$ .

(The function $w\left( {t - u}\right)$ is called the Green’s function for the linear operator ${D}^{2} + {aD} + b$ .)

</div meta-id="356-370-0-117">

 M.I.T. 18.03 Ordinary Differential Equations 18.03 Notes and Exercises

(c)Arthur Mattuck and M.I.T. 1988, 1992, 1996, 2003, 2007, 2011