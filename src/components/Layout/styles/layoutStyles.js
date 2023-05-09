import styled from "@emotion/styled";
import { Link } from "gatsby";

export const LayoutStyles = {
  Navbar: styled.nav`
    display: flex;
    justify-content: center;
  `,
  List: styled.ul`
    display: flex;
    gap: 20px;
  `,
  Link: styled(Link)`
    color: blue;
    text-decoration: none;
  `,
  InfoBox: styled.div`
    background-color: gray;
    > article {
      color: red;
    }
  `,
};
