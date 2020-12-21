import React from "react";
import "./button.css";
import { Button as ChakraButton } from '@chakra-ui/react';

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
}) => {
  return (
    <ChakraButton
    colorScheme="blue"
      {...props}
    >
      {label}
    </ChakraButton>
  );
};
