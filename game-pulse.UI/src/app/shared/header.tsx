"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./utilities/button";
import { Container } from "./utilities/container";
import { UserAuth } from "./auth/auth";
import Swal from "sweetalert2";
import { userService } from "../services/cache/user-info";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../services/firebase";
import { User } from "./interfaces/db-entities";

export default function Header() {
  const [user, setUser] = useState<User>(userService.getCurrentUser());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const subscription = userService.user$.subscribe((result) => {
      setUser(result);
    });
    return () => subscription.unsubscribe(); // Clean up on unmount
  }, []);

  const authModal = () => {
    if (user.id != "") {
      Swal.fire({
        icon: "warning",
        title: `Hello, ${user.nickname}!`,
        text: "What would you like to do ?",
        showCancelButton: true,
        showDenyButton: true,
        reverseButtons: true,
        cancelButtonText: "Close",
        denyButtonText: "Sign Out",
        confirmButtonColor: "#1b741b",
        confirmButtonText: "View Profile",
        background: "#555",
        color: "#EEE",
      }).then((response) => {
        if (response.isConfirmed) {
          // Redirect to profile page
          window.location.href = "/profile";
        } else if (response.isDenied) {
          signOut(firebaseAuth).then(() => {
            userService.signOutUser();
          });
          window.location.href = "/";
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
          {/* <Link href="/" className="text-xl -ml-6 flex h-[--header-row-height] items-center px-6">
            🍏 <span className="sr-only">Back to homepage</span>
          </Link> */}
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
