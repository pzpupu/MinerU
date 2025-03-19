## Problem 2: Quadrature

Heun’s method for the ODE ${y}^{\prime }\left( t\right)  = f\left( y\right)$ is

$$
{k}_{1} = f\left( {y}_{n}\right)
$$

$$
{k}_{2} = f\left( {\widetilde{y}}_{n + 1}\right)  = f\left( {{y}_{n} + h{k}_{1}}\right)
$$

$$
{y}_{n + 1} = {y}_{n} + \frac{h}{2}\left\lbrack  {{k}_{1} + {k}_{2}}\right\rbrack
$$

where $h$ is the step size. The ODE can also be written as an integral equation

$$
y\left( t\right)  = y\left( 0\right)  + {\int }_{0}^{t}f\left( {y\left( s\right) }\right) \mathrm{d}s
$$

(a) Explain how a single step of Heun's rule can be thought of as a left-endpoint quadrature followed by an approximate Trapezoid rule quadrature.

(b) Use the quadrature error formula for the simple Trapezoid rule, together with Taylor series, to derive a bound on the error in one step of Heun’s method. You may assume that ${y}_{n} = y\left( {t}_{n}\right)$ , i.e. there is no error in ${y}_{n}$ .

Solution: (a) The first stage of Heun's rule (which is a second order Runge Kutta method) is a left-endpoint quadrature (equivalent to explicit Euler)

$$
y\left( {t}_{n + 1}\right)  \approx  {\widetilde{y}}_{n + 1} = {y}_{n} + {hf}\left( {y}_{n}\right) .
$$

The simple trapezoid rule approximation of the integral over $\left\lbrack  {{t}_{n},{t}_{n} + h}\right\rbrack$ is

$$
y\left( {{t}_{n} + h}\right)  = {y}_{n} + {\int }_{{t}_{n}}^{{t}_{n} + h}f\left( {y\left( s\right) }\right) \mathrm{d}s \approx  {y}_{n} + \frac{h}{2}\left\lbrack  {f\left( {y}_{n}\right)  + f\left( {y\left( {{t}_{n} + h}\right) }\right) }\right\rbrack  .
$$

Since the exact value $y\left( {{t}_{n} + h}\right)$ is unknown, Heun’s rule uses the approximation $y\left( {{t}_{n} + h}\right)  \approx  {\widetilde{y}}_{n + 1}$ to produce

$$
y\left( {{t}_{n} + h}\right)  \approx  {y}_{n} + \frac{h}{2}\left\lbrack  {f\left( {y}_{n}\right)  + f\left( {\widetilde{y}}_{n + 1}\right) }\right\rbrack   = {y}_{n} + \frac{h}{2}\left\lbrack  {f\left( {y}_{n}\right)  + f\left( {{y}_{n} + {hf}\left( {y}_{n}\right) }\right) }\right\rbrack  .
$$

(b) For the error bound we need to account for the trapezoid rule error and the error associated with replacing $y\left( {{t}_{n} + h}\right)$ by ${\widetilde{y}}_{n + 1}$ . To develop a formula for the error in ${\widetilde{y}}_{n + 1}$ we just need a Taylor

expansion

$$
y\left( {{t}_{n} + h}\right)  = {y}_{n} + {hf}\left( {y}_{n}\right)  + \frac{{h}^{2}}{2}{f}^{\prime }\left( {y\left( \xi \right) }\right) {y}^{\prime }\left( \xi \right)
$$

for some $\xi  \in  \left\lbrack  {{t}_{n},{t}_{n} + h}\right\rbrack$ .

From this we find

$$
\left| {e}_{1}\right|  = \left| {y\left( {{t}_{n} + h}\right)  - {\widetilde{y}}_{n + 1}}\right|  \leq  \frac{{h}^{2}}{2}{\begin{Vmatrix}{f}^{\prime }\left( y\left( t\right) \right) {y}^{\prime }\left( t\right) \end{Vmatrix}}_{\infty }.
$$

For the simple trapezoid rule the error is

