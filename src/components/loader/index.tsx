import React from 'react';
import { CenteredLoaderWrapper, LoaderWrapper } from './styled';


const Loader: React.FC<{ size?: string }> = ({ size = "40px" }) => {
  return (
    <CenteredLoaderWrapper>
      <LoaderWrapper size={size} />
    </CenteredLoaderWrapper>
  );
};

export default Loader;
