import React from "react";
import { Footer } from "@/types";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import styles from "../footer.module.css";

const FooterSocial = ({
  socialMedia,
}: {
  socialMedia: Footer["social_media"];
}) => {
  return (
    <div className="">
      <ul className="social-icons flex gap-4">
        {socialMedia.map((social, index) => (
          <li key={index} className={styles.footer_sns}>
            <SecondaryButton
              href={social.href}
              variant="icon"
              icon={<img src={social.img} alt={social.label} />}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocial;