$$
y\left( {{t}_{n} + h}\right)  = {y}_{n} + \frac{h}{2}\left( {f\left( {y}_{n}\right)  + f\left( {y\left( {{t}_{n} + h}\right) }\right) }\right)  - {\left. \frac{{h}^{3}}{12}\frac{{\mathrm{d}}^{2}f\left( {y\left( t\right) }\right) }{\mathrm{d}{t}^{2}}\right| }_{t = \zeta }
$$

where $\zeta$ is an unknown value $\zeta  \in  \left\lbrack  {{t}_{n},{t}_{n} + h}\right\rbrack$ . We use Taylor series to account for the error associated with replacing $y\left( {{t}_{n} + h}\right)$ by ${\widetilde{y}}_{n + 1}$ :

$$
y\left( {{t}_{n} + h}\right)  = {y}_{n} + \frac{h}{2}\left( {f\left( {y}_{n}\right)  + f\left( {{\widetilde{y}}_{n + 1} + {e}_{1}}\right) }\right)  - {\left. \frac{{h}^{3}}{12}\frac{{\mathrm{d}}^{2}f\left( {y\left( t\right) }\right) }{\mathrm{d}{t}^{2}}\right| }_{t = \zeta }
$$

$$
= {y}_{n} + \frac{h}{2}\left( {f\left( {y}_{n}\right)  + f\left( {\widetilde{y}}_{n + 1}\right)  + {e}_{1}{f}^{\prime }\left( \psi \right) }\right)  - {\left. \frac{{h}^{3}}{12}\frac{{\mathrm{d}}^{2}f\left( {y\left( t\right) }\right) }{\mathrm{d}{t}^{2}}\right| }_{t = \zeta }
$$

$$
= {y}_{n + 1} + {\left. \frac{h{e}_{1}}{2}{f}^{\prime }\left( \psi \right)  - \frac{{h}^{3}}{12}\frac{{\mathrm{d}}^{2}f\left( {y\left( t\right) }\right) }{\mathrm{d}{t}^{2}}\right| }_{t = \zeta }
$$

$$
\Rightarrow  y\left( {{t}_{n} + h}\right)  - {y}_{n + 1} = {\left. \frac{h{e}_{1}}{2}{f}^{\prime }\left( \psi \right)  - \frac{{h}^{3}}{12}\frac{{\mathrm{d}}^{2}f\left( {y\left( t\right) }\right) }{\mathrm{d}{t}^{2}}\right| }_{t = \zeta }.
$$

where $\psi$ is some unknown value of $y$ between ${y}_{n}$ and $y\left( {{t}_{n} + h}\right)$ .

Using the bound above on $\left| {e}_{1}\right|$ and the triangle inequality we obtain

$$
\left| {y\left( {{t}_{n} + h}\right)  - {y}_{n + 1}}\right|  \leq  {h}^{3}\left\lbrack  {\frac{{\begin{Vmatrix}{f}^{\prime }\left( y\left( t\right) \right) {y}^{\prime }\left( t\right) \end{Vmatrix}}_{\infty }}{2} + \frac{1}{12}{\begin{Vmatrix}\frac{{\mathrm{d}}^{2}\left\lbrack  {f\left( {y\left( t\right) }\right) }\right\rbrack  }{\mathrm{d}{t}^{2}}\end{Vmatrix}}_{\infty }}\right\rbrack  .
$$

Since Heun's method is locally third order, it is globally second order.

## Problem 3: Numerical Linear Algebra

The basic QR iteration for finding the eigenvalues of a real matrix A is

$$
{\mathrm{A}}_{m - 1} = {\mathrm{Q}}_{m - 1}{\mathrm{R}}_{m - 1},\;{\mathrm{\;A}}_{m} = {\mathrm{R}}_{m - 1}{\mathrm{Q}}_{m - 1},\;{\mathrm{A}}_{0} = \mathrm{A}
$$

where ${\mathrm{A}}_{m - 1} = {\mathrm{Q}}_{m - 1}{\mathrm{R}}_{m - 1}$ is the QR factorization of ${\mathrm{A}}_{m - 1}$ .

