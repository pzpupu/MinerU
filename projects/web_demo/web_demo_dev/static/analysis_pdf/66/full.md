## Homework 6



<div style="background-color:#F4433633;" meta-id="2-4-0-157">

1. (a) Use chain rule to find the partial derivatives $\frac{\partial z}{\partial u}$ and $\frac{\partial z}{\partial v}$ of $z = {e}^{{x}^{2}y}$ , where $x\left( {u, v}\right)  = \sqrt{uv}$ and $y\left( {u, v}\right)  = \frac{1}{v}$ .

(b) Express $\frac{\partial z}{\partial u}$ and $\frac{\partial z}{\partial v}$ only in terms of $u$ and $v$ and evaluate at $\left( {u, v}\right)  =$ (1,1).

</div meta-id="2-4-0-157">



Solution:



<div style="background-color:#4CAF5033;" meta-id="16-42-0-0">

(a)



<div style="background-color:#2196F333;" meta-id="22-24-0-0">

$$
\frac{\partial z}{\partial u} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial u} = \left( {{2xy}{e}^{{x}^{2}y}}\right) \left( \frac{v}{2\sqrt{uv}}\right)  + \left( {{x}^{2}{e}^{{x}^{2}y}}\right) \left( 0\right)  = {xy}{e}^{{x}^{2}y}\frac{v}{\sqrt{uv}}
$$
</div meta-id="22-24-0-0">

and



<div style="background-color:#2196F333;" meta-id="33-37-0-0">

$$

\frac{\partial z}{\partial v} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial v} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial v} = \left( {{2xy}{e}^{{x}^{2}y}}\right) \left( \frac{v}{2\sqrt{uv}}\right)  + \left( {{x}^{2}{e}^{{x}^{2}y}}\right) \left( {-\frac{1}{{v}^{2}}}\right)  = {e}^{{x}^{2}y}\left( {{xy}\frac{u}{\sqrt{uv}} - {x}^{2}\frac{1}{{v}^{2}}}\right)





$$
</div meta-id="33-37-0-0">

(b)

$$
\frac{\partial z}{\partial u} = \sqrt{uv}\frac{1}{v}{e}^{{uv}\frac{1}{v}}\frac{v}{\sqrt{uv}} = {e}^{u}
$$

$$
\frac{\partial z}{\partial v} = {e}^{{uv}\frac{1}{v}}\left( {\sqrt{uv}\frac{1}{v}\frac{u}{\sqrt{uv}} - {uv}\frac{1}{{v}^{2}}}\right)  = {e}^{u}\left( {\frac{u}{v} - \frac{u}{v}}\right)  = 0
$$

So



<div style="background-color:#2196F333;" meta-id="60-63-0-0">

$$
{\left. \frac{\partial z}{\partial u}\right| }_{\left( {u, v}\right)  = \left( {1,1}\right) } = e\text{ and }{\left. \frac{\partial z}{\partial v}\right| }_{\left( {u, v}\right)  = \left( {1,1}\right) } = 0





$$
</div meta-id="60-63-0-0">
</div meta-id="16-42-0-0">



<div style="background-color:#F4433633;" meta-id="75-77-0-82">

2. (a) Find the directional derivative of $f\left( {x, y, z}\right)  = x{y}^{2}{z}^{3}$ at $P\left( {2,1,1}\right)$ in the direction of $Q\left( {0, - 3,5}\right)$ .

(b) In which direction is the directional derivative maximized and how much is it?

</div meta-id="75-77-0-82">

 Solution:



<div style="background-color:#4CAF5033;" meta-id="87-101-0-279">

(a) The unit vector in the direction of $\overrightarrow{PQ} = \langle 0 - 2, - 3 - 1,5 - 1\rangle  =$ $\langle  - 2, - 4,4\rangle$ is



<div style="background-color:#2196F333;" meta-id="93-95-0-0">

$$
u = \frac{1}{\sqrt{4 + {16} + {16}}}\langle  - 2, - 4,4\rangle  = \frac{1}{6}\langle  - 2, - 4,4\rangle .




$$
</div meta-id="93-95-0-0">
Also

$$
\nabla f = \left\langle  {{y}^{2}{z}^{3},{2xy}{z}^{3},{3x}{y}^{2}{z}^{2}}\right\rangle  ,
$$

