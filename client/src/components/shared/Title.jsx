/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chatopia",
  description = "This is a chat-app named `Chatopia`",
}) => {

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
