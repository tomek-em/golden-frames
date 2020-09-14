import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: center;

  .column {
    height: 100%;
    width: 50%;
  }

  .left-column {
    padding: 65px 2rem 0 3rem;
    max-width: 700px;
    margin-left: auto;
    position: relative;

      .hero-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: calc(100% - 5rem);

        h1 {
          font-family: 'montserrat', sans-serif;
          font-weight: 300;
          font-size: 68px;
          line-height: 68px;
          margin-bottom: 2rem;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.8rem;
        }
      }
  }

  .right-column {
    padding: 0 3rem 0 1rem;
    border: 1px solid #999;
    position: relative;
    overflow: hidden;

      img {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: auto;
        min-height: 100%;
      }
  }

  @media (max-width: 840px) {
    .left-column .hero-text h1 {
      font-size: 38px;
      line-height: 48px;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;

    .left-column {
      width: 100%;
      margin-top: 3rem;
      min-height: calc(100vh - 3rem);
      padding: 65px 3rem;

      .hero-text {
        h1{
          font-size: 36px;
          line-height: 48px;
        }
      }
    }

    .right-column {
      display: none;
    }


  }
`
export default Wrapper
