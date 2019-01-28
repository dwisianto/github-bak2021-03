
# Ontology

- [Overview](#overview)
- [Tutorial](#tutorial)
- [Web Resource](#web-resource)
- [Terminology](#terminology)
- [Tools](#tools)
- [Tutorial 101](#tutorial-101)

## Overview

## Tutorial 

- [co-ode](http://owl.cs.manchester.ac.uk/research/co-ode/)
    - [Protege Tutorial](http://mowl-power.cs.man.ac.uk/protegeowltutorial/resources/ProtegeOWLTutorialP4_v1_3.pdf)
- [Simple Protege Tutorial](https://www.youtube.com/watch?v=R9ERlUgvgwM&list=PLea0WJq13cnAfCC0azrCyquCN_tPelJN1)
- [SPARQL](https://www.youtube.com/watch?v=FvGndkpa4K0)


## Web Resource

- 

## Terminology

- Jena : Apache Jena is a free and open source Java framework for building Semantic Web and Linked Data applications
- Fuseki : It provides REST-style interaction with RDF data
- RDF  : 
- RDFS :
- SWRL : Semantic Web Rule Language
- Turtle :   
- TDB : a native high performance triple store
- VOWL :
- Web Ontology Language (OWL) : 


## Tools

- [protoge](https://protege.stanford.edu/)
    - [Getting Started](http://protegeproject.github.io/protege/getting-started/)
    - [Wiki](https://protegewiki.stanford.edu/wiki/Main_Page)
- [Jena](https://jena.apache.org/index.html)
    - Fuseki
- TopBraid


## Tutorial 101

- 

## Tutorial 102

- [Simple Protege Tutorial](https://www.youtube.com/watch?v=R9ERlUgvgwM)
- An ontology editor [protoge](https://protege.stanford.edu/). 
    - A web version of an ontology editor [webontology](https://webprotege.stanford.edu/) is available
    - In MacOs, one may use "brew cask install protege". 
- ProtegeTab
    - ActiveOntology :     
    - Entities :
    - Classes : 
	- Object Properties : 
	- Data Properties : 
	- Individual : 
	- Annotation Properties : 
	- OWLViz : 
	- DL Query : 
	- OntoGraf : 
- Simple Ontology : 
    - The **Person** class has **Lecturer** and **Student** subclasses 
    - The **Module** class has **MathModule** and **CSModule** subclasses
    - The domain for the property **Studies** is **Student**, and its range is **Module**. In other words, **Lecturer** - **Teaches** - **Module** 
    - The domain for the property **Teaches** is **Lecturer**, and its range is **Module**. In other words, **Student** - **Studies** - **Module**
- Starts from **Protege>ActiveOntology**
    - enter the name space Namespace	
    - A sample of the namespace could be "http://localhost:8080/myDataset"
    - Another example is http://people/university.owl
- Select the tab **Protege>Classes**, and enter the name of the classes
    - The subclasses of the **Person** class are **Lecturer** and **Student**.
    - The subclasses of the **Module** class are **MathModule** and **CSModule**.
    - Select **Lecturer** class, select "disjoint with", select **MathModule**, **CSModule**, **Student**
    - Select **Student** class, select "disjoint with", select **MathModule**, **CSModule**, **Lecturer**
    - Select **MathModule** class, select "disjoint with", select **MathModule**, **CSModule**, **Student**
    - Select **CSModule** class, select "disjoint with", select **MathModule**, **CSModule**, **Student**
    - Click File>Save with the format "RDF/XML"
- Select the tab **Protege>ObjectProperties**, which describes the relationship between two instances or two individuals of classes.
    - Every object property is a child of the topObjectProperty
    - Remember we have two modules, i.e.,  **Lecturer** - **Teaches** - **Module** and **Student** - **Studies** - **Module**
    - Create the property **teaches**
        - add the "domains" as "ClassHierarchy>Lecturer"
        - add the "ranges" as "ClassHierarchy>module"
    - Create the property **studies** 
        - add the "domain"s as "ClassHierarchy>Student"
        - add the "ranges" as "ClassHierarchy>module"
- Select the tab **Protege>DataProperties**, which describes the relationship between the instance and data value
    - The topDataProperty is the top level dataProperty  
    - Create a sub property is called "first_name"
        - add the "domain" : person
        - add the value : string
    - Create a sub property is called "last_name"
        - add the domain : person
        - add the value : string
    - Create a sub property "staff_id"
        - add the domain : Lecturer
        - add range : integer        
    - Create a sub property "student_id"
        - add the domain : student              
        - range : integer        
- Select the tab **Protege>Individuals**, create individuals and specify the type
   -
- Query the using Jena/Fuseki server
   - Download 
   -   
- Query it using SPARQL
-       

   
## Tutorial 103


- [Protege4](https://www.youtube.com/watch?v=MbauHV2-XYw&list=PLD8uCWff9n-EG4KK2OAiPRSCPgNJXf49j)
    - How to create Classes and Properties
    - How to define property types and axioms
    - How to define class axioms
    - How to define classes as property restriction
    - How to add individual
- How to create **Classes** and **Properties**
- How to define property types and axioms


## Tutorial 201

- [RDFS reasoning in Protege](https://www.youtube.com/watch?v=GyAnOS7SwYE)
- 

- https://www.youtube.com/watch?v=GyAnOS7SwYE


# Web Ontology Language

## What are OWL Ontologies?

Ontologies are used to capture knowledge about some domain of interest.   
An ontology describes the concepts in the domain and also the relationships that hold between those concepts.  

Different ontology languages  provide  different  facilities.   
The  most  recent  development  in  standard  ontology  languages  is OWL from the World Wide Web Consortium (W3C)[^1].


Like Protege (@horridge2009practical), 
OWL makes it possible to describe concepts but it also provides new facilities.  
It has a richer set of operators - e.g.  intersection, union and negation.  
It is based on a different logical model which makes it possible for concepts to be defined as well as described.   

Complex concepts can therefore be built up in  definitions  out  of  simpler concepts.
Furthermore, the logical model allows the use of a reasoner which can check whether or not all of the statements and definitions in the ontology are mutually consistent and can also recognise which concepts fit under which definitions. 
The reasoner can therefore help to maintain the hierarchy correctly.  
This is particularly useful when dealing with cases where classes can have more than one parent.

[^1]: http://www.w3.org/TR/owl-guide/

## Components of OWL Ontologies

OWL ontologies have similar components to Protege frame based ontologies.  
However, the terminology used to describe these components is slightly different from that used in Protege.   
An  OWL  ontology consists of **Individuals**, **Properties**, and **Classes**, which roughly correspond to Protege frames **Instances**, **Slots** and **Classes**.

| OWL ontology | Protege frames | 
|-|-|
| Individuals |  Instances | 
| Properties  | Slots |
| Classes |  Classes | 

### Individuals

Individuals, represent objects in the domain in which we are interested (Also known as the _domain of discourse_). 
An important difference between Protege and OWL is that OWL does not use the Unique Name Assumption (UNA). 
This means that two different names could actually refer to the same individual.  
For example, "Queen Elizabeth", "The Queen" and "Elizabeth Windsor" might all refer to the same individual.  
In OWL, it must be explicitly stated that individuals are the same as each other, or different to each other — otherwise 
they might be the same as each other, or they might be different to each other.

```bash
Individuals are also known as instances.  Individuals can be referred to as being ‘instances of classes’.
```
    
### Properties

Properties are binary relations on individuals - i.e. properties link two individuals together.   
For example, the property **hasSibling** might link the individual **Matthew** to the individual **Gemma**, 
or the property **hasChild** might link the individual **Peter** to the individual **Matthew**. 

Properties can have inverses.
For example, the inverse of **hasOwner** is **isOwnedBy**.  
Properties can be limited to having a single value – i.e.  to being functional.  
They can also be either **transitive** or **symmetric**.  
These ‘property characteristics’ are explained in detail in Section 4.8.  
Figure 3.2 shows a representation of some properties linking some individuals together. 

### Classes


OWL classes are interpreted as sets that contain individuals.  
They are described using formal (mathematical) descriptions that state precisely the requirements for membership of the class.  
For example, the class **Cat** would contain all the individuals that are cats in our domain of interest. [^5]

Classes may be organised into a superclass-subclass hierarchy, which is also known as a taxonomy.  
Subclasses specialise (‘are subsumed by’) their superclasses.  
For example consider the classes Animal and Cat –
Cat might be a subclass of Animal
(so Animal is the superclass of Cat).  
This says that, ‘All cats are animals’, ‘All members of the class Cat are members of the class Animal’, 
‘Being a Cat implies that you’re an Animal’,and ‘Cat is subsumed by Animal’.  
One of the key features of OWL-DL is that these superclass-subclass
relationships (subsumption relationships) can be computed automatically by a reasoner – more on this later.  

Figure 3.3 shows a representation of some classes containing individuals – classes are represented
as circles or ovals, rather like sets in Venn diagrams.

> The word concept is sometimes used in place of class. Classes are a concrete representation of concepts.

[^5]: Individuals may belong to more than one class


# Protege


## Named Classes
## Disjoint Classes
## Class Hierarchy
## OWL Properties

- An object property linking the individual Matthew to the individual Gemma
- A datatype property linking the individual Matthew to the data literal '25', which has a type of xsd:integer
- An annotation property linking the class 'JetEngine' to the data literal (string) "Matthew Horridge"

### Object Property
### Datatype property

### Annotation Property



