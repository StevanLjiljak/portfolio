const Bar = ({ w = 'w-full', h = 'h-3' }: { w?: string; h?: string }) => (
    <div className={`${w} ${h} rounded bg-stone-200 dark:bg-stone-700 animate-pulse`} />
);

const Card = () => (
    <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4 bg-white dark:bg-stone-800 space-y-2">
        <Bar w="w-1/3" />
        <Bar w="w-full" h="h-2" />
        <Bar w="w-5/6" h="h-2" />
        <Bar w="w-4/6" h="h-2" />
    </div>
);

export const SkeletonLoader = () => (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
        {/* Header skeleton */}
        <div className="shadow-sm py-4 bg-white dark:bg-stone-800">
            <div className="container mx-auto px-4 flex items-start gap-3">
                <div className="w-24 h-28 sm:w-36 sm:h-44 rounded-full bg-stone-200 dark:bg-stone-700 animate-pulse flex-shrink-0" />
                <div className="flex flex-col gap-3 mt-2 flex-1">
                    <Bar w="w-48" h="h-6" />
                    <Bar w="w-32" h="h-4" />
                    <Bar w="w-12" h="h-12" />
                </div>
            </div>
        </div>

        {/* Content skeleton */}
        <div className="container mx-auto px-4 py-6 space-y-6">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="md:w-1/4">
                        <Bar w="w-24" h="h-4" />
                    </div>
                    <div className="md:w-3/4 space-y-3">
                        <Card />
                        {i % 2 === 0 && <Card />}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
