# Morse-Kelly Set Theory

## The primitive notions

The primitive notions in **Morse-Kelly set theory** (MK) are “**class**” and “**membership**”. These primitive notions are denoted by the monadic predicate $\mathfrak{Cls}$ and the dyadic predicate $\in$. The notation $\mathfrak{Cls}(x)$ means “$x$ is a class,” and $x \in y$ means “$x$ is an element (member) of $y$” or “$x$ belongs to $y$.” Since MK is a first-order axiomatization (with equality), $x = y$, $x \in y$ and $\mathfrak{Cls} (x)$ are the atomic formulas in the language of MK.

An important, though usually omitted, axiom is

$$
\forall x\; \mathfrak{Cls}(x).
$$

That is, everything is a class. Since every variable is a class in this context, if $\phi$ is an MK formula, we can simply write $\forall x \; \phi$ instead of $\forall x \; (\mathfrak{Cls}(x) \Rightarrow \phi)$ and write $\exists x \; \phi$ instead of $\exists x\; (\mathfrak{Cls}(x) \land \phi)$.

Some authors consider the MK set theory to be a two-sorted system, where both “set” and “class” are primitive notions. This is a reasonable perspective under certain choices of axioms. However, based on the axioms discussed in this article, the notion of "sets" is rendered redundant since it is definable.

## Sets and proper classes

In Morse-Kelly set theory, we define the monadic formula $\mathfrak{M}$ as
$$
\mathfrak{M}(x) \iff \exists y\; (x \in y).
$$
It is interpreted as “$x$ is an element.” or “$x$ is a set.” It is important to note that the concept of sets is not hereby defined, since $\mathfrak{M}$ is not a part of the formal language of MK but rather a metalinguistic construct used for discussing the formal system. Thus, $\exists x \; \mathfrak{M}(x)$ is neither derivable nor refutable without necessary axioms.

The existence of sets is solely derived from the axiom of infinity (see below), where $\exists x\; \mathfrak{M}(x)$ is a syntactical consequence of the axiom. Thus, the definition of sets is derived: a class $x$ is a **set** if and only if $\mathfrak{M}(x)$. On the other hand, the existence of sets is irrelevant to any other axioms by the property of implication.

A class $x$ is a **proper class** if and only if it is not a set. The existence of proper classes is revealed by Russell’s paradox together with the axiom schema of class comprehension (see below).



## Axioms

**The axiom of extensionality.** Two classes are the same class if they consist of exactly the same element. In symbols:
$$
\forall X\; \forall Y\; (\forall z \; (z \in X \Leftrightarrow z \in Y) \implies X = Y).
$$

<hr>

**The axiom schema of class comprehension.** Let $\phi$ be a monadic formula in the language of MK. Then,
$$
\exists X\; \forall x\; (x \in X \iff (\phi(x) \land \mathfrak{M}(x))).
$$

where $\mathfrak{M}(x)$ abbreviates $\exists y\; (x \in y)$.

<hr>

**The axiom of foundation.** Every non-empty class $X$ contains an element $y$ such that $X$ and $y$ are disjoint. In symbols:

$$
\forall X\; (\exists x \; (x \in X) \Rightarrow \exists y\; (y \in X \land \forall z\; (z \notin x \lor z \notin y))).
$$

<hr>

**The axiom of paring.** If $x$ and $y$ are sets, then there is a set $p = \{x,y\}$. In symbols:
$$
(\mathfrak{M}(x) \land \mathfrak{M}(y)) \Rightarrow \exists p \; \forall z\; (z \in p \Leftrightarrow (z = x \lor z = y)).
$$

<hr>

**The axiom of power set.** If $x$ is a set, then there is a set $P$ consists of all subclasses of $x$. In symbols:
$$
\mathfrak{M}(x) \Rightarrow \exists P \; (\forall y\; (y \in P \Rightarrow y \subseteq x ) \land \mathfrak{M}(P))
$$

<hr>

**The axiom of infinity.** There exists a class $I$ such that
1. $\mathfrak{M}(I)$, and
2. $\exists e\; (\forall x\; (x \notin e) \land e \in I )$, and
3. $\forall x\; (x \in I \Rightarrow \exists y\; (y = x^+ \land y \in I))$, where $x^+ = x \cup \{x\}$.

<hr>

**The axiom of replacement.** Given a class $X$ and a function $f : X \to \mathscr U$, if $X$ is a set, then every $Y \subseteq f[X]$ is a set.

<hr>

**The axiom of global choice.** For any class $C$, there exists a function $f: C \to \bigcup C$ such that $f(x) \in x$ for any $x \in C$.

