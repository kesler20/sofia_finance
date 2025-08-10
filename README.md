# Full-Stack App README Template Repo
>[!info] Replace the above with the title of the project (written as an image) and add the Logo just below.

>[!info] Add a short description of the project (this can come from the repository description)

---

| Badge                                                                                                          | Description                                     | Documentation |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------- |
| ![Release](https://img.shields.io/github/v/release/kesler20/python_projects_template_repo?include_prereleases) | Latest release version, including pre-releases. |               |
| ![GitHub Issues](https://img.shields.io/github/issues/kesler20/python_projects_template_repo)                  | Open GitHub issues.                             |               |
| pnpm                                                                                                           | Package manager                                 |               |
| vite                                                                                                           | Bundler                                         |               |
| nodejs                                                                                                         | Runtime                                         |               |
| PRISMA                                                                                                         | ORM                                             |               |
| Clerk                                                                                                          | Auth                                            |               |
| React                                                                                                          | JS Framework                                    |               |
| Typescript                                                                                                     | Language                                        |               |
| Tailwindcss                                                                                                    | Styling                                         |               |
| xstate                                                                                                         | state management                                |               |
| axios                                                                                                          | API                                             |               |
| Sentry                                                                                                         | Monitoring                                      |               |
| Sanity                                                                                                         | CMS                                             |               |
| SendGrid                                                                                                       | Email Services                                  |               |
| Vercel/AWS                                                                                                     | Deployment                                      |               |
| Vercel in logging/AWS cloudwatch                                                                               | Observability                                   |               |
| Cloudfront/vercel                                                                                              | CDN                                             |               |
| Stripe                                                                                                         | Payment and Analytics                           |               |
|                                                                                                                | A/B Testing                                     |               |
| [PostHog](PostHog.md)                                                                                          | Product Analytics                               |               |
| [Twilio Segment](Twilio%20and%20Customer.io.md)                                                                | Messages and SMS, Customer Data Platform        |               |

---
# Relevant Notes
## Learning Outcomes
>[!question] What are the use cases, technologies and skills that you are hoping to learn?
## [[<% tp.file.title %> Plans and Project Ideas]]

---
# Table of Contents (TOC)

- [Getting Started](#getting-started)
- [Folder Structure and Conventions](#folder-structure-and-conventions)
- [Software Architecture and Design Patterns](#software-architecture-and-design-patterns)
	- [Software Features](##software-features)
	- [Design Patterns](Software%20Website%20README%20Template.md#Design%20Patterns)
# Getting Started
>[!info] Make sure that you have generated a Personal Access Token, as this will be used by  the release github action.
<iframe src="https://scribehow.com/shared/How_to_Generate_Personal_Access_Tokens_on_GitHub__k3cOvB2HRx2gMKng-Bw1eQ" allow="fullscreen" allowfullscreen="" style="height:100%;width:100%; aspect-ratio: 16 / 9; "></iframe>

you can install all the dependencies with the following command
```cmd
pip install -r requirements
```

you can then run the website server
```cmd
python app.py
```
and open on port `5500`
## Deploying the Website
>[!info] To deploy the website easily you can use a Platform as a Service (PaaS) provider such as [Railway](https://railway.app/dashboard) which allows you to deploy different branches on commit. 

By creating a development branch separate to the main branch you can have a `canary deployment` which can be used to test the website before it is shown to users.

Accordingly, each new feature can be created on a `new-feature` branch of the development branch which is merged back to dev once all the unit tests pass.  The following setup should be obtained

```cmd
--main
|
---dev
|
----new-feature
```

This will allow to separate releases from delivery so you can merge the development branch back to `main` for each new release. 
### Setting up git repositories
![](git-deploy.png)

Starting from the `main` branch, you can create and move to a new branch with the following command.
```git
git checkout -b dev
```

You can then add any new changes 
```git
git add .
```

```git
git commit -m "first commit for development branch"
```

and publish to github with the following
```git
git push --set-upstream origin dev
```

to get the latest changes from the main branch
```bash
# Ensure you are in the dev branch
git checkout dev

# Pull the latest changes from the master branch
git pull origin master
```
### Creating a canary deployment
step by step guide to create a canary deployment in Railway
<iframe src="https://scribehow.com/shared/Create_a_canary_deployment_in_Railway_app__9a_OC3HSR_Ci6Pd-vPFjpA" allow="fullscreen" allowfullscreen="" style="height:100%;width:100%; aspect-ratio: 16 / 9; "></iframe>
# Folder Structure and Conventions

# Software Architecture and Design Patterns
>[!info] This describes any high level design patterns followed and the general software Architecture.
## Software Features
Include any design diagram used to inform the development of the software features mentioned.
This can include, diagrams from UX workflows, UI mockups and wireframes, Xstate diagrams, draw UML and draw SQL diagrams etc...
## Design Patterns
Include any high level design pattern used for the system or software architecture, as well as specific design patterns used to organise the code in refactoring:
- Builder pattern 
- Singleton
- Factory and Abstract Factory

