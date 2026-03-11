# Developer Study Questions

------------------------------------------------------------------------

# Core Java

-   What is Java and why is it used?
-   What are JVM, JRE, and JDK?
-   How do you compile and execute a Java program?
-   What are Java primitive data types?
-   What are annotations?
-   What is a POJO? What is a Java Bean?
-   What are Java access modifiers?
-   What is the difference between static and final?
-   What is the main method signature?
-   What is a wrapper class?
-   What is autoboxing and unboxing?
-   Where are Strings stored in memory?
-   What is the difference between String, StringBuilder, and StringBuffer?
-   What are enums?
-   Explain stack vs heap.
-   What are the four pillars of object-oriented programming?
-   What is method overloading vs overriding?
-   What is the difference between extends and implements?
-   What is the difference between an abstract class and an interface?
-   What are the implicit modifiers of an interface method and variables?
-   What is the Object class?
-   What is the difference between == and equals()?
-   What are collections in Java?
-   What collections exist in Java?
-   What is the difference between a List and a Set?
-   What is the difference between an Array and an ArrayList?
-   What are generics? What is the diamond operator (`<>`)?
-   What is JUnit?
-   What is Test Driven Development (TDD)?
-   When writing a unit test, what is the order of the following: "Act", "Assert", "Arrange". Explain these terms
-   What is base class of all exceptions? What interface do they all implement?
-   What is the difference between checked and unchecked exceptions?
-   What are the different ways of handling checked exceptions?
-   What is try-with-resources? What interface must the resource implement to use this feature?
-   How would you create a custom exception?
-   What are the differences between `throw` vs `throws` vs `Throwable`?
-   What is the difference between HashTable and HashMap?
-   What is Maven?
-   What is the POM and what is the pom.xml?
-   What is the default Maven build lifecycle?
-   What is multi-threading?
-   In what ways can you create a thread?
-   What is the lifecycle of a thread?
-   What are some problems you may encounter when using threads?
-   What is the Reflection API?
-   What are functional interfaces?
-   What is a Lambda? and why are they useful?


------------------------------------------------------------------------

# SQL

-   What does the SQL acronym stand for? What are some SQL databases?
-   How is data structured in a relational database?
-   Define the concept of schema.
-   What is an ERD? How is it useful?
-   What are the different multiplicity (cardinality) relationships? How would you create these relations?
-   What is normalization? What are the levels?
-   What are the sublanguages of SQL? List some commands for each.
-   What is the difference between scalar and aggregate functions? Give examples of each.
-   How is WHERE different from HAVING in SQL?
-   What are the different types of keys? How are they made? What are they used for?
-   What are the integrity constraints used in relational databases?
-   What is the difference between `DELETE`, `DROP`, and `TRUNCATE` commands?
-   Explain the concept of referential integrity
-   Explain what the ORDER BY and GROUP BY clauses do
-   What is the difference between joins and set operators?
-   What are the types of joins? Explain the differences.
-   What are the properties a transaction must follow?
-   What is a transaction within a relational database?
-   Explain the different isolation levels. What read phenomena do each prevent?


------------------------------------------------------------------------

# JDBC

-   What is JDBC?
-   What is a Data Access Object (DAO)?
-   What interfaces and classes are used with JDBC?
-   What is included in the Connection interface?
-   What is the difference between execute() and executeUpdate()?
-   What is included in the ResultSet interface?
-   What is the differences between Statement and PreparedStatement?
-   What is SQL Injection? and how do you prevent it?
-   What are the steps to executing an SQL query using JDBC?
-   What are the steps to extract and manipulate data retrieved from a ResultSet?

------------------------------------------------------------------------

# Git Fundamentals

-   What is version control?
-   What makes Git different from other version control systems?
-   What is the difference between Git and GitHub?
-   What is a commit?
-   What is the typical Git workflow for contributing code?
-   Explain the git workflow for contributing code to a central repository?
-   What does the command `git init` do
-   How would you prevent a file from being tracked by git

------------------------------------------------------------------------

# Agile for Developers

-   What are the steps in the software development lifecycle?
-   What is the difference between Waterfall and Agile methodologies?
-   What are the benefits of an Agile development process?
-   What is the Scrum process?
-   Please describe the following Agile frameworks: XP (Extreme Programming), Scrum and Kanban
-   What are different Scrum ceremonies?
-   What is a user story?
-   Explain the differences between a Product Backlog and a Sprint Backlog
-   What is the role of a Scrum Master?
-   What is a Product Owner?
-   What does "Definition of Done" mean?

------------------------------------------------------------------------

# Data Structures & Algorithms

-   Explain time-space complexity using Big O notation.
-   Describe trade-offs between arrays and linked lists.
-   Explain recursion and its trade-offs.
-   How would you efficiently find duplicates in an array?

