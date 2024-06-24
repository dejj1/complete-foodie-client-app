import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;

const SkeletonElement = styled.div`
  background: #f0f0f0;
  background-image: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #e0e0e0 40px,
    #f0f0f0 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 5px;
`;

const SkeletonHeader = styled(SkeletonElement)`
  width: 75%;
  height: 1.9rem;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const SkeletonText = styled(SkeletonElement)`
  width: 100%;
  height: 18px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    height: 14px;
  }
`;

const SkeletonButton = styled(SkeletonElement)`
  width: 25%;
  height: 1.9rem;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    width: 130px;
  }
`;

const SkeletonImage = styled(SkeletonElement)`
  width: 50%;
  height: 20rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 16px;
   @media (max-width: 768px) {
    width: 100%;
    height: 550px;
    margin-bottom: 0px;
  }
`;

// const SkeletonCard = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 5px;
//   padding: 20px

//   @media (max-width: 768px) {
//     flex-direction: column-reverse;

//   }
// `;

const LoadingSpinner = () => {
  return (
    <SkeletonWrapper>
      <div className="flex flex-col sm:flex-row-reverse items-center gap-4 p-4 mt-12">
        <SkeletonImage />
        <div className="flex flex-col w-full sm:w-1/2 sm:mb-0">
          <SkeletonHeader />
          <SkeletonHeader />
          <SkeletonText />
          <SkeletonText />
          <SkeletonButton />
        </div>
      </div>
      <hr className="load-divider"/>
    </SkeletonWrapper>
    
  );
};

export default LoadingSpinner;
