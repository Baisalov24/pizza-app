import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={455}
    viewBox="0 0 280 455"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="125" r="125" /> 
    <rect x="8" y="273" rx="10" ry="10" width="260" height="15" /> 
    <rect x="8" y="305" rx="10" ry="10" width="260" height="84" /> 
    <rect x="158" y="405" rx="5" ry="5" width="106" height="43" /> 
    <rect x="12" y="404" rx="5" ry="5" width="33" height="43" />
  </ContentLoader>
)

export default Skeleton;