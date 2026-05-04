import { parseArray, parseNumber } from "@/presentation/utils/filters";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import type { Filters, IUseFilters } from "./types";

export function useFilters(): IUseFilters {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters = useMemo<Filters>(() => ({
    startDate: parseNumber(searchParams.get("startDate")),
    endDate: parseNumber(searchParams.get("endDate")),
    accounts: parseArray(searchParams.get("accounts")),
    industries: parseArray(searchParams.get("industries")),
    states: parseArray(searchParams.get("states")),
  }), [searchParams]);

  function setFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    const params = new URLSearchParams(searchParams.toString());

    if (
      value === undefined ||
      value === null ||
      (Array.isArray(value) && value.length === 0)
    ) {
      params.delete(key);
    } else {
      const formatted = Array.isArray(value)
        ? value.join(",")
        : String(value);

      params.set(key, formatted);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  function clearFilters() {
    router.replace(pathname);
  }

  return {
    filters,
    setFilter,
    clearFilters,
  };
}