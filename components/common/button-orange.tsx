import { As, Button, ButtonProps, forwardRef, Tooltip } from "@chakra-ui/react";
import React from "react";

export type ButtonOrangeProps = {
  children: React.ReactNode;
  props: ButtonProps;
  onClick?: () => void;
  isDisabled?: boolean;
  tooltipLabel?: string;
};

/**
 * A customizable orange button component with a tooltip that can be used throughout the app.
 *
 * The `ButtonOrange` component uses `forwardRef` to pass a ref to the underlying
 * Button component and separates its own props from the Button props.
 *
 * It also adds a Tooltip component for accessibility. This provides flexibility
 * for the caller to customize the Button component based on their needs.
 * Since function components cannot be given refs directly, forwardRef is used
 * to pass the ref to the underlying Button component.
 *
 * This allows us to access the underlying DOM node of the Button component
 * for imperative actions, such as focusing the button, in the parent
 * component that uses the ButtonOrange component.
 *
 * @param {Object} props - The component props.
 * @returns {React.ReactElement} - A React component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button.
 * @param {Object} props.props - Additional props to be passed to the button component.
 * @param {() => void} [props.onClick] - The click handler for the button.
 * @param {boolean} [props.isDisabled] - Determines whether the button is disabled or not.
 * @param {string} [props.tooltipLabel] - The text for the tooltip that appears on hover.
 */
export const ButtonOrange = forwardRef<ButtonOrangeProps, As<any>>(
  (
    { children, props, onClick, isDisabled, tooltipLabel }: ButtonOrangeProps,
    ref: React.ForwardedRef<any>
  ) => {
    /**
     * Handles the click event on the button.
     */
    const handleOnClick = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <Tooltip label={tooltipLabel}>
        <Button
          ref={ref}
          {...props}
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          fontSize="14px"
          fontWeight="semibold"
          isDisabled={isDisabled}
          bg="orange.400"
          color="gray.50"
          onClick={handleOnClick}
          _hover={{ bg: "orange.500" }}
          _active={{ bg: "orange.300", transform: "scale(0.98)" }} // borderColor: "#bec3c9",
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          {children}
        </Button>
      </Tooltip>
    );
  }
);
