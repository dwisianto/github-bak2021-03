
# Ontology

- [Overview](#overview)
- [Tutorial](#tutorial)
- [Web Resource](#web-resource)
- [Terminology](#terminology)
- [Tools](#tools)
- [Tutorial 101](#tutorial-101)

## Overview

## Tutorial 

- [SPARQL](https://www.youtube.com/watch?v=FvGndkpa4K0)
- [Simple Protege Tutorial](https://www.youtube.com/watch?v=R9ERlUgvgwM&list=PLea0WJq13cnAfCC0azrCyquCN_tPelJN1)

## Web Resource

- 

## Terminology

- SWRL : Semantic Web Rule Language
- VOWL :
- Web Ontology Language
-  

## Tools

- [protoge](https://protege.stanford.edu/)
    - [pp.gh.io](http://protegeproject.github.io/protege/getting-started/)
- apache jena fuseki
- TopBraid
-  

## Tutorial 101

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
    - Remember we have two modules, i.e.,  **Lecturer** - **Teaches** - **Module** and **Student** - **Studies** - **Module**
    - Create the property **teaches**
        - add the domain ""
        - add the range "module"
    - Create the property **studies** 
        - add the domain as 
        - add the range as 
- Select the tab **Protege>DataProperties**, which describes the relationship between the instance and data value
    - The topDataProperty is the top level dataProperty  
    - Create a sub property is called "first_name"
        - domain : person
        - value : string
    - Create a sub property is called "last_name"
        - domain : person
        - value : string
    - Create a sub property "staffID"
        - range :
        - applies only to staff     
    - Create a sub property "studentID"
        - range :
        - applies only to student              
- Select the tab **Protege>Individuals**, create individuals and specify the type
   -
- Query the using Jena/Fuseki server
   - Download 
   -   
- Query it using SPARQL
-       

   
## Tutorial 102


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
