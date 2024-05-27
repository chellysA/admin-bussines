import Skeleton from "@/components/skeleton";

const productsFormSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
      <div className="mt-4">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-60 h-10 mt-2" />
      </div>
      <div className="mt-4">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-60 h-10 mt-2" />
      </div>
      <div className="mt-4">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-60 h-10 mt-2" />
      </div>
      <div className="mt-4">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-60 h-10 mt-2" />
      </div>
      <div className="mt-4">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-60 h-10 mt-2" />
      </div>
      <div className="mt-4">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-60 h-10 mt-2" />
      </div>
    </div>
  );
};

export default productsFormSkeleton;