(a) Prove that the eigenvalues of ${\mathrm{A}}_{m}$ are the same as the eigenvalues of $\mathrm{A}$ .

(b) Explain how to construct an upper Hessenberg matrix $\mathrm{H}$ that has the same eigenvalues as $\mathrm{A}$ .

(c) Prove that if A is upper Hessenberg, then ${\mathrm{A}}_{m}$ is also upper Hessenberg. (You may assume that $\mathrm{A}$ is invertible, and that ${\mathrm{Q}}_{m}$ is upper Hessenberg whenever ${\mathrm{A}}_{m}$ is upper Hessenberg.)

Solution: (a) Since

$$
{\mathrm{A}}_{m} = {\mathrm{Q}}_{m - 1}^{T}{\mathrm{\;A}}_{m - 1}{\mathrm{Q}}_{m - 1}
$$

${\mathrm{A}}_{m}$ is similar to ${\mathrm{A}}_{m - 1}$ so they must have the same eigenvalues. An inductive step proves that it is true for all $m \geq  1$ .

(b) Let the first column of $\mathrm{A}$ be

$$
\left( \begin{matrix} {a}_{1,1} \\  {\mathbf{a}}_{2 : n,1} \end{matrix}\right)
$$

Let

$$
{\mathbf{u}}_{1} = \frac{{\mathbf{a}}_{2 : n,1} - {\begin{Vmatrix}{\mathbf{a}}_{2 : n,1}\end{Vmatrix}}_{2}{\mathbf{e}}_{1}}{{\begin{Vmatrix}{\mathbf{a}}_{2 : n,1} - {\begin{Vmatrix}{\mathbf{a}}_{2 : n,1}\end{Vmatrix}}_{2}{\mathbf{e}}_{1}\end{Vmatrix}}_{2}}
$$

and define

$$
{\mathrm{H}}_{1} = \left\lbrack  \begin{matrix} 1 & {\mathbf{0}}^{T} \\  \mathbf{0} & \mathrm{I} - 2{\mathbf{u}}_{1}{\mathbf{u}}_{1}^{T} \end{matrix}\right\rbrack  .
$$

Note that

$$
{\mathrm{H}}_{1}{\mathrm{{AH}}}_{1}^{T} = \left\lbrack  \begin{matrix}  * & { * }^{T} \\  {\begin{Vmatrix}{\mathbf{a}}_{2 : n,1}\end{Vmatrix}}_{2} & {\mathrm{\;A}}^{\left( 2\right) } \end{matrix}\right\rbrack  .
$$

If we recursively apply this idea to ${\mathrm{A}}^{\left( 2\right) }$ using a matrix ${\mathrm{H}}_{2}$ of the form

$$
{\mathrm{H}}_{2} = \left\lbrack  \begin{matrix} 1 & 0 & {\mathbf{0}}^{T} \\  0 & 1 & {\mathbf{0}}^{T} \\  \mathbf{0} & \mathbf{0} & \mathrm{I} - 2{\mathbf{u}}_{2}{\mathbf{u}}_{2}^{T} \end{matrix}\right\rbrack
$$

etc., then we can see that the final result

$$
\mathrm{H} = {\mathrm{H}}_{n - 2}\cdots {\mathrm{H}}_{1}{\mathrm{{AH}}}_{1}^{T}\cdots {\mathrm{H}}_{n - 2}^{T}
$$

will be upper Hessenberg.

Since the ${\mathrm{H}}_{i}$ are all orthogonal matrices this is a similarity transform, so $\mathrm{H}$ has the same eigenvalues as A.

(c) This is true even if A is not invertible, but the proof for invertible matrices is easier. Start with

$$
\mathrm{A} = {\mathrm{Q}}_{0}{\mathrm{R}}_{0}
$$

Next note that

$$
{\mathrm{A}}_{1} = {\mathrm{R}}_{0}{\mathrm{Q}}_{0} = {\mathrm{R}}_{0}{\mathrm{{AR}}}_{0}^{-1}.
$$

