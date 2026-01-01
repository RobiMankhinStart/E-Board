"use client";

import { useRouter } from "next/navigation";

export default function Pagination({ total, limit, page }) {
  const router = useRouter();
  const totalPages = Math.ceil(total / limit);

  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    router.push(`?limit=${newLimit}&page=1`);
  };

  const goToPage = (newPage) => {
    router.push(`?limit=${limit}&page=${newPage}`);
  };

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center gap-2">
        <label className="text-sm ">Show:</label>
        <select
          value={limit}
          onChange={handleLimitChange}
          className="border rounded-md px-2 py-1 text-sm"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <span className="text-sm text-gray-600 mx-2">per page</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm">
          Page {page} / {totalPages}
        </span>

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
