# Cat Tinder Alpha 4/4/22
## Trello 
- Kanban board for agile development
- Allows us to keep track of Product Goals including
  - Minimum Viable Product (MVP)
  - Backlogs
  - Currently being worked on items
  - Completed Items
  - Who is in charge of which features
  - How long/ which steps each feature should rquire

## Create React App - Initial Commit
```
$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
$ yarn start
```

# Github Process
- "Hey I have pushed up the initial commit of the app for Instructors. Can I have some please put branch protections on our Repository linked here:"


## Developer/ User Stories
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.
- As a developer, I can create a directory in src called pages.
- As a developer, I can create a directory in src called components.
- As a developer, I can create a directory in src called assets.
- As a developer, I can create a file called Header.js in the components directory.
  - Called the Header in App.js
    `import Header from './components/Header'`
    `<Header/>`
As a developer, I can create a file called Footer.js in the components directory.
- As a developer, I can create a file called Home.js in the pages directory.
- As a developer, I can create a file called CatIndex.js in the pages directory.

```
$ yarn add bootstrap
$ yarn add reactstrap
```

- As a developer, I can add a file to src called mockCats.js and add an array of cat objects.

`yarn add react-router-dom@5.3.0`

- As a developer, I can create a file called CatIndex.js in the pages directory.
- As a developer, I can create a file called CatShow.js in the pages directory.
- As a developer, I can create a file called CatNew.js in the pages directory.
- As a developer, I can create a file called CatEdit.js in the pages directory.
- As a developer, I can create a file called NotFound.js in the pages directory.
- As a developer, I can use Reactstrap to create the header UI.
- As a developer, I can use Reactstrap to create the footer UI.
- As a developer, I can import the header and footer to all the page components.
- As a developer, I can add react-router-dom@5.3.0 to my application.
- As a developer, I can add routes to be able to navigate manually to all pages.
- As a developer, I can add some styling to the Home component.
- Add Enzyme to your application