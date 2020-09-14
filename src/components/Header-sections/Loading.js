import React from 'react';
import styled from 'styled-components';

const LoadingText = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
`


const Loading = () => {
    return (
      <LoadingText>Loading. Please wait... </LoadingText>
    )
}

export default Loading;
