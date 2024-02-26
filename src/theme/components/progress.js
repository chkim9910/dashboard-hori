import { mode } from "@chakra-ui/theme-tools";
export const progressStyles = {
  components: {
    Progress: {
      baseStyle: {
        field: {
          fontWeight: 400,
          w: "20px",
          h: "8px",
          borderRadius: "20px",
          _checked: { transform: "translate(20px, 0px)" },
        },
        track: {
          w: "80px",
          h: "8px !important",
          borderRadius: "20px",
          _focus: {
            boxShadow: "none",
          },
        },
      },

      variants: {
        table: (props) => ({
          field: {
            bg: "brand.500",
            borderRadius: "16px",
            fontSize: "base",
          },
          track: {
            borderRadius: "20px",
            bg: mode("blue.50", "whiteAlpha.50")(props),
            h: "8px",
            w: "54px",
          },
          thumb: {
            w: "250px",
          },
        }),
      },
    },
  },
};
