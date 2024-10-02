# The Axiom of Union




## The dependency of the axiom of union in MK





### Some Lemmas for proving the axiom of union

#### Lemma: supremums of ordinal numbers

Let 

#### Lemma: relational choice (AGC)

Let $X$ and $Y$ be classes, and let $R \subseteq X \times Y$ be a relation. Then, there is a function $f$ mapping from $\mathrm{Dom}(R)$ to $Y$.

**Proof.** By the axiom of global choice, there is a function $c: R[X] \to \bigcup R[X]$ such that $c(x) \in x$ for any $x \in R[X]$.

$\blacksquare$

### A proof of the axiom of union via the axiom of choice and the axiom of replacement

For any set $x$, let $f_x : x \to H(x)$ be an injection.

Let $X$ be a set, and let $U = \bigcup X$. Let $Y = \sup \{ H(x) \mid x \in H \}$. (Note that $Y$ is an ordinal number.) 

Let $x \in X$ and $t \in x$. We have $f_x(t) \in H(x)$. Since the ordinal numbers are transitive, $H(x) \in Y$ implies $H(x) \subseteq Y$. Thus, $f_x(t) \in Y$. By universal quantification, this holds for all $x \in X$ and $t \in x$. Thus, let
$$
g := \left\{ \left( \underline{(x,t)}, \underline{(f_X(x), f_x(t))} \right) \mid x \in X \land t \in x \right\},
$$
then $g$ is a function which is a subclass of $(X \times U) \times (H(X) \times Y)$. Since, for any $x \in X$, $f_X$ and $f_x$ are both injective, $g$ is injective. $\Box$

Let $h \subseteq (X \times U) \times U$ be a projection, i.e.,
$$
h := \left\{ ((x,t),t) \mid x \in X \land t \in U \right\}
$$
$h$ is surjective, because, for any $t \in U$, there exists at least one $x \in X$ such that $t \in x$. Thus, let $\varphi \subseteq h^{-1}$ be an injection mapping from $U$ to $X \times U$.

Now, we have $g \circ \varphi$ being an function mapping from $U$ to $H(X) \times Y$. Since $g$ and $\varphi$ are both injective, so is $g \circ \varphi$. Thus, we have
$$
U = (g \circ \varphi)^{-1}[H(X) \times Y]
$$

Since $H(X) \times Y$ is a set, by the axiom of replacement, the image $U$ is a set.

$\blacksquare$

## Formulations without the Axiom of Union



