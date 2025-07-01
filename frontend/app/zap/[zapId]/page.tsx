"use client"
import { useParams } from "next/navigation";

export default function ZapDetailPage() {
  const params = useParams();
  return <div className="p-8 text-2xl">Zap ID: {params.zapId}</div>;
} 