import SideNav from "@/app/ui/dashboard/sidenav";
import { Metadata } from 'next';

export const experimental_ppr = true;

export const metadata: Metadata = {
  title: {
    template: '%s | Acme 仪表盘',
    default: 'Acme 仪表盘',
  },
  description: 'Acme 仪表盘管理系统 - 查看和管理您的业务数据',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden select-none">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
