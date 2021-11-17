import React, { useEffect, useState } from "react";
import Spinner from "../../common/Spinner";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from "@material-ui/core";
import {
  BarChart as BarChartIcon,
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon,
  User,
  Database
} from "react-feather";
import ProfileItem from "./ProfileItem";
import { useAuthState } from "../../../context/AuthContext";
import { getUser } from "../../../actions/authActions";

const studentDetails = [
  {
    icon: UsersIcon,
    title: "Name"
  },
  {
    icon: UsersIcon,
    title: "ID No"
  },
  {
    icon: Database,
    title: "Email"
  },
  {
    icon: BarChartIcon,
    title: "Deparment"
  },
  {
    icon: BarChartIcon,
    title: "Year"
  },
  {
    icon: BarChartIcon,
    title: "Degree"
  },
  {
    icon: ShoppingBagIcon,
    title: "Wallet Balance"
  }
];

const facultyDetails = [
  {
    icon: UsersIcon,
    title: "Name"
  },

  {
    icon: UsersIcon,
    title: "ID No"
  },
  {
    icon: Database,
    title: "Email"
  },
  {
    icon: BarChartIcon,
    title: "Deparment"
  },
  {
    icon: BarChartIcon,
    title: "Position"
  },
  {
    icon: BarChartIcon,
    title: "Description"
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
    backgroundColor: "#f1f1f1"
  },
  desktopDrawer: {
    marginTop: 75,
    width: 1400,
    top: 60,
    marginLeft: 1,
    maxHeight: 500
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
    backgroundColor: "black"
  }
}));

export default function Profile({ onMobileClose, openMobile }) {
  const classes = useStyles();
  const { userType, userID, token } = useAuthState();
  const [detailList, setDetailList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (userType === "student") {
      getUser({ id: userID, token, userType }).then((fetchedStudents) => {
        const details = [
          fetchedStudents.data["name"],
          fetchedStudents.data["studentID"],
          fetchedStudents.data["email"],
          fetchedStudents.data["department"],
          fetchedStudents.data["degree"],
          fetchedStudents.data["year"],
          fetchedStudents.data["walletBalance"],
        ];
        setDetailList(details);
        setLoading(false);
      });
    } else {
      getUser({ id: userID, token, userType }).then((fetchedFaculty) => {
        const details = [
          fetchedFaculty.data["name"],
          fetchedFaculty.data["facultyID"],
          fetchedFaculty.data["email"],
          fetchedFaculty.data["department"],
          fetchedFaculty.data["position"],
          fetchedFaculty.data["description"]
        ];
        setDetailList(details);
        setLoading(false);
      });
    }
  }, [token, userID, userType]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="top"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <Box height="50%" width="100%" display="flex">
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              p={2}
            >
              <Avatar className={classes.avatar}>
                <User />
              </Avatar>
              <Typography
                className={classes.name}
                color="textPrimary"
                variant="h5"
              >
                {detailList[0]}
              </Typography>
            </Box>
            <Divider />
            <Box p={2}>
              <List>
                {userType === "student"
                  ? studentDetails.map((detail, idx) => (
                    <ProfileItem
                      key={detail.title}
                      title={detail.title}
                      value={detailList[idx]}
                      icon={detail.icon}
                      index={idx}
                    />
                  ))
                  : facultyDetails.map((detail, idx) => (
                    <ProfileItem
                      key={detail.title}
                      title={detail.title}
                      value={detailList[idx]}
                      icon={detail.icon}
                      index={idx}
                    />
                  ))}
              </List>

            </Box>
            <Box flexGrow={1} />
          </Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="center"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          <Box height="50%" width="100%" display="flex">
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              p={2}
            >
              <Avatar className={classes.avatar}>
                <User />
              </Avatar>
              <Typography
                className={classes.name}
                color="textPrimary"
                variant="h5"
              >
                {detailList[0]}
              </Typography>
            </Box>
            <Divider />
            <Box p={2}>
              <List>
                {userType === "student" ? (
                  <>
                    {studentDetails.map((detail, idx) => (
                      <ProfileItem
                        key={detail.title}
                        title={detail.title}
                        value={detailList[idx]}
                        icon={detail.icon}
                        index={idx}
                      />
                    ))}

                  </>
                ) : (
                  facultyDetails.map((detail, idx) => (
                    <ProfileItem
                      key={detail.title}
                      title={detail.title}
                      value={detailList[idx]}
                      icon={detail.icon}
                      index={idx}
                    />
                  ))
                )}
              </List>
            </Box>
            <Box flexGrow={1} />
          </Box>
        </Drawer>
      </Hidden>
    </>
  );
}