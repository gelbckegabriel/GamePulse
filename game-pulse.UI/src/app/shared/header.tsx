"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./utilities/button";
import { Container } from "./utilities/container";
import { UserAuth } from "./auth/auth";
import Swal from "sweetalert2";
import { User, userService } from "../services/cache/user-info";

export default function Header() {
  const [user, setUser] = useState<User>(userService.getCurrentUser());
  const [isOpen, setIsOpen] = useState(false);

  const authModal = () => {
    if (user.id != "") {
      Swal.fire({
        icon: "warning",
        title: "Sign out ?",
        text: "Are you sure you want to sign out?",
        showCancelButton: true,
        reverseButtons: true,
        cancelButtonColor: "#977070",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#cf7f42",
        confirmButtonText: "Sign Out",
        background: "#555",
        color: "#EEE",
      }).then((response) => {
        if (response.isConfirmed) {
          // TODO: Execute the proper sign out.
        }
      });
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-[--header-row-height]">
          <Link href="/" className="text-xl -ml-6 flex h-[--header-row-height] items-center px-6">
            🍏 <span className="sr-only">Back to homepage</span>
          </Link>
          <div className="flex mx-auto text-xs gap-8">
            <Link href="/about">About</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/courts">Courts</Link>
            <Link href="/games">Games</Link>
            <Link href="/"></Link>
          </div>
        </Container>
      </header>
      <div className="sticky top-0 z-20 bg-backgroundContrast text-white">
        <Container className="flex items-center justify-between min-h-[--header-row-height]">
          <Link href="/">
            <p className="text-xl font-semibold">GamePulse</p>
          </Link>
          <div>
            <button onClick={() => console.log(user)}>anothertest</button>
            <Link className="mr-6" href="/profile">
              Profile
            </Link>
            <Button size="small" onClick={() => authModal()}>
              {user.name != "" ? `Hello, ${user.nickname}` : "Login"}
            </Button>
          </div>
        </Container>
      </div>

      <UserAuth isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
