import React from "react";
import styled from "styled-components";
import { PageHero } from "../../components";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <div className="row">
          <div>
            <h1>The Suraj Ind. Story</h1>
          </div>
          <div>
            <p>
              {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  */}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1140px;
  padding: 5rem 0;
  .row {
    padding: 3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 -15px 35px;
    text-align: center;
    h1 {
      color: var(--clr-grey-1) !important;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    p {
      margin-bottom: 1.5rem;
      text-transform: capitalize !important;
      text-align: justify;
      letter-spacing: 1px;
      line-height: 1.7;
    }
  }

  @media screen and (max-width: 767px) {
    .page.section.section-center {
      min-height: unset !important;
      padding: 30px 0;
    }
    .row {
      .col-md-6 {
        flex: 0 0 100%;
        max-width: 100%;
        p {
          text-align: left !important;
          font-size: 18px !important;
          letter-spacing: normal;
          margin: 15px 0 0 0;
        }
      }
    }
  }
`;
export default About;
