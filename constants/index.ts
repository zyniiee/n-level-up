import { About, Course, Team, Review, Footer, Navigation } from "../types";
export interface Home {
  about: About;
  team: Team[];
  reviews: Review[];
}
export const home: Home[] = [
  {
    about: {
      heading:
        "Để xây dựng một “Tư duy Thiết kế Đồ họa chuyên nghiệp” là điều không hề đơn giản. Rất dễ để nhận thấy các Trường Đào tạo hiện nay đang có xu hướng chú tâm vào đào tạo thiết kế mà sao nhãng đi việc khai thác yếu tố tư duy sáng tạo.",
      sub_heading:
        "Với sứ mệnh phát triển ngành Thiết kế Sáng tạo, LEVEL UP đã thấu hiểu được điều này đồng thời là nhịp cầu kết nối các thành viên trong cộng đồng, mang đến nguồn cảm hứng mạnh mẽ cho các nhà thiết kế trẻ. Thông qua các chương trình, khoá học giảng dạy ở trình độ nâng cao",
      cta: "Xem chi tiết",
    },
    team: [
      {
        id: 1,
        name: "Châu Đức Vũ",
        position: "Founder LEVEL UP",
        mainImage: "./images/duc_vu.png",
      },
      {
        id: 2,
        name: "Phan Nhật Trung",
        position: "Cố vấn chuyên môn LEVEL UP",
        mainImage: "./images/nhat_trung.png",
      },
      {
        id: 3,
        name: "Thanh Phan",
        position: "Co-Founder LEVEL UP",
        mainImage: "./images/thanh_phan.png",
      },
    ],
    reviews: [
      {
        id: 1,
        student_name: "Luis Pham",
        mainImage: "/images/review.png",
        suggest: "LEVEL UP - Art & Design Course",
        quote:
          "Mình là học viên của khoá học Advanced Typograph. Khoá học Advanced Typography đã giúp mình hiểu thêm được tầm quan trọng của Typography trong thiết kế và mang lại rất nhiều kiến thức thú vị. Giảng viên rất có tâm, thầy luôn tìm cách giải thích dễ hiểu và gần gũi nhất. ",
      },
      {
        id: 2,
        student_name: "Luis Pham",
        mainImage: "/images/review.png",
        suggest: "LEVEL UP - Art & Design Course",
        quote:
          "Mình là học viên của khoá học Advanced Typograph. Khoá học Advanced Typography đã giúp mình hiểu thêm được tầm quan trọng của Typography trong thiết kế và mang lại rất nhiều kiến thức thú vị. Giảng viên rất có tâm, thầy luôn tìm cách giải thích dễ hiểu và gần gũi nhất. ",
      },
      {
        id: 3,
        student_name: "Luis Pham",
        mainImage: "/images/review.png",
        suggest: "LEVEL UP - Art & Design Course",
        quote:
          "Mình là học viên của khoá học Advanced Typograph. Khoá học Advanced Typography đã giúp mình hiểu thêm được tầm quan trọng của Typography trong thiết kế và mang lại rất nhiều kiến thức thú vị. Giảng viên rất có tâm, thầy luôn tìm cách giải thích dễ hiểu và gần gũi nhất. ",
      },
      {
        id: 4,
        student_name: "Luis Pham",
        mainImage: "/images/review.png",
        suggest: "LEVEL UP - Art & Design Course",
        quote:
          "Mình là học viên của khoá học Advanced Typograph. Khoá học Advanced Typography đã giúp mình hiểu thêm được tầm quan trọng của Typography trong thiết kế và mang lại rất nhiều kiến thức thú vị. Giảng viên rất có tâm, thầy luôn tìm cách giải thích dễ hiểu và gần gũi nhất. ",
      },
      {
        id: 5,
        student_name: "Luis Pham",
        mainImage: "/images/review.png",
        suggest: "LEVEL UP - Art & Design Course",
        quote:
          "Mình là học viên của khoá học Advanced Typograph. Khoá học Advanced Typography đã giúp mình hiểu thêm được tầm quan trọng của Typography trong thiết kế và mang lại rất nhiều kiến thức thú vị. Giảng viên rất có tâm, thầy luôn tìm cách giải thích dễ hiểu và gần gũi nhất. ",
      },
      {
        id: 6,
        student_name: "Luis Pham",
        mainImage: "/images/review.png",
        suggest: "LEVEL UP - Art & Design Course",
        quote:
          "Mình là học viên của khoá học Advanced Typograph. Khoá học Advanced Typography đã giúp mình hiểu thêm được tầm quan trọng của Typography trong thiết kế và mang lại rất nhiều kiến thức thú vị. Giảng viên rất có tâm, thầy luôn tìm cách giải thích dễ hiểu và gần gũi nhất. ",
      },
    ],
  },
];
export const navMenuFooter: Navigation = {
  main: [
    {
      title: "Giới thiệu",
      href: "/about",
    },
    {
      title: "Học viên",
      href: "/",
    },
    {
      title: "Góc nhìn",
      href: "/",
    },
    {
      title: "Blog",
      href: "/",
    },
    {
      title: "Liên hệ",
      href: "/",
    },
  ],
};
export const footerData: Footer = {
  about: [
    {
      id: 1,
      subHeading: "learning",
      heading: "Elevating brands though Digital innovation",
      subText:
        "Choose a topic below to see a comprehensive list of our related video content, articles, resources, and courses.",
    },
    {
      id: 2,
      subHeading: "learning",
      heading: "Elevating brands though Digital innovation",
      subText:
        "Choose a topic below to see a comprehensive list of our related video content, articles, resources, and courses.",
    },
    {
      id: 3,
      subHeading: "learning",
      heading: "Elevating brands though Digital innovation",
      subText:
        "Choose a topic below to see a comprehensive list of our related video content, articles, resources, and courses.",
    },
  ],

  collaborate: [
    {
      text: "Work with us",
      href: "/",
    },
    {
      text: "Advertise with us",
      href: "/",
    },
    {
      text: "Hire us to speak",
      href: "/",
    },
    {
      text: "Get support",
      href: "/",
    },
  ],

  social_media: [
    {
      img: "./icons/facebook.svg",
      href: "/",
      label: "facebook",
    },
    {
      img: "./icons/behance.svg",
      href: "/",
      label: "behance",
    },
    {
      img: "./icons/instagram.svg",
      href: "/",
      label: "instagram",
    },
    {
      img: "./icons/youtube.svg",
      href: "/",
      label: "youtube",
    },
    {
      img: "./icons/tiktok.svg",
      href: "/",
      label: "tiktok",
    },
  ],
};
export const sampleCourses: Course[] = [
  {
    id: 1,
    name: "Advanced typography",
    mainImage: "/images/typo.jpg",
  },
  {
    id: 2,
    name: "Creative Layout Techniques",
    mainImage: "/images/layout.jpg",
  },
  {
    id: 3,
    name: "Brand Identity Essentials",
    mainImage: "/images/brand_identity.jpg",
  },
  {
    id: 4,
    name: "Midjourney Art Creation",
    mainImage: "/images/midjourney.jpg",
  },
  {
    id: 5,
    name: "UI - UX Foundation",
    mainImage: "/images/ui.jpg",
  },
];