The lower bandwidths of the matrices in the rightmost expression are 0,1 , and 0 . Since multiplication adds the bandwidths, the product on the right has lower bandwidth $\leq  1$ , meaning that it is upper Hessenberg. An inductive step shows that ${\mathrm{A}}_{m}$ will be upper Hessenberg for all $m \geq  1$ .

## Problem 4: Interpolation/Approximation

(a) Find the quadratic that interpolates the following temperature data: $T\left( {-1}\right)  = 4, T\left( 0\right)  = {10}$ , $T\left( 1\right)  = {20}$ .

(b) Suppose that density is related to temperature via $\rho \left( T\right)  = {\rho }_{0} - {\alpha T}$ , and that the total mass is

known to be $m$

$$
{\int }_{-1}^{1}\rho \left( {T\left( x\right) }\right) \mathrm{d}x = m.
$$

Find a cubic polynomial that interpolates the data from (a) and satisfies the above integral constraint, or explain why none exists. For part (b) let ${\rho }_{0} = 1/2, m = 1$ , and $\alpha  = 1$ .

(c) Consider the problem of both interpolating the data and satisfying the integral constraint for an arbitrary set of $n + 1$ distinct interpolation nodes ${x}_{0},\ldots ,{x}_{n}$ using a polynomial of degree $\leq  n + 1$ . When a solution exists, it must have the form

$$
p\left( x\right)  = q\left( x\right)  + \mathop{\sum }\limits_{{j = 0}}^{n}T\left( {x}_{j}\right) {\ell }_{j}\left( x\right) .
$$

(i) When a solution does exist, give an explicit formula for $q\left( x\right)$ .

(ii) Give an explicit criterion for when a solution does not exist.

Solution: (a) The solution is

$$
p\left( x\right)  = {10} + {8x} + 2{x}^{2}.
$$

(b) One way to approach this is to let

$$
p\left( x\right)  = \mathop{\sum }\limits_{{j = 0}}^{3}{a}_{j}{x}^{j}
$$

and then solve the following system

$$
\left\lbrack  \begin{matrix} 1 &  - 1 & 1 &  - 1 \\  1 & 0 & 0 & 0 \\  1 & 1 & 1 & 1 \\  2 & 0 & \frac{2}{3} & 0 \end{matrix}\right\rbrack  \left( \begin{array}{l} {a}_{0} \\  {a}_{1} \\  {a}_{2} \\  {a}_{3} \end{array}\right)  = \left( \begin{matrix} 4 \\  {10} \\  {20} \\   - \frac{m - 2{\rho }_{0}}{\alpha } \end{matrix}\right) .
$$

If you row reduce you will end up with a final equation of the form

$$
0 =  - \frac{64}{3}
$$

so no solution exists.

(c)

(i) $q$ must have the form

$$
q\left( x\right)  = \lambda \ell \left( x\right)
$$

where $\ell \left( x\right)  = {\Pi }_{j = 0}^{n}\left( {x - {x}_{j}}\right)$ is the node polynomial. This is the only possible solution for a polynomial $q$ of degree at most $n + 1$ that satisfies $q\left( {x}_{j}\right)  = 0$ for $j = 0,\ldots , n$ .

The above is not a complete solution; we still need $\lambda$ . The integral constraint is

$$
\lambda {\int }_{-1}^{1}\ell \left( x\right) \mathrm{d}x + \mathop{\sum }\limits_{{j = 0}}^{n}T\left( {x}_{j}\right) {\int }_{-1}^{1}{\ell }_{j}\left( x\right) \mathrm{d}x =  - \frac{m - 2{\rho }_{0}}{\alpha }.
$$

The formula for $\lambda$ is

$$
\lambda  =  - \frac{1}{{\int }_{-1}^{1}\ell \left( x\right) \mathrm{d}x}\left\lbrack  {\frac{m - 2{\rho }_{0}}{\alpha } + \mathop{\sum }\limits_{{j = 0}}^{n}T\left( {x}_{j}\right) {\int }_{-1}^{1}{\ell }_{j}\left( x\right) \mathrm{d}x}\right\rbrack  .
$$

(ii) It is tempting to say that a solution does not exist when

