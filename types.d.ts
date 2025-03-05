//NavMenu
export interface NavItem {
  title: string;
  href: string;
}
export interface Navigation {
  main: NavItem[];
}

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

interface NotionText {
  plain_text: string;
}

interface NotionTitleProperty {
  title: NotionText[];
}

interface NotionRichTextProperty {
  rich_text: NotionText[];
}

interface NotionStatusProperty {
  status: {
    name: string;
  };
}

interface NotionCheckboxProperty {
  checkbox: boolean;
}

interface NotionNumberProperty {
  number: number;
}

interface NotionUrlProperty {
  url: string;
}

interface NotionDateProperty {
  date: {
    start: string;
    end?: string;
  };
}

interface NotionSelectProperty {
  select: {
    name: string;
  };
}

interface NotionMultiSelectProperty {
  multi_select: Array<{
    name: string;
  }>;
}

// Blog post type
export interface NotionBlogPost {
  id: string;
  properties: {
    Name: NotionTitleProperty;
    Status?: NotionStatusProperty;
    Slug?: NotionRichTextProperty;
    Description?: NotionRichTextProperty;
    Featured?: NotionCheckboxProperty;
    Midjourney?: NotionCheckboxProperty;
    Typo?: NotionCheckboxProperty;
    UIUX?: NotionCheckboxProperty;
    Layout?: NotionCheckboxProperty;
    Branding?: NotionCheckboxProperty;
    Idea?: NotionCheckboxProperty;
    "Courses References"?: NotionRichTextProperty;
    "main-image"?: NotionUrlProperty;
    "Main Text"?: NotionRichTextProperty;
    "Hide Slide"?: NotionCheckboxProperty;
    "more images"?: NotionUrlProperty;
    paragraph?: NotionRichTextProperty;
    Categories?: NotionMultiSelectProperty;
    "Categories 2"?: NotionMultiSelectProperty;
  };
}

// Course type
export interface NotionCourse {
  id: string;
  properties: {
    Name: NotionTitleProperty;
    Status?: NotionStatusProperty;
    Slug?: NotionRichTextProperty;
    "Thứ tự"?: NotionNumberProperty;
    Details?: NotionRichTextProperty;
    "main-image"?: NotionUrlProperty;
    "course short description"?: NotionRichTextProperty;
    price?: NotionRichTextProperty;
    "Số buổi học"?: NotionRichTextProperty;
    "Trình độ"?: NotionSelectProperty;
    "Giảng viên"?: NotionRichTextProperty;
    "Lịch học"?: NotionRichTextProperty;
    "Giờ học"?: NotionRichTextProperty;
    "p/s"?: NotionRichTextProperty;
    "About Mentor"?: NotionRichTextProperty;
    "Recommend Reading"?: NotionNumberProperty;
    "Bài Học Viên"?: NotionNumberProperty;
    "Thông tin khoá học"?: NotionRichTextProperty;
    // Lesson info
    "Buổi 1"?: NotionRichTextProperty;
    "Thông Tin Buổi 1"?: NotionRichTextProperty;
    "Buổi 2"?: NotionRichTextProperty;
    "Thông Tin Buổi 2"?: NotionRichTextProperty;
    "Buổi 3"?: NotionRichTextProperty;
    "Thông Tin Buổi 3"?: NotionRichTextProperty;
    "Buổi 4"?: NotionRichTextProperty;
    "Thông Tin Buổi 4"?: NotionRichTextProperty;
    "Buổi 5"?: NotionRichTextProperty;
    "Thông Tin Buổi 5"?: NotionRichTextProperty;
    "Buổi 6"?: NotionRichTextProperty;
    "Thông Tin Buổi 6"?: NotionRichTextProperty;
    "Buổi 7"?: NotionRichTextProperty;
    "Thông Tin Buổi 7"?: NotionRichTextProperty;
    "Buổi 8"?: NotionRichTextProperty;
    "Thông Tin Buổi 8"?: NotionRichTextProperty;
  };
}a

export interface CoursesDataResult {
  allCourses?: NotionCourse[];
  error?: string;
}

// Goc Nhin type
export interface NotionGocNhin {
  id: string;
  properties: {
    Name: NotionTitleProperty;
    Status?: NotionStatusProperty;
    Slug?: NotionRichTextProperty;
    "Ngày Publish"?: NotionDateProperty;
    Featured?: NotionCheckboxProperty;
    Description?: NotionRichTextProperty;
    "main-image"?: NotionUrlProperty;
    "Main Text"?: NotionRichTextProperty;
    "Image 1"?: NotionUrlProperty;
    Images?: NotionUrlProperty;
    "text 2"?: NotionRichTextProperty;
  };
}

// Gallery type
export interface NotionGallery {
  id: string;
  properties: {
    Name: NotionTitleProperty;
    Status?: NotionStatusProperty;
    Featured?: NotionCheckboxProperty;
    Slug?: NotionRichTextProperty;
    "Created On"?: NotionDateProperty;
    Filter?: NotionMultiSelectProperty;
    "main-image"?: NotionUrlProperty;
    References?: NotionRichTextProperty;
  };
}
