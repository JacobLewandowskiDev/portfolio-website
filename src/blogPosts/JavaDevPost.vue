<script>
import { postLogic } from "/src/blogPostUtils.js";

export default {
  mixins: [postLogic],

  mounted() {
    this.$nextTick(() => {
      const postContents = this.$el.querySelectorAll(".post__body__text");
      if (postContents.length > 0) {
        this.calcReadTime(Array.from(postContents));
      }
    });
  },
};
</script>

<template>
  <div class="post">
    <h3
      class="post__title"
      :class="{ 'post__title--active': isBodyVisible }"
      @click="toggleBody"
    >
      Journal #1: Becoming a Java developer - A Practical Roadmap
    </h3>
    <div class="post__body" :class="{ 'post__body--visible': isBodyVisible }">
      <h4 class="post__body__info">
        Posted: 02-04-2024, Read Time: {{ readTime }} min.
      </h4>
      <br />
      <h3 class="post__body__titleblock">A Brief Summary</h3>
      <p class="post__body__text">
        Embarking on the journey of becoming a Full-Stack Java developer can
        often feel like stepping into a vast, unexplored cave. In the dim light
        of uncertainty, every novice programmer has experienced the disorienting
        sensation of not knowing which path to take next. It's akin to standing
        at the entrance, staring into the darkness, and wondering how to
        navigate the labyrinthine complexities ahead. But fear not! With the
        right guidance and a practical roadmap, traversing this cavernous
        landscape becomes not only manageable but also exhilarating. Join me as
        we illuminate the path forward, shedding light on the essential steps
        and strategies needed to emerge victoriously as a Full-Stack Java
        developer.
      </p>
      <br />
      <p class="post__body__text">
        As all journeys begin with taking the first step, the very obvious first
        one on your path to becoming a Full-Stack Java developer is to start
        with... well, Java. Widely regarded as one of the most versatile and
        robust programming languages, Java serves as the bedrock upon which
        countless software applications, web platforms, and enterprise systems
        are built. Its syntax, designed for simplicity and readability, makes it
        an ideal starting point for beginners venturing into the realm of
        software development.
      </p>
      <br />
      <h3 class="post__body__titleblock">Preparing Your Coding Environment</h3>
      <p class="post__body__text">
        Before we dive into what you should want to learn in Java, you must
        first prepare your work environment. This involves installing the
        necessary tools, including your Integrated Development Environment
        (IDE), code editor, and Java Development Kit (JDK). Your IDE serves as
        your command center, providing a suite of features to streamline your
        development process, such as code editing, debugging, and project
        management. Popular choices include IntelliJ IDEA, Eclipse, and
        NetBeans. Additionally, you'll need to install the JDK, which includes
        the Java Runtime Environment (JRE) along with development tools such as
        compilers and debuggers. Ensure you download the JDK version compatible
        with your operating system.
      </p>
      <br />
      <p class="post__body__text">
        Now, I could guide you step by step on how to perform all of the steps
        necessary to set up the IDE and JDK, but that is not the purpose of this
        post. Instead, I will leave you with useful links to pursue that
        knowledge on your own. After all, diving into the nitty-gritty details
        of installation and configuration could take hours to read.
        <a
          class="post__body__text__highlight"
          href="https://www.jetbrains.com/help/idea/creating-and-running-your-first-java-application.html"
          target="_blank"
        >
          InteliJ's step by step guide on writing your first 'Hello World' in
          Java</a
        >
      </p>
      <br />
      <h3 class="post__body__titleblock">Java Core fundamentals</h3>
      <p class="post__body__text">
        Now that we have the essentials out of the way, let's dive into the
        roadmap. The most crucial aspect of understanding any programming
        language is learning its
        <a
          class="post__body__text__highlight"
          href="https://www.geeksforgeeks.org/what-is-core-java/"
          target="_blank"
          >fundamentals</a
        >. Once you master these basics, you can seamlessly transfer that
        knowledge to other languages, making it much quicker to learn and adapt.
        Think of the fundamentals as the building blocks of your programming
        knowledge. In terms of learning Java, you should start with mastering
        these core components in the following order:
      </p>
      <br />
      <p class="post__body__text--example">
        <strong
          >Variables -> Strings -> Loops -> Arrays -> Classes/OOP (Object
          Oriented Programming) -> Polymorphism -> Inheritance -> Interfaces ->
          Packages -> Files -> IO Streams</strong
        >
      </p>
      <br />
      <p class="post__body__text">
        Learning these core concepts will allow you to write your first Objects,
        methods & allow you to build your first applicatiions.
      </p>
      <br />
      <p class="post__body__text">
        The subsequent stage in the learning journey involves familiarizing
        yourself with the
        <a
          class="post__body__text__highlight"
          href="https://www.geeksforgeeks.org/collections-in-java-2/"
          target="_blank"
          >Java Collections</a
        >. It's imperative to grasp this concept, as virtually every application
        you develop will require data storage in some manner or configuration.
        The way you should approach learning Collections is also in a certain
        order:
      </p>
      <br />
      <p class="post__body__text--example">
        <strong>Arrays -> Lists -> Maps</strong>
      </p>
      <br />
      <p class="post__body__text">
        Out of all the subjects listed above, the most likely one you will use
        is Lists. However, to understand the workings of both Lists and Maps,
        you need to have a good understanding of how arrays work, as both Lists
        and Maps are based on arrays.
      </p>
      <br />
      <h3 class="post__body__titleblock">Advanced topics</h3>
      <p class="post__body__text">
        Once you have a good grasp of the basics, it's time to delve into more
        advanced topics. Each item listed below is complex enough to warrant
        days of study. While you can always explore them in greater detail as
        you develop more complex applications, as a novice, it's always good to
        understand the basics and proceed from there as necessary. The items
        below can be learned in no particular order.
      </p>
      <br />
      <p class="post__body__text--example">
        <strong
          >Optionals, Dependancy Injection, Design Patterns, I/O, How JVM works,
          Generics</strong
        >
      </p>
      <br />
      <p class="post__body__text">
        It's essential to understand
        <a
          class="post__body__text__highlight"
          href="https://www.geeksforgeeks.org/jvm-works-jvm-architecture/"
          target="_blank"
          >how the Java Virtual Machine (JVM) works</a
        >
        and how objects and variables are stored in memory. This understanding
        empowers you to make better decisions during the coding process.
      </p>
      <br />
      <h3 class="post__body__titleblock">Exception Handling</h3>
      <p class="post__body__text">
        It is very important to understand the concept of
        <a
          class="post__body__text__highlight"
          href="https://www.geeksforgeeks.org/exceptions-in-java/"
          target="_blank"
          >Exception Handling</a
        >
        When developing applications, especially when writing REST APIs,
        encountering errors is inevitable. Unhandled errors can disrupt your
        application, making exception handling crucial. In Java, we encounter
        two types of exceptions: 'checked' and 'unchecked'. A checked exception
        must be either handled within the method or specified using the 'throws'
        keyword. On the other hand, any exception falling under the 'Error' or
        'RuntimeException' classes in Java is considered an unchecked exception.
      </p>
      <br />
      <h3 class="post__body__titleblock">Testing</h3>
      <p class="post__body__text">
        Testing, testing, one, two, three. Whenever you write a method or a
        block of code that is called somewhere, you should have a corresponding
        test for it to check for every possible case in which it could break the
        application. Think of it this way: would you board a plane that wasn't
        properly tested (thinking of you Boeing)? I thought so. That's why, as a
        developer, you have to get accustomed to testing your code to ensure the
        safety and proper functioning of your application. There are a couple of
        ways you can test your code: Unit tests (These tests focus on testing
        individual units or components of your code in isolation. They verify
        that each unit behaves as expected.), Integration Tests (Integration
        tests verify that different units or components work together correctly
        when integrated. They ensure that interactions between different parts
        of your code function as intended.), End-to-End (E2E) (E2E tests
        simulate user interactions with your application from start to finish.
        They test the entire application workflow to ensure that it behaves
        correctly from the user's perspective.).
        <a
          class="post__body__text__highlight"
          href="https://www.freecodecamp.org/news/java-unit-testing/"
          target="_blank"
        >
          How to write Unit tests</a
        >
      </p>
      <br />
      <h3 class="post__body__titleblock">Build tools</h3>
      <p class="post__body__text">
        Build tools are programs that automate the creation of executable
        applications from source code (e.g., .apk for an Android app). Building
        incorporates compiling,linking and packaging the code into a usable or
        executable form. Basically build automation is the act of scripting or
        automating a wide variety of tasks that software developers do in their
        day-to-day activities like:
      </p>
      <br />
      <p class="post__body__text--example">
        <strong
          >Downloading dependencies, Compiling source code into binary code,
          Packaging that binary code, Running tests, Deployment to production
          systems.</strong
        >
      </p>
      <br />
      <p class="post__body__text">
        They are a good way to keep track of all dependencies in your project,
        setup profiles and configuration of the application. In case of Java
        there are two main build tools
        <a
          class="post__body__text__highlight"
          href="https://maven.apache.org/"
          target="_blank"
          >MAVEN</a
        >
        &
        <a
          class="post__body__text__highlight"
          href="https://gradle.org/maven-vs-gradle/"
          target="_blank"
          >GRADLE</a
        >. Which one you use will depend on you if you are working on personal
        projects, but in a work environment it will be mostly the leaderships
        choice on which one they use in the company.
      </p>
      <br />
      <h3 class="post__body__titleblock">HTTP</h3>
      <p class="post__body__text">
        When you build backend applications, and backend applications you shall
        build with Java. More than likely you will be creating or exposing some
        form of API's. That is where a good understanding of
        <a
          class="post__body__text__highlight"
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
          target="_blank"
          >how HTTP works</a
        >, API's in general, how to design an API etc. comes in handy.
      </p>
      <br />
      <h3 class="post__body__titleblock">Frameworks & databases</h3>
      <p class="post__body__text">
        Connecting our applications to a database is a fundamental aspect of
        many software projects. This step enables us to store and retrieve data,
        perform various operations on it, and interact with it dynamically. The
        CRUD operations—Create, Read, Update, and Delete—are essential
        functionalities required for managing data within our applications. When
        it comes to connecting to a database in Java, there are several options
        available. You can use JDBC (Java Database Connectivity), which is a
        standard Java API for database-independent connectivity between the Java
        programming language and a wide range of databases. Alternatively, you
        might opt for ORM (Object-Relational Mapping) frameworks like Hibernate
        or JPA (Java Persistence API), which abstract the database interaction
        and provide a more object-oriented approach to database management.
      </p>
      <br />
      <p class="post__body__text">
        Additionally, there are various frameworks and libraries available in
        the Java ecosystem that can significantly accelerate the development
        process. These frameworks offer pre-built components, utilities, and
        patterns that simplify common tasks, such as handling web requests,
        managing dependencies, implementing security features, and more. Some
        popular Java frameworks include Spring Framework, Spring Boot,
        Micronaut, and Quarkus, each offering its own set of features and
        advantages. By leveraging these tools and frameworks, developers can
        focus more on the business logic of their applications rather than
        dealing with low-level database interactions or repetitive coding tasks.
        This not only enhances productivity but also promotes code
        maintainability, scalability, and overall quality of the software.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
