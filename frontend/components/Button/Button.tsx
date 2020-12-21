import "./button.css";

import { Button as ChakraButton } from '@chakra-ui/react';
import React from "react";

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      colorScheme="blue"
      {...props}
    >
      {label}
    </ChakraButton>
  );
};
