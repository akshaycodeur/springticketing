import Link from '@/node_modules/next/link';

const Sidebar = () => {
  const Links = [
    { label: 'Home', href: '/' },
    { label: 'Create Ticket', href: '/create' },
    { label: 'Tickets', href: '/tickets' },
    { label: 'Users', href: '/users' },
  ];
  return (
    <div className="h-screen md:w-64 text-gray-800 bg-gray-800 z-10 transition-transform duration-300 ease-out translate-x-0">
      <div className="sidebarContent px-4 py-10">
        <Link href="#">Logo</Link>
      </div>
      {Links.map((item) => (
        <div className="flex flex-col px-4 py-2">
          <a href="{item.href}" className="hover:text-amber-400 text-amber-300">
            {item.label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
