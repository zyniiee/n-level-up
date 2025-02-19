import React from "react";
import { home } from "@/constants";
import Image from "next/image";
import { Review } from "@/types";
interface ReviewSectionProps {
  reviews: Review[];
}
const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <section className="md:px-[10vw] px-[2rem] xl:pt-[15rem] pt-20 w-100 overflow-x-auto">
      <div className="flex flex-nowrap gap-2">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="review_card xl:min-w-[20vw] min-w-[50vw] flex flex-col whitespace-normal gap-y-6"
          >
            <div className="flex gap-x-4">
              <div className="review_card_image">
                <img src={review.mainImage} alt={review.student_name} />
              </div>
              <div>
                <p className="page_text_small">
                  {review.student_name} <span> đề xuất</span>
                </p>
                <p className="page_text_small">{review.suggest}</p>
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
