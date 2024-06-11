import Link from '@/node_modules/next/link';

const Sidebar = () => {
  return (
    <div className="h-screen md:w-64 text-gray-800 bg-gray-200 z-10 transition-transform duration-300 ease-out translate-x-0">
      <div className="sidebarContent px-4 py-10">
        <Link href="#">Logo</Link>
      </div>
    </div>
  );
};

export default Sidebar;
