import React from "react";
import { home } from "@/constants";
import styles from "../styles/home.module.css";
import Image from "next/image";
import { Review } from "@/types";
interface ReviewSectionProps {
  reviews: Review[];
}
const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <section className={`${styles.review_cover} pt-32 w-100 overflow-x-auto`}>
      <div className="flex flex-nowrap gap-2">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`${styles.review_card} flex flex-col whitespace-normal gap-y-6`}
          >
            <div className="flex gap-x-4">
              <div className={`${styles.review_card_image}`}>
                <img src={review.mainImage} alt={review.student_name} />
              </div>
              <div>
                <p className={`${styles.page_text_small} `}>
                  {review.student_name} <span> đề xuất</span>
                </p>
                <p className={`${styles.page_text_small}`}>{review.suggest}</p>
              </div>
            </div>
            <p className="font-semibold">{review.quote}</p>
            <Image
              src="./images/5-star.svg"
              alt="5 star review"
              width={100}
              height={100}
            />
          </div>
        ))}
        <div className="p-8"></div>
      </div>
    </section>
  );
};

export default ReviewSection;
