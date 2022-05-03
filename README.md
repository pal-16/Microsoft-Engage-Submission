
# <p align="center"> Microsoft Engage 2021 Submission for Batch of 2022</p>

<p align="center">A full stack web application that targets to foster student and faculty engagement via helping students getting recognized for their acheivements by the faculty, giving back to the college community via crowdfunding, showcasing creative projects, interacting with peer's and referring to their work,
thus leading to a healthy competitive environment.</p>


<hr />

<p align="center">
<a href="https://www.youtube.com/watch?v=aRw9GA34GrQ&t=39s">
    <img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/images-gif.gif"/>
  </a>
</p>

<hr />

## Important Links
- [My experience applying for the program](https://mantrypalak.medium.com/microsoft-engage-2021-88875b981438)
- [Support Document for the Project](https://docs.google.com/document/d/1Os4hrkQN5u3tmfLSp0PaFD3xeBxKiBWs5E2PPkRzGCU/edit)
- [Deployed Website Link](https://university-engagement.herokuapp.com/)


## Setup
For configuring the codebase, please refer to [SETUP Guide](https://github.com/pal-16/University-Engagement/blob/main/SETUP.md) to get started with local deployment

## Tech Stack

- Frontend : React
- Backend : Node.js, Express
- Database: MongoDB, Firebase
- Testing: Mocha, Chai
- Deployment: GitHub Actions, Heroku

## Features Offered
- Authentication using JWT for student and faculty
- Submit an achievement to be verified by faculty
- Filter Applications by their status (Pending, Accepted, Rejected)
- Get notified via email about the creation and status of application
- Once the application is approved, get coins allotted for your achievement
- Based on total coins achieved, get allotted an Institute Rank
- Faculty can Approve or reject by donating university coins
- Submit a request for the need of money for a genuine cause
- Students who gained coins through their achievements, can donate coins provided they have sufficient coin balance
- Once Crowdfunding is complete, the coins can be converted to equivalent money by sending a mail to the head of the university through the website
- Submit a project with all the relevant details asked for creating a customized institute project datastore
- Filter Projects by their semester and domain 
- Like and Comment on a project
- View Project feed sorted by most Liked Projects 

## Screenshots and Working

<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/main.webp"   width=700 height = 400/>
Login and Regsitration implemented using JWT
<br>
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/register.webp"   width=700 height = 300/>
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/login.webp"   width=700 height = 300/>
<br>
Creating an achievement where one uploads proof of the same and select a faculty who can verify and allot coins
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/achievement-1.webp" width=700 height = 400> 
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/achievement-2.webp" width=700 height = 400> 
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/achievement-3.webp" width=700 height = 400> 
<br>

After confirming all details of the achievement the faculty can approve or reject
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/achievement-4.webp" width=700 height = 400> 
<br>
Email Notifications using Nodemailer about the status and creation of achievement application
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/email.webp"  width=700  height = 400/>
<br>
Coins achieved determines the institute rank on profile page
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/profile.webp" width=700 height = 400> 
<br>
Allow individuals in need to raise money from the members of the institution
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/crowdfunding-1.webp"  width=700  height = 400/>
<br>
Students with suffficient coin balance can donate, if they donate more than the post required then exceeding amount gets credited back
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/crowdfunding-2.webp"  width=700  height = 400/>
<br>

Once crowdfunding is complete, send a mail to the head of the institution via the portal for conversion of coins
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/crowdfunding-3.webp"  width=700 height = 400/>

Showcase your projects thus creating institute specific project datastore linked to GitHub
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/project-1.webp"  width=700  height = 400/>

Project feed with tags associated sorted by most liked posts first and extensive filtering options available
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/project-2.webp"  width=700  height = 400/>

Like, Comment on a project and thus interact with peers
<img src="https://github.com/pal-16/Microsoft-Engage-Submission/blob/main/readme-assets/project-3.webp"   width=700 height = 400/>





