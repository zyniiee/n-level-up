import React from "react";
import { home } from "@/constants/index";
import styles from "../styles/home.module.css";
import { Team as TeamType } from "@/types";
const Team = () => {
  const team: TeamType[] = home[0].team;
  return (
    <section className="section_container flex justify-center ">
      <div className="flex gap-8 ">
        {team.map((member) => (
          <div key={member.id} className={styles.team_member}>
            <img src={member.mainImage} alt={member.name} />
            <div className={styles.team_details}>
              <p className={styles.team_member_name}>
                Thầy
                <span> {member.name}</span>
              </p>
              <p className="team_member-position">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
