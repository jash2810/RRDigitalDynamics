import { useTheme } from "@mui/material";
import React from "react";
import "./Services.css";
import PageSectionTitle from "../../Components/PageSectionTitle/PageSectionTitle";
import ServiceCards from '../../Components/ServiceCards/ServiceCards'

function Services({top}) {
  const theme = useTheme();
  const serviceCardsContentArray = [
    {
      title: "Social Media Marketing",
      description:
        "RR Digital Dynamics is a social media marketing and management agency located in Ahmedabad.",
      color: "orange",
      serviceURL: '/services/SocialMediaMarketing'
    },
    {
      title: "SEO",
      description: "We are one of the best SEO services provider in Ahmedabad",
      color: "blue",
      serviceURL: '/services/SEO'
    },
    {
      title: "PPC",
      description:
        "RR Digital Dynamics is one of the best PPC management agency in Ahmedabad.",
        serviceURL: '/services/PPC'
    },
    {
      title: "Web Development",
      description:
        "Our Web Development expert can provide you the best service that meets your requirements.",
      color: "green",
      serviceURL: ''
    },
  ];
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.light,
        paddingTop: `${top}px`,
        paddingBottom: "50px",
      }}
    >
      <PageSectionTitle
        pageTitle={"Our Proven Services"}
        pageSubTitle={
          "Marketing fundamentals drive results – not tactics or fads. That’s what our approach is all about: universal performance marketing truths that stand the test of time and help you win."
        }
      />
      <ServiceCards serviceCardsContentArray={serviceCardsContentArray} />
    </div>
  );
}

export default Services;
