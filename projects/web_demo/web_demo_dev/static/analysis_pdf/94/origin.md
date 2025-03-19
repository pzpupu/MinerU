# TURÁN PROBLEMS AND SHADOWS III: EXPANSIONS OF GRAPHS*

ALEXANDR KOSTOCHKA ${}^{ \dagger  }$ , DHRUV MUBAYI ${}^{ \ddagger  }$ , AND JACQUES VERSTRAËTE ${}^{§}$

Abstract. The expansion ${G}^{ + }$ of a graph $G$ is the 3-uniform hypergraph obtained from $G$ by enlarging each edge of $G$ with a new vertex disjoint from $V\left( G\right)$ such that distinct edges are enlarged by distinct vertices. Let ${\operatorname{ex}}_{3}\left( {n, F}\right)$ denote the maximum number of edges in a 3-uniform hypergraph with $n$ vertices not containing any copy of a 3-uniform hypergraph $F$ . The study of ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ includes some well-researched problems, including the case that $F$ consists of $k$ disjoint edges, $G$ is a triangle, $G$ is a path or cycle, and $G$ is a tree. In this paper we initiate a broader study of the behavior of ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ . Specifically, we show ${\operatorname{ex}}_{3}\left( {n,{K}_{s, t}^{ + }}\right)  = \Theta \left( {n}^{3 - 3/s}\right)$ whenever $t > \left( {s - 1}\right)$ ! and $s \geq  3$ . One of the main open problems is to determine for which graphs $G$ the quantity ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ is quadratic in $n$ . We show that this occurs when $G$ is any bipartite graph with Turán number $o\left( {n}^{\varphi }\right)$ where $\varphi  = \frac{1 + \sqrt{5}}{2}$ , and in particular this shows ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ when $G$ is the three-dimensional cube graph.

Key words. triple systems, Turán problems, expansions

AMS subject classifications. ${05}\mathrm{\;B}{07},{05}\mathrm{C}{65}$

DOI. ${10.1137}/{140977138}$

1. Introduction. An $r$ -uniform hypergraph $F$ , or simply $r$ -graph, is a family of $r$ -element subsets of a finite set. We associate an $r$ -graph $F$ with its edge set and call its vertex set $V\left( F\right)$ . Given an $r$ -graph $F$ , let ${\operatorname{ex}}_{r}\left( {n, F}\right)$ denote the maximum number of edges in an $r$ -graph on $n$ vertices that does not contain $F$ . The expansion of a graph $G$ is the 3-graph ${G}^{ + }$ with edge set $\left\{  {e \cup  \left\{  {v}_{e}\right\}   : e \in  G}\right\}$ , where ${v}_{e}$ are distinct vertices not in $V\left( G\right)$ . By definition, the expansion of $G$ has exactly $\left| G\right|$ edges. Note that Füredi and Jiang $\left\lbrack  {{10},{11}}\right\rbrack$ used a notion of expansion to $r$ -graphs for general $r$ , but this paper considers only 3-graphs.

Expansions include many important hypergraphs whose extremal functions have been investigated; for instance, the celebrated Erdős-Ko-Rado theorem [7] for 3- graphs is the case of expansions of a matching. A well-known result is that ${\operatorname{ex}}_{3}\left( {n,{K}_{3}^{ + }}\right)$ $= \left( \begin{matrix} n - 1 \\  2 \end{matrix}\right) \left\lbrack  {5,9,{18}}\right\rbrack$ . If a graph is not 3-colorable, then its expansion has positive Turán density; this case is fairly well understood $\left\lbrack  {{16},{19}}\right\rbrack$ , so we focus on the case of expansions of 3-colorable graphs. It is easy to see that ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = \Omega \left( {n}^{2}\right)$ unless $G$ is a star (the case that $G$ is a star is interesting in itself, and for $G = {P}_{2}$ determining ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ constituted a conjecture of Erdős and Sós [6] which was solved by Frankl [8]). The authors [13] had previously determined ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ exactly (for large $n$ ) when $G$ is a path or cycle of fixed length $k \geq  3$ , thereby answering questions posed by Füredi, Jiang, and Seiver [12] and Füredi and Jiang [11]. The case when $G$ is a forest is solved asymptotically in [14], thus settling a conjecture of Füredi [10]. The following straightforward result provides general bounds for ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ in terms of the number of edges of $G$ .

---

*Received by the editors July 11, 2014; accepted for publication (in revised form) February 27, 2015; published electronically April 30, 2015.

http://www.siam.org/journals/sidma/29-2/97713.html

${}^{ \dagger  }$ University of Illinois at Urbana-Champaign, Urbana, IL 61801, and Sobolev Institute of Mathematics, Novosibirsk 630090, Russia (kostochk@math.uiuc.edu). The research of this author was supported in part by NSF grant DMS-1266016 and by grants 12-01-00631 and 15-01-05867 of the Russian Foundation for Basic Research.

${}^{ \ddagger  }$ Department of Mathematics, Statistics, and Computer Science, University of Illinois at Chicago, Chicago, IL 60607 (mubayi@uic.edu). The research of this author was partially supported by NSF grants DMS-0969092 and DMS-1300138.

§Department of Mathematics, University of California at San Diego, La Jolla, CA 92093-0112 (jverstra@math.ucsd.edu). The research of this author was supported by NSF grant DMS-1362650.

---

Proposition 1.1. If $G$ is any graph with $v$ vertices and $f \geq  4$ edges, then for some $a > 0$ ,

