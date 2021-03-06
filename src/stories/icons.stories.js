import React from "react";

import AccountIcon from "../components/Icons/svg/AccountIcon";
import AddCircleIcon from "../components/Icons/svg/AddCircleIcon";
import AddIcon from "../components/Icons/svg/AddIcon";
import ArrowDownIcon from "../components/Icons/svg/ArrowDownIcon";
import ArrowLeftIcon from "../components/Icons/svg/ArrowLeftIcon";
import ArrowRightIcon from "../components/Icons/svg/ArrowRightIcon";
import ArrowUpwardIcon from "../components/Icons/svg/ArrowUpwardIcon";
import ArrowDownwardIcon from "../components/Icons/svg/ArrowDownwardIcon";
import CalendarIcon from "../components/Icons/svg/CalendarIcon";
import CancelIcon from "../components/Icons/svg/CancelIcon";
import CheckIcon from "../components/Icons/svg/CheckIcon";
import CloseIcon from "../components/Icons/svg/CloseIcon";
import CreditCardIcon from "../components/Icons/svg/CreditCardIcon";
import CuponeriaIcon from "../components/Icons/svg/CuponeriaIcon";
import DashIcon from "../components/Icons/svg/DashIcon";
import EditIcon from "../components/Icons/svg/EditIcon";
import EmailIcon from "../components/Icons/svg/EmailIcon";
import ExternalLinkIcon from "../components/Icons/svg/ExternalLinkIcon";
import FacebookIcon from "../components/Icons/svg/FacebookIcon";
import FilterIcon from "../components/Icons/svg/FilterIcon";
import GoogleIcon from "../components/Icons/svg/GoogleIcon";
import GpsNotFixed from "../components/Icons/svg/GpsNotFixed";
import HeartEmptyIcon from "../components/Icons/svg/HeartEmptyIcon";
import HeartFilledIcon from "../components/Icons/svg/HeartFilledIcon";
import HomeIcon from "../components/Icons/svg/HomeIcon";
import InstagramIcon from "../components/Icons/svg/InstagramIcon";
import ListRoundIcon from "../components/Icons/svg/ListRoundIcon";
import LoaderIcon from "../components/Icons/svg/LoaderIcon";
import PlaceIcon from "../components/Icons/svg/PlaceIcon";
import QrcodeIcon from "../components/Icons/svg/QrcodeIcon";
import RotateLeftIcon from "../components/Icons/svg/RotateLeftIcon";
import RotateRightIcon from "../components/Icons/svg/RotateRightIcon";
import SearchIcon from "../components/Icons/svg/SearchIcon";
import ShareIcon from "../components/Icons/svg/ShareIcon";
import SolidDownArrowIcon from "../components/Icons/svg/SolidDownArrowIcon";
import StarHalfIcon from "../components/Icons/svg/StarHalfIcon";
import StarIcon from "../components/Icons/svg/StarIcon";
import StarOutlineIcon from "../components/Icons/svg/StarOutlineIcon";
import StoreIcon from "../components/Icons/svg/StoreIcon";
import TwitterIcon from "../components/Icons/svg/TwitterIcon";
import WhatsappIcon from "../components/Icons/svg/WhatsappIcon";
import VisibilityOffIcon from "../components/Icons/svg/VisibilityOffIcon";
import VisibilityOnIcon from "../components/Icons/svg/VisibilityOnIcon";
import YoutubeIcon from "../components/Icons/svg/YoutubeIcon";
import ZoomInIcon from "../components/Icons/svg/ZoomInIcon";
import ZoomOutIcon from "../components/Icons/svg/ZoomOutIcon";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Icons", module);
stories.add("account", () => <AccountIcon color="red" />);
stories.add("add", () => <AddIcon color="red" />);
stories.add("add circle", () => <AddCircleIcon color="red" />);
stories.add("arrow down", () => <ArrowDownIcon color="red" />);
stories.add("arrow left", () => <ArrowLeftIcon color="red" />);
stories.add("arrow right", () => <ArrowRightIcon color="red" />);
stories.add("arrow upward", () => <ArrowUpwardIcon color="red" />);
stories.add("arrow downward", () => <ArrowDownwardIcon color="red" />);
stories.add("calendar", () => <CalendarIcon color="red" />);
stories.add("cancel", () => <CancelIcon color="red" />);
stories.add("check", () => <CheckIcon color="red" />);
stories.add("close", () => <CloseIcon color="red" />);
stories.add("credit card", () => <CreditCardIcon color="red" />);
stories.add("cuponeria", () => <CuponeriaIcon color="red" />);
stories.add("dash", () => <DashIcon color="red" />);
stories.add("edit", () => <EditIcon color="red" />);
stories.add("email", () => <EmailIcon color="red" />);
stories.add("email negative", () => <EmailIcon color="red" negative={true} />);
stories.add("external link", () => <ExternalLinkIcon color="red" />);
stories.add("facebook", () => <FacebookIcon color="red" />);
stories.add("filter", () => <FilterIcon color="red" />);
stories.add("google", () => <GoogleIcon color="red" />);
stories.add("gps not fixed", () => <GpsNotFixed color="red" />);
stories.add("heart empty", () => <HeartEmptyIcon color="red" />);
stories.add("heart filled", () => <HeartFilledIcon color="red" />);
stories.add("home", () => <HomeIcon color="red" />);
stories.add("instagram", () => <InstagramIcon color="red" />);
stories.add("instagram negative", () => (
  <InstagramIcon color="red" negative={true} />
));
stories.add("list round", () => <ListRoundIcon color="red" />);
stories.add("loader", () => <LoaderIcon size="24px" />);
stories.add("place", () => <PlaceIcon color="red" />);
stories.add("qrcode", () => <QrcodeIcon color="red" />);
stories.add("rotate left", () => <RotateLeftIcon color="red" />);
stories.add("rotate right", () => <RotateRightIcon color="red" />);
stories.add("search", () => <SearchIcon color="red" />);
stories.add("share", () => <ShareIcon color="red" />);
stories.add("solid down arrow", () => <SolidDownArrowIcon color="red" />);
stories.add("star half", () => <StarHalfIcon color="red" />);
stories.add("star", () => <StarIcon color="red" />);
stories.add("star outline", () => <StarOutlineIcon color="red" />);
stories.add("store", () => <StoreIcon color="red" />);
stories.add("twitter", () => <TwitterIcon color="red" />);
stories.add("twitter negative", () => (
  <TwitterIcon color="red" negative={true} />
));
stories.add("visibility off", () => <VisibilityOffIcon color="red" />);
stories.add("visibility on", () => <VisibilityOnIcon color="red" />);
stories.add("whatsapp", () => <WhatsappIcon color="red" />);
stories.add("youtube", () => <YoutubeIcon color="red" />);
stories.add("youtube negative", () => (
  <YoutubeIcon color="red" negative={true} />
));
stories.add("zoom in", () => <ZoomInIcon color="red" />);
stories.add("zoom out", () => <ZoomOutIcon color="red" />);
