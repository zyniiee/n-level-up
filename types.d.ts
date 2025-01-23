// Footer Related Interfaces
export interface FooterAbout {
  id: number;
  subHeading: string;
  heading: string;
  subText: string;
}

export interface CollaborateLink {
  text: string;
  href: string;
}

export interface SocialMedia {
  img: string;
  href: string;
  label: string;
}

export interface Footer {
  about: FooterAbout[]; // About section of the footer
  collaborate: CollaborateLink[]; // Collaboration links
  social_media: SocialMedia[]; // Social media links
}

// About Interface
export interface About {
  heading: string;
  sub_heading: string;
  cta: string;
}

// Course Interface
export interface Course {
  id: number;
  name: string;
  mainImage: string;
}

// Team Interface
export interface Team {
  id: number;
  name: string;
  position: string;
  mainImage: string;
}

// Review Interface
export interface Review {
  id: number;
  student_name: string;
  mainImage: string;
  suggest: string;
  quote: string;
}

// Blog and GocNhin Interfaces
export interface Blog {
  title: string;
  cta: string;
  href: string;
  post: Post[];
}

export interface GocNhin {
  title: string;
  cta: string;
  href: string;
  post: Post[];
}

// Post Interface
interface Post {
  id: number;
  name: string;
  mainImage: string;
}
