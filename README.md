# Happy Paddy Go

To visit live website, [click here.](https://paddy-hack-team.github.io/happypaddygo/)

<img src="https://paddy-hack-team.github.io/happypaddygo/assets/img/happypaddygo-readme.JPG">

# User Experience (UX)

### User stories

- #### First Time Visitor Goals

  - As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about St. Patrick's Day.
  - As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
  - As a First Time Visitor, I want to have the option to watch videos related to St. Patrick's Day from all over the world.
  - As a First Time Visitor, I want to send e-cards to loved ones.

- #### Returning Visitor Goals

  - As a Returning Visitor, I want to see if there is new information and new cards about St. Patrick's Day.

- ### Design

  - #### General

    - This webpage was created as a mobile first, giving the appearence of an app with cards containing the content. If opened in devices with larger screen, the cards are going to be resized and be shown in 2 columns, this make the site easier to maintain if necessary to include or remove cards.

  - #### Color Scheme

    - The website was created using the Irish colors of Green and white. The fonts are in green and correspond nicley with the white background color. This color scheme also reflects the St. Patrick's Day colors.

  - #### Typography

    - The Marck Script is the main font used throughout the whole website with Roboto in the Menu items, footer and paragraphs. To keep this site consitent Open Sans is used as the fallback font in case for any reason the font isn't being imported into the site correctly.

  - #### Imagery

    - Imagery is very important and we used that throughout our site to present a visually appeal webiste.
    - Videos are used for the same reason to enhance the user experience.

  - ### Wireframes

    - Home Page Wireframe - ![View](assets/img/Wireframe-Home.png)
    - St.Patrick's Day Page Wireframe - ![View](assets/img/Wireframe-paddy.png)
    - Greetings Cards Page Wireframe -![View](assets/img/Wireframe-cards.png)

# Features

The website features a header with a logo on the left and navigation bar with menu items on the left. It also features a footer with social media icons and copyright information. The header and footer maintain consistency on all pages.

## Home

The **Home** page allows the user to have ease of access and navigation to all other pages, from the navigation bar, the user can navigate to **St.Patrick's** page and **Greetings Cards** page links to other pages and social media platforms in the footer of the page.

The **Home** page fetaure a hero image with call to action message.

The Home page also features two card indexes that will direct the user to the St.Patrick's page and the Greetings Cards page respectively.

## St. Patrick's Day

The **St.Patrick's Day** page features information about St.Patrick's day. This is the "About page."

The Hero images in this page are displayed as a carousel of images with a slider.

The page also features embedded youtube videos with various information around the St.Patrick's Day celebrations and traditions around the world.

## Greetings Cards

The **Greetings Cards** page features six clickable cards which navigate the user to a form for each card when clicked. This allows for the user to have a seamless experience as each card opens up in a separate page with a form which the user can send.

This also allows the user to open up several cards in separate windows and gives them the ability to send multiple cards to multiple people.

# Technologies Used

This project is created with:

- HTML5 - used for building the website
- CSS3 - for styling elements
- JavaScript - for Materialize elements and to connect to Email JS API.
- Google Fonts - Roboto, Marck Script used for the font-family and Open Sans as the fall-back.
- Font Awesome - for Icons.
- Materialize CSS - Used for elements, components and styling of the page.
- Balsamic - to creation of the Wireframes.
- Affinity Designer - Creation of the Webpage Logo.
- Affinity Photo - To resize and reduce picture sizes.
- Visual Studio Code - Text editor for coding
- GitHub - Used for hosting the code, project management and version control.
- GitHub Pages - This is where the site is deployed.

# Testing

## User Stories testing

- #### First Time Visitor Goals

  - On the home page with the main title I understand what the purpose of the site is. From the navigation bar I can access the two main sections. The postcards on the home page invite me to learn more about St. Patrick's Day or to access the greetings section.
  - On the information page, I can find a brief description of St. Patrick's Day and videos about the holiday and how it is celebrated.
  - On the greeting page, I can choose from six possible cards. Once you have clicked on the chosen postcard, a form opens in which you can enter the name of the recipient and that of the sender as well as a short message. A pop-up informs me if the message has been sent successfully.

## Links

- Each navbar link worked correctly, in both the mobile navbar and the expanded desktop navbar in all pages.
- The links of the social pages in the footer works correctly in all the website pages opening a new page.
- The the navbar logo works correctly by redirecting the user to the homepage.
- The carousel button in the about page works correctly, showing each one a different picture.
- The four youtube videos in the about section can be played without problem.
- Each postcard has been tested, the form has been filled in and the email has been sent successfully. The confirmation pop up appears every time.

## Responsive Design

- Tested responsiveness of the wireframe using Dev Tools and confirmed basic structure looks and works well on all mobile decides from 320px, up to desktop size.
- Once these changes were optimized I finally tested the project with [Google Mobile-Friendly](https://search.google.com/test/mobile-friendly) test. The test gave excellent results.

## Validators

- [HTML Validator](https://validator.w3.org/) The test was positive for index.html and sendmessage.html. For the about.html we experienced some error mostly due to iframes.
- [CSS Validator](https://jigsaw.w3.org/css-validator/) No Error found.

## Grammar and spelling

- [Online Spellcheck](https://www.online-spellcheck.com/) The website and Readme contents were double checked with [Online Spellcheck](https://www.online-spellcheck.com/).

## Lighthouse

The Lighthouse test give the following result:

- **Performance**:
- **Accessibility**:
- **Best Practices**:
- **SEO**:

# Deployment

## GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Paddy-Hack-Team/happypaddygo)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://paddy-hack-team.github.io/happypaddygo/) in the "GitHub Pages" section.

## Collaboration

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) for more informatino about Cloning repositories.
Click [Here](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests) for more informatino about Collaboration.

# Credits

Below are the resources that were used.

- [Materialize](https://materializecss.com/) - A modern responsive front-end framework based on Material Design used for styling CSS.
- [Pexels](https://www.pexels.com/) - Used for free stock photos
  - [Darlene Alderson](https://www.pexels.com/@darlene-alderson)
  - [Jill wellington](https://www.pexels.com/@jill-wellington-1638660)
  - [Anna Shvets](https://www.pexels.com/@shvetsa)
  - [Sudipta Mondal](https://www.pexels.com/@sudipta)
  - [Pressmaster](https://www.pexels.com/@pressmaster)
- Youtube
  - [ABC News](https://www.youtube.com/watch?v=40BlVzjxu-I)
  - [Home of the Holidays](https://www.youtube.com/watch?v=BBE_aW7Bsn4)
  - [Reading Through History](https://www.youtube.com/watch?v=HFch06rGKXw)

# Acknowledgements

This webiste was created through guidance from our mentor Chris, team efforts, effective and efficient collaboration and communications from the team member below.

- Alessandro Commentucci
- Fabio De Araujo
- Fiachra Holland
- Joan Amudu
- Magda Ruszaj
- Mike Casey