$$
{\int }_{-1}^{1}\ell \left( x\right) \mathrm{d}x = 0
$$

which happened in part (b). But this is only half the answer. If, by chance, we have

$$
\mathop{\sum }\limits_{{j = 0}}^{n}T\left( {x}_{j}\right) {\int }_{-1}^{1}{\ell }_{j}\left( x\right) \mathrm{d}x =  - \frac{m - 2{\rho }_{0}}{\alpha }
$$

then $\lambda  = 0$ is an answer regardless of the value of ${\int }_{-1}^{1}\ell \left( x\right) \mathrm{d}x$ . In this case there are an infinite number of solutions. So the full criterion for when a solution does not exist is

$$
{\int }_{-1}^{1}\ell \left( x\right) \mathrm{d}x = 0\text{ and }\mathop{\sum }\limits_{{j = 0}}^{n}T\left( {x}_{j}\right) {\int }_{-1}^{1}{\ell }_{j}\left( x\right) \mathrm{d}x \neq   - \frac{m - 2{\rho }_{0}}{\alpha }.
$$

## Problem 5: Numerical ODE

Consider the boundary value problem

$$
- \frac{d}{dx}\left( {a\left( x\right) \frac{du}{dx}}\right)  = f\left( x\right) ,\;u\left( 0\right)  = u\left( 1\right)  = 0
$$

where $a\left( x\right)  > \delta  \geq  0$ is a bounded differentiable function in $\left\lbrack  {0,1}\right\rbrack$ . We note that the above ODE can

be written as

$$
- \frac{da}{dx}\frac{du}{dx} - a\left( x\right) \frac{{d}^{2}u}{d{x}^{2}} = f\left( x\right) ,\;u\left( 0\right)  = u\left( 1\right)  = 0.
$$

We assume that, although $a\left( x\right)$ is available, an expression for its derivative, $\frac{da}{dx}$ , is not available. (a) Using finite differences and an equally spaced grid in $\left\lbrack  {0,1}\right\rbrack  ,{x}_{l} = {hl}, l = 0,\ldots , n$ and $h = 1/n$ , we discretize the ODE to obtain a linear system of equations, yielding an $O\left( {h}^{2}\right)$ approximation of the ODE. After the application of the boundary conditions, the resulting coefficient matrix of the linear system is an $\left( {n - 1}\right)  \times  \left( {n - 1}\right)$ tridiagonal matrix.

Provide a derivation and write down the resulting linear system (by giving the expressions of the elements).

(b) Utilizing all the information provided, find a disc in $\mathbb{C}$ , the smaller the better, that is guaranteed to contain all the eigenvalues of the linear system constructed in part (a).

## Solution:

(a) We must choose an $O\left( {h}^{2}\right)$ finite difference approximation for the derivatives. I choose to use centered differences to approximate the derivatives since it is known that

$$
{\left. \frac{du}{dx}\right| }_{{x}_{j}} = \frac{u\left( {x}_{j + 1}\right)  - u\left( {x}_{j - 1}\right) }{2h} + O\left( {h}^{2}\right)
$$

and

$$
{\left. \frac{{d}^{2}u}{d{x}^{2}}\right| }_{{x}_{j}} = \frac{u\left( {x}_{j + 1}\right)  - {2u}\left( {x}_{j}\right)  + u\left( {x}_{j - 1}\right) }{{h}^{2}} + O\left( {h}^{2}\right) .
$$

Let ${u}_{j}$ denote the approximate value $u\left( {x}_{j}\right)$ . Then truncating the $O\left( {h}^{2}\right)$ terms of the derivatives and plugging them into the differential equation, we find the following row equation at ${x}_{j}$ for $j = 1,\ldots , n - 1$

$$
- \left( \frac{a\left( {x}_{j + 1}\right)  - a\left( {x}_{j - 1}\right) }{4{h}^{2}}\right) \left( {{u}_{j + 1} - {u}_{j - 1}}\right)  - \frac{a\left( {x}_{j}\right) }{{h}^{2}}\left( {{u}_{j + 1} - 2{u}_{j} + {u}_{j - 1}}\right)  = f\left( {x}_{j}\right)  \tag{1}
$$

