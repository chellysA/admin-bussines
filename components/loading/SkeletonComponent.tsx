import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function Box({ children }: any) {
  return (
    <div
      style={{
        backgroundColor: "#1b254b",
        display: "block",
        borderRadius: "15px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

const SkeletonComponent = () => {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#444">
      <p>
        <Skeleton wrapper={Box} />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonComponent;
