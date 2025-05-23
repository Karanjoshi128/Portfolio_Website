import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
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

const School = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary}99;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
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

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary}99;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}99;
  margin-bottom: 10px;

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

const EducationCard = ({ education }) => {
  if (!education) return null;

  return (
    <VerticalTimelineElement
      icon={
        <img
          alt={education.school || "School Logo"}
          src={education.img}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      }
      contentStyle={{
        background: "rgba(17, 25, 40, 0.83)",
        color: "#fff",
        borderRadius: "6px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={education.date}
    >
      <Top>
        <Image src={education.img} alt={education.school} />
        <Body>
          <School>{education.school}</School>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>

      {education.grade && (
        <Grade>
          <b>Grade: </b>
          {education.grade}
        </Grade>
      )}

      {education.desc && (
        <Description>
          <Span>{education.desc}</Span>
        </Description>
      )}
    </VerticalTimelineElement>
  );
};

export default EducationCard;
