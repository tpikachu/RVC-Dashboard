import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export default function MainPanel(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("MainPanel", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
