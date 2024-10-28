/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon,
} from "@mui/icons-material";
import moment from "moment/moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid #000",
          paddingTop: "1rem",
        }}
      />
      <ProfileCard heading={"bio"} text={"A programmer who loves to code"} />
      <ProfileCard
        heading={"Username"}
        text={"varadgupta"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Varad Gupta"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment('2023-11-04T18:30:00.000Z').fromNow()}
        Icon={<CalenderIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      spacing={"1rem"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      color={"#000"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant="h6">{text}</Typography>
        <Typography color="grey" variant="body1">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
