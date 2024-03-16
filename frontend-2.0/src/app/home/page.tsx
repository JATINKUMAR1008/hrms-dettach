"use client"
import { useAppSelector } from "@/states/hooks";

export default function HomePage() {
  const state = useAppSelector((state) => state.authReducer);
  return state.isAuthenticated&&(
    <div className="text-black">
      <h1>{state.user?.email}</h1>
      logged in
    </div>
  );
}
