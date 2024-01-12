# **QUIZ EURO 2024**

## Project Overview

Quiz Euro 2024 is a small quiz game for all football and Euro Championship fans. It is a simple and fun quiz for all adults and children who want to test their knowledge but at the same time can learn new and interesting information.

I took the insipiration for this idea from the competition that will be held this year in Germany. Many people are looking forward to this compatition and through this quiz they can get more involved in the beautiful atmosphere that football and sport in general give people. 

![screenshot of amiresponsive](document/responsiv.JPG)

### Live Website

You can visit the website [Quiz Euro 2024](https://alsona1188.github.io/euro2024-quiz/)

### My GitHub Repository

You can visit the GitHub Repository [here](https://github.com/alsona1188/euro2024-quiz)

## CONTENTS

- [**QUIZ EURO 2024**](#quiz-euro-2024)
  - [Project Overview](#project-overview)
    - [Live Website](#live-website)
    - [My GitHub Repository](#my-github-repository)
  - [CONTENTS](#contents)
    - [Common Usage](#common-usage)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Colour scheme](#colour-scheme)
    - [Typography](#typography)
  - [Features](#features)
    - [General Features on each page](#general-features-on-each-page)
    - [Future Implementations](#future-implementations)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Lighthouse](#lighthouse)
    - [Bugs](#bugs)
  - [Technologies Used](#technologies-used)
  - [Deployment And Local Development](#deployment-and-local-development)
    - [Deployment to GitHub pages](#deployment-to-github-pages)
    - [Local Deployment](#local-deployment)
      - [How to Fork](#how-to-fork)
      - [How to Clone](#how-to-clone)
   
### Common Usage

- Quiz Euro 2024 is an online quiz aimed to test the knowledge of all the fans of Eurpian Championship.
- Quiz contestants could enjoy this type of a quiz at a gathering with friends and family to give their evening a fun and competitive element.
- This quiz will also inform about some interesting information to all the people that will participate on it. 
- In case the user find all the questions, he will win a ticket to a random match in the Europian Championship.

## User Stories

- I want to put my knowledge to the test in this particular topic.
- I want to be able to easily navigate through the page and understand clearly its different functions and information presented to me.
- I want it to be dynamic and fun so I can enjoy myself either alone or in the company of my friends whilst going through the quiz.

## Design

### Colour scheme

I designed the colour palette for the website myself. I only used [colorspace](https://mycolor.space/?hex=%23100B18&sub=1).

### Typography

I used Google Fonts to import the following:

- 'Inter', is a sans-serif style which I chose. It looks aimple and clear at the same time.
  
 ## Features

### General Features on each page

The page is responsive and contains:

- Favicon of the Website, chosen to match the theme of the site.

![screenshot of the favicon](document/favicon.JPG)

- Landing Page
  - This would be the first page the user would see, introducing the theme with an heading and an icon, background image. There are two buttons that the user sees at the first sight.
- ![screenshot of land page](document/land_page.JPG)

- Quiz Area
  - Here users can see directly the quiz. The quiz area has the main question and also 4 option for each question.
  - Once the user selects an answer, different colours are displayed to show if they were correct.  The user is also given a 'next' button which allows the user to go onto the next question.

![screenshot of questions and options](document/question-and-options.JPG)

- Info and Next buttons
 - The user can see directly two buttons.
  
![screenshot of info and next buttons](document/info-next-button.JPG)

 - If the user clicks the info button, a pop up information will come up that will ask the user to add the username.
  
  ![screenshot of info and next buttons](document/popup_entername.JPG)
  
 - After entering the name an automatic message will display in the quiz area. This message will give a little information about the game.
  
![after entering the name](document/after_popup.JPG)

- If no name is entered, so if the user closses with x, it will show the message "no name was entered".
  
![if no username is inserted](document/no-username.JPG)  

- Result Page
  - In the last page will be 2 different message displayed.
  - The next button will be converted to restart button.
  - A sound effect is added on the last page, which indicates that the game is over.
  - The first case is when the user finds all the questions.
  
![screenshot of all correct answers](document/all-correct-answers.JPG)

  - The second case is when the user will not find all the correct answers.
  
![screenshot of not all correct answers](document/not-all-correct.JPG)  

  - After clicking the restart button, the info button will apear again and the message will change to "Let's try again"
  
![screenshot after restart](document/after-restart.JPG) 

- Sound Effects
  - The first sound is implemented when the user presses the info button. This helps give the user a sense of immersion into the game.
  - The correct & incorrect sound effects are activated upon selecting an answer, helping to add excitement to the user's experience.

### Future Implementations

- A multi-player feature for participants to compete remotely head-to-head on different devices along with the possibility for them to challenge participants to these head-to-head games.
- I would like to create different levels of difficulty for the game.

 ## Testing
- I tested that this page works in different browsers: Crome, Firefox, Safari.
- I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the devtools device toolbar.
  
### Validator Testing

- **[HTML Validator](https://validator.w3.org/)**

  - No errors were returned when passing through the official W3C validator.

![HTML validator](document/html-validator.JPG) 

- **[CSS Validator](https://jigsaw.w3.org/css-validator/)**
  - No errors were returned when passing through the official Jigsaw validator.

![CSS validator](document/css-validator.JPG)
  
- **[JSHint](https://jshint.com/)**
  - No errors were returned when passing through the official jshint validator.
- The info returned is:
  - There are 10 functions in this file.
  - Function with the largest signature take 1 arguments, while the median is 0.
  - Largest function has 9 statements in it, while the median is 6.
  - The most complex function has a cyclomatic complexity value of 3 while the median is 2.

### Lighthouse
- Performance - How the page performs whilst loading.
- Accessibility - Is the site acccessible for all users and how can it be improved.
- Best Practices - Site conforms to industry best practices.
- SEO - Search engine optimisation. Is the site optimised for search engine result rankings.

![lighthouse screenshot](document/lighthouse.JPG) 

### Bugs
 - No bugs were found.

 ## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [Google Fonts](https://fonts.google.com/) was used to import fonts into the style.css.
- [Font Awesome](https://fontawesome.com/) was used to add icons.
- [GitHub](https://github.com/) was used to save and store the files for the website.
- [Am I Responsive](https://ui.dev/amiresponsive) was used to display the website on different devices.
- [German website](https://www.dfb.de/en/news/detail/euro-2024-mascot-unveiled-252717/?no_cache=1&cHash=83982e31f16d14b0de8118a0ad7bc1ef) was used to search and load the background image.
- [Favicon.io](https://favicon.io/favicon-generator/) was used to create the favicon.
- [img2go](https://www.img2go.com/resize-image) was used to create the favicon.

 ## Deployment And Local Development

### Deployment to GitHub pages

The site is deployed using GitHub Pages. To deploy using GitHub pages:

1. Open the project repository.
2. Click on "Settings" on the navigation bar under the repository title.
3. Click on "Pages" in the left-hand navigation panel.
4. Under "Source", choose which branch to deploy. This should be Main for newer repositories.
5. Choose which folder to deploy from, usually "/root".
6. Click "Save", then wait for it to be deployed. It can take some time for the page to be fully deployed.
7. Your URL will be displayed above "Source".

### Local Deployment

#### How to Fork

1. Copy the link to this repository.
2. Log in or sign up to your GitHub account and click on the **Fork** button on the top-right corner.
3. You should now have a copy included in your account.

#### How to Clone

1. Copy the link to this repository.
2. Log in or sign up to your GitHub account and click on the **Code** button.
3. You are given to option to clone using HTTPS or GitHub CLI and copy the link.

## Credits

### Content

- The information I got for my questions mostly came from [UEFA wikipedia](https://en.wikipedia.org/wiki/UEFA_Euro_2024)
- Some concepts and parts of code were taken from a [tutorial by 'GreatStack'](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=770s)..

- [Stackoverflow](https://stackoverflow.com/questions/9419263/how-to-play-audio) and their ideas of how to implement audios.

### Media

- The sound media files were all taken from [pixabay](https://pixabay.com/sound-effects/search/sound/).
- [German website](https://www.dfb.de/en/news/detail/euro-2024-mascot-unveiled-252717/?no_cache=1&cHash=83982e31f16d14b0de8118a0ad7bc1ef) was used to take the background image.

## Acknowledgements

I would like to acknowledge the following people who have been a huge help for this project:

-  [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) - My Code Institute Mentor for his advices and expertise.

- The Slack community of Code Institute for their help and support.

Alsona Natsi 2024.

[Back to top](<#contents>)


  
