import React from "react";
import { Footer } from "@/types";
import { useCourses } from "@/app/context/CourseContext";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";

const FooterLinks = ({ footer }: { footer: Footer }) => {
  const { courses } = useCourses();
  const href = "/courses";

  return (
    <div className="flex lg:flex-row flex-col justify-center gap-8 lg:gap-16">
      {/* Courses Section */}
      <div className="footer-section">
        <h4 className="uppercase font-bold pb-4">Courses</h4>
        <ul>
          {courses.map((course) => {
            const slug =
              course.properties.Slug?.rich_text?.[0]?.plain_text || "";
            return (
              <li key={course.id} className="gap-4">
                <SecondaryButton
                  text={
                    course.properties.Name?.title?.[0]?.text?.content ||
                    "Untitled Course"
                  }
                  href={`${href}/${slug}`}
                  variant="text"
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Collaborate Section */}
      <div className="footer-collaborate">
        <h4 className="uppercase font-bold pb-4">Collaborate</h4>
        <ul>
          {footer.collaborate.map((link, index) => (
            <li key={index}>
              <SecondaryButton
                text={link.text}
                href={link.href}
                variant="text"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Inspiration Section */}
      <div className="footer-collaborate">
        <h4 className="uppercase font-bold pb-4">Inspiration</h4>
        <ul>
          <li>
            <SecondaryButton text="Blog" href="/blog" variant="text" />
          </li>
          <li>
            <SecondaryButton text="Góc nhìn" href="/goc-nhin" variant="text" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
