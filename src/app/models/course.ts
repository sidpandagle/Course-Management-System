export interface CourseModel {
  courseid: string;
  categoryid: string;
  userid: string;
  title: string;
  excerpt?: string;
  price?: number;
  saleprice?: number;
  duration?: number;
  lectures?: number;
  videos?: number;
  levelid: string;
  level?: string;
  description: string;
  featuredimageurl?: string;
  coursestatusid: string;
  coursestatus?: string;
}

export interface Faq {
  faqid?: string;
  question: string;
  answer: string;
}

export interface FaqRoot {
  courseid: string;
  message?: string;
  faqs: Faq[];
}

export interface Announcement {
  title: string;
  courseid: string;
  announcement: string;
}

export interface Topic {
  topicid: string;
  sectionid: string;
  excerpt: string;
  title: string;
  content: string;
  videourl: string;
  ispreview: boolean;
  duration: number;
}

export interface Section {
  title: string;
  courseid: string;
  sectionid: string;
  topic?: Topic[];
}
