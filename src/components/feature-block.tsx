import React from "react";

type FeatureBLockProps = {
  titleFirstLine: string;
  titleLastLine: string;
  description: string;
  className?: string;
  Image: any;
};

const FeatureBLock: React.FC<FeatureBLockProps> = ({
  titleFirstLine,
  titleLastLine,
  description,
  className,
  Image,
}) => {
  return (
      <div className="feature-block-item">
        <Image />
        <h3 className="feature-block-title nrz-h4 max-w">{titleFirstLine}<br/>{titleLastLine}</h3>
        <p className="nrz-primary-2">{description}</p>
      </div>
  );
};

export default FeatureBLock;
