import Swal from "sweetalert2";

export default function SwalAlertTrigger(title: string, description: string) {
  return Swal.fire({
    icon: "warning",
    title: title,
    text: description,
    confirmButtonColor: "#f27474",
    confirmButtonText: "Close",
    background: "#555",
    color: "#EEE",
  });
}
