import React from "react";
import { ModalOverlay } from "@chakra-ui/react";

export const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

export const OverlayTwo = () => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);
