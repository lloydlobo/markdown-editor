import { As, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NextRouter, useRouter } from "next/router";

// type MarkdownAchorProps = ComponentType<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & ReactMarkdownProps> | undefined;

type CustomLinkProps = {
  as?: As<any>;
  href?: any;
  [key: string]: any;
}

/**
 * The link props object.
 * @type {Object}
 * @property {boolean} isExternal - Whether the link is an external link.
 * @property {string} textDecoration - The text decoration of the link.
 * @property {string} textUnderlineOffset - The offset of the underline.
 * @property {Object} _hover - The hover styles of the link.
 * @property {string} alignItems - The alignment of the link items.
 * @property {string} as - The HTML tag or Next.js link component to render.
 * @property {string} href - The link URL.
 */
type LinkProps = {
  isExternal: boolean;
  textDecoration: string;
  textUnderlineOffset: string;
  _hover: Record<string, unknown>;
  alignItems: string;
  as?: As<any>;
  href?: any;
};

/**
 * A custom link component that handles internal and external links.
 *
 * Used as a component with `ReactMarkdown` from `react-markdown` for `<a>`.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.as] - The HTML tag or Next.js link component to render.
 * @param {string} props.href - The link URL.
 * @param {Object} [props.otherProps] - Any other props to pass to the Text component.
 * @returns {JSX.Element} - The link component.
 */
export function CustomLink({ as, href, ...otherProps }: CustomLinkProps): JSX.Element {
  const router: NextRouter = useRouter();
  const isInternalLink: boolean = href !== null && (
    href.startsWith("/") ||
    href.startsWith(router.pathname)
  );

  const linkLabel: string = isInternalLink ? `Internal link to ${href}` : `External link to ${href}`;
  const linkProps: LinkProps = {
    isExternal: !isInternalLink,
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    _hover: { color: useColorModeValue("orange.500", "orange.300") },
    alignItems: "center",
    as,
    href,
  };

  return (
    <Link {...linkProps} aria-label={linkLabel} role="link">
      <Text
        as="span"
        lineHeight="none"
        role="text"
        aria-label={otherProps.children}
        {...otherProps}
      />
      {!isInternalLink && (
        <ExternalLinkIcon
          aria-label="External link icon"
          lineHeight="none"
          top="-0.5"
          pos="relative"
          fontSize="xs"
          mx="2px"
        />
      )}
    </Link>
  );
}