------------------------------------------------------------------------

# REST

-   What is a "REST"ful API?
-   Describe the process to complete an HTTP request.
-   What is the difference between the different HTTP methods/verbs? Which of these are idempotent?
-   What are the levels of status codes that can be sent in a response?
-   What is included in an HTTP Request?
-   What is included in an HTTP Response?
-   What are the 6 constraints of a RESTful API? Explain them.
-   Explain the difference between Authorization and Authentication, and give an example of why this distinction is important.

------------------------------------------------------------------------

# Spring Core

-   What are Spring Projects and Spring Modules?
-   What are the benefits of Spring?
-   What is IOC and what does the IOC Container do?
-   What is dependency injection?
-   What types of dependency injection does Spring support?
-   What is bean wiring? What about autowiring?
-   What is component scanning?
-   What is the Spring Bean lifecycle?
-   What are lifecycle hooks in a Spring bean?
-   What are bean scopes in Spring?
-   What are Sterotype annotations? List some stereotype annotations and their differences.
-   What are some differences between BeanFactory and ApplicationContext? Which one eagerly instantiates your beans?
-   What is the Spring Java Configuration class and how to implement it


------------------------------------------------------------------------

# Spring Boot

-   How does Boot's autoconfiguration work?
-   What are the benefits and features of using Spring Boot?
-   What files configure Spring Boot applications?
-   What is Spring Initializr and how do you use it?
-   What are common Spring Boot Starters?
-   How is Spring Boot different from legacy Spring applications?
-   What is the Spring Boot actuator? What information can it give you?
-   How do you use DevTools in a Spring project?
-   How do you use Lombok in a Spring project?

------------------------------------------------------------------------

# Spring Web

-   Explain the MVC architecture and how HTTP requests are processed in Spring MVC.
-   What concerns is the controller layer supposed to handle vs the service layer?
-   What is the difference between @Controller and @RestController?
-   How would you extract query and path parameters from a request URL in your controller?
-   How would you specify HTTP status codes to return from your controller?
-   How do you insert status codes, headers, and cookies into HTTP responses?
-   How do you handle exceptions thrown in your code from your controller? What happens if you don't set up any exception handling?
-   Explain the MVC design pattern, and how it differs from modern Spring web development

------------------------------------------------------------------------

# Spring Data JPA

-   What is @Query used for?
-   What annotations or techniques allow writing more complex queries in Spring Data JPA?
-   What is JPQL?
-   What is Spring ORM and Spring Data?
-   What annotations can be used to prevent circular references during JSON serialization in Spring Data?
-   What is the difference between eager and lazy loading in Spring Data
    JPA?
-   What is a database transaction, and how do you control transaction
    behavior in Spring?
-   What is an Entity in Spring Data JPA, and how do you define one?
-   What are derived query methods in Spring Data?
-   What does `@Transactional` do?

------------------------------------------------------------------------

# HTML-CSS

-   What is HTML?
-   What is the structure of an HTML document?
-   How do you add an external CSS stylesheet?
-   What is the difference between ordered and unordered lists?
-   Write HTML markup for a table.
-   What is an inline element?
-   What is a block element?
-   What is CSS?
-   Describe the CSS box model.
-   What determines CSS priority when styles cascade?
-   What is the syntax for styling elements, classes, and ids?
-   What is Flexbox?
-   What is CSS Grid?

------------------------------------------------------------------------

# JavaScript

-   What is JavaScript?
-   What are the different scopes of variables in JavaScript?
-   What is the difference between == and ===?
-   What is hoisting?
-   What are JavaScript objects?
-   What is JSON?
-   What are callback functions?
-   What is the DOM?
-   How do you query elements in the DOM?
-   What are event listeners?
-   What is event bubbling and capturing?
-   What is AJAX?
-   What are the steps for sending an HTTP request with Fetch?
-   How do you handle failed requests with Fetch?
-   What type of object does Fetch return?
-   Explain async and await.

------------------------------------------------------------------------

# TypeScript

-   What are some features that TypeScript has that JavaScript doesn't have?
-   What is Node and NPM?
-   How does TypeScript relate to JavaScript? What are the major benefits of using it over JavaScript?
-   List some of the data types of TypeScript. Which are unique to TypeScript?
-   Compare and contrast TypeScript with JavaScript. What are the key differences, and why might someone choose TypeScript over JavaScript?
-   What are some of the basic types available in TypeScript? Give examples.
-   How do you implement user-defined types in TypeScript?
-   Describe the process of transpiling and running TypeScript code.
-   What is a Union Type and why are they useful?
-   What is the tsconfig.json file?
-   What is Webpack?

------------------------------------------------------------------------

# Angular

