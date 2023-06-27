import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={700}
    viewBox="0 0 1200 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#cfcfcf"
    {...props}
  >
    <rect x="468" y="50" rx="13" ry="13" width="500" height="350" />
    <rect x="5" y="50" rx="8" ry="8" width="350" height="80" />
    <rect x="5" y="150" rx="8" ry="8" width="350" height="80" />
    <rect x="5" y="250" rx="8" ry="8" width="350" height="80" />
    <rect x="5" y="350" rx="8" ry="8" width="350" height="80" />
    <rect x="5" y="450" rx="8" ry="8" width="350" height="80" />
    <rect x="5" y="550" rx="8" ry="8" width="350" height="80" />
  </ContentLoader>
);

export default Skeleton;
