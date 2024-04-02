type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div className={`${className} bg-gray-700 rounded animate-pulse`}></div>
  );
};

export default Skeleton;
