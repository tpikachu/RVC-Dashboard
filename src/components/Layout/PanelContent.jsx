import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export default function PanelContent(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("PanelContent", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
