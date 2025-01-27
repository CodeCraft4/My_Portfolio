import {
  MyAnalyticsTypes,
  MyProjectTypes,
  MyServicesTypes,
  SliderTypes,
} from "@muc/types";

export const SLIDER_DATA: SliderTypes[] = [
  {
    title: "Imad",
    library: "A Front-end-Developer",
  },
  {
    title: "App Developer",
    library: "( Android / IOS Developer )",
  },
  {
    title: "Web Developer",
    library: "( 2+ Years Experience in React )",
  },
];

export const MY_SERVICES: MyServicesTypes[] = [
  {
    id: 1,
    title: "WEB DESIGNING",
    poster: "/assets/images/service-1.svg",
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    poster: "/assets/images/service-2.svg",
  },
  {
    id: 3,
    title: "FRONT-END-DEVELOPMENT",
    poster: "/assets/images/service-3.svg",
  },
  {
    id: 4,
    title: "APP DEVELOPMENT",
    poster: "/assets/images/service-4.svg",
  },
  {
    id: 5,
    title: "DATABASE MANAGEMENT",
    poster: "/assets/images/service-5.svg",
  },
  {
    id: 6,
    title: "CUSTOMIZE WEBSITE",
    poster: "/assets/images/service-6.svg",
  },
];

export const MY_ANALYTIC: MyAnalyticsTypes[] = [
  {
    id: 1,
    title: "Awards",
    value: 8,
  },
  {
    id: 2,
    title: "Completed Projects",
    value: 26,
  },
  {
    id: 3,
    title: "Review Customers",
    value: 112,
  },
  {
    id: 4,
    title: "Cups of Tea",
    value: 454,
  },
];

