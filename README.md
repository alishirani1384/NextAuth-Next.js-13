# Step-by-Step Tutorial on How to Use Next Auth in Next.js 13 using Route Handlers.

1.  Introduction
2.  Why use Next Auth?
3.  What are Route Handlers?
4.  How to set up Next Auth
5.  How to use Route Handlers with Next Auth
6.  Conclusion

## 1-Introduction

Next.js is a JavaScript framework that enables developers to create front-end web applications that are run on a server. It is a React-based framework that is easy to use and provides a number of features, such as server-side rendering, code splitting, and static exporting.  
Next.js also has an Authentication package called Next Auth that makes it easy to add authentication to a Next.js app. In this tutorial, we will show you how to use Next Auth and Next.js 13 to create a server-side rendered React app with basic authentication.

## 2-Why use Next Auth?

Next Auth is a secure authentication system for Next.js applications. It is based on JSON Web Tokens (JWT) and provides authentication and authorization for Next.js applications.

## 3-What are Route Handlers?

In Next.js 13, Route Handlers are a new feature that allows developers to create custom request handlers for a given route using the Web Request and Response APIs. Route Handlers are a replacement for the previous API Routes in Next.js.

## 4-How to set up Next Auth

To set up NextAuth in a Next.js application, you need to follow a few steps. First, you need to create a file called  
**route.js**  in the  **app/api/auth/[...nextauth]**  directory. This file contains the dynamic route handler for NextAuth.

Next, you need to configure your authentication providers. NextAuth supports a wide range of providers, including Google, Facebook, Twitter, and more. You can configure your providers by setting the appropriate environment variables or by passing them as options to the providers array in your NextAuth configuration.  
Here's an example of how to configure Google as an authentication provider in NextAuth:  

```
// app/api/auth/[...nextauth]/route.js

import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const options={
    GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
}

const handler=NextAuth(options)

export {handler as GET , handler as POST}

```

## 5-How to use Route Handlers with Next Auth

```
import {options} from "app/api/auth/[...nextauth]/route.js"
import {getServerSession} from "next-auth/next"

async function page(){
  const session = await getServerSession(options)
  console.log(session.user)
}

```

## 6-Conclusion

I have 6 minute video about this I hope it help if you liked the video don't forget to subscribe and hit the like button.
### [Video](https://www.youtube.com/embed/FUDL95L5aW0)

## Links

**[YOUTUBE](https://www.youtube.com/@YTCodewithAli)**

**[GITHUB](https://github.com/alishirani1384)**

**[LinkedIn](https://linkedin.com/in/ali-shirani-145bb61a1)**

