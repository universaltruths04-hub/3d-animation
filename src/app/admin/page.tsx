'use client';

import React from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';

export default function AdminPage() {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <div className="min-h-screen p-8 bg-slate-950 text-white font-sans">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="text-sm px-4 py-2 rounded-full border border-white/20">Heavenly Nuravia</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Sales', value: '৳ 1,45,000' },
          { label: 'Orders', value: '124' },
          { label: 'Products', value: '48' },
          { label: 'Users', value: '890' },
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-900 p-6 rounded-2xl border border-white/5">
            <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-bold">Recent Orders</h2>
          <button className="text-sm text-blue-400 hover:underline">View All</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-white/5 text-slate-400 text-sm">
            <tr>
              <th className="p-6 font-medium">Order ID</th>
              <th className="p-6 font-medium">Customer</th>
              <th className="p-6 font-medium">Status</th>
              <th className="p-6 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-sm">#ORD-00{i}</td>
                <td className="p-6 font-medium">Customer {i}</td>
                <td className="p-6"><span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-bold uppercase">Paid</span></td>
                <td className="p-6 font-mono font-bold text-sm">৳ 2,400</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