-   What are some features of the Angular framework?
-   What is SPA? and how does it differ from a normal webpage?
-   What is a component?
-   What are the component lifecycle hooks?
-   How would you create an Angular component?
-   What is a service and how is it different from a component?
-   What is a directive and what are the different types?
-   Please describe the new declarative control flow statements in Angular 17+
-   What are the different types of data binding in Angular?
-   Please explain HttpClient and what it is used for
-   What is the process to implement routing in an Angular application?
-   How does Dependency Injection work in Angular?
-   What is the difference between server-side and client-side rendering?
-   What is a Pipe?
-   What is a decorator? What are some decorators in Angular?
-   What is an Angular module and how would you create one? How does this differ from modern Angular?
-   What are signals?
-   What is an Observable? How does it differ from a Promise?

------------------------------------------------------------------------

# Angular Testing

- What command is used to perform testing in Angular?
- What is Jasmine?
- Describe test functions provided by Jasmine?
- What do you need to do to mock data with Jasmine?
- What is Karma?
- What is Vitest?
- What is TestBed used for?
- How do you test components with TestBed?
- What is a Fixture?

------------------------------------------------------------------------

# OAuth

- What is OAuth?
- What are the roles in OAuth?
- What is JWT?
- What are the types of Tokens?

------------------------------------------------------------------------

# DevOps

- What is DevOps? What is the goal of various DevOps processes, and how do they support the SDLC?
- Explain CI/CD. What is the difference between Continuous Deployment and Continuous Delivery?
- What is a "build"? What is the end result of a build?
- What is SonarQube / SonarCloud? Explain some of the features of it
- What is a "code smell"?
- What tools can you use to achieve CI/CD?
- What is a DevOps pipeline? Explain the steps to setting one up

------------------------------------------------------------------------

# Jenkins

- What is Jenkins and What are it's key features?
- Why is Jenkins important to DevOps?
- What are Jenkins Jobs?
- What are Jenkins Builds?
- What are GitHub Webhooks in Jenkins?
- How does Jenkins use Source Control Management in a pipeline?
- What are Freestyle Jobs in Jenkins?
- What are Pipeline Jobs in Jenkins?
- What is a Jenkinsfile?
- What is the basic structure of a Jenkinsfile?
- What is the role of Controller and Agent Nodes in Jenkins?

------------------------------------------------------------------------

# Docker

- What is a container? How is it different from a virtual machine?
- What is a Docker image? What is a Docker Container?
- What is the Docker Daemon?
- What is a container registry? How would you retrieve and upload images to DockerHub?
- What is the benefit to an image being built in Layers?
- What are some Docker commands? and what do they do?

------------------------------------------------------------------------

# Cloud Computing

- What is "the cloud" or "cloud computing" and why is it so popular?
- What are the 3 different types of cloud service models?
- What are the different cloud deployment methods?

------------------------------------------------------------------------

# GCP

- What is GCP?
- What is the difference between a GCP Region and Zone? When should we use either?
- What is IAM in GCP and why is it important?
- What are the different types of roles available in GCP IAM?
- How does GCP Pricing work and what are the key factors which influence the cost?
- What are some features of GCP Compute Engine?
- What is GCP Compute Engine used for?
- What are preemptible (spot) VMs and what are they useful for?
- How does Compute Engine enhance data security for VM instances?
- How can users leverage Compute Engine for migrating existing on-premises applications to the cloud?
- Explain the significance of load balancing with respect to Compute Engine
- What is Google Cloud SQL and what is it used for?
- What type of data is stored in GCP Cloud Storage?
- What is the difference between storage classes?
- How does App Engine differ from Compute Engine Service?
- What are Cloud functions (or Cloud Run Functions)?

------------------------------------------------------------------------

# Microservices with Spring

- What is a microservice and how does it differ from a Monolithic architecture?
- What is a Polyglot pattern?
- What is th difference beteen vertical and horizontal scaling? Which scaling method do monoliths and microservices typically perform?
- What is service registry?
- What is service discovery?
- What is an API Gateway?
- How is load balancing performed?
- What is a circuit breaker pattern? what the states of a circuit?

------------------------------------------------------------------------

# Event Driven Architecture & Kafka

- What is Kafka?
- What are the features of Kafka?
- What are the important components of Kafka?
- What is a Topic?
- What role does a broker play?
- What is a Consumer Group?
- What is a partition?
- What is Kafka Streams?

------------------------------------------------------------------------

# Kubernetes

- What is kubernetes? and what is it used for?
- What is container orchestration?
- What is a cluster in Kubernetes?
- What is a node in Kubernetes?
- What is a pod in Kubernetes?
- What is a Service in Kubernetes?

------------------------------------------------------------------------

# Terraform

- What is Terraform?
- What is Infrastructure as code?



