import React from "react";
import styled from "styled-components";
import { FaSlidersH, FaTimes } from "react-icons/fa";
import { PageHero } from "../../components";

const ProductsPage = () => {
  const [show, setShow] = React.useState();
  window.scrollTo(0, 0);

  return (
    <>
      <PageHero title="Products" />
      <Wrapper>
        <div className="">
          <div></div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default ProductsPage;
