// export const projectData = [
//   { id: 1, img: "./images/birthday reminder.png", name: "birthday reminder" },
//   { id: 2, img: "./images/tours.png", name: "tours" },
// ];

export const projectData = {
  profiles: {
    twitter: "https://twitter.com/Sani_M_Alhassan",
    linkedin: "https://linkedin.com/in/sani-mohammed-alhassan-keezy",
    instagram: "https://www.instagram.com/kaculoss/",
    facebook: "https://web.facebook.com/kaculossde.dhopebwoy/",
    github: "https://github.com/Kaculoss",
  },
  aboutMe: {
    education: [
      { stage: "Basic", school: "King of Kings Prep. Sch." },
      { stage: "Secondary", school: "Koforidua Senior High Technical Sch." },
      {
        stage: "Tertiary",
        school: "Kwame Nkrumah University of Science and Technology",
      },
    ],
    skill: [
      { type: "FrontEnd", skills: ["HTML", "CSS", "JavaScript", "React.Js"] },
      {
        type: "BackEnd",
        skills: ["JavaScript", "Python", "PHP", "MySQL", "Git"],
      },
      { type: "Mobile App", skills: ["React Native", "CSS", "JavaScript"] },
    ],
    experience: [
      {
        year: "2018 - 2022",
        work: ["Self-taught", "Lots of Practices", "Taking on Challenges"],
      },
      { year: "2022 - ", work: ["Freelance Web developer"] },
    ],
  },
  allProjects: [
    {
      name: "basic",
      projects: [
        {
          id: 1,
          img: "/images/birthday reminder.png",
          name: "birthday reminder",
          webURL: "https://keezy-birthday-reminder.netlify.app",
          githubURL: "https://github.com/Kaculoss/birthday-reminder",
          description:
            "Shows ages of peers with their names, images and a clear button to clear all from view.",
        },
        {
          id: 2,
          img: "/images/tours.png",
          name: "tours",
          webURL: "https://keezy-tours.netlify.app",
          githubURL: "https://github.com/Kaculoss/tours",
          description:
            "Pictures of tourist sites to visit along with the costs involved to visit there and descriptions of each sites.",
        },
        {
          id: 3,
          img: "/images/todo.jpg",
          name: "to-do app",
          webURL: "https://keezy-react-todoapp.netlify.app",
          githubURL: "",
          description:
            "Todo list that only shows five items with the option to cancel out items done already from the list.",
        },
        {
          id: 4,
          img: "/images/booklist.jpg",
          name: "basic booklist",
          webURL: "https://react-basics-booklist-app.netlify.app",
          githubURL: "https://github.com/Kaculoss/react-basics-booklist-app",
          description:
            "Basic view of images along with hypothetical names as authors aranged beautifully with flex box.",
        },
      ],
    },
    {
      name: "medium class",
      projects: [
        {
          id: 1,
          img: "/images/keezy-quiz.jpg",
          name: "coders news",
          webURL: "https://keezy-quiz.netlify.app",
          githubURL: "https://github.com/Kaculoss/quiz-setup",
          description:
            "A quiz setup that allows the user to set the number, the category and difficulty of questions to be asked. The applications automatically grades and displays the final results after the quiz.",
        },
        {
          id: 2,
          img: "/images/coder-news.jpg",
          name: "coders news",
          webURL: "https://keezy-coder-news.netlify.app",
          githubURL: "https://github.com/Kaculoss/coder-news",
          description:
            "This app displays coders' news. All you have to do is to search the category of news you want from the search bar, and if it is about coding, the app will fetch them for you instantly. It is displaying 'Javascript' news by default. Feel free to change it",
        },
        {
          id: 3,
          img: "/images/generate-colors.jpg",
          name: "color generator",
          webURL: "https://keezy-colors.netlify.app",
          githubURL: "https://github.com/Kaculoss/color-generator",
          description:
            "Very useful to front-end developers, this websites helps you to visually see the contrast of every color from the darker version of the color to the lighter version. The application also allows you to copy the hex color code of your preference to your clipboard for use",
        },
      ],
    },
    {
      name: "large-scale",
      projects: [
        {
          id: 1,
          img: "/images/keezy-comfy.jpg",
          name: "keezy's comfy store",
          webURL: "https://keezy-comfy.netlify.app",
          githubURL: "",
          description:
            "Keezy comfy is a beautiful website for an hypothetical interior designer with top notch functionalities. It allows you to sort products by price and names, filter items per number of categories, prices, colors of products, and even companies of the products. The app calculates the number and total prices of products in your cart and make real online payments with visa cards or master cards with the help of stripe backend. Payments for products are allowed for only authorised customers of keezy comfy, so you have to login in first.",
        },
        {
          id: 2,
          img: "/images/keezy-jobster.jpg",
          name: "jobster",
          webURL: "https://keezy-jobster.netlify.app",
          githubURL: "",
          description:
            "Login as a demo user and explore the full potentials of the web app. It allows you to keep track of your job applications, from pending to inteview to declined. It graphically shows how well the user is doing with his or her job applications in statistical forms with barcharts and area charts over a period of time. Now login in as a real user and have fun.",
        },
        {
          id: 3,
          img: "/images/keezy-chat.jpg",
          name: "keezy chat",
          webURL: "https://keezy-chat-app.web.app",
          githubURL: "",
          description:
            "A chat application. Although every signed user can chat on the community space of this application, the user will have to make friends on the app in other to chat them personally. send a friend request to the user and wait for him to accept it before you can both chat on the app. You can also create your personal spaces and add members from your friend list to chat as group. Login and send me a friend request on 'Sani Alhassan' so we can chat.",
        },
        {
          id: 4,
          img: "/images/keezy-netflix.jpg",
          name: "netflix clone",
          webURL: "https://keezy-netflix.netlify.app",
          githubURL: "",
          description:
            "As the name says, a nice clone of netflix's website. This website allows users to watch trailers of the movies they click on. The trailer will have to be available on Youtube first.",
        },
        {
          id: 5,
          img: "/images/keezy-spotify.jpg",
          name: "spotify clone",
          webURL: "https://keezy-spotify.netlify.app",
          githubURL: "",
          description:
            "Still in the development mode, the websites is a clone of spotify.",
        },
      ],
    },
  ],
};
