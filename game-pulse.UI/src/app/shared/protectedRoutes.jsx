export default function ProtectedRoutes({ children, user }) {
  return user ? children : setIsOpen(true);
}