export const MY_PROJECTS: MyProjectTypes[] = [
  {
    id: 1,
    poster: "/assets/images/e-commerce.jpg",
    title: "E-Commerce Store",
    category: "E-WEBSITE",
    Gallery: [
      {
        title: "Technology Use",
        description: `This website specially developed in React with Typescript.
        The UI make in the Material UI (MUI).
        And Firebase use for Products Storing and multiple services like Orders & Add to cart.`,
        gallery1:
          "https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 450,
      },
      {
        title: "Works",
        description: `This website works easily and to orders your products with the help of stripe methods and Google Play method.`,
        gallery2:
          "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Why Use?",
        description: `The main Works of the site to find the user our needed products
         easily with the help of categories Filter and to find by name or price.
         The UI of this site is more clear and easy to attract the user experiences.`,
        gallery3:
          "https://images.pexels.com/photos/4440789/pexels-photo-4440789.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 900,
      },
    ],
    link: "https://e-store-tawny-seven.vercel.app/",
    width: 400,
  },
  {
    id: 2,
    poster: "/assets/images/chat-app.jpg",
    title: "Chat Together",
    category: "SOCIAL APP",
    Gallery: [
      {
        title: "Technology Use",
        description: `This is the Social App to make a React Native library.
        to make our account for registration and after to chat together and some video call and audio calls.`,
        gallery1:
          "https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Works",
        description: `The main works of the App is to Collaborate chatting our friend.
         And to update and delete our account. And to update status watch and send some reactions.`,
        gallery2:
          "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Why Use?",
        description: `This Application use for chatting & Video/Audio call functionality to find our
         registered friend or GF. The main purpose of this app the collaborate with registered friend.`,
        gallery3:
          "https://images.pexels.com/photos/8937900/pexels-photo-8937900.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 900,
      },
    ],
    link: "https://github.com/CodeCraft4/Chat_application",
    width: 800,
  },
  {
    id: 3,
    poster: "/assets/images/pizza-delivery.webp",
    title: "Pizza Delivery",
    category: "DELIVERY APP",
    Gallery: [
      {
        title: "Technology",
        description: `This Delivery App specially developed in React Native + related library like (React Native re-animated).
           And to store the products and order in the firebase fully functionality in the App.`,
        gallery1:
          "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Works",
        description: `The main works of this site to order your Pizza with the help of this app.
        And to make some animated UI for user attraction.`,
        gallery2:
          "https://images.pexels.com/photos/3987245/pexels-photo-3987245.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Why Use?",
        description: `The platform supports secure payment 
        options, including credit/debit cards, digital wallets, 
        and cash on delivery, ensuring flexibility and convenience.
         Exclusive discounts, promo codes, and loyalty programs are
         integrated to enhance user satisfaction and encourage repeat usage.`,
        gallery3:
          "https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 900,
      },
    ],
    link: "https://github.com/CodeCraft4/Food-Delivery",
    width: 800,
  },
  {
    id: 4,
    poster: "https://images.pexels.com/photos/5911300/pexels-photo-5911300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Find Soulmate",
    category: "Life Partner",
    Gallery: [
      {
        title: "Technology",
        description: `This website make in the Next.js + MUI. and its data and tips is Dynamic for for to find a best Rishta for our life.`,
        gallery1:
          "https://images.pexels.com/photos/6249050/pexels-photo-6249050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 450,
      },
      {
        title: "Focus",
        description: `This web application is designed to help users to find rishta,
         specially make for adult Her/Him and to choose a best partner in their daily lives.`,
        gallery2:
          "https://images.pexels.com/photos/5910995/pexels-photo-5910995.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Why Use?",
        description: `Interactive features like mood tracking,
         journaling prompts, and daily reminders encourage consistent mindfulness habits. 
         The app also includes mindfulness challenges and progress tracking, empowering users
          to measure their mental wellness journey.`,
        gallery3:
          "https://images.pexels.com/photos/3756460/pexels-photo-3756460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 900,
      },
    ],
    link: "https://rishtapakistan.netlify.app/",
    width: 400,
  },
  {
    id: 5,
    poster: "/assets/images/course-academy.webp",
    title: "Course Academy",
    category: "LEARNING WEB",
    Gallery: [
      {
        title: "Develop",
        description: `This Website makes in the Next.js + Typescript.
         and for UI design to make a some animated Material UI (MUI).
         And to make a some chatting functionality to our teacher.`,
        gallery1:
          "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Focus",
        description: ` The platform offers a wide range of courses across various domains, including
         technology, business, arts, personal development, and more, catering to
          learners of all levels—from beginners to advanced professionals.`,
        gallery2:
          "https://images.pexels.com/photos/7713173/pexels-photo-7713173.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Why Use?",
        description: `The platform is accessible on multiple devices, 
        enabling learners to study anytime, anywhere. Flexible payment options,
         discounts, and free trial courses make it affordable and convenient for 
         a diverse audience. Whether upgrading skills for career growth or pursuing 
         a passion, this online course academy is a one-stop destination for quality 
         education and professional development.`,
        gallery3:
          "https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 900,
      },
    ],
    link: "https://codecraft4.github.io/Course__Academy/",
    width: 400,
  },
  {
    id: 6,
    poster: "/assets/images/workout-tips.webp",
    title: "Healthy Life Tips",
    category: "WORKOUT APP",
    Gallery: [
      {
        title: "Use Technology",
        description: `This App makes in The Expo + React Native and some animated library for UI.`,
        gallery1:
          "https://images.pexels.com/photos/8436694/pexels-photo-8436694.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Works",
        description: `This healthy lifestyle app is designed to help users achieve their fitness goals and maintain a 
        balanced routine through personalized workout schedules and training plans.`,
        gallery2:
          "https://images.pexels.com/photos/6539792/pexels-photo-6539792.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 450,
      },
      {
        title: "Why Use?",
        description: `Designed with a user-friendly interface and AI-powered insights,
         the app adapts to individual progress and provides personalized
          recommendations for optimal results. Whether aiming 
          to lose weight, build strength, or improve overall fitness,
         this app offers a structured and supportive approach 
         to achieving a healthier lifestyle.`,
        gallery3:
          "https://images.pexels.com/photos/6203491/pexels-photo-6203491.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 900,
      },
    ],
    link: "https://github.com/CodeCraft4/Expo_Healthy-life",
    width: 800,
  },
];
