import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary}99;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary}99;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}80;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}99;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}99;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ExperienceCard = ({ experience }) => {
  if (!experience) return null;

  return (
    <VerticalTimelineElement
      icon={
        <img
          src={experience.img}
          alt={experience.company || "Company Logo"}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(17, 25, 40, 0.83)",
        color: "#fff",
        borderRadius: "6px",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      <Top>
        <Image src={experience.img} alt={experience.company} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>

      <Description>
        {experience.desc && <Span>{experience.desc}</Span>}

        {experience.skills?.length > 0 && (
          <Skills>
            <b>Skills</b>
            <ItemWrapper>
              {experience.skills.map((skill, index) => (
                <Skill key={index}>• {skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
