# [Building a Production-Ready API with Node.js](https://frontendmasters.com/courses/api-design-nodejs/)

### course by Scott Moss 

Hi,

And welcome to the API Design with v4 course by Scott Moss. This course website was specifically made for making online courses and optimized for use with Frontend Masters.


## Tools

When it comes to building out production-ready API's, there are several moving pieces, and for each one, there are several options. We won't be covering EVERY single detail in this course. Instead we'll cover the common tools that you'll need.
## Runtime

We'll be using Node.js for this course. Why? Node.js uses JS as the language of choice. If you've worked on web apps, then you know JS. Node.js has a rich, active ecosystem as well. I also know Node.js the best. Alternatives include Ruby, Python, Java, Go, Rust, and many more.
## Framework

We could create an API without a framework, but that wouldn't be the best use of our time and isn't taking advantage of an amazing ecosystem at our fingertips. So, we'll be using Express to create our API inside of Node.js.
## Database

There are so many great options when choosing a database these days. We'll be using Psql or Postgres. It's one of the most popular DBs in the world and gives us tons of options when it's time to deploy our API. For the ORM, we'll use Prisma to interact with our DB. Prisma has proven to be a very valuable tool that can create schemas, query our DB, and even handle migrations. It also works with a variety of databases.
## Hosting

When it comes to hosting a Node.js based API, you can pretty much close your eyes then point in any direction and you'll be sure to land on a platform that supports Node. This is not a DevOps class, so we want to use a platform that manages it all for us. For that, we'll be using Render.