Since we know that $u\left( 0\right)  = u\left( 1\right)  = 0$ , we get different equations for $j = 1$ and $j = n - 1$ . For $j = 1$ , the equation is given by

$$
- \left( \frac{a\left( {x}_{2}\right)  - a\left( {x}_{0}\right) }{4{h}^{2}}\right) \left( {u}_{2}\right)  - \frac{a\left( {x}_{1}\right) }{{h}^{2}}\left( {{u}_{2} - 2{u}_{1}}\right)  = f\left( {x}_{1}\right) . \tag{2}
$$

For $j = n - 1$ , the equation is given by

$$
- \left( \frac{a\left( {x}_{n}\right)  - a\left( {x}_{n - 2}\right) }{4{h}^{2}}\right) \left( {-{u}_{n - 2}}\right)  - \frac{a\left( {x}_{n - 1}\right) }{{h}^{2}}\left( {-2{u}_{n - 1} + {u}_{n - 2}}\right)  = f\left( {x}_{n - 1}\right) . \tag{3}
$$

The resulting tridiagonal system has RHS $f\left( {x}_{j}\right)$ for $j = 1,2,\cdots , n - 1$ ; — diagonal entries:

$$
2\frac{a\left( {x}_{j}\right) }{{h}^{2}},\;j = 1,\cdots , n - 1
$$

- lower diagonal entries:

$$
\left( \frac{a\left( {x}_{j + 1}\right)  - a\left( {x}_{j - 1}\right) }{4{h}^{2}}\right)  - \frac{a\left( {x}_{j}\right) }{{h}^{2}}\;j = 2,\cdots , n - 1;
$$

- upper diagonal entries:

$$
- \left( \frac{a\left( {x}_{j + 1}\right)  - a\left( {x}_{j - 1}\right) }{4{h}^{2}}\right)  - \frac{a\left( {x}_{j}\right) }{{h}^{2}}\;j = 1,\cdots , n - 2.
$$

(b) The Gershgorin theorem states that for any complex $n \times  n$ matrix $\mathbf{A}$ , the eigenvalues lie within the collection of disc with radius ${R}_{i} = \mathop{\sum }\limits_{{j \neq  i}}\left| {a}_{ij}\right|$ centered at ${a}_{ii}$ .

Applying this to the matrix, we find that the Gershgorin disc for the linear system are

$$
\left| {\lambda  - \frac{{2a}\left( {x}_{1}\right) }{{h}^{2}}}\right|  \leq  \left| {\frac{a\left( {x}_{2}\right)  - a\left( 0\right) }{4{h}^{2}} + \frac{a\left( {x}_{1}\right) }{{h}^{2}}}\right| ,
$$

$$
\left| {\lambda  - \frac{{2a}\left( {x}_{j}\right) }{{h}^{2}}}\right|  \leq  2\left| {\frac{a\left( {x}_{j + 1}\right)  - a\left( {x}_{j - 1}\right) }{4{h}^{2}} + \frac{a\left( {x}_{j}\right) }{{h}^{2}}}\right| ,\;\text{ for }j = 2,\ldots , n - 2,
$$

and

$$
\left| {\lambda  - \frac{{2a}\left( {x}_{n - 1}\right) }{{h}^{2}}}\right|  \leq  \left| {\frac{a\left( 1\right)  - a\left( {x}_{n - 2}\right) }{4{h}^{2}} + \frac{a\left( {x}_{n - 1}\right) }{{h}^{2}}}\right| .
$$

Now we must find a disc which contains all of these. To do this, we utilize the fact that $a\left( x\right)  \geq  \delta  > 0$ . Let $M = \mathop{\max }\limits_{{x \in  \left\lbrack  {0,1}\right\rbrack  }}\left| {a\left( x\right) }\right|$ . Then

