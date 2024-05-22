import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public firstName = "Christian";
  public lastName = "Aromin";
  public email = "caromin19@gmail.com";

  public introPara1 = "I am a forward-thinking IT professional with team based leadership experience with a background in software development.";
  public introPara2 = "Thank you for visiting my online resume, if you have any questions, please don't hesitate to reach out!";
  
  public aboutmePara1 = `Hello, my name is ${this.firstName}, and thank you for visiting my online resume/portfolio.`;
  public aboutmePara2 = "I have created and updated enterprise level applications for use by government organizations."
  public aboutmePara3 = "I am originally from San Francisco, CA and currently reside in Jacksonville, FL. I have been involved in Web Development since 2018."
  public aboutmePara4 = `If you have any questions, please do not hesitate to get in touch via `

  public resumeArr: any[] = [
    { dateRange: 'Dec 2022 - Present', title: "Consultant, Full Stack Web Developer", company: 'Accenture Federal Services', 
      summary: `Responsible for the overall technological direction in all aspects of the company’s operation and 
      for the direct communication with upper management and shareholders. Part of a team to successfully navigate the company 
      from a startx-up to one of Japan’s fastest-growing inbound tourism-related media companies.`
    },
    { dateRange: 'Mar 2021 - Nov 2022', title: "Senior Analyst, Full Stack Web Developer", company: 'Accenture Federal Services', 
    summary: `Responsible for the overall technological direction in all aspects of the company’s operation and 
    for the direct communication with upper management and shareholders. Part of a team to successfully navigate the company 
    from a startx-up to one of Japan’s fastest-growing inbound tourism-related media companies.`
    }, 
    { dateRange: 'Nov 2019 - Mar 2021', title: "Software Engineer",  company: 'Revature', 
    summary: `Responsible for the overall technological direction in all aspects of the company’s operation and 
    for the direct communication with upper management and shareholders. Part of a team to successfully navigate the company 
    from a startx-up to one of Japan’s fastest-growing inbound tourism-related media companies.`
    }
  ];
}