so $\nabla f\left( {2,1,1}\right)  = \langle 1,4,6\rangle$ . So the directional derivative is ${D}_{u}f\left( {2,1,1}\right)  =$ $\nabla f\left( {2,1,1}\right)  \cdot  u = \langle 1,4,6\rangle  \cdot  \frac{1}{6}\langle  - 2, - 4,4\rangle  = \frac{1}{6}\left( {-2 - {16} + {24}}\right)  = 1$ .

(b) 

<div style="background-color:#2196F333;" meta-id="113-4-279">

The directional derivative is maximed in the direction of the gradient vector $\nabla f\left( {2,1,1}\right)  = \langle 1,4,6\rangle$ and it is $\left| {\nabla f\left( {2,1,1}\right) }\right|  = \left| {\langle 1,4,6\rangle }\right|  =$ $\sqrt{1 + {16} + {36}} = \sqrt{53}$ .

</div meta-id="113-4-279">



</div meta-id="87-101-0-279">





<div style="background-color:#F4433633;" meta-id="127-0-122">

3. Consider the surface ${xy} + {yz} + {zx} = 5$ . Find (a) the tangent plane at (1,2,1)and (b) the normal line at(1,2,1).

</div meta-id="127-0-122">



Solution:



<div style="background-color:#4CAF5033;" meta-id="139-153-0-0">

(a) Consider $F\left( {x, y, z}\right)  = {xy} + {yz} + {zx}$ . Its gradient is $\nabla F\left( {x, y, z}\right)  =$ $\langle y + z, x + z, x + y\rangle$ , so $\nabla F\left( {1,2,1}\right)  = \langle 3,2,3\rangle$ , which is a normal vector to the tangent plane at(1,2,1). So the tangent plane is given by

$$
3\left( {x - 1}\right)  + 2\left( {y - 2}\right)  + 3\left( {z - 1}\right)  = 0
$$



<div style="background-color:#2196F333;" meta-id="149-151-0-1">

$$
\text{or} {3x} + {2y} + {3z} = {10}
$$

</div meta-id="149-151-0-1">



(b) The normal line has direction $\langle 3,2,3\rangle$ , so it has the parametric equations



<div style="background-color:#2196F333;" meta-id="163-169-0-0">