$$
\left| {\lambda  - \frac{{2a}\left( {x}_{j}\right) }{{h}^{2}}}\right|  \leq  2\left| {\frac{a\left( {x}_{j + 1}\right)  - a\left( {x}_{j - 1}\right) }{4{h}^{2}} + \frac{a\left( {x}_{j}\right) }{{h}^{2}}}\right|  \leq  \frac{2}{{h}^{2}}\left( {\frac{M - \delta }{4} + M}\right) .
$$

Now that we have an upper bound for the radius of all the disc, we note that $\delta  < a\left( {x}_{j}\right)  \leq  M\forall j$ . Thus to make sure we capture all eigenvalues, we center the disc at $\frac{\delta  + M}{{h}^{2}}$ in the middle of $\frac{2\delta }{{h}^{2}}$ and $\frac{2M}{{h}^{2}}$ , then add $\frac{M - \delta }{{h}^{2}}$ to the radius we found above. Finally the smallest disc that we find is

$$
\left| {\lambda  - \frac{M + \delta }{{h}^{2}}}\right|  \leq  \frac{M - \delta }{{h}^{2}} + \frac{2}{{h}^{2}}\left( {\frac{M - \delta }{4} + M}\right)  = \frac{1}{{h}^{2}}\left( {{3.5M} - {1.5\delta }}\right)
$$

## Problem 6: Numerical PDE

Consider the equation

$$
{u}_{t} + a{u}_{x} = 0,\;a \in  \mathbb{R}, t > 0, \tag{4}
$$

$$
u\left( {x,0}\right)  = f\left( x\right) .
$$

The solution will be approximated using the Finite Difference Lax-Wendroff method

$$
{v}_{j}^{n + 1} = {v}_{j}^{n} - \frac{a\Delta t}{2\Delta x}\left( {{v}_{j + 1}^{n} - {v}_{j - 1}^{n}}\right)  + {a}^{2}\frac{{\left( \Delta t\right) }^{2}}{2{\left( \Delta x\right) }^{2}}\left( {{v}_{j + 1}^{n} - 2{v}_{j}^{n} + {v}_{j - 1}^{n}}\right)
$$

where ${v}_{j}^{n} = u\left( {{x}_{j},{t}_{n}}\right)$ is a grid function, and ${\Delta x}$ and ${\Delta t}$ denote the spacing between grid points in the $x$ and $t$ directions.

NOTE: That there are two centered difference formulas used in the spatial direction.

(a)

$$
\frac{{v}_{j}^{n + 1} - {v}_{j}^{n}}{\Delta t} = {u}_{t} + \frac{\Delta t}{2}{u}_{tt} + \frac{{\left( \Delta t\right) }^{2}}{6}{u}_{ttt} + O\left( {\left( \Delta t\right) }^{3}\right)
$$

Rewrite this expression replacing the temporal derivatives ${u}_{tt}$ and ${u}_{ttt}$ in terms of spatial derivatives using equation (4).

(b) Determine the spatial and temporal orders of accuracy of the Lax-Wendroff method.

(c) Use von Neumann analysis to determine under what conditions the method is stable. (Hint: it is useful to look at the square of the amplification factor.)

Solution:

(a)

$$
\frac{{v}_{j}^{n + 1} - {v}_{j}^{n}}{\Delta t} = {u}_{t} + \frac{{a}^{2}{\Delta t}}{2}{u}_{xx} + \frac{{a}^{3}{\left( \Delta t\right) }^{2}}{6}{u}_{xxx} + O\left( {\left( \Delta t\right) }^{3}\right)
$$

(b)

$$
\frac{{v}_{j + 1}^{n} - {v}_{j - 1}^{n - 1}}{2\Delta x} = {u}_{x} + \frac{{\left( \Delta x\right) }^{2}}{6}{u}_{xxx} + O\left( {\left( \Delta x\right) }^{4}\right)
$$

$$
\frac{{v}_{j + 1}^{n} - 2{v}_{j}^{n} + {v}_{j - 1}^{n}}{{\left( \Delta x\right) }^{2}} = {u}_{xx} + \frac{{\left( \Delta x\right) }^{2}}{12}{u}_{xxxx} + O\left( {\left( \Delta x\right) }^{4}\right)
$$

Plugging these two Taylor expansions and the solution to part (a) into the finite difference scheme, we get

