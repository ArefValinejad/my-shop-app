"use client";

import dynamic from "next/dynamic";

const SearchResults = dynamic(() => import("./SearchResults"), { ssr: false });

export default function SearchPage() {
  return <SearchResults />;
}