$$
a{n}^{3 - \frac{{3v} - 9}{f - 3}} \leq  {\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  \leq  \left( {n - 1}\right) {\operatorname{ex}}_{2}\left( {n, G}\right)  + \left( {f + v - 1}\right) \left( \begin{array}{l} n \\  2 \end{array}\right) .
$$

The proof of Proposition 1.1 is given in section 3. Some key remarks are that ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ is not quadratic in $n$ if $f > {3v} - 6$ , and if $G$ is not bipartite, then the upper bound in Proposition 1.1 is cubic in $n$ . This suggests the question of identifying the graphs $G$ for which ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ , and in particular evaluation of ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ for planar $G$ .

1.1. Expansions of planar graphs. We give a straightforward proof of the following proposition, which is a special case of a more general result of Füredi [10] for a larger class of triple systems.

Proposition 1.2. Let $G$ be a graph with tree-width at most two. Then ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ $= O\left( {n}^{2}\right)$ .

On the other hand, there are 3-colorable planar graphs $G$ for which ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ is not quadratic in $n$ . To state this result, we need a definition. A proper $k$ -coloring $\chi  : V\left( G\right)  \rightarrow  \{ 1,\ldots , k\}$ is acyclic if every pair of color classes induces a forest in $G$ . We pose the following question.

QUESTION 1. Does every planar graph $G$ with an acyclic 3-coloring have ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ $= O\left( {n}^{2}\right)$ ?

Let $g\left( {n, k}\right)$ denote the maximum number of edges in an $n$ -vertex graph of girth larger than $k$ .

Proposition 1.3. Let $G$ be a planar graph such that in every proper 3-coloring of $G$ , every pair of color classes induces a subgraph containing a cycle of length at most $k$ . Then ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = \Omega \left( {{ng}\left( {n, k}\right) }\right)  = \Omega \left( {n}^{2 + \Theta \left( \frac{1}{k}\right) }\right)$ .

The last statement follows from the known fact that $g\left( {n, k}\right)  \geq  {n}^{1 + \Theta \left( \frac{1}{k}\right) }$ . The octahedron graph $O$ is an example of a planar graph where in every proper 3-coloring, each pair of color classes induces a cycle of length four, and so ${\operatorname{ex}}_{3}\left( {n,{O}^{ + }}\right)  = \Omega \left( {n}^{5/2}\right)$ . Even wheels do not have acyclic 3-colorings, and we do not know whether their expansions have quadratic Turán numbers.

Question 2. Does every even wheel $G$ have ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ ?

1.2. Expansions of bipartite graphs. The behavior of ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ when $G$ is a dense bipartite graph is somewhat related to the behavior of ${\operatorname{ex}}_{2}\left( {n, G}\right)$ according to Proposition 1.1. In particular, Proposition 1.1 shows for $t \geq  s \geq  2$ and some constants $a, c > 0$ that

$$
a{n}^{3 - \frac{{3s} + {3t} - 9}{{st} - 3}} \leq  {\operatorname{ex}}_{3}\left( {n,{K}_{s, t}^{ + }}\right)  \leq  c{n}^{3 - \frac{1}{s}}.
$$

We show that both the upper and lower bounds can be improved to determine the order of magnitude of ${\operatorname{ex}}_{3}\left( {n,{K}_{s, t}^{ + }}\right)$ when good constructions of ${K}_{s, t}$ -free graphs are available (see Alon, Rónyai, and Szabó [2]).

THEOREM 1.4. Fix $3 \leq  s \leq  t$ . Then ${\operatorname{ex}}_{3}\left( {n,{K}_{s, t}^{ + }}\right)  = O\left( {n}^{3 - \frac{3}{s}}\right)$ and, if $t > \left( {s - 1}\right) ! \geq$ 2, then ${\operatorname{ex}}_{3}\left( {n,{K}_{s, t}^{ + }}\right)  = \Theta \left( {n}^{3 - \frac{3}{s}}\right)$ .

The following closely related problem was recently investigated by Alon and Shikhelman [3]. For a graph $F$ , let $g\left( {n, F}\right)$ denote the maximum number of triangles in an $n$ -vertex graph that contains no copy of $F$ as a subgraph. From a graph $G$ achieving this maximum, we can form a 3-graph $H$ with $V\left( H\right)  = V\left( G\right)$ and $H$ consists of the triangles in $G$ . Then a copy $K$ of ${F}^{ + }$ in $H$ would yield a copy of $F$ in $G$ as $\partial K \supset  F$ . Consequently, we have

$$
g\left( {n, F}\right)  \leq  {\operatorname{ex}}_{3}\left( {n,{F}^{ + }}\right) .
$$

Alon and Shikhelman [3] independently proved that for fixed $3 \leq  s \leq  t$ and $t > \left( {s - 1}\right)$ ! we have $g\left( {n,{K}_{s, t}}\right)  = \Theta \left( {n}^{3 - 3/s}\right)$ . Their lower bound construction is exactly the same as ours, though the proofs are different.

The case of ${K}_{3, t}$ is interesting since ${\operatorname{ex}}_{3}\left( {n,{K}_{3, t}^{ + }}\right)  = O\left( {n}^{2}\right)$ , and perhaps it is possible to determine a constant $c$ such that ${\operatorname{ex}}_{3}\left( {n,{K}_{3,3}^{ + }}\right)  \sim  c{n}^{2}$ , since the asymptotic behavior of ${\operatorname{ex}}_{2}\left( {n,{K}_{3,3}}\right)$ is known, due to a construction of Brown [4] and the upper bounds of Füredi [10]. In general, the following bounds hold for expansions of ${K}_{3, t}$ .

THEOREM 1.5. For fixed $r \geq  1$ and $t = 2{r}^{2} + 1$ , we have $\left( {1 - o\left( 1\right) }\right) \frac{t - 1}{12}{n}^{2} \leq$ ${\operatorname{ex}}_{3}\left( {n,{K}_{3, t}^{ + }}\right)  = O\left( {n}^{2}\right)$ .

The upper bound in this theorem is a special case of a general upper bound for all graphs $G$ with $\sigma \left( {G}^{ + }\right)  = 3$ (see Theorem 1.7). Finally, we prove a general result that applies to expansions of a large class of bipartite graphs.

THEOREM 1.6. Let $G$ be a graph with ${\operatorname{ex}}_{2}\left( {n, G}\right)  = o\left( {n}^{\phi }\right)$ , where $\phi  = \left( {1 + \sqrt{5}}\right) /2$ is the golden ratio. Then ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ .

Let $\mathbb{Q}$ be the graph of the three-dimensional cube (with 8 vertices and 12 edges). Erdős and Simonovits (see [6]) proved ${\operatorname{ex}}_{2}\left( {n,\mathbb{Q}}\right)  = O\left( {n}^{1.6}\right)  = o\left( {n}^{\phi }\right)$ , so a corollary to Theorem 1.6 is that

$$
{\operatorname{ex}}_{3}\left( {n,{\mathbb{Q}}^{ + }}\right)  = \Theta \left( {n}^{2}\right) .
$$

Determining the growth rate of ${\operatorname{ex}}_{2}\left( {n,\mathbb{Q}}\right)$ is a longstanding open problem. Since it is known that for any graph $G$ the 1-subdivision of $G$ has Turán number $O\left( {n}^{3/2}\right)$ -see Alon, Krivelevich, and Sudakov [1] Theorem 1.6 also shows that for such graphs $G,{\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = \Theta \left( {n}^{2}\right)$ . Erdős conjectured that ${\operatorname{ex}}_{2}\left( {n, G}\right)  = O\left( {n}^{3/2}\right)$ for each 2-degenerate bipartite graph $G$ . If this conjecture is true, then by Theorem 1.6, ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ for any 2-degenerate bipartite graph $G$ .

1.3. Crosscuts. A set of vertices in a hypergraph containing exactly one vertex from every edge of a hypergraph is called a crosscut of the hypergraph, following Frankl and Füredi [9]. For a 3-uniform hypergraph $F$ , let $\sigma \left( F\right)$ be the minimum size of a crosscut of $F$ if it exists, i.e.,

$$
\sigma \left( F\right)  \mathrel{\text{:=}} \min \{ \left| X\right|  : \forall e \in  F,\left| {e \cap  X}\right|  = 1\}
$$

if such an $X$ exists. Since the triple system consisting of all edges containing exactly one vertex from a set of size $\sigma \left( F\right)  - 1$ does not contain $F$ , we have

(1.1)

$$
{\operatorname{ex}}_{3}\left( {n, F}\right)  \geq  \left( {\sigma \left( F\right)  - 1 + o\left( 1\right) }\right) \left( \begin{array}{l} n \\  2 \end{array}\right) .
$$

An intriguing open question is, For which $F$ an asymptotic equality is attained in (1.1)? Recall that a graph has tree-width at most two if and only if it has no subdivision of ${K}_{4}$ . Informally, these are subgraphs of a planar graph obtained by starting with a triangle, and then picking some edge ${uv}$ of the current graph, adding a new vertex $w$ , and then adding the edges ${uw}$ and ${vw}$ .

Question 3. Is it true that

(1.2)

$$
{\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  \sim  \left( {\sigma \left( {G}^{ + }\right)  - 1}\right) \left( \begin{array}{l} n \\  2 \end{array}\right)
$$

for every graph $G$ with tree-width two?

If $G$ is a forest or a cycle, then (1.2) holds $\left\lbrack  {{13},{14}}\right\rbrack$ (corresponding results for $r > 3$ were given by Füredi [10]). If $G$ is a graph with $\sigma \left( {G}^{ + }\right)  = 2$ , then again (1.2) holds [14]. Proposition 1.1 and Theorem 1.4 give examples of graphs $G$ with $\sigma \left( {G}^{ + }\right)  = 4$ and ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ superquadratic in $n$ . This leaves the case $\sigma \left( {G}^{ + }\right)  = 3$ , and in this case, Theorem 1.5 shows that ${\operatorname{ex}}_{3}\left( {n,{K}_{3, t}^{ + }}\right) /{n}^{2} \rightarrow  \infty$ as $t \rightarrow  \infty$ , even though $\sigma \left( {K}_{3, t}^{ + }\right)  = 3$ for all $t \geq  3$ . A quadratic upper bound for ${\operatorname{ex}}_{3}\left( {n,{K}_{3, t}^{ + }}\right)$ in Theorem 1.5 is a special case of the following theorem.

THEOREM 1.7. For every $G$ with $\sigma \left( {G}^{ + }\right)  = 3,{\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ .

2. Preliminaries. First we introduce some notation. A 3-graph is called a triple system. The edges will be written as unordered lists, for instance, ${xyz}$ represents $\{ x, y, z\}$ . For a set $X$ of vertices of a hypergraph $H$ , let $H - X = \{ e \in  H : e \cap  X = \varnothing \}$ . If $X = \{ x\}$ , then we write $H - x$ instead of $H - X$ . For a set $S$ of two vertices in a 3-graph $H,{N}_{H}\left( S\right)  = \{ x \in  V\left( H\right)  : S \cup  \{ x\}  \in  H\}$ . The codegree of a pair $S = \{ x, y\}$ of vertices in a 3-graph $H$ is ${d}_{H}\left( {x, y}\right)  = \left| {{N}_{H}\left( S\right) }\right|$ . The shadow of $H$ is the graph $\partial H = \{ {xy} : \exists e \in  H,\{ x, y\}  \subset  e\}$ . The edges of $\partial H$ will be called the subedges of $H$ . As usual, for a graph $G$ and $v \in  V\left( G\right) ,{N}_{G}\left( v\right)$ is the set of neighbors of $v$ in $G$ and ${d}_{G}\left( v\right)  = \left| {{N}_{G}\left( v\right) }\right|$ .

A 3-graph $H$ is $d$ -full if every subedge of $H$ has codegree at least $d$ .

Thus $H$ is $d$ -full if and only if the minimum nonzero codegree in $H$ is at least $d$ . The following lemma from [14] extends the well-known fact that any graph $G$ has a subgraph of minimum degree at least $d$ with at least $\left| G\right|  - \left( {d - 1}\right) \left| {V\left( G\right) }\right|$ edges.

LEMMA 2.1. For $d \geq  1$ , every $n$ -vertex 3-graph $H$ has a $\left( {d + 1}\right)$ -full subgraph $F$ with

$$
\left| F\right|  \geq  \left| H\right|  - d\left| {\partial H}\right| .
$$

Proof. A d-sparse sequence is a maximal sequence ${e}_{1},{e}_{2},\ldots ,{e}_{m} \in  \partial H$ such that ${d}_{H}\left( {e}_{1}\right)  \leq  d$ , and for all $i > 1,{e}_{i}$ is contained in at most $d$ edges of $H$ which contain none of ${e}_{1},{e}_{2},\ldots ,{e}_{i - 1}$ . The 3-graph $F$ obtained by deleting all edges of $H$ containing at least one of the ${e}_{i}$ is $\left( {d + 1}\right)$ -full. Since a $d$ -sparse sequence has length at most $\left| {\partial H}\right|$ , we have $\left| F\right|  \geq  \left| H\right|  - d\left| {\partial H}\right|$ .

3. Proofs of propositions. In this section we deliver the proofs of three propositions.

Proof of Proposition 1.1. The proof of the lower bound in Proposition 1.1 is via a random triple system. The idea is to take a random graph not containing a particular graph $G$ and then observe that the triple system of triangles in the random graph does not contain ${G}^{ + }$ . Consider the random graph on $n$ vertices, whose edges are placed independently with probability $p$ , to be chosen later. If $X$ is the number of triangles and $Y$ is the number of copies of $G$ in the random graph, then

$$
\mathbb{E}\left( X\right)  = {p}^{3}\left( \begin{array}{l} n \\  3 \end{array}\right) ,\;\mathbb{E}\left( Y\right)  \leq  {p}^{f}{n}^{v}.
$$

Therefore choosing $p = {0.1}{n}^{-\left( {v - 3}\right) /\left( {f - 3}\right) }$ , since $f \geq  4$ , we find

$$
\mathbb{E}\left( {X - Y}\right)  \geq  {0.0001}{n}^{3 - 3\left( {v - 3}\right) /\left( {f - 3}\right) }.
$$

Now let $H$ be the triple system of vertex sets of triangles in the graph obtained by removing one edge from each copy of $G$ in the random graph. Then $\mathbb{E}\left( \left| H\right| \right)  \geq$ $\mathbb{E}\left( {X - Y}\right)$ , and ${G}^{ + } ⊄ H$ . Select an $H$ so that $\left| H\right|  \geq  {0.0001}{n}^{3 - 3\left( {v - 3}\right) /\left( {f - 3}\right) }$ . This proves the lower bound in Proposition 1.1 with $a = {0.0001}$ .

Now suppose $G$ is a bipartite graph with $f$ edges ${e}_{1},{e}_{2},\ldots ,{e}_{f}$ and $v$ vertices. If a triple system $H$ on $n$ vertices has more than $\left( {n - 1}\right) {\operatorname{ex}}_{2}\left( {n, G}\right)  + \left( {f + v - 1}\right) \left( \begin{array}{l} n \\  2 \end{array}\right)$ triples, then by deleting at most $\left( {f + v - 1}\right) \left( \begin{array}{l} n \\  2 \end{array}\right)$ triples we arrive at a triple system ${H}^{\prime } \subset  H$ which is $\left( {f + v}\right)$ -full, by Lemma 2.1 and $\left| {H}^{\prime }\right|  > \left( {n - 1}\right) {\operatorname{ex}}_{2}\left( {n, G}\right)$ . There exists $x \in  V\left( {H}^{\prime }\right)$ such that more than ${\operatorname{ex}}_{2}\left( {n, G}\right)$ triples of ${H}^{\prime }$ contain $x$ . So the graph of all pairs $\{ w, y\}$ such that $\{ w, x, y\}  \in  {H}^{\prime }$ contains $G$ . Since every pair $\{ w, y\}$ has codegree at least $f + v$ , we find vertices ${z}_{1},{z}_{2},\ldots ,{z}_{f} \notin  V\left( G\right)$ such that ${e}_{i} \cup  \left\{  {z}_{i}\right\}   \in  {H}^{\prime }$ for all $i = 1,2,\ldots , f$ , and this forms a copy of ${G}^{ + }$ in ${H}^{\prime }$ .

Proof of Proposition 1.2. Let $G$ be a graph of tree-width two. Then $G \subset  F$ , where $F$ is a graph obtained from a triangle by repeatedly adding a new vertex and joining it to two adjacent vertices of the current graph. It is enough to show ${\operatorname{ex}}_{3}\left( {n,{F}^{ + }}\right)  = O\left( {n}^{2}\right)$ . Suppose $F$ has $v$ vertices and $f$ edges. By definition, $F$ has a vertex $x$ of degree two such that the neighbors ${x}^{\prime }$ and ${x}^{\prime \prime }$ of $x$ are adjacent. Then ${F}^{\prime } \mathrel{\text{:=}} F - x$ has $v - 1$ vertices and $f - 2$ edges. Let $H$ be an $n$ -vertex triple system with more than $\left( {v + f - 1}\right) \left( \begin{array}{l} n \\  2 \end{array}\right)$ edges. By Lemma 2.1, $H$ has a $\left( {v + f}\right)$ -full subgraph ${H}^{\prime }$ . We claim ${H}^{\prime }$ contains ${F}^{ + }$ . Inductively, ${H}^{\prime }$ contains a copy ${H}^{\prime \prime }$ of the expansion of ${F}^{\prime }$ . By the definition of ${H}^{\prime },\left\{  {{x}^{\prime },{x}^{\prime \prime }}\right\}$ has codegree at least $v + f$ in ${H}^{\prime }$ . Therefore we may select a new vertex $z$ that is not in ${H}^{\prime \prime }$ such that $\left\{  {z,{x}^{\prime },{x}^{\prime \prime }}\right\}$ is an edge of ${H}^{\prime }$ , and now $F$ is embedded in ${H}^{\prime }$ by mapping $x$ to $z$ .

Proof of Proposition 1.3. Let $G$ be a 3-colorable planar graph with the given conditions. To show ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = \Omega \left( {{ng}\left( {n, k}\right) }\right)$ , form a triple system $H$ on $n$ vertices as follows. Let $F$ be a bipartite $\lfloor \frac{n}{2}\rfloor$ -vertex graph of girth $k + 1$ with at least $\frac{1}{2}g\left( {\lfloor \frac{n}{2}\rfloor , k}\right)$ edges. Let $U$ and $V$ be the partite sets of $F$ . Let $X$ be a set of $\left\lceil  \frac{n}{2}\right\rceil$ vertices disjoint from $U \cup  V$ . Then set $V\left( H\right)  = U \cup  V \cup  X$ and let the edges of $H$ consist of all triples $e \cup  \{ x\}$ such that $e \in  F$ and $x \in  X$ . Then

$$
\left| H\right|  \geq  \left| X\right|  \cdot  g\left( {\left\lfloor  \frac{n}{2}\right\rfloor  , k}\right)  = \Omega \left( {{ng}\left( {n, k}\right) }\right) .
$$

Now $\partial H$ has a natural 3-coloring given by $U, V, X$ . If ${G}^{ + } \subset  H$ , then $G \subset  \partial H$ and therefore $G$ is properly colored, with color classes $V\left( G\right)  \cap  U, V\left( G\right)  \cap  V$ , and $V\left( G\right)  \cap  X$ . By the assumptions on $G, V\left( G\right)  \cap  \left( {U \cup  V}\right)$ induces a subgraph of $G$ which contains a cycle of length at most $k$ . However, that cycle is then a subgraph of $F$ , by the definition of $H$ , which is a contradiction. Therefore ${G}^{ + } ⊄ H$ .

4. Proof of Theorem 1.6. Suppose ${\operatorname{ex}}_{2}\left( {n, G}\right)  = o\left( {n}^{\phi }\right)$ and $\left| G\right|  = k$ , and $H$ is an ${G}^{ + }$ -free 3-graph with $\left| H\right|  \geq  \left( {k + 1}\right) \left( \begin{array}{l} n \\  2 \end{array}\right)$ . By Lemma 2.1, $H$ has a $k$ -full subgraph ${H}_{1}$ with at least ${n}^{2}/3$ edges. If $G \subset  \partial {H}_{1}$ , then we can expand $G$ to ${G}^{ + } \subset  {H}_{1}$ using that ${H}_{1}$ is $k$ -full. Therefore $\left| {\partial {H}_{1}}\right|  \leq  {\operatorname{ex}}_{2}\left( {n, G}\right)  = o\left( {n}^{\phi }\right)$ . By Lemma 2.1, and since $\left| {H}_{1}\right|  \geq  \delta {n}^{2},{H}_{1}$ has a nonempty ${n}^{2 - \phi }$ -full subgraph ${H}_{2}$ if $n$ is large enough. Let ${H}_{3}$ be obtained by removing all isolated vertices of ${H}_{2}$ and let $m = \left| {V\left( {H}_{3}\right) }\right|$ . Since ${H}_{3}$ is ${n}^{2 - \phi }$ -full, $m > {n}^{2 - \phi }$ . Since ${H}_{1}$ is ${G}^{ + }$ -free, ${H}_{3} \subset  {H}_{1}$ is also ${G}^{ + }$ -free, and therefore if $F = \partial {H}_{3}$ , then $\left| {V\left( F\right) }\right|  = \left| {V\left( {H}_{3}\right) }\right|  = m$ and $\left| F\right|  \leq  {\operatorname{ex}}_{2}\left( {m, G}\right)  = o\left( {m}^{\phi }\right)$ . So some vertex $v$ of the graph $F = \partial {H}_{3}$ has degree $o\left( {m}^{\phi  - 1}\right)$ . Now the number of edges of $F$ between the vertices of ${N}_{F}\left( v\right)$ is at least the number of edges of ${H}_{3}$ containing $v$ . Since ${H}_{3}$ is ${n}^{2 - \phi }$ -full, there are at least $\frac{1}{2}{n}^{2 - \phi }\left| {{N}_{F}\left( v\right) }\right|$ such edges. On the other hand, since the subgraph of $F$ induced by ${N}_{F}\left( v\right)$ does not contain $G$ , the number of such edges is $o\left( {\left| {N}_{F}\left( v\right) \right| }^{\phi }\right)$ . It follows that ${n}^{2 - \phi } = o\left( {\left| {N}_{F}\left( v\right) \right| }^{\phi  - 1}\right)$ . Since $\left| {{N}_{F}\left( v\right) }\right|  = o\left( {m}^{\phi  - 1}\right)  = o\left( {n}^{\phi  - 1}\right)$ , we get $2 - \phi  < {\left( \phi  - 1\right) }^{2}$ , contradicting the fact that $\phi$ is the golden ratio.

5. Proof of Theorem 1.4. For the upper bound, we repeat the proof of Theorem 1.6 when $F = {K}_{s, t}$ , using the bounds ${\operatorname{ex}}_{2}\left( {n,{K}_{s, t}}\right)  = O\left( {n}^{2 - 1/s}\right)$ provided by the Kövari-Sós-Turán theorem [15], except at the stage of the proof where we use the bound on ${\operatorname{ex}}_{2}\left( {\left| {{N}_{G}\left( v\right) }\right| , F}\right)$ . We may now use

$$
{\operatorname{ex}}_{2}\left( {\left| {{N}_{G}\left( v\right) }\right| ,{K}_{s - 1, t}}\right)  = O\left( {\left| {N}_{G}\left( v\right) \right| }^{2 - 1/\left( {s - 1}\right) }\right) ,
$$

for if the subgraph of $G$ of edges between ${N}_{G}\left( v\right)$ contains ${K}_{s - 1, t}$ , then by adding $v$ we see $G$ contains ${K}_{s, t}$ . A calculation gives $\left| H\right|  = O\left( {n}^{3 - 3/s}\right)$ .

For the lower bound we must show that ${\operatorname{ex}}_{3}\left( {n,{K}_{s, t}^{ + }}\right)  = \Omega \left( {n}^{3 - 3/s}\right)$ if $t > \left( {s - 1}\right) !$ . We will use the projective norm graphs defined by Alon, Rónyai, and Szabó [2]. Given a finite field ${\mathbb{F}}_{q}$ and an integer $s \geq  2$ , the norm is the map $N : {\mathbb{F}}_{{q}^{s - 1}}^{ * } \rightarrow  {\mathbb{F}}_{q}^{ * }$ given by $N\left( X\right)  = {X}^{1 + q + \cdots  + {q}^{s - 2}}$ . The norm is a (multiplicative) group homomorphism and is the identity map on elements of ${\mathbb{F}}_{q}^{ * }$ . This implies that for each $x \in  {\mathbb{F}}_{q}^{ * }$ , the number of preimages of $x$ is exactly

(5.1)

$$
\frac{{q}^{s - 1} - 1}{q - 1} = 1 + q + \cdots  + {q}^{s - 2}.
$$

Definition 5.1. Let $q$ be a prime power and $s \geq  2$ be an integer. The projective norm graph ${PG}\left( {q, s}\right)$ has vertex set $V = {\mathbb{F}}_{{q}^{s - 1}} \times  {\mathbb{F}}_{q}^{ * }$ and edge set

$$
\{ \left( {A, b}\right) \left( {B, b}\right)  : N\left( {A + B}\right)  = {ab}\} .
$$

LEMMA 5.2. Fix an integer $s \geq  3$ and a prime power $q$ . Let $x \in  {\mathbb{F}}_{q}^{ * }$ , and $A, B \in  {\mathbb{F}}_{{q}^{s - 1}}$ with $A \neq  B$ . Then the number of $C \in  {\mathbb{F}}_{{q}^{s - 1}}$ with

(5.2)

$$
N\left( \frac{A + C}{B + C}\right)  = x
$$

is at least ${q}^{s - 2}$ .

Proof. By (5.1) there exist distinct ${X}_{1},\ldots ,{X}_{{q}^{s - 2} + 1} \in  {\mathbb{F}}_{{q}^{s - 1}}^{ * }$ such that $N\left( {X}_{i}\right)  = x$ for each $i$ . As long as ${X}_{i} \neq  1$ , define

$$
{C}_{i} = \frac{B{X}_{i} - A}{1 - {X}_{i}}.
$$

Then $\left( {A + {C}_{i}}\right) /\left( {B + {C}_{i}}\right)  = {X}_{i}$ , and ${C}_{i} \neq  {C}_{j}$ for $i \neq  j$ since $A \neq  B$ .

LEMMA 5.3. Fix an integer $s \geq  3$ and a prime power $q$ . The number of triangles in ${PG}\left( {q, s}\right)$ is at least $\left( {1 - o\left( 1\right) }\right) {q}^{{3s} - 3}/6$ as $q \rightarrow  \infty$ .

Proof. Pick a vertex(A, a)and then one of its neighbors(B, b). The number of ways to do this is at least ${q}^{s - 1}\left( {q - 1}\right) \left( {{q}^{s - 1} - 1}\right)$ . Let $x = a/b$ and apply Lemma 5.2 to obtain at least ${q}^{s - 2} - 2$ distinct $C \notin  \{  - A, - B\}$ satisfying (5.2). For each such $C$ , define

$$
c = \frac{N\left( {A + C}\right) }{a} = \frac{N\left( {B + C}\right) }{b}.
$$

Then(C, c)is adjacent to both(A, a)and(B, b). Each triangle is counted six times in this way, and the result follows.

For appropriate $n$ the $n$ -vertex norm graphs ${PG}\left( {q, s}\right)$ (for fixed $s$ and large $q$ ) have $\Theta \left( {n}^{2 - 1/s}\right)$ edges and no ${K}_{s, t}$ . By Lemma 5.3 the number of triangles in ${PG}\left( {q, s}\right)$ is $\Theta \left( {n}^{3 - 3/s}\right)$ . The hypergraph $H$ whose edges are the vertex sets of triangles in ${PG}\left( {q, s}\right)$ is a 3-graph with $\Theta \left( {n}^{3 - 3/s}\right)$ edges and no ${K}_{s, t}^{ + }$ . This completes the proof of Theorem 1.4.

6. Proof of Theorems 1.5 and 1.7. We need the following result.

THEOREM 6.1. Let $F$ be a 3-uniform hypergraph with $v$ vertices and ${\operatorname{ex}}_{3}\left( {n, F}\right)  <$ $c\left( \begin{array}{l} n \\  2 \end{array}\right)$ . Then $e{x}_{3}\left( {n,{\left( \partial F\right) }^{ + }}\right)  < \left( {c + v + \left| F\right| }\right) \left( \begin{array}{l} n \\  2 \end{array}\right)$ .

Proof. Suppose we have an $n$ vertex 3-uniform hypergraph $H$ with $\left| H\right|  > (c + v +$ $\left| H\right| )\left( \begin{array}{l} n \\  2 \end{array}\right)$ . Apply Lemma 2.1 to obtain a subhypergraph ${H}^{\prime } \subset  H$ that is $\left( {v + \left| F\right| }\right)$ -full with $\left| {H}^{\prime }\right|  > c\left( \begin{array}{l} n \\  2 \end{array}\right)$ . By definition, we may find a copy of $F \subset  {H}^{\prime }$ and hence a copy of $\partial F \subset  \partial {H}^{\prime }$ . Because ${H}^{\prime }$ is $\left( {v + \left| F\right| }\right)$ -full, we may expand this copy of $\partial F$ to a copy of ${\left( \partial F\right) }^{ + } \subset  {H}^{\prime } \subset  H$ as desired.

Define ${H}_{t}$ to be the 3-uniform hypergraph with vertex set $\left\{  {a, b,{x}_{1},{y}_{1},\ldots ,{x}_{t},{y}_{t}}\right\}$ and ${2t}$ edges ${x}_{i}{y}_{i}a$ and ${x}_{i}{y}_{i}b$ for all $i \in  \left\lbrack  t\right\rbrack$ . It is convenient (though not necessary) for us to use the following theorem of the authors [17].

THEOREM 6.2 (see [17]). For each $t \geq  2$ , we have ${\operatorname{ex}}_{3}\left( {n,{H}_{t}}\right)  < {t}^{4}\left( \begin{array}{l} n \\  2 \end{array}\right)$ .

Now we prove the upper bound in Theorem 1.7. Suppose $\sigma \left( {G}^{ + }\right)  \leq  3$ . This means that $G$ has an independent set $I$ and set $R$ of edges such that $I$ intersects each edge in $G - R$ , and $\left| I\right|  + \left| R\right|  \leq  3$ . It follows that $G$ is a subgraph of one of the following graphs (cases (i) and (ii) correspond to $\left| I\right|  = 1$ , case (iii) corresponds to $\left| I\right|  = 2$ , and case (iv) corresponds to $\left| I\right|  = 3$ ):

(i) ${K}_{4} - e$ together with a star centered at one of the degree 3 (in ${K}_{4} - e$ ) vertices;

(ii) two triangles sharing a vertex $x$ and a star centered at $x$ ;

(iii) the graph obtained from ${K}_{2, t}$ by adding an edge joining two vertices in the part of size $t$ ;

(iv) ${K}_{3, t}$ .

Now suppose we have a 3-uniform $H$ with $\left| H\right|  > c{n}^{2}$ for some $c > \left| G\right|  + \left| {V\left( G\right) }\right|$ . Applying Lemma 2.1, we find a $c$ -full ${H}^{\prime } \subset  H$ with $\left| {H}^{\prime }\right|  > c\left( \begin{array}{l} n \\  2 \end{array}\right)$ . As in the proof of Theorem 6.1, it is enough to find $G$ in $\partial {H}^{\prime }$ . Since $\left| {H}^{\prime }\right|  > c\left( \begin{array}{l} n \\  2 \end{array}\right)$ , the codegree of some pair $\{ x, y\}$ is at least $c + 1$ . Then the shadow of the set of triples in ${H}^{\prime }$ containing $\{ x, y\}$ contains the graph of the form (i). Similarly, ${H}^{\prime }$ contains two edges sharing exactly one vertex, say $x$ , and the shadow of the set of triples in ${H}^{\prime }$ containing $x$ contains the graph of the form (ii). If $G$ is of the form in (iii), we apply Theorems 6.1 and 6.2 and observe that $\partial {H}_{t} \supset  G$ . Finally, if $G \subseteq  {K}_{3, t}$ then we apply Theorem 1.4.

For the lower bound in Theorem 1.5, we use a slight modification of the construction in Theorem 1.4. Set $s = 3$ and let $r \mid  q - 1$ . Let ${Q}_{r}$ denote a subgroup of ${\mathbb{F}}_{q}^{ * }$ of order $r$ . Define the graph $H = {H}_{r}\left( q\right)$ with $V\left( H\right)  = {\mathbb{F}}_{{q}^{2}} \times  {\mathbb{F}}_{q}^{ * }/{Q}_{r}$ , and two vertices $\left( {A, a{Q}_{r}}\right)$ and $\left( {B, b{Q}_{r}}\right)$ are adjacent in $H$ if $N\left( {A + B}\right)  \in  {ab}{Q}_{r}$ . Then $H$ has $n = \left( {{q}^{3} - {q}^{2}}\right) /r$ vertices and each vertex has degree ${q}^{2} - 1$ . It also follows from [2] that $H$ has no ${K}_{3, t}$ , where $t = 2{r}^{2} + 1$ . Now we construct a 3-uniform hypergraph ${H}^{\prime }$ with $V\left( {H}^{\prime }\right)  = V\left( H\right)$ and whose edges are the triangles of $H$ . We must count the number of triangles in $H$ to determine $\left| {H}^{\prime }\right|$ . For every choice of $\left( {A, a}\right) ,\left( {B, b}\right)$ in ${\mathbb{F}}_{{q}^{2}} \times  {\mathbb{F}}_{q}^{ * }$ , the number of $\left( {C, c}\right)  \in  {\mathbb{F}}_{{q}^{2}} \times  {\mathbb{F}}_{q}^{ * }$ with $C \neq  A, B, N\left( {A + C}\right)  = {ac}$ and $N\left( {B + C}\right)  = {bc}$ is at least $q - 2$ by (the proof of) Lemma 5.3. Consequently, the number of(C, c)such that $N\left( {A + C}\right)  \in  {ac}{Q}_{r}$ and $N\left( {B + C}\right)  \in  {bc}{Q}_{r}$ is at least ${r}^{2}\left( {q - 2}\right)$ . Since(C, c)satisfies these equations if and only if(C, cq)satisfies these equations for all $q \in  {Q}_{r}$ (i.e., the solutions come in equivalence classes of size $r$ ), the number of common neighbors of $\left( {A, a{Q}_{r}}\right)$ and $\left( {B, b{Q}_{r}}\right)$ is at least $r\left( {q - 2}\right)$ . The number of edges in $H$ is at least $\left( {1 - o\left( 1\right) }\right) {q}^{5}/{2r}$ , so the number of triangles in $H$ is at least $\left( {1 - o\left( 1\right) }\right) {q}^{6}/6 = \left( {1 - o\left( 1\right) }\right) \left( {{r}^{2}/6}\right) {n}^{2}.$

7. Concluding remarks. In this paper we studied ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ , where $G$ is a 3- colorable graph. If $G$ has tree-width two, then we believe ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  \sim  \left( {\sigma \left( {G}^{ + }\right)  - 1}\right) \left( \begin{array}{l} n \\  2 \end{array}\right)$ (Question 3), and if a planar graph $G$ has an acyclic 3-coloring, then we believe ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ (Question 1). In fact, we also do not know any nonplanar acyclically 3-colorable graph $G$ with superquadratic ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ . We are also not able to prove or disprove ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ when $G$ is an even wheel (Question 2). This is equivalent to showing that if $F$ is an $n$ -vertex graph with a superquadratic number of triangles, then $F$ contains every even wheel with a bounded number of vertices.

A number of examples of 3-colorable $G$ with superquadratic ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ were given. In particular we determined the order of magnitude of ${\operatorname{ex}}_{3}\left( {n,{K}_{s, t}^{ + }}\right)$ when near-extremal constructions of ${K}_{s, t}$ -free bipartite graphs are known. One may ask for the asymptotic behavior of ${\operatorname{ex}}_{3}\left( {n,{K}_{3, t}^{ + }}\right)$ for each $t \geq  3$ , since in that case we have shown ${\operatorname{ex}}_{3}\left( {n,{K}_{3, t}^{ + }}\right)  = \Theta \left( {n}^{2}\right)$ . Finally, we gave a general upper bound on ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ when $G$ is a bipartite graph and showed that if $G$ has Turán number much smaller than ${n}^{\varphi }$ , where $\varphi$ is the golden ratio, then ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)  = O\left( {n}^{2}\right)$ . Determining exactly when ${\operatorname{ex}}_{3}\left( {n,{G}^{ + }}\right)$ is quadratic in $n$ remains an open problem for further research.

Acknowledgment. We thank the referees for helpful comments.

## REFERENCES

[1] N. Alon, M. Krivelevich, and B. Sudakov, Turán numbers of bipartite graphs and related Ramsey-type questions, Combin. Probab. Comput., 12 (2003), pp. 477-494.

2] N. Alon, L. Rónyal, And T. Szabó, Norm-graphs: Variations and applications, J. Combin. Theory Ser. B, 76 (1999), pp. 280-290.

[3] N. Alon and C. Shikhelman, Triangles in H-free Graphs, preprint, http://arxiv.org/abs/ 1409.4192, 2014.

[4] B. Brown, On graphs that do not contain a Thomsen graph, Canad. Math. Bull., 9 (1966), pp. 281-285.

[5] R. Csáкány and J. Kahn, A homological approach to two problems on finite sets, J. Algebraic Combin., 9 (1999), pp. 141-149.

[6] P. ERDôS, Extremal problems in graph theory, in Theory of Graphs and Its Applications, M. Fiedler, ed., Academic Press, New York, 1965, pp. 29-36.

[7] P. ERDós, C. Ko, And R. RADo, Intersection theorems for systems of finite sets, Q. J. Math., 12 (1961), pp. 313-320.

[8] P. Frankl, On families of finite sets no two of which intersect in a singleton, Bull. Austral. Math. Soc., 17 (1977), pp. 125-134.

[9] P. Frankl and Z. Füredi, Exact solution of some Turán-type problems, J. Combin. Theory Ser. A, 45 (1987), pp. 226-262.

[10] Z. Füredi, Linear trees in uniform hypergraphs, European J. Combin., 35 (2014), pp. 264-272.

[11] Z. FÜREDI AND T. JIANG, Hypergraph Turán Numbers of Linear Cycles, preprint, http://arxiv.org/abs/1302.2387, 2013.

[12] Z. Füredi, T. Jiang, and R. Seiver, Exact solution of the hypergraph Turán problem for k-uniform linear paths, Combinatorica, 34 (2014), pp. 299-322.

13] A. Kostochka, D. Mubayi, and J. Verstraëte, Turán problems and shadows I: Paths and cycles, J. Combin. Theory Ser. A, 129 (2015), pp. 57-79.

[14] A. Kostochka, D. Mubayi, and J. Verstraëte, Turán problems and shadows II: Trees, submitted.

[15] T. Kövari, V. T. Sós, and P. Turán, On a problem of K. Zarankiewicz, Colloq. Math., 3 (1954), pp. 50-57.

[16] D. Mubayı, A hypergraph extension of Turán's theorem, J. Combin. Theory Ser. B, 96 (2006), pp. 122-134.

[17] D. Mubayı and J. Verstraëte, A hypergraph extension of the Bipartite Turán problem, J. Combin. Theory Ser. A, 106 (2004), pp. 237-253.

[18] D. Mubayi and J. Verstraëte, Proof of a conjecture of Erdős on triangles in set-systems, Combinatorica, 25 (2005), pp. 599-614.

[19] O. PıKHURKO, Exact computation of the hypergraph Turán function for expanded complete 2-graphs, J. Combin. Theory Ser. B, 103 (2013), pp. 220-225.