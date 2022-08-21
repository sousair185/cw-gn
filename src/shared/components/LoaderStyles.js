import styled from "styled-components";

export const LoaderContainer = styled.div`
  .spinner {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .spinner::before,
  .spinner:after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  .spinner:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
    animation: spin8932 0.5s infinite linear;
  }

  .spinner:after {
    width: 85%;
    height: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin8932 {
    to {
      transform: rotate(360deg);
    }
  }
`;