$$
{u}_{t} + a{u}_{x} =  - \frac{{a}^{3}{\left( \Delta t\right) }^{2}}{6}{u}_{xxx} - \frac{a{\left( \Delta x\right) }^{2}}{6}{u}_{xxx} + O\left( {\left( \Delta t\right) }^{3}\right)  + O{\left( \Delta x\right) }^{4})
$$

So the method is $O\left( {{\left( \Delta x\right) }^{2} + {\left( \Delta t\right) }^{2}}\right)$ .

(c) We plug ${v}_{j}^{n} = {\xi }^{n}{e}^{{ik}{x}_{j}}$ into the finite difference method.

$$
{v}_{j}^{n + 1} = {v}_{j}^{n} - \frac{a\Delta t}{2\Delta x}\left( {{v}_{j + 1}^{n} - {v}_{j - 1}^{n}}\right)  + {a}^{2}\frac{{\left( \Delta t\right) }^{2}}{2{\left( \Delta x\right) }^{2}}\left( {{v}_{j + 1}^{n} - 2{v}_{j}^{n} + {v}_{j - 1}^{n}}\right)
$$

$$
{\xi }^{n + 1}{e}^{{ik}{x}_{j}} = {\xi }^{n}{e}^{{ik}{x}_{j}} - \frac{a\Delta t}{2\Delta x}\left( {{\xi }^{n}{e}^{{ik}\left( {{x}_{j} + {\Delta x}}\right) } - {\xi }^{n}{e}^{{ik}\left( {{x}_{j} - {\Delta x}}\right) } + {a}^{2}\frac{{\left( \Delta t\right) }^{2}}{2{\left( \Delta x\right) }^{2}}\left( {{\xi }^{n}{e}^{{ik}\left( {{x}_{j} + {\Delta x}}\right) } - 2{\xi }^{n}{e}^{{ik}{x}_{j}} + {\xi }^{n}{e}^{{ik}\left( {{x}_{j} - {\Delta x}}\right) }}\right) }\right)
$$

$$
\xi  = 1 - \frac{a\Delta t}{2\Delta x}\left( {{e}^{ik\Delta x} - {e}^{-{ik\Delta x}}}\right)  + {a}^{2}\frac{{\left( \Delta t\right) }^{2}}{2{\left( \Delta x\right) }^{2}}\left( {{e}^{ik\Delta x} - 2 + {e}^{-{ik\Delta x}}}\right)
$$

$$
= 1 - \frac{a\Delta t}{\Delta x}i\sin \left( {k\Delta x}\right)  + {a}^{2}\frac{{\left( \Delta t\right) }^{2}}{2{\left( \Delta x\right) }^{2}}\left( {\cos \left( {k\Delta x}\right)  - 1}\right)
$$

Let $\kappa  = \frac{a\Delta t}{\Delta x}$ , then $\xi$ can be written in a slightly cleaner form.

$$
\xi  = 1 - \frac{a\Delta t}{\Delta x}i\sin \left( {k\Delta x}\right)  + {\kappa }^{2}\left( {\cos \left( {k\Delta x}\right)  - 1}\right)
$$

$$
{\left| \xi \right| }^{2} = 1 - 2{\kappa }^{2}\left( {1 - \cos \left( {k\Delta x}\right) }\right)  + {\kappa }^{2}\left( {1 - {\cos }^{2}\left( {k\Delta x}\right) }\right)  + {\kappa }^{4}{\left( 1 - \cos \left( k\Delta x\right) \right) }^{2}
$$

$$
= 1 - {\kappa }^{2}\left( {1 - {\kappa }^{2}}\right) {\left( 1 - \cos \left( k\Delta x\right) \right) }^{2}
$$

$$
= 1 - 4{\kappa }^{2}\left( {1 - {\kappa }^{2}}\right) {\sin }^{4}\left( {\frac{1}{2}{k\Delta x}}\right)
$$

The method is stable when ${\left| \xi \right| }^{2} \leq  1$ which matches the CFL condition requiring $\left| \kappa \right|  \leq  1$ .