$$
\left\{  \begin{array}{l} x = 1 + {3t} \\  y = 2 + {2t} \\  z = 1 + {3t} \end{array}\right.








$$
</div meta-id="163-169-0-0">
</div meta-id="139-153-0-0">



<div style="background-color:#F4433633;" meta-id="181-187-0-154">

4. Find all critical points of the function

$$
f\left( {x, y}\right)  = {x}^{3} + {y}^{2} - {2xy} + x - {2y}.
$$

Use the second derivative test to classify the critical points as either min, max or a saddle point. If it is a min or max, is it a global min or $\max$ ?

</div meta-id="181-187-0-154">



</div meta-id="141-186-4-154">



Solution:



<div style="background-color:#4CAF5033;" meta-id="203-251-0-182">

The first partial derivatives of the function are

$$
{f}_{x}\left( {x, y}\right)  = 3{x}^{2} - {2y} + 1\text{ and }{f}_{y}\left( {x, y}\right)  = {2y} - {2x} - 2,
$$

so in order to find the critical points we have to solve the following

system:

$$
\left\{  \begin{array}{l} 3{x}^{2} - {2y} + 1 = 0 \\  {2y} - {2x} - 2 = 0 \end{array}\right.
$$

From the second equation we take $y = x + 1$ and then from the first we take

$$
3{x}^{2} - 2\left( {x + 1}\right)  + 1 = 0\text{or}
$$

$$
3{x}^{2} - {2x} - 1 = 0
$$

which gives solutions $x = 1$ and $x =  - \frac{1}{3}$ . If $x = 1$ then $y = 1 + 1 = 2$ and if $x =  - \frac{1}{3}$ then $y =  - \frac{1}{3} + 1 = \frac{2}{3}$ . So the two critical points are (1,2)and $\left( {-\frac{1}{3},\frac{2}{3}}\right)$ .

Now in order to apply the second derivative test we have

$$
{f}_{xx}\left( {x, y}\right)  = {6x}
$$

$$
{f}_{yy}\left( {x, y}\right)  = 2
$$

$$
{f}_{xy}\left( {x, y}\right)  =  - 2
$$

$$
D\left( {x, y}\right)  = {f}_{xx}{f}_{yy} - {\left( {f}_{xy}\right) }^{2} = {12x} - 4
$$





and $D\left(



 {1,2}\right)  = 8, D\left( {-\frac{1}{3},\frac{2}{3}}\right)  =  - 8$ . Then:
 <div style="background-color:#2196F333;" meta-id="251-0-12">

<table><tr><td/><td>D</td><td>fs:</td><td>conclusion</td></tr><tr><td>(1,2)</td><td>+</td><td>+</td><td>local minimum</td></tr><tr><td>(-1/3,2/3)</td><td>-</td><td/><td>saddle point</td></tr></table>
</div meta-id="251-0-12">
The local minimum at(1,2)is not global since $f\left( {1,2}\right)  =  - 2$ and we can find values of $f$ that are smaller than that, for example $f\left( {-2,0}\right)  =  - {10}$ .


</div meta-id="203-251-0-182">





<div style="background-color:#F4433633;" meta-id="271-0-114">

5. Find dimensions of the box without a lid with volume ${32}{\mathrm{\;{cm}}}^{3}$ that has minimal surface area.

</div meta-id="271-0-114">



Solution:



<div style="background-color:#4CAF5033;" meta-id="283-299-0-179">

Let $x, y, z$ be the dimensions of the box. The surface area of the box without the lid is $f\left( {x, y, z}\right)  = {xy} + {2xz} + {2yz}$ . We want the volume to be ${32}{\mathrm{\;{cm}}}^{3}$ , i.e. ${xyz} = {32}$ , or $z = \frac{32}{xy}$ . So the function that we want to minimize is

$$
f\left( {x, y}\right)  = {xy} + {2x}\frac{32}{xy} + {2y}\frac{32}{xy} = {xy} + \frac{64}{y} + \frac{64}{x}.
$$

Then we need to solve the system

$$
{f}_{x} = y - \frac{64}{{x}^{2}} = 0
$$

$$
{f}_{y} = x - \frac{64}{{y}^{2}} = 0
$$

from which we take ${x}^{3} = {64}$ or $x = 4$ and $y = \frac{64}{{4}^{2}} = 4$ . Plugging these back in ${xyz} = {32}$ we take $z = 2$ . 
<div style="background-color:#2196F333;" meta-id="303-6-44">
So the dimensions of the box are (4,4,2).
</div meta-id="303-6-44">

</div meta-id="283-299-0-179">





<div style="background-color:#F4433633;" meta-id="312-0-134">

6. Find the extreme values of $f\left( {x, y}\right)  = 2{x}^{2} + 3{y}^{2} - {4x} - 5$ on the region ${x}^{2} + {y}^{2} \leq  {16}$ .

</div meta-id="312-0-134">



Solution:



<div style="background-color:#4CAF5033;" meta-id="324-366-0-131">

To find the critical points we need to solve $\nabla f = \langle {4x} - 4,{6y}\rangle  = \langle 0,0\rangle$ . This gives $x = 1$ and $y = 0$ which lies in the interior of the given region, ${x}^{2} + {y}^{2} < {16}$ .

On the boundary ${x}^{2} + {y}^{2} = {16}$ we have: Consider the function $g\left( {x, y}\right)  =$ ${x}^{2} + {y}^{2}$ , which has gradient $\nabla g\langle {2x},{2y}\rangle$ . Then we need to solve the following system for all the values of $x, y$ and $\lambda$ :

$$
{4x} - 4 = {\lambda 2x}
$$

$$
{6y} = {\lambda 2y}
$$

$$
{x}^{2} + {y}^{2} = {16}
$$

From ${6y} = {\lambda 2y}$ we take that either $y = 0$ or $\lambda  = 3$ .

If $y = 0$ then ${x}^{2} = {16}$ or $x =  \pm  4$ .

If $\lambda  = 3$ then ${4x} - 4 = {\lambda 2x} \Rightarrow  x =  - 2$ and ${\left( -2\right) }^{2} + {y}^{2} = {16} \Rightarrow$ ${y}^{2} = {12} \Rightarrow  y =  \pm  2\sqrt{3}$ . Now we calculate the values at all of the above points:

$$
f\left( {1,0}\right)  =  - 7
$$

$$
f\left( {4,0}\right)  = {11}
$$

$$
f\left( {-4,0}\right)  = {45}
$$

$$
f\left( {-2,2\sqrt{3}}\right)  = {47}
$$

$$
f\left( {-2, - 2\sqrt{3}}\right)  = {47}
$$



<div style="background-color:#2196F333;" meta-id="370-0-131">

So the maximum is 47 at either $\left( {-2,2\sqrt{3}}\right)$ or $\left( {-2, - 2\sqrt{3}}\right)$ , and the minimum is -7 at(1,0).

</div meta-id="370-0-131">



</div meta-id="324-366-0-131">





<div style="background-color:#F4433633;" meta-id="384-0-384">

7. The total production of a certain product is modeled by the Cobb-Douglas function $P = {100}{L}^{3/4}{K}^{1/4}$ , where $L$ represents the units of labor and $K$ represents the units of capital. Each labor unit costs $\$ {200}$ and each capital unit costs $\$ {250}$ . If the total expenses for labor and capital cannot exceed $\$ {50},{000}$ , find the maximum level of production

</div meta-id="384-0-384">

. Solution:



<div style="background-color:#4CAF5033;" meta-id="394-454-0-0">

We want to maximize $P\left( {L, K}\right)  = {100}{L}^{\frac{3}{4}}{K}^{\frac{1}{4}}$ with the constrain of the total cost to be 50,000 , i.e.

$$
g\left( {L, K}\right)  = {200L} + {250K} = {50},{000}.
$$

We have

$$
\nabla P = \left\langle  {\frac{3}{4}{100}{L}^{-\frac{1}{4}}{K}^{\frac{1}{4}},\frac{1}{4}{100}{L}^{\frac{3}{4}}{K}^{-\frac{3}{4}}}\right\rangle   = \left\langle  {{75}{L}^{-\frac{1}{4}}{K}^{\frac{1}{4}},{25}{L}^{\frac{3}{4}}{K}^{-\frac{3}{4}}}\right\rangle
$$

and

$$
\lambda \nabla g = \langle {\lambda 200},{\lambda 250}\rangle .
$$

We need to solve the system

$$
{75}{L}^{-\frac{1}{4}}{K}^{\frac{1}{4}} = {\lambda 200}
$$

$$
{25}{L}^{\frac{3}{4}}{K}^{-\frac{3}{4}} = {\lambda 250}
$$

$$
{200L} + {250K} = {50},{000}
$$

Solving for $\lambda$ the first two we have

$$
\lambda  = \frac{75}{200}{\left( \frac{K}{L}\right) }^{\frac{1}{4}}\text{ and }
$$

$$
\lambda  = \frac{1}{10}{\left( \frac{L}{K}\right) }^{\frac{3}{4}}
$$

so setting them equal gives

$$
\frac{75}{20}{\left( \frac{K}{L}\right) }^{\frac{1}{4}} = {\left( \frac{L}{K}\right) }^{\frac{3}{4}} \Rightarrow  \frac{75}{20} = {\left( \frac{L}{K}\right) }^{\frac{3}{4}}{\left( \frac{L}{K}\right) }^{\frac{1}{4}} \Rightarrow  \frac{L}{K} = \frac{75}{20} \Rightarrow  L = \frac{75}{20}K.
$$

Now from the third one

$$
{200}\frac{75}{20}K + {250K} = {50},{000} \Rightarrow  K = {50}
$$

$$
\text{and}L = \frac{75}{20}{50} = {187.5}\text{.}
$$



<div style="background-color:#2196F333;" meta-id="456-0-84">

So the production in this case is $P\left( {{50},{187.5}}\right)  = {13},{478.22}$ .

</div meta-id="456-0-84">





</div meta-id="394-454-0-0">



<div style="background-color:#F4433633;" meta-id="470-478-0-67">

8. Use Lagrance multipliers to prove that the triangle with maximum area that has a given perimeter $p$ is equilateral.

Hint: Use Heron's formula for the area

$$
A = \sqrt{s\left( {s - x}\right) \left( {s - y}\right) \left( {s - z}\right) }
$$

where $s = \frac{p}{2}$ and $x, y, z$ are the lengths of the sides.

</div meta-id="470-478-0-67">



Solution:



<div style="background-color:#4CAF5033;" meta-id="490-524-0-115">

Let $f\left( {x, y, z}\right)  = s\left( {s - x}\right) \left( {s - y}\right) \left( {s - z}\right)$ and $g\left( {x, y, z}\right)  = x + y + z$ for the perimeter of the triangle. Then we want to maximize $f$ with the constrain $x + y + z = p$ . We have

$$
\nabla f = \langle  - s\left( {s - y}\right) \left( {s - z}\right) , - s\left( {s - x}\right) \left( {s - z}\right) , - s\left( {s - x}\right) \left( {s - y}\right) \rangle
$$

$$
\lambda \nabla g = \langle \lambda ,\lambda ,\lambda \rangle
$$

So we want to solve the system

$$
- s\left( {s - y}\right) \left( {s - z}\right)  = \lambda
$$

$$
- s\left( {s - x}\right) \left( {s - z}\right)  = \lambda
$$

$$
- s\left( {s - x}\right) \left( {s - y}\right)  = \lambda .
$$

Or, by eliminating $\lambda$ , the system

$$
\left( {s - y}\right) \left( {s - z}\right)  = \left( {s - x}\right) \left( {s - z}\right)
$$

$$
\left( {s - x}\right) \left( {s - z}\right)  = \left( {s - x}\right) \left( {s - y}\right) .
$$

The latter gives $x = y$ and $y = z$ , so $x = y = z = \frac{p}{3}$ , which means that the triangle is equilateral.

</div meta-id="490-524-0-115">





<div style="background-color:#F4433633;" meta-id="534-538-0-77">

9. The plane ${2x} + {2y} + z = 2$ intersects the surface $z = {x}^{2} + {y}^{2}$ . Use Lagrance multipliers to:

(a) Find the point of intersection of these two surfaces which is closest to the $z$ -axis.

(b) Find the point of intersection which is furthest away from the $z$ -axis.

</div meta-id="534-538-0-77">



Solution:



<div style="background-color:#4CAF5033;" meta-id="550-604-0-91">

We want ot minimize and maximize the distance from the $z$ -axis which is $\sqrt{{x}^{2} + {y}^{2}}$ . Instead, we will minimize/maximize its square $f\left( {x, y, z}\right)  =$ ${x}^{2} + {y}^{2}$ . The constrains are

$$
g\left( {x, y, z}\right)  = {2x} + {2y} + z = 2\text{ and }
$$

$$
h\left( {x, y, z}\right)  = {x}^{2} + {y}^{2} - z = 0.
$$

Then

$$
\nabla f = \langle {2x},{2y},0\rangle
$$

$$
\lambda \nabla g = \langle {2\lambda },{2\lambda },\lambda \rangle
$$

$$
\mu \nabla h = \langle {2\mu x},{2\mu y}, - \mu \rangle
$$

So we need to solve the following system:

$$
\nabla f = \lambda \nabla g + \mu \nabla h
$$

$$
{2x} + {2y} + z = 2
$$

$$
{x}^{2} + {y}^{2} - z = 0.
$$

From the first one we have

$$
\left\{  {\begin{array}{l} {2x} = {2\lambda } + {2\mu x} \\  {2y} = {2\lambda } + {2\mu y} \\  \lambda  = \mu  \end{array} \Rightarrow  \left\{  {\begin{array}{l} x = \lambda \left( {1 + x}\right) \\  y = \lambda \left( {1 + y}\right)  \end{array} \Rightarrow  \frac{x}{1 + x} = \frac{y}{1 + y} \Rightarrow  x = y}\right. }\right.
$$

Now from the last two we take $z = 2 - {4x}$ and $z = 2{x}^{2}$ , and by eliminating $z$ we take $x =  - 1 \pm  \sqrt{2}$ . 

<div style="background-color:#2196F333;" meta-id="598-608-124-91">

So finally we have two solutions $\left( {-1 - \sqrt{2}, - 1 - \sqrt{2},6 + 4\sqrt{2}}\right)$ and $\left( {-1 + \sqrt{2}, - 1 + \sqrt{2},6 - 4\sqrt{2}}\right)$ . Then

$$
f\left( {-1 - \sqrt{2}, - 1 - \sqrt{2},6 + 4\sqrt{2}}\right)  = 2{\left( 1 + \sqrt{2}\right) }^{2}\text{and}
$$

$$
f\left( {-1 + \sqrt{2}, - 1 + \sqrt{2},6 - 4\sqrt{2}}\right)  = 2{\left( 1 - \sqrt{2}\right) }^{2}
$$

which shows that the first point is the maximum of the $f$ and the last one is the minimum.

</div meta-id="598-608-124-91">



</div meta-id="550-604-0-91">

