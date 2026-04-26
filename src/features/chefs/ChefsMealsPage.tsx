import { Edit, Trash2 } from "lucide-react";

export function ChefsMealsPage() {
  const mockData = [
    { id: "M-101", name: "Spicy Grilled Chicken", chef: "Ahmed Grill", price: "45.00 AED", category: "Mains", status: "Available" },
    { id: "M-102", name: "Lotus Cheesecake", chef: "Sweet Treats", price: "30.00 AED", category: "Desserts", status: "Sold Out" },
    { id: "M-103", name: "Lentil Soup", chef: "Lana's Kitchen", price: "20.00 AED", category: "Appetizers", status: "Available" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Chef Meals</h1>
          <p className="text-text-secondary mt-1">Manage menus, pricing, and availability.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">+ Add Meal</button>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Meal Name</th>
              <th className="px-6 py-4 font-medium">Chef</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Price</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-end">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary font-medium">{row.name}</td>
                <td className="px-6 py-4 text-text-secondary">{row.chef}</td>
                <td className="px-6 py-4 text-text-secondary">{row.category}</td>
                <td className="px-6 py-4 text-text-primary font-semibold">{row.price}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-end">
                  <div className="flex justify-end gap-2">
                    <button className="p-1.5 text-text-secondary hover:text-primary transition-colors"><Edit size={16} /></button>
                    <button className="p-1.5 text-text-secondary hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
