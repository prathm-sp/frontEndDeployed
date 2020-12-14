import React from "react";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import RowingIcon from "@material-ui/icons/Rowing";
import PoolIcon from "@material-ui/icons/Pool";
import PetsIcon from "@material-ui/icons/Pets";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import CameraRearIcon from "@material-ui/icons/CameraRear";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import WcOutlinedIcon from "@material-ui/icons/WcOutlined";
import "../style.css";

function Icons(props) {
  var str = props?.name?.replace("_", " ");

  const SingleIcon = () => {
    switch (str) {
      case "Trekking": {
        return <DirectionsWalkIcon id="acceptIcon" />;
      }
      case "Off Roading": {
        return <DriveEtaIcon id="acceptIcon" />;
      }
      case "Climbing": {
        return <FilterHdrIcon id="acceptIcon" />;
      }
      case "White Water_Rafting": {
        return <RowingIcon id="acceptIcon" />;
      }
      case "Wildlife Watching": {
        return <PetsIcon id="acceptIcon" />;
      }
      case "Pets Allowed": {
        return <PetsIcon id="acceptIcon" />;
      }
      case "Cycling": {
        return <DirectionsBikeIcon id="acceptIcon" />;
      }
      case "Swimming": {
        return <PoolIcon id="acceptIcon" />;
      }
      case "Drinking water": {
        return <LocalDrinkIcon id="acceptIcon" />;
      }
      case "Charging Points": {
        return <BatteryChargingFullIcon id="acceptIcon" />;
      }
      case "Covered Area": {
        return <CameraRearIcon id="acceptIcon" />;
      }
      case "Campfire": {
        return <WhatshotOutlinedIcon id="acceptIcon" />;
      }
      case "Shower": {
        return <BathtubOutlinedIcon id="acceptIcon" />;
      }
      case "Toilet": {
        return <WcOutlinedIcon id="acceptIcon" />;
      }
      default: {
        return null;
      }
    }
  };
  return (
    <>
      <SingleIcon style={{ border: "none" }} />
      {/* <DirectionsBikeIcon />
      <DriveEtaIcon />
      <FilterHdrIcon />
      <RowingIcon />
      <PoolIcon />
      <PetsIcon />
      <DirectionsWalkIcon />
      <LocalDrinkIcon />
      <BatteryChargingFullIcon />
      <CameraRearIcon />
      <WhatshotOutlinedIcon />
      <BathtubOutlinedIcon />
      <WcOutlinedIcon />
      <HouseOutlinedIcon />
      <LocalParkingIcon />
      <AccountBalanceIcon /> */}
    </>
  );
}

export default Icons;